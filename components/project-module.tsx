import Link from "next/link";

import { formatGitHubDate, getProjectStack } from "@/lib/github/shared";
import type { PortfolioProject } from "@/lib/github/types";
import type { ProjectFilter } from "@/lib/projects-explorer";
import { Badge, Button, Card } from "@/lib/pastel-retroware";
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
  const stack = getProjectStack(project).slice(0, 5);
  const versionLabel =
    project.source === "github"
      ? `snapshot ${new Date(project.lastUpdated ?? new Date().toISOString()).getFullYear()}`
      : "curated fallback";

  return (
    <Card
      className={[
        "site-motion-hover space-y-4 rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-canvas-alt)] shadow-none transition",
        selected ? "shadow-[0_0_0_1px_var(--pr-color-accent-violet)]" : "",
      ].join(" ")}
      padding="lg"
    >
      <div className="flex items-start justify-between gap-4 border-b border-[var(--pr-color-border-muted)] pb-3">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
              {project.category}
            </p>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--pr-color-text-secondary)]">
              {versionLabel}
            </span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge tone={getStatusTone(project.status)} variant="subtle">
            {project.status}
          </Badge>
          {project.featured ? (
            <Badge tone="accent" variant="outline">
              featured
            </Badge>
          ) : null}
        </div>
      </div>

      <p className="border-l-2 border-[var(--pr-color-border-strong)] pl-3 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
        {project.description}
      </p>

      <div className="space-y-2 border-t border-[var(--pr-color-border-muted)] pt-4 text-xs uppercase tracking-[0.18em] text-[var(--pr-color-text-secondary)]">
        <div className="flex items-center justify-between gap-3">
          <span>Last updated</span>
          <span>{formatGitHubDate(project.lastUpdated)}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span>Stars</span>
          <span>{project.stars}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span>Source</span>
          <span>{project.source === "github" ? "GitHub live" : "Curated fallback"}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <Badge key={`${project.repo}-${item}`} tone="violet" variant="outline">
            {item}
          </Badge>
        ))}
      </div>

      <div className="site-home__status-row">
        <span>{project.githubUrl.replace("https://github.com/", "repo:")}</span>
        <span>{project.demoUrl ? "demo: available" : "demo: n/a"}</span>
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
    </Card>
  );
}
