import { formatGitHubDate } from "@/lib/github/shared";
import type { PortfolioProject } from "@/lib/github/types";

function getStatusTone(status: PortfolioProject["status"]) {
  if (status === "Live") {
    return "success" as const;
  }

  if (status === "Active Build") {
    return "accent" as const;
  }

  return "violet" as const;
}

type ProjectsExplorerDetailProps = {
  project: PortfolioProject | null;
};

export function ProjectsExplorerDetail({ project }: ProjectsExplorerDetailProps) {
  if (!project) {
    return null;
  }

  return (
    <section className="border-t border-[var(--pr-color-border-muted)] pt-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
            Focused module
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.name}</h3>
        </div>
        <span className={`site-chip site-chip--${getStatusTone(project.status)}`}>
          {project.status}
        </span>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)]">
        <div className="space-y-3">
          <p className="site-shell__body-copy site-shell__body-copy--callout">
            {project.description}
          </p>
          <div className="site-shell__inline-list">
            {project.tags.slice(0, 3).map((tag) => (
              <span className="site-shell__inline-item" key={`${project.repo}-focus-${tag}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-2.5 text-sm">
          <div className="site-home__status-row">
            <span>updated: {formatGitHubDate(project.lastUpdated)}</span>
            <span>lang: {project.primaryLanguage ?? "curated"}</span>
          </div>
          <div className="site-home__status-row">
            <span>stars: {project.stars}</span>
            <span>{project.source === "github" ? "github live" : "curated fallback"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
