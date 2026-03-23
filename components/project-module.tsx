import Link from "next/link";

import { formatGitHubDate, getProjectStack } from "@/lib/github/shared";
import type { PortfolioProject } from "@/lib/github/types";
import type { ProjectFilter } from "@/lib/projects-explorer";
import { Button } from "@/lib/pastel-retroware";
import { ProjectSelectionButton } from "@/components/project-selection-button";

type ProjectModuleProps = {
  project: PortfolioProject;
  activeFilter: ProjectFilter;
  selected?: boolean;
};

function getStatusTone(status: PortfolioProject["status"]) {
  if (status === "Live") {
    return "success" as const;
  }

  if (status === "Active Build") {
    return "accent" as const;
  }

  return "violet" as const;
}

export function ProjectModule({
  project,
  activeFilter,
  selected = false,
}: ProjectModuleProps) {
  const stack = getProjectStack(project).slice(0, 2);

  return (
    <article
      className={[
        "site-motion-hover space-y-4 border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-canvas-alt)] p-5",
        selected ? "border-[var(--pr-color-accent-violet)]" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4 border-b border-[var(--pr-color-border-muted)] pb-3">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
            {project.category}
          </p>
          <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
        </div>
        <div className="text-right">
          <span className={`site-chip site-chip--${getStatusTone(project.status)}`}>
            {project.status}
          </span>
        </div>
      </div>

      <p className="border-l-2 border-[var(--pr-color-border-strong)] pl-3 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
        {project.description}
      </p>

      <div className="site-home__status-row">
        <span>updated: {formatGitHubDate(project.lastUpdated)}</span>
        <span>{project.featured ? "featured" : "curated"}</span>
      </div>

      <div className="site-shell__inline-list">
        {stack.map((item) => (
          <span className="site-shell__inline-item" key={`${project.repo}-${item}`}>
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 border-t border-[var(--pr-color-border-muted)] pt-4">
        <Button asChild variant="secondary">
          <Link href={project.githubUrl} rel="noreferrer" target="_blank">
            GitHub
          </Link>
        </Button>
        {project.demoUrl ? (
          <Button asChild variant="ghost">
            <Link href={project.demoUrl} rel="noreferrer" target="_blank">
              Demo
            </Link>
          </Button>
        ) : null}
        <ProjectSelectionButton
          activeFilter={activeFilter}
          projectRepo={project.repo}
          selected={selected}
        />
      </div>
    </article>
  );
}
