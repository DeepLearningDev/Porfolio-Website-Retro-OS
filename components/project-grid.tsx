import type { PortfolioProject } from "@/lib/github/types";
import type { ProjectFilter } from "@/lib/projects-explorer";
import { ProjectModule } from "@/components/project-module";

type ProjectGridProps = {
  activeFilter: ProjectFilter;
  projects: PortfolioProject[];
  selectedRepo: string | null;
};

export function ProjectGrid({
  activeFilter,
  projects,
  selectedRepo,
}: ProjectGridProps) {
  return (
    <div
      className={[
        "grid gap-4",
        projects.length === 1
          ? "max-w-3xl"
          : projects.length === 2
            ? "xl:grid-cols-2"
            : "xl:grid-cols-2",
      ].join(" ")}
    >
      {projects.map((project) => (
        <ProjectModule
          activeFilter={activeFilter}
          key={project.repo}
          project={project}
          selected={selectedRepo === project.repo}
        />
      ))}
    </div>
  );
}
