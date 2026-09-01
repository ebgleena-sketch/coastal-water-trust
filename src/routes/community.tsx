import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Coffee, Mail, Home as HomeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community | Leena Ray for Moulton Niguel" },
      {
        name: "description",
        content:
          "This isn't about politics. It's about water. A community-first approach to serving Moulton Niguel families and ratepayers.",
      },
      { property: "og:title", content: "Community First | Leena Ray" },
      {
        property: "og:description",
        content: "Directors should stay focused on the people they were elected to serve.",
      },
    ],
  }),
  component: Community,
});

const ways = [
  {
    icon: Coffee,
    title: "Neighborhood conversations",
    body: "Small coffees and living-room conversations where residents can ask real questions about water, rates and planning.",
  },
  {
    icon: HomeIcon,
    title: "Family-first perspective",
    body: "Families value stability and affordability. Water decisions should reflect the households paying for them.",
  },
  {
    icon: Mail,
    title: "Plain-language updates",
    body: "Information residents can actually understand—no jargon, no mystery, no need to be a water-policy expert.",
  },
  {
    icon: Users,
    title: "Listening to residents",
    body: "The people who live here should be heard before major decisions, not after they are made.",
  },
];

function Community() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Community first. This isn't about politics—it's about water."
        intro="The Water District should be focused on providing reliable water and responsible service—not becoming a stepping stone for political ambition."
      />

      <Section>
        <div className="prose-civic">
          <p>
            I believe Directors should remain focused on the people they were elected to serve.
            Moulton Niguel is a community of families, retirees, small businesses and neighbors who
            all depend on the same essential service.
          </p>
          <p>
            My commitment is to keep residents at the center of every conversation—by showing up,
            listening carefully, and explaining decisions in language that makes sense.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {ways.map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-water">
                <item.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-xl">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-4xl">Water first. Community always.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Bring a neighbor into the conversation—or lend your support to a grassroots, resident-led
            campaign.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild variant="amber" size="xl">
              <Link to="/donate">Donate</Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/get-involved">Get involved</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
