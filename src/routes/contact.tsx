import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, Section } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Leena Ray for Moulton Niguel" },
      {
        name: "description",
        content:
          "Ask Leena a question about water quality, reliability, rates or District spending. Residents deserve answers.",
      },
      { property: "og:title", content: "Contact Leena Ray" },
      {
        property: "og:description",
        content: "Have a question about our water? Ask directly—you'll get a straight answer.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Message sent", { description: "Thanks for reaching out—I'll respond personally." });
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ask me anything about our water."
        intro="Residents shouldn't have to be water-policy experts to get a straight answer. Send your question and I'll respond."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 shadow-soft md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" className="h-11" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" className="h-11" />
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" className="h-11" />
            </div>
            <div className="mt-4 grid gap-2">
              <Label htmlFor="message">Your question or message</Label>
              <Textarea id="message" rows={6} />
            </div>
            <Button type="submit" variant="navy" size="xl" className="mt-6 w-full sm:w-auto">
              Send message
            </Button>
          </form>

          <aside className="grid content-start gap-5">
            <div className="rounded-xl surface-navy p-6">
              <Mail className="h-6 w-6 text-amber" />
              <p className="mt-3 font-display text-lg text-navy-foreground">Email</p>
              <a
                href="mailto:Ms.Leenaray@gmail.com"
                className="mt-1 text-sm text-navy-foreground/75 transition-colors hover:text-amber"
              >
                Ms.Leenaray@gmail.com
              </a>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <MapPin className="h-6 w-6 text-water" />
              <p className="mt-3 font-display text-lg">Serving</p>
              <p className="mt-1 text-sm text-muted-foreground">
                The Moulton Niguel Water District community—Laguna Niguel, Aliso Viejo, Mission
                Viejo, Dana Point and Laguna Hills.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
