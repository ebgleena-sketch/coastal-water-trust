import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="gradient-deep">
      <div className="mx-auto max-w-4xl px-5 py-20 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] text-navy-foreground md:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/80">{intro}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function Section({
  children,
  tone = "plain",
  className = "",
}: {
  children: ReactNode;
  tone?: "plain" | "sand";
  className?: string;
}) {
  return (
    <section className={`${tone === "sand" ? "surface-sand" : ""} ${className}`}>
      <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">{children}</div>
    </section>
  );
}
