import { routeHighlights } from "@/content/site";
import { Panel, StatusStrip } from "@/lib/pastel-retroware";

export default function ContactPage() {
  return (
    <section className="grid gap-6 p-6">
      <Panel className="space-y-6" padding="lg" tone="terminal">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--pr-color-text-accent)]">
          Contact Route
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Terminal contact placeholder
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--pr-color-text-secondary)]">
          {routeHighlights.contact}
        </p>
        <StatusStrip className="justify-between">
          <span>channel: secure</span>
          <span>form: not yet initialized</span>
        </StatusStrip>
      </Panel>
    </section>
  );
}
