import type { PortfolioProject } from "@/lib/github/types";
import { ProjectModule } from "@/components/project-module";

type ProjectGridProps = {
  projects: PortfolioProject[];
  selectedRepo: string | null;
};

export function ProjectGrid({ projects, selectedRepo }: ProjectGridProps) {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      {projects.map((project) => (
        <ProjectModule
          key={project.repo}
          project={project}
          selected={selectedRepo === project.repo}
        />
      ))}
    </div>
  );
}
