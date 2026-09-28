import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/donate/success")({
  head: () => ({
    meta: [
      { title: "Thank You for Your Contribution | Leena Ray" },
      {
        name: "description",
        content:
          "Thank you for supporting Leena Ray for Moulton Niguel Water District Board of Directors 2026.",
      },
    ],
  }),
  component: DonateSuccess,
});

function DonateSuccess() {
  return (
    <section className="gradient-deep">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center md:py-32">
        <CheckCircle2 className="h-16 w-16 text-teal" />
        <h1 className="mt-6 font-display text-4xl leading-[1.08] text-navy-foreground md:text-5xl">
          Thank you for your contribution!
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
          Your support funds yard signs, mailers, and neighbor-to-neighbor outreach across our
          district. A receipt from Stripe is on its way to your email, and every contribution is
          reported transparently under California law.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="amber" size="xl">
            <Link to="/">Back to the campaign</Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <a href="mailto:Ms.Leenaray@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Contact the campaign
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
