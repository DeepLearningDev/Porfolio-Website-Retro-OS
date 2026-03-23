import { routeHighlights } from "@/content/site";
import type { PortfolioProject } from "@/lib/github/types";
import type { ProjectFilter } from "@/lib/projects-explorer";

type ProjectsExplorerSidePanelsProps = {
  activeFilter: ProjectFilter;
  demoCoverage: number;
  githubCoverage: number;
  projects: PortfolioProject[];
  visibleCount: number;
};

export function ProjectsExplorerSidePanels({
  activeFilter,
  demoCoverage,
  githubCoverage,
  projects,
  visibleCount,
}: ProjectsExplorerSidePanelsProps) {
  const featuredCount = projects.filter((project) => project.featured).length;

  return (
    <aside className="xl:pt-1">
      <section className="site-shell__lite-panel site-motion-enter site-motion-enter--3">
        <header className="site-shell__lite-panel-header">
          <div>
            <h3 className="site-shell__lite-panel-title">support.index</h3>
            <p className="site-shell__lite-panel-description">Project context and quick diagnostics</p>
          </div>
          <span className="site-chip site-chip--violet">active</span>
        </header>
        <div className="site-shell__lite-panel-body">
          <div className="space-y-3">
            <p className="site-shell__eyebrow">whoami.sys</p>
            <p className="site-shell__body-copy">
              {routeHighlights.projects}
            </p>
          </div>

          <div className="grid gap-2">
            <div className="site-home__status-row">
              <span>visible results</span>
              <span>{visibleCount}</span>
            </div>
            <div className="site-home__status-row">
              <span>featured modules</span>
              <span>{featuredCount}</span>
            </div>
            <div className="site-home__status-row">
              <span>mode</span>
              <span>{activeFilter}</span>
            </div>
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
