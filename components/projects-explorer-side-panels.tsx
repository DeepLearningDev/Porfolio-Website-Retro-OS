import { routeHighlights } from "@/content/site";
import type { PortfolioProject } from "@/lib/github/types";
import { MetricBar } from "@/lib/pastel-retroware";
import type { ProjectFilter } from "@/lib/projects-explorer";

type ProjectsExplorerSidePanelsProps = {
  activeFilter: ProjectFilter;
  demoCoverage: number;
  githubCoverage: number;
  projects: PortfolioProject[];
};

const widgetStats = [
  { label: "Builds", value: "06", detail: "Curated portfolio modules", tone: "accent" as const },
  { label: "Featured", value: "04", detail: "High-signal projects", tone: "violet" as const },
  { label: "Live", value: "01", detail: "GitHub-backed demo", tone: "success" as const },
];

export function ProjectsExplorerSidePanels({
  activeFilter,
  demoCoverage,
  githubCoverage,
  projects,
}: ProjectsExplorerSidePanelsProps) {
  const featuredCount = projects.filter((project) => project.featured).length;

  return (
    <aside className="xl:pt-1">
      <section className="site-shell__lite-panel site-motion-enter site-motion-enter--3">
        <header className="site-shell__lite-panel-header">
          <div>
            <h3 className="site-shell__lite-panel-title">support.telemetry</h3>
            <p className="site-shell__lite-panel-description">Project context and system health</p>
          </div>
          <span className="site-chip site-chip--violet">online</span>
        </header>
        <div className="site-shell__lite-panel-body">
          <div className="space-y-3">
            <p className="site-shell__eyebrow">whoami.sys</p>
            <p className="site-shell__body-copy site-shell__body-copy--callout">
              {routeHighlights.projects}
            </p>
          </div>

          <div className="site-shell__widget-list">
            <article className="site-shell__widget-row">
              <div className="site-shell__widget-row-header">
                <span className="site-shell__widget-row-label site-shell__widget-row-label--accent">
                  curated
                </span>
                <span className="site-chip site-chip--accent">{projects.length}</span>
              </div>
              <p className="site-shell__body-copy">Featured: {featuredCount}</p>
            </article>
            <article className="site-shell__widget-row">
              <div className="site-shell__widget-row-header">
                <span className="site-shell__widget-row-label site-shell__widget-row-label--accent">
                  source
                </span>
                <span className="site-chip site-chip--violet">github</span>
              </div>
              <p className="site-shell__body-copy">mode: {activeFilter}</p>
            </article>
          </div>

          <div className="border-t border-[var(--pr-color-border-muted)] pt-4">
            <p className="site-shell__eyebrow">coverage</p>
            <div className="mt-3 space-y-3">
              <MetricBar
                label="Demo coverage"
                tone="accent"
                value={demoCoverage}
                valueLabel={`${Math.round(demoCoverage)}%`}
              />
              <MetricBar
                label="GitHub metadata"
                tone="violet"
                value={githubCoverage}
                valueLabel={`${Math.round(githubCoverage)}%`}
              />
            </div>
          </div>

          <div className="border-t border-[var(--pr-color-border-muted)] pt-4">
            <p className="site-shell__eyebrow">skill monitor</p>
            <div className="mt-3 space-y-3">
          {[
            { label: "Frontend Systems", value: 92 },
            { label: "Software & Platform", value: 84 },
            { label: "Data & AI Workflows", value: 78 },
          ].map((entry, index) => (
            <article className="site-shell__widget-row" key={entry.label}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold tracking-tight">{entry.label}</span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                  {entry.value}%
                </span>
              </div>
              <MetricBar
                label={entry.label}
                tone={index === 1 ? "violet" : index === 2 ? "success" : "accent"}
                value={entry.value}
                valueLabel={`${entry.value}%`}
              />
            </article>
          ))}
            </div>
          </div>

          <div className="border-t border-[var(--pr-color-border-muted)] pt-4">
            <p className="site-shell__eyebrow">runtime notes</p>
            <div className="mt-3 space-y-2 font-mono text-xs leading-6 text-[var(--pr-color-text-secondary)]">
              {widgetStats.map((stat) => (
                <p key={stat.label}>
                  {stat.label.toLowerCase()}: {stat.value} | {stat.detail}
                </p>
              ))}
              <p>detail updates stay inline without simulating window management.</p>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}
