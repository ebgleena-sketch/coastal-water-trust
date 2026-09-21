import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Lock, HeartHandshake } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Contribute | Leena Ray for Moulton Niguel Water District" },
      {
        name: "description",
        content:
          "Support Leena Ray for Moulton Niguel Water District Director. Grassroots contributions fund signs, mailers, and neighbor-to-neighbor outreach.",
      },
      {
        property: "og:title",
        content: "Contribute to Leena Ray for Moulton Niguel Water District Board of Directors 2026",
      },
      {
        property: "og:description",
        content: "Every contribution is local, transparent, and neighbor-powered.",
      },
    ],
  }),
  component: Donate,
});

const amounts = [25, 50, 100, 250, 500, 1000];

const impact = [
  "Yard signs across our neighborhoods",
  "Mailers that explain water issues clearly",
  "Community coffees and door-to-door outreach",
];

const paymentMethods = [
  { id: "card", label: "Credit / Debit" },
  { id: "googlepay", label: "Google Pay" },
  { id: "venmo", label: "Venmo" },
  { id: "zelle", label: "Bank (Zelle)" },
] as const;

type PaymentMethod = (typeof paymentMethods)[number]["id"];

function Donate() {
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [amount, setAmount] = useState<number | "other">(100);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(false);

  const finalAmount = amount === "other" ? Number(custom) || 0 : amount;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (finalAmount <= 0) {
      toast.error("Please choose or enter a contribution amount.");
      return;
    }
    toast.success(
      `Thank you! Your $${finalAmount.toLocaleString()}${recurring ? "/month" : ""} contribution details were received.`,
      { description: "Our team will follow up to confirm your contribution." },
    );
  }

  return (
    <>
      <section className="gradient-deep">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Contribute</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] text-navy-foreground md:text-5xl">
            Support Leena Ray for Moulton Niguel Water District Board of Directors 2026
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-foreground/80">
            This is a grassroots, neighbor-funded campaign. No insiders, no blank checks—just
            residents who want reliable water and responsible spending.
          </p>
        </div>
      </section>

      <section className="surface-sand">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.35fr_0.65fr] md:py-20">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-card p-6 shadow-lift md:p-9"
            noValidate
          >
            <fieldset>
              <legend className="eyebrow">Choose an amount</legend>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {amounts.map((value) => {
                  const active = amount === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setAmount(value)}
                      className={`h-14 rounded-lg border font-display text-xl transition-all ${
                        active
                          ? "border-amber bg-amber text-amber-foreground shadow-soft"
                          : "border-border bg-background text-navy hover:border-water hover:text-water"
                      }`}
                    >
                      ${value.toLocaleString()}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
                <button
                  type="button"
                  onClick={() => setAmount("other")}
                  className={`h-14 rounded-lg border px-6 font-display text-lg transition-all ${
                    amount === "other"
                      ? "border-amber bg-amber text-amber-foreground shadow-soft"
                      : "border-border bg-background text-navy hover:border-water hover:text-water"
                  }`}
                >
                  Other
                </button>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-lg text-muted-foreground">
                    $
                  </span>
                  <Input
                    inputMode="decimal"
                    placeholder="Enter amount"
                    value={custom}
                    onChange={(e) => {
                      setCustom(e.target.value);
                      setAmount("other");
                    }}
                    className="h-14 pl-9 font-display text-lg"
                    aria-label="Custom contribution amount"
                  />
                </div>
              </div>

              <label className="mt-4 flex items-start gap-3 rounded-lg border border-border bg-secondary/50 p-4">
                <Checkbox
                  checked={recurring}
                  onCheckedChange={(v) => setRecurring(v === true)}
                  className="mt-0.5"
                />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Make this a <strong className="text-navy">monthly</strong> contribution through
                  Election Day. Recurring support helps us plan responsibly.
                </span>
              </label>
            </fieldset>

            <fieldset className="mt-10">
              <legend className="eyebrow">Your information</legend>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field id="firstName" label="First name" required />
                <Field id="lastName" label="Last name" required />
                <Field id="email" label="Email" type="email" required className="sm:col-span-2" />
                <Field id="phone" label="Phone" type="tel" />
                <Field id="address" label="Street address" required />
                <Field id="city" label="City" required />
                <div className="grid gap-2">
                  <Label htmlFor="state">State</Label>
                  <Select defaultValue="CA">
                    <SelectTrigger id="state" className="h-11">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {["CA", "AZ", "NV", "OR", "WA", "TX", "NY", "Other"].map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Field id="zip" label="ZIP code" required />
                <Field id="employer" label="Employer" />
                <Field id="occupation" label="Occupation" />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                California law requires committees to collect and report the name, address,
                occupation and employer of contributors giving $100 or more.
              </p>
            </fieldset>

            <fieldset className="mt-10">
              <legend className="eyebrow">Payment method</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {paymentMethods.map((m) => {
                  const active = method === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMethod(m.id)}
                      aria-pressed={active}
                      className={`flex h-14 items-center justify-center gap-2 rounded-lg border font-display text-base transition-all ${
                        active
                          ? "border-amber bg-amber text-amber-foreground shadow-soft"
                          : "border-border bg-background text-navy hover:border-water hover:text-water"
                      }`}
                    >
                      {m.label}
                    </button>
                  );
                })}
              </div>

              {method === "card" && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field
                    id="card"
                    label="Card number"
                    placeholder="1234 5678 9012 3456"
                    className="sm:col-span-2"
                  />
                  <Field id="exp" label="Expiration" placeholder="MM / YY" />
                  <Field id="cvc" label="CVC" placeholder="123" />
                </div>
              )}

              {method === "googlepay" && (
                <p className="mt-4 rounded-lg border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground">
                  You'll be redirected to <strong className="text-navy">Google Pay</strong> to
                  confirm your contribution securely. No card details are stored by the campaign.
                </p>
              )}

              {method === "venmo" && (
                <p className="mt-4 rounded-lg border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground">
                  You'll be redirected to <strong className="text-navy">Venmo</strong> to approve
                  your contribution. Please keep your Venmo name matching the donor information
                  above so we can report it accurately.
                </p>
              )}
            </fieldset>

            <div className="mt-8 rounded-lg bg-secondary/60 p-4 text-xs leading-relaxed text-muted-foreground">
              By contributing, you certify that this contribution is made from your own funds, is not
              made from the funds of a corporation, and is not reimbursed by another person or
              entity. Contributions are not tax deductible.
            </div>

            <Button type="submit" variant="amber" size="xl" className="mt-6 w-full">
              Contribute {finalAmount > 0 ? `$${finalAmount.toLocaleString()}` : ""}
              {recurring && finalAmount > 0 ? " monthly" : ""}
            </Button>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5" /> Your information is handled securely and never sold.
            </p>
          </form>

          {/* Sidebar */}
          <aside className="grid content-start gap-6">
            <div className="rounded-xl surface-navy p-7">
              <HeartHandshake className="h-7 w-7 text-amber" />
              <h2 className="mt-4 font-display text-2xl text-navy-foreground">
                Where your support goes
              </h2>
              <ul className="mt-4 grid gap-3">
                {impact.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-navy-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-7">
              <p className="eyebrow">Prefer to mail a check?</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Checks may be made payable to <strong className="text-navy">Leena Ray for
                Moulton Niguel Water District 2026</strong>. Contact us for the mailing address and
                we'll send it right over.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-7">
              <p className="eyebrow">Not able to give?</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Support still matters. Host a coffee, take a yard sign, or share why reliable water
                and responsible spending matter to your family.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  placeholder,
  className = "",
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={`grid gap-2 ${className}`}>
      <Label htmlFor={id}>
        {label}
        {required ? <span className="text-amber"> *</span> : null}
      </Label>
      <Input id={id} name={id} type={type} placeholder={placeholder} className="h-11" />
    </div>
  );
}
