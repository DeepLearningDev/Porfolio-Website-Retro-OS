import { ProjectFilterControls } from "@/components/project-filter-controls";
import type { PortfolioProject } from "@/lib/github/types";
import {
  getProjectCountByFilter,
  projectFilters,
  type ProjectFilter,
} from "@/lib/projects-explorer";

type ProjectsExplorerFilterRailProps = {
  activeFilter: ProjectFilter;
  projects: PortfolioProject[];
};

export function ProjectsExplorerFilterRail({
  activeFilter,
  projects,
}: ProjectsExplorerFilterRailProps) {
  const counts = getProjectCountByFilter(projects);
  const featuredCount = counts.featured;
  const nonFeaturedCount = projects.length - featuredCount;

  return (
    <aside className="xl:mt-3">
      <section className="site-shell__lite-panel site-motion-enter site-motion-enter--1">
        <header className="site-shell__lite-panel-header">
          <div>
            <h3 className="site-shell__lite-panel-title">filters.rail</h3>
            <p className="site-shell__lite-panel-description">Explorer categories</p>
          </div>
          <span className="site-chip site-chip--success">{projects.length} items</span>
        </header>
        <div className="site-shell__lite-panel-body">
          <ProjectFilterControls
            activeFilter={activeFilter}
            filters={projectFilters.map((filter) => ({
              ...filter,
              count: counts[filter.id],
            }))}
          />

          <div className="border-t border-[var(--pr-color-border-muted)] pt-4">
            <div className="site-home__status-row">
              <span>mode: {activeFilter}</span>
              <span>{projects.length} indexed</span>
            </div>
            <div className="mt-3 grid gap-2 text-sm text-[var(--pr-color-text-secondary)]">
              <p>{featuredCount} featured modules</p>
              <p>{nonFeaturedCount} additional entries</p>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}
