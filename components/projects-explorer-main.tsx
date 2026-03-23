import type { PortfolioProject } from "@/lib/github/types";
import type { ProjectFilter } from "@/lib/projects-explorer";
import { ProjectGrid } from "@/components/project-grid";
import { ProjectsExplorerDetail } from "@/components/projects-explorer-detail";
import { ScrollArea } from "@/lib/pastel-retroware";

function getStatusTone(status: PortfolioProject["status"]) {
  if (status === "Live") {
    return "success" as const;
  }

  if (status === "Active Build") {
    return "accent" as const;
  }

  return "violet" as const;
}

type ProjectsExplorerMainProps = {
  activeFilter: ProjectFilter;
  projects: PortfolioProject[];
  selectedProject: PortfolioProject | null;
};

export function ProjectsExplorerMain({
  activeFilter,
  projects,
  selectedProject,
}: ProjectsExplorerMainProps) {
  return (
    <section className="site-shell__lite-panel site-motion-enter site-motion-enter--2 xl:-mt-2">
      <header className="site-shell__lite-panel-header">
        <div>
          <h3 className="site-shell__lite-panel-title">project_matrix.exe</h3>
          <p className="site-shell__lite-panel-description">Dense system modules</p>
        </div>
        <span className="site-chip site-chip--success">{projects.length} visible</span>
      </header>

      <div className="site-shell__lite-panel-body">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--pr-color-border-muted)] pb-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
              Project inventory
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
              {projects.length} project{projects.length === 1 ? "" : "s"} in the current view.
            </p>
          </div>
          {selectedProject ? (
            <span className={`site-chip site-chip--${getStatusTone(selectedProject.status)}`}>
              {selectedProject.status}
            </span>
          ) : null}
        </div>

        <ScrollArea className="max-h-[46rem]" viewportClassName="pr-2">
          <ProjectGrid
            activeFilter={activeFilter}
            projects={projects}
            selectedRepo={selectedProject?.repo ?? null}
          />
        </ScrollArea>

        <ProjectsExplorerDetail project={selectedProject} />
      </div>
    </section>
  );
}
