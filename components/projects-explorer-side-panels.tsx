import { routeHighlights } from "@/content/site";
import type { PortfolioProject } from "@/lib/github/types";
import type { ProjectFilter } from "@/lib/projects-explorer";

type ProjectsExplorerSidePanelsProps = {
  activeFilter: ProjectFilter;
  demoCoverage: number;
  githubCoverage: number;
  projects: PortfolioProject[];
};

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
            <p className="site-shell__eyebrow">coverage + focus</p>
            <div className="mt-3 grid gap-2">
              <div className="site-home__status-row">
                <span>demo coverage</span>
                <span>{Math.round(demoCoverage)}%</span>
              </div>
              <div className="site-home__status-row">
                <span>github metadata</span>
                <span>{Math.round(githubCoverage)}%</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--pr-color-border-muted)] pt-4">
            <p className="site-shell__eyebrow">focus areas</p>
            <div className="mt-3 site-shell__inline-list">
              {[
                "Frontend Systems",
                "Software & Platform",
                "Data & AI Workflows",
              ].map((entry) => (
                <span className="site-shell__inline-item" key={entry}>
                  {entry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}
