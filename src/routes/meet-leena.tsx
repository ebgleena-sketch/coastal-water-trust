import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/meet-leena")({
  head: () => ({
    meta: [
      { title: "Meet Leena Ray | Resident, Mother, Problem Solver" },
      {
        name: "description",
        content:
          "Leena Ray is a Moulton Niguel resident, mother of twins, and MBA business leader running for Water District Director.",
      },
      { property: "og:title", content: "Meet Leena Ray" },
      {
        property: "og:description",
        content: "A resident. A mother. A business leader. A problem solver.",
      },
    ],
  }),
  component: MeetLeena,
});

const questionList = [
  "What does this cost?",
  "Why do we need it?",
  "What alternatives did we consider?",
  "What are the risks?",
  "What does this mean for our water supply?",
  "What does this mean for our rates?",
];

function MeetLeena() {
  return (
    <>
      <PageHero
        eyebrow="Meet Leena"
        title="A resident. A mother. A business leader. A problem solver."
        intro="I'm Leena Ray. Before considering public service, I spent my career in marketing, business development, consulting, strategy and customer relationships."
      />

      <Section>
        <div className="prose-civic">
          <p>
            I worked with businesses ranging from growing companies to large enterprise
            organizations, learning how to understand complex problems, analyze information,
            communicate with different audiences and develop practical strategies. I also earned my
            MBA.
          </p>
          <p>
            Today, my life is centered around my family and my community. As a mother raising twins
            and caring for my family, I understand how much families value stability, affordability
            and knowing that the people responsible for important public services are doing their
            jobs responsibly.
          </p>
          <p>
            I am not entering this race because I have spent my life in politics. I'm entering
            because I believe residents deserve another voice at the table.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "A voice willing to ask questions",
            "A voice willing to learn",
            "A voice willing to challenge assumptions respectfully",
            "A voice willing to look at the facts first",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg border-l-3 border-teal bg-secondary/60 px-5 py-4 font-display text-lg text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sand">
        <p className="eyebrow">Honest leadership</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">I don't have to know everything.</h2>
        <div className="prose-civic mt-4">
          <p>
            I believe good leadership starts with recognizing what you don't know. Water is highly
            technical. Engineers, scientists, financial professionals and water-industry experts
            have specialized knowledge that I respect.
          </p>
          <p>
            My job as a Director would be to make sure those experts are heard—and to make sure the
            Board asks the questions residents would ask if they were sitting at the table.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {questionList.map((q) => (
            <p key={q} className="rounded-lg bg-card px-5 py-4 text-[0.95rem] text-navy shadow-soft">
              {q}
            </p>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground">
          Those are questions every ratepayer deserves answers to.
        </p>
      </Section>

      <Section>
        <p className="eyebrow">Why I'm running</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">
          Protect what works. Improve what doesn't. Plan intelligently.
        </h2>
        <div className="prose-civic mt-4">
          <p>
            Moulton Niguel has a strong foundation. The District has invested in treatment,
            filtration, recycled water, infrastructure and conservation. Now we need to make smart
            decisions about what comes next.
          </p>
          <p>I'm running to bring a perspective focused on:</p>
          <ul>
            <li>Water quality</li>
            <li>Water reliability</li>
            <li>Fiscal responsibility</li>
            <li>Transparency</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="navy" size="lg">
            <Link to="/priorities">My priorities</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/promise">My promise to you</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
