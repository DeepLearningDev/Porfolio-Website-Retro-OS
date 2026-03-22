import { routeHighlights } from "@/content/site";
import { Badge, Panel, StatusStrip } from "@/lib/pastel-retroware";

export default function HomePage() {
  return (
    <section className="grid gap-6 p-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
      <Panel className="space-y-8" padding="lg" tone="elevated">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--pr-color-text-accent)]">
            System Overview
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Portfolio shell initialized.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--pr-color-text-secondary)]">
            {routeHighlights.home}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge tone="accent" variant="outline">
            next.js
          </Badge>
          <Badge tone="violet" variant="outline">
            pastel-retroware-ui
          </Badge>
          <Badge tone="success" variant="subtle">
            shell.online
          </Badge>
        </div>

        <StatusStrip className="justify-between">
          <span>module: overview</span>
          <span>state: awaiting content</span>
        </StatusStrip>
      </Panel>

      <Panel className="space-y-4" padding="lg">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--pr-color-text-accent)]">
          System Overview
        </p>
        <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
          This route will become the identity and featured-work surface once the
          portfolio sections are implemented.
        </p>
      </Panel>
    </section>
  );
}
