import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/priorities")({
  head: () => ({
    meta: [
      { title: "My Priorities | Leena Ray for Moulton Niguel" },
      {
        name: "description",
        content:
          "Seven priorities: water quality, reliability, maximizing existing assets, responsible reuse, protecting ratepayers, transparency, and community first.",
      },
      { property: "og:title", content: "My Priorities | Leena Ray" },
      {
        property: "og:description",
        content: "Water quality, reliability, fiscal discipline, transparency, and community first.",
      },
    ],
  }),
  component: Priorities,
});

const priorities: { title: string; body: React.ReactNode }[] = [
  {
    title: "Water quality & confidence",
    body: (
      <>
        <p>
          Safe drinking water is non-negotiable. MNWD currently reports that its drinking water
          meets state and federal standards and conducts approximately 12,000 water-quality tests
          annually. I support that commitment—and I believe we should continue asking how we can do
          even better.
        </p>
        <p>
          Residents should have access to understandable information about where their water comes
          from, how it is treated, how it is tested and what those results mean.
        </p>
        <p>
          <strong>Compliance is essential. Confidence is the goal.</strong>
        </p>
      </>
    ),
  },
  {
    title: "Water reliability",
    body: (
      <>
        <p>
          Moulton Niguel imports all of its potable water through MWDOC from the Metropolitan Water
          District of Southern California, primarily from the Colorado River and the State Water
          Project. We cannot control droughts, climate conditions or decisions made by other
          agencies. But we can control how prepared we are. That means supporting:
        </p>
        <ul>
          <li>Responsible water recycling</li>
          <li>Advanced treatment technologies</li>
          <li>Conservation</li>
          <li>Infrastructure maintenance</li>
          <li>Storage and system resilience</li>
          <li>Regional cooperation when it benefits our community</li>
          <li>Long-term water supply planning</li>
        </ul>
        <p>We should prepare before we need the water—not after.</p>
      </>
    ),
  },
  {
    title: "Maximize what we already own",
    body: (
      <>
        <p>
          MNWD has invested billions of dollars in water and wastewater infrastructure. That
          investment belongs to the community. Before approving expensive new projects, I want the
          District to clearly evaluate whether we can repair it, upgrade it, modernize it, optimize
          it, or use it more efficiently.
        </p>
        <p>
          <strong>New isn't automatically better.</strong> Sometimes the smartest investment is
          getting more value from what we already have.
        </p>
      </>
    ),
  },
  {
    title: "Expand responsible water reuse",
    body: (
      <>
        <p>
          Recycled water already provides approximately 25% of MNWD's total water demand. The
          District is also investing in advanced treatment technologies, including a $34.5 million
          Salinity Management Facility using ultrafiltration and reverse osmosis.
        </p>
        <p>
          I support continuing to evaluate opportunities to increase local water reuse when they are
          technically sound, environmentally responsible and financially justified. Every successful
          local water source can reduce pressure on imported supplies.
        </p>
      </>
    ),
  },
  {
    title: "Protect ratepayers",
    body: (
      <>
        <p>
          Water infrastructure is expensive—and mistakes are expensive too. The District's 2019
          dispute involving SOCWA resulted in a $4.8 million settlement. That experience should
          remind us that major regional commitments require:
        </p>
        <ul>
          <li>Thorough due diligence</li>
          <li>Transparent financial analysis</li>
          <li>Clear contractual obligations</li>
          <li>Appropriate voting protections</li>
          <li>Defined responsibilities</li>
          <li>Meaningful exit provisions</li>
          <li>Ongoing oversight</li>
        </ul>
        <p>
          I support regional cooperation. But cooperation should never mean writing a blank check.{" "}
          <strong>Partner when it makes sense. Protect the ratepayer every time.</strong>
        </p>
      </>
    ),
  },
  {
    title: "Transparency & accountability",
    body: (
      <>
        <p>
          Residents should not have to be experts in water policy to understand what their District
          is doing. I want information to be easier to understand and easier to access. Before major
          decisions, residents should be able to understand:
        </p>
        <ul>
          <li>What are we doing?</li>
          <li>Why are we doing it?</li>
          <li>What will it cost?</li>
          <li>What alternatives exist?</li>
          <li>What are the risks?</li>
          <li>How will we know whether it worked?</li>
        </ul>
        <p>That is accountability.</p>
      </>
    ),
  },
  {
    title: "Community first",
    body: (
      <>
        <p>
          The Water District should be focused on providing reliable water and responsible
          service—not becoming a stepping stone for political ambition. I believe Directors should
          remain focused on the people they were elected to serve.
        </p>
        <p>
          <strong>This isn't about politics. It's about water.</strong>
        </p>
      </>
    ),
  },
];

function Priorities() {
  return (
    <>
      <PageHero
        eyebrow="My Priorities"
        title="Seven commitments for reliable water and responsible government."
        intro="Clear priorities, plainly stated—so residents can hold me to them."
      />

      <Section>
        <div className="grid gap-12">
          {priorities.map((item, i) => (
            <article key={item.title} className="grid gap-4 md:grid-cols-[auto_1fr] md:gap-8">
              <span className="font-display text-4xl leading-none text-amber">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="mt-0 font-display text-2xl md:text-[1.7rem]">{item.title}</h2>
                <span className="rule-amber mt-3" />
                <div className="prose-civic">{item.body}</div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="text-center">
          <h2 className="font-display text-3xl">Have a question about a priority?</h2>
          <p className="mt-3 text-muted-foreground">
            Residents deserve answers—not talking points. Ask me directly.
          </p>
          <Button asChild variant="amber" size="xl" className="mt-6">
            <Link to="/contact">Contact Leena</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
