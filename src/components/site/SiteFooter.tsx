import { Link } from "@tanstack/react-router";

import { navLinks } from "./nav-config";

export function SiteFooter() {
  return (
    <footer className="surface-navy mt-24">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl text-navy-foreground">Leena for Moulton Niguel</p>
            <span className="rule-amber mt-4" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              Trust. Water. Community. A resident-first perspective focused on reliable water,
              responsible spending, and the future of our neighborhoods.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Explore</p>
            <ul className="mt-4 grid gap-2.5">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-foreground/75 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">More</p>
            <ul className="mt-4 grid gap-2.5">
              {navLinks.slice(5).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-foreground/75 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-navy-foreground/15 pt-6 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Leena Ray for Moulton Niguel Water District.</p>
          <p>Water first. Community always.</p>
        </div>
      </div>
    </footer>
  );
}
