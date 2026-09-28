import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const donationSchema = z.object({
  amount: z.number().min(1).max(100000),
  recurring: z.boolean(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
});

// Creates a Stripe Checkout Session via the REST API (Worker-safe, no SDK needed)
// and returns the hosted checkout URL to redirect the donor to.
export const createDonationCheckout = createServerFn({ method: "POST" })
  .inputValidator((data) => donationSchema.parse(data))
  .handler(async ({ data }) => {
    const secretKey = process.env["STRIPE_SECRET_KEY"];
    if (!secretKey) {
      throw new Error("Stripe is not configured yet.");
    }

    const origin = process.env["SITE_URL"] ?? "https://www.voteleenaray.com";
    const cents = Math.round(data.amount * 100);
    const donorName = `${data.firstName} ${data.lastName}`.trim();

    const params = new URLSearchParams();
    params.set("mode", data.recurring ? "subscription" : "payment");
    params.set("success_url", `${origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`);
    params.set("cancel_url", `${origin}/donate`);
    params.set("customer_email", data.email);
    params.set("client_reference_id", donorName);
    params.set("metadata[donor_name]", donorName);
    params.set("metadata[donor_email]", data.email);
    params.set("metadata[campaign]", "Leena Ray for Moulton Niguel Water District 2026");
    params.set("line_items[0][quantity]", "1");
    params.set("line_items[0][price_data][currency]", "usd");
    params.set("line_items[0][price_data][unit_amount]", String(cents));
    params.set(
      "line_items[0][price_data][product_data][name]",
      data.recurring ? "Monthly Campaign Contribution" : "Campaign Contribution",
    );
    params.set(
      "line_items[0][price_data][product_data][description]",
      "Leena Ray for Moulton Niguel Water District Board of Directors 2026",
    );
    if (data.recurring) {
      params.set("line_items[0][price_data][recurring][interval]", "month");
    }

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const session = (await response.json()) as { url?: string; error?: { message?: string } };
    if (!response.ok || !session.url) {
      throw new Error(session.error?.message ?? "Stripe could not create the checkout session.");
    }

    return { url: session.url };
  });
