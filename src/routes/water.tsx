import { createFileRoute, Link } from "@tanstack/react-router";
import { Mountain, Waves, Factory, Home as HomeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/PageHero";
import waterTexture from "@/assets/water-texture.jpg";

export const Route = createFileRoute("/water")({
  head: () => ({
    meta: [
      { title: "Water & Our Future | Where Our Water Comes From" },
      {
        name: "description",
        content:
          "Moulton Niguel imports 100% of its potable water from the State Water Project and Colorado River. Here's the journey—and how we build resilience.",
      },
      { property: "og:title", content: "Where Does Our Water Come From?" },
      {
        property: "og:description",
        content: "A journey that begins hundreds of miles away—and why reliability planning matters.",
      },
    ],
  }),
  component: Water,
});

const journey = [
  {
    icon: Mountain,
    title: "The State Water Project",
    body: "Water from Northern California travels through the California Aqueduct and other infrastructure before reaching Southern California.",
  },
  {
    icon: Waves,
    title: "The Colorado River",
    body: "Water travels approximately 242 miles through the Colorado River Aqueduct before reaching Southern California.",
  },
  {
    icon: Factory,
    title: "Regional treatment",
    body: "Imported water is treated at regional facilities including the Diemer Filtration Plant in Yorba Linda and the Baker Water Treatment Plant in Lake Forest.",
  },
  {
    icon: HomeIcon,
    title: "Then it comes to us",
    body: "Treated water moves through the regional transmission system into MNWD's service area—and finally, to your tap.",
  },
];

function Water() {
  return (
    <>
      <PageHero
        eyebrow="Water & Our Future"
        title="Where does our water come from?"
        intro="A journey that begins hundreds of miles away. Most of us turn on the faucet without thinking about the extraordinary trip our water has taken to get there."
      />

      <Section>
        <div className="prose-civic">
          <p>
            Moulton Niguel imports all of its potable water through the Municipal Water District of
            Orange County from the Metropolitan Water District of Southern California. The primary
            imported sources are the State Water Project and the Colorado River.
          </p>
        </div>

        <ol className="mt-10 grid gap-5">
          {journey.map((step, i) => (
            <li
              key={step.title}
              className="relative grid gap-4 rounded-xl border border-border bg-card p-6 pl-7 shadow-soft sm:grid-cols-[auto_1fr] sm:items-start"
            >
              <span className="absolute left-0 top-6 h-[calc(100%-3rem)] w-[3px] rounded-full bg-teal/50" />
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-water">
                <step.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-water">
                  Step {i + 1}
                </p>
                <h2 className="mt-1 font-display text-xl">{step.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <section className="relative isolate overflow-hidden">
        <img
          src={waterTexture}
          alt="Clear water surface"
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative mx-auto max-w-4xl px-5 py-20">
          <h2 className="font-display text-3xl text-navy-foreground md:text-4xl">
            We can't control the weather. We can control how well we plan.
          </h2>
          <p className="mt-5 leading-relaxed text-navy-foreground/80">
            We cannot control the weather in Northern California. We cannot control the Colorado
            River. We cannot control every decision made by regional or state agencies. But we can
            control how well we prepare.
          </p>
        </div>
      </section>

      <Section tone="sand">
        <p className="eyebrow">Building a more resilient future</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">
          Diversified, carefully planned, financially responsible.
        </h2>
        <div className="prose-civic mt-4">
          <p>
            MNWD already produces recycled water that meets approximately 25% of total water demand.
            The District also operates advanced wastewater treatment facilities and continues
            evaluating opportunities to expand highly treated wastewater reuse.
          </p>
          <p>
            My goal is not to suggest that one technology will solve everything. Our water future
            should be diversified, carefully planned and financially responsible.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Use imported water wisely",
            "Maximize recycled water",
            "Invest in infrastructure",
            "Evaluate advanced treatment",
            "Strengthen conservation",
            "Plan for emergencies",
          ].map((item) => (
            <p
              key={item}
              className="rounded-lg bg-card px-5 py-4 font-display text-lg text-navy shadow-soft"
            >
              {item}
            </p>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground">
          And always ask whether the next investment provides real value to the people paying for
          it.
        </p>
        <Button asChild variant="navy" size="lg" className="mt-8">
          <Link to="/fiscal-responsibility">How I'd evaluate new investments</Link>
        </Button>
      </Section>
    </>
  );
}
