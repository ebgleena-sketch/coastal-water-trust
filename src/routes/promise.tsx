import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/promise")({
  head: () => ({
    meta: [
      { title: "My Promise to You | Leena Ray for Moulton Niguel" },
      {
        name: "description",
        content:
          "I won't pretend to have every answer. I will promise to ask the questions, look at the numbers, and protect ratepayers.",
      },
      { property: "og:title", content: "My Promise to You | Leena Ray" },
      {
        property: "og:description",
        content: "I am running to serve—not to build a political career. Water first. Community always.",
      },
    ],
  }),
  component: Promise,
});

const promises = [
  "I will promise to ask the questions.",
  "I will listen to the experts.",
  "I will listen to residents.",
  "I will look at the numbers.",
  "I will question assumptions.",
  "I will support investments that make sense.",
  "I will question investments that don't.",
  "I will protect the infrastructure our community has already paid for.",
  "I will advocate for responsible improvements in water quality and reliability.",
  "I will push for transparency when major financial commitments are being considered.",
  "I will remember that every dollar spent by the District matters to the people who live here.",
];

function Promise() {
  return (
    <>
      <PageHero
        eyebrow="My Promise to You"
        title="I won't pretend to have every answer."
        intro="But here is exactly what I will do—and what you can hold me to."
      />

      <section>
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <ul className="grid gap-4">
            {promises.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="font-display text-sm font-semibold text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg leading-snug text-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gradient-deep">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">
            Why I'm doing this
          </p>
          <h2 className="mt-4 font-display text-3xl text-navy-foreground md:text-4xl">
            I am running to serve—not to build a political career.
          </h2>
          <p className="mt-6 font-display text-2xl text-amber">Water first. Community always.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild variant="amber" size="xl">
              <Link to="/donate">Donate</Link>
            </Button>
            <Button asChild variant="onNavy" size="xl">
              <Link to="/get-involved">Get involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
