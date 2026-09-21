import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Signpost, Megaphone, Coffee, HandCoins } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved | Leena Ray for Moulton Niguel" },
      {
        name: "description",
        content:
          "Volunteer, host a coffee, take a yard sign, or contribute to a grassroots campaign for reliable water and responsible spending.",
      },
      { property: "og:title", content: "Get Involved | Leena Ray" },
      {
        property: "og:description",
        content: "Neighbor-powered, resident-led. Here's how you can help.",
      },
    ],
  }),
  component: GetInvolved,
});

const options = [
  { icon: Signpost, label: "Take a yard sign" },
  { icon: Megaphone, label: "Volunteer or walk my neighborhood" },
  { icon: Coffee, label: "Host a neighborhood coffee" },
  { icon: HandCoins, label: "Contribute to the campaign" },
];

function GetInvolved() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(label: string) {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Thank you for signing up!", {
      description: "We'll be in touch soon about how you can help.",
    });
  }

  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="This campaign runs on neighbors, not insiders."
        intro="Whether you have five minutes or five hours, there's a way to help protect our water and our ratepayers."
      />

      <Section>
        <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 shadow-soft md:p-9">
          <p className="eyebrow">I'd like to help by</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {options.map((option) => {
              const active = selected.includes(option.label);
              return (
                <button
                  type="button"
                  key={option.label}
                  onClick={() => toggle(option.label)}
                  className={`flex items-center gap-3 rounded-lg border px-5 py-4 text-left text-[0.95rem] transition-all ${
                    active
                      ? "border-water bg-secondary text-navy shadow-soft"
                      : "border-border bg-background text-muted-foreground hover:border-water"
                  }`}
                >
                  <option.icon className="h-5 w-5 shrink-0 text-water" />
                  {option.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" className="h-11" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" className="h-11" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" type="tel" className="h-11" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="neighborhood">Neighborhood</Label>
              <Input id="neighborhood" className="h-11" />
            </div>
          </div>

          <label className="mt-6 flex items-start gap-3">
            <Checkbox className="mt-0.5" />
            <span className="text-sm leading-relaxed text-muted-foreground">
              Send me occasional plain-language updates about water issues in our District.
            </span>
          </label>

          <Button type="submit" variant="navy" size="xl" className="mt-8 w-full sm:w-auto">
            Count me in
          </Button>

          <p className="mt-4 text-sm text-muted-foreground">
            Prefer to reach out directly? Email{" "}
            <a
              href="mailto:Ms.Leenaray@gmail.com"
              className="font-semibold text-water underline-offset-2 hover:underline"
            >
              Ms.LeenaRay@gmail.com
            </a>{" "}
            and Leena will get back to you personally.
          </p>
        </form>
      </Section>

      <Section tone="sand">
        <div className="text-center">
          <h2 className="font-display text-3xl">Support the campaign directly</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Grassroots contributions pay for signs, mailers and neighbor-to-neighbor outreach.
          </p>
          <Button asChild variant="amber" size="xl" className="mt-6">
            <Link to="/donate">Donate</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
