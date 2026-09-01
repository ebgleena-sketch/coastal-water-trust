import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/fiscal-responsibility")({
  head: () => ({
    meta: [
      { title: "Fiscal Responsibility | Leena Ray for Moulton Niguel" },
      {
        name: "description",
        content:
          "More than $2 billion in infrastructure assets deserves due diligence, transparent analysis, and strong protections for ratepayers.",
      },
      { property: "og:title", content: "Fiscal Responsibility | Leena Ray" },
      {
        property: "og:description",
        content: "Partner when it makes sense. Protect the ratepayer every time.",
      },
    ],
  }),
  component: Fiscal,
});

const safeguards = [
  "Thorough due diligence",
  "Transparent financial analysis",
  "Clear contractual obligations",
  "Appropriate voting protections",
  "Defined responsibilities",
  "Meaningful exit provisions",
  "Ongoing oversight",
];

const transparency = [
  "What the District is planning",
  "Why a project is necessary",
  "What alternatives were considered",
  "How much it will cost",
  "How it could affect future rates",
  "What risks exist",
  "How success will be measured",
];

function Fiscal() {
  return (
    <>
      <PageHero
        eyebrow="Fiscal Responsibility"
        title="Responsible stewardship of a $2 billion responsibility."
        intro="Water infrastructure requires enormous investments. Every dollar spent by the District ultimately matters to the people who live here."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { n: "$2B+", l: "Water and wastewater infrastructure assets reported by MNWD" },
            { n: "~$54M", l: "Capital infrastructure investment in 2025" },
            { n: "$4.8M", l: "2019 SOCWA dispute settlement" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <p className="font-display text-3xl text-water">{s.n}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="prose-civic mt-10">
          <h2>Evaluate value, not just possibility</h2>
          <p>
            Every major project should be evaluated not only on whether it is technically possible,
            but whether it is financially responsible and provides measurable value to residents.
          </p>
          <p>
            The District's 2019 dispute involving the South Orange County Wastewater Authority
            resulted in a $4.8 million settlement. That experience should reinforce the importance of
            due diligence, transparency, clearly defined obligations, and strong protections for
            ratepayers before entering major regional commitments.
          </p>
          <p>
            We can work with regional partners while still protecting our community's interests.{" "}
            <strong>Cooperation should never mean writing a blank check.</strong>
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <p className="eyebrow">Before we commit</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">
          Safeguards every major agreement should include.
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {safeguards.map((item) => (
            <li
              key={item}
              className="rounded-lg bg-card px-5 py-4 text-[0.95rem] text-navy shadow-soft"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <p className="eyebrow">Transparent leadership</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">
          Government should not be mysterious.
        </h2>
        <div className="prose-civic mt-4">
          <p>Residents deserve to understand:</p>
          <ul>
            {transparency.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            My approach is simple: <strong>listen, learn, ask questions, explain clearly, and
            follow through.</strong>
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="navy" size="lg">
            <Link to="/promise">My promise to you</Link>
          </Button>
          <Button asChild variant="amber" size="lg">
            <Link to="/donate">Donate</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
