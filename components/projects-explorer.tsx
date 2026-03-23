import { routeHighlights } from "@/content/site";
import type { PortfolioProject } from "@/lib/github/types";
import {
  filterProjects,
  getCoverageMetrics,
  type ProjectFilter,
} from "@/lib/projects-explorer";
import { Window, WindowBody, WindowControls, WindowHeader } from "@/lib/pastel-retroware";
import { ProjectsExplorerFilterRail } from "@/components/projects-explorer-filter-rail";
import { ProjectsExplorerMain } from "@/components/projects-explorer-main";
import { ProjectsExplorerSidePanels } from "@/components/projects-explorer-side-panels";

type ProjectsExplorerProps = {
  activeFilter: ProjectFilter;
  projects: PortfolioProject[];
  selectedRepo: string | null;
};

export function ProjectsExplorer({
  activeFilter,
  projects,
  selectedRepo,
}: ProjectsExplorerProps) {
  const visibleProjects = filterProjects(projects, activeFilter);
  const { demoCoverage, githubCoverage } = getCoverageMetrics(projects);
  const selectedProject =
    visibleProjects.find((project) => project.repo === selectedRepo) ??
    visibleProjects[0] ??
    projects[0] ??
    null;

  return (
    <section className="grid gap-6 p-6 pb-28">
      <Window className="site-motion-enter overflow-hidden rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-panel)] shadow-none">
        <WindowHeader
          className="border-b border-[var(--pr-color-border-muted)]"
          subtitle={routeHighlights.projects}
          title="project_explorer.exe"
          status={<span className="site-chip site-chip--accent">curated matrix</span>}
        >
          <WindowControls>
            <span
              aria-hidden
              className="h-3 w-3 border border-[var(--pr-color-border-window)] bg-[var(--pr-color-accent-cyan)]"
            />
            <span
              aria-hidden
              className="h-3 w-3 border border-[var(--pr-color-border-window)] bg-[var(--pr-color-accent-violet)]"
            />
            <span
              aria-hidden
              className="h-3 w-3 border border-[var(--pr-color-border-window)] bg-[var(--pr-color-accent-pink)]"
            />
          </WindowControls>
        </WindowHeader>

        <WindowBody className="relative overflow-hidden">
          <div className="grid gap-6 xl:grid-cols-[15rem_minmax(0,1fr)_18rem]">
            <ProjectsExplorerFilterRail activeFilter={activeFilter} projects={projects} />

            <div className="grid gap-6">
              <ProjectsExplorerMain
                activeFilter={activeFilter}
                projects={visibleProjects}
                selectedProject={selectedProject}
              />
            </div>

            <ProjectsExplorerSidePanels
              activeFilter={activeFilter}
              demoCoverage={demoCoverage}
              githubCoverage={githubCoverage}
              projects={projects}
              visibleCount={visibleProjects.length}
            />
          </div>
        </WindowBody>
      </Window>
    </section>
  );
}
