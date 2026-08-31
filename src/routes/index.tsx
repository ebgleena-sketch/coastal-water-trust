import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, LineChart, ShieldCheck, Users, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coast.jpg";
import waterTexture from "@/assets/water-texture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leena Ray for Moulton Niguel | Trust. Water. Community." },
      {
        name: "description",
        content:
          "Leena Ray, resident and mother, is running for Moulton Niguel Water District Director: reliable water, responsible spending, and real transparency.",
      },
      { property: "og:title", content: "Leena Ray for Moulton Niguel Water District" },
      {
        property: "og:description",
        content:
          "A fresh perspective focused on reliable water, responsible spending, and the future of our community.",
      },
    ],
  }),
  component: Home,
});

const commitments = [
  {
    icon: Droplets,
    title: "Protect our water",
    body: "Continue improving quality, reliability and responsible reuse—so residents can trust what comes out of the tap.",
  },
  {
    icon: ShieldCheck,
    title: "Protect our investments",
    body: "Maximize the value of the treatment, filtration, recycling and storage residents have already paid for.",
  },
  {
    icon: LineChart,
    title: "Protect our ratepayers",
    body: "Evaluate every new commitment carefully—cost, alternatives, obligations and long-term risk.",
  },
];

const questions = [
  "What problem are we solving?",
  "What will it cost?",
  "What alternatives were considered?",
  "What are the long-term obligations?",
  "How does this benefit our ratepayers?",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Coastal South Orange County hillside neighborhood at golden hour"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,var(--navy)_18%,color-mix(in_oklab,var(--navy),transparent_25%)_52%,color-mix(in_oklab,var(--navy),transparent_75%)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-36">
          <div className="max-w-2xl animate-rise">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
              Leena for Moulton Niguel
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.03] text-navy-foreground md:text-6xl">
              Trust. Water. Community.
            </h1>
            <span className="rule-amber mt-6" />
            <p className="mt-6 text-lg leading-relaxed text-navy-foreground/85 md:text-xl">
              A fresh perspective focused on reliable water, responsible spending, and the future of
              our community.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="amber" size="xl">
                <Link to="/meet-leena">Meet Leena</Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <Link to="/priorities">See my priorities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Leena, high on the page */}
      <section className="surface-sand">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div>
            <p className="eyebrow">Meet Leena</p>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              I'm Leena Ray—a community member, mother, and former business leader.
            </h2>
            <div className="prose-civic mt-6">
              <p>
                I'm running for Moulton Niguel Water District Director. I'm{" "}
                <strong>not a career politician</strong> or a water-industry insider.
              </p>
              <p>
                I'm a resident who believes our community deserves a Board that asks questions,
                listens to experts, protects ratepayers, and plans responsibly for the future.
              </p>
            </div>
            <Button asChild variant="navy" size="lg" className="mt-6">
              <Link to="/meet-leena">
                Read my story <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="rounded-xl bg-card p-8 shadow-soft">
            <p className="eyebrow">My commitment</p>
            <ul className="mt-5 grid gap-5">
              {commitments.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-water">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-lg text-navy">{item.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Innovation and discipline */}
      <section>
        <div className="mx-auto max-w-4xl px-5 py-20">
          <p className="eyebrow">Innovation and discipline</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Our water future requires both.
          </h2>
          <div className="prose-civic mt-6">
            <p>
              Moulton Niguel has already invested heavily in water treatment, filtration, recycling,
              storage and infrastructure. I believe we should maximize the value of what residents
              have already paid for while carefully evaluating every new investment.
            </p>
            <p>
              We need to keep exploring recycled water, advanced treatment, water reliability and
              conservation—but we also need to ask the difficult questions:
            </p>
          </div>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2">
            {questions.map((q, i) => (
              <li
                key={q}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <span className="font-display text-sm font-semibold text-water">
                  0{i + 1}
                </span>
                <span className="text-[0.95rem] leading-snug text-navy">{q}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Water quality */}
      <section className="relative isolate overflow-hidden">
        <img
          src={waterTexture}
          alt="Clear rippling water surface"
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/88" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">
            Water quality &amp; confidence
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy-foreground md:text-4xl">
            Safe water is the foundation of a healthy community.
          </h2>
          <div className="mt-6 grid gap-6 text-navy-foreground/80 md:grid-cols-2">
            <p className="leading-relaxed">
              MNWD reports that its drinking water meets state and federal standards and conducts
              approximately 12,000 water-quality tests each year. Meeting those standards is
              essential—but compliance should be the floor, not the ceiling.
            </p>
            <p className="leading-relaxed">
              Residents should have confidence in their water and understand how it is tested,
              treated, delivered and monitored. I will advocate for transparency, continued
              investment in treatment and filtration, responsible evaluation of emerging
              technologies, and clear communication with residents.
            </p>
          </div>
          <dl className="mt-12 grid gap-8 border-t border-navy-foreground/20 pt-8 sm:grid-cols-3">
            {[
              { n: "~12,000", l: "Water-quality tests each year" },
              { n: "~25%", l: "Of total demand met by recycled water" },
              { n: "100%", l: "Of potable water imported today" },
            ].map((stat) => (
              <div key={stat.l}>
                <dt className="font-display text-3xl text-amber">{stat.n}</dt>
                <dd className="mt-1 text-sm text-navy-foreground/70">{stat.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Security + stewardship */}
      <section className="surface-sand">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
          <article className="rounded-xl bg-card p-8 shadow-soft">
            <p className="eyebrow">Water security</p>
            <h3 className="mt-3 font-display text-2xl">Plan before a crisis.</h3>
            <div className="prose-civic mt-3">
              <p>
                Moulton Niguel imports 100% of its potable water through the Metropolitan Water
                District of Southern California, primarily from the Colorado River and the State
                Water Project. That makes long-term reliability especially important.
              </p>
              <ul>
                <li>Use more of what we already have</li>
                <li>Explore responsible new technologies</li>
                <li>Strengthen local reliability</li>
                <li>Plan before a crisis</li>
              </ul>
            </div>
            <Button asChild variant="outline" size="lg" className="mt-4">
              <Link to="/water">Where our water comes from</Link>
            </Button>
          </article>

          <article className="rounded-xl bg-card p-8 shadow-soft">
            <p className="eyebrow">Responsible stewardship</p>
            <h3 className="mt-3 font-display text-2xl">
              A $2 billion responsibility.
            </h3>
            <div className="prose-civic mt-3">
              <p>
                MNWD reports more than $2 billion in water and wastewater infrastructure assets and
                invested approximately $54 million in capital infrastructure in 2025.
              </p>
              <p>
                Every major project should be evaluated not only on whether it is technically
                possible, but whether it is financially responsible and provides measurable value to
                residents.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="mt-4">
              <Link to="/fiscal-responsibility">Fiscal responsibility</Link>
            </Button>
          </article>
        </div>
      </section>

      {/* Leadership */}
      <section>
        <div className="mx-auto max-w-4xl px-5 py-20">
          <p className="eyebrow">A different kind of leadership</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Make sure the right questions are asked.
          </h2>
          <div className="prose-civic mt-6">
            <p>
              My professional background is in marketing, business consulting, strategy, customer
              relationships and communications. I have spent my career helping organizations
              understand problems, identify opportunities, communicate effectively and make better
              decisions.
            </p>
            <p>
              Being a Water District Director does not mean pretending to be the engineer, scientist
              or financial expert in the room. It means listening to qualified professionals,
              understanding the numbers, and remembering who ultimately pays for the decisions being
              made.
            </p>
            <p>
              <strong>Government should not be mysterious.</strong> My approach is simple: listen,
              learn, ask questions, explain clearly, and follow through.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="gradient-deep">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">
            I'm running because I care about where we are going
          </p>
          <h2 className="mt-4 font-display text-3xl text-navy-foreground md:text-4xl">
            My goal isn't to tear down what is working. It is to build on it.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-navy-foreground/80">
            Protect the infrastructure we've already invested in. Continue improving water quality
            and reliability. Expand responsible water reuse. Evaluate new investments carefully.
            Protect ratepayers. And keep the focus where it belongs: on the people who live here.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild variant="amber" size="xl">
              <Link to="/get-involved">Get involved</Link>
            </Button>
            <Button asChild variant="onNavy" size="xl">
              <Link to="/promise">Read my promise</Link>
            </Button>
          </div>
          <p className="mt-10 flex items-center justify-center gap-2 text-sm text-navy-foreground/60">
            <Users className="h-4 w-4" /> Water first. Community always.
          </p>
        </div>
      </section>
    </>
  );
}
