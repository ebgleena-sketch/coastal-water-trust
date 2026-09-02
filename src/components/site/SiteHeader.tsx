import { Link } from "@tanstack/react-router";
import { Menu, Droplets } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "./nav-config";

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-navy-foreground">
        <Droplets className="h-4.5 w-4.5" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[1.05rem] font-semibold text-navy">
          Leena Ray
        </span>
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-water">
          Moulton Niguel Water District
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3.5">
        <Wordmark />

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navLinks.slice(1, 7).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-md px-2.5 py-2 text-[0.82rem] font-medium text-muted-foreground transition-colors hover:text-navy [&.active]:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="default" className="hidden lg:inline-flex">
            <Link to="/get-involved">Get Involved</Link>
          </Button>
          <Button asChild variant="amber" size="default" className="hidden sm:inline-flex">
            <Link to="/donate">Donate</Link>
          </Button>


          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <div className="mt-8 grid gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 font-display text-lg text-navy transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
