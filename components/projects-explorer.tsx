import Link from "next/link";

import { routeHighlights } from "@/content/site";
import {
  formatGitHubDate,
  getProjectStack,
  type PortfolioProject,
} from "@/lib/github";
import {
  Badge,
  Button,
  Card,
  MetricBar,
  Panel,
  Sidebar,
  StatusStrip,
  SystemPanel,
  TerminalPane,
} from "@/lib/pastel-retroware";

type ProjectsExplorerProps = {
  projects: PortfolioProject[];
};

function getCoverageMetrics(projects: PortfolioProject[]) {
  const demoCount = projects.filter((project) =>
    project.links.some((link) => link.label === "Demo")
  ).length;
  const githubBackedCount = projects.filter((project) => project.github).length;

  return {
    demoCoverage: projects.length ? (demoCount / projects.length) * 100 : 0,
    githubCoverage: projects.length
      ? (githubBackedCount / projects.length) * 100
      : 0,
  };
}

export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const featuredProject =
    projects.find((project) => project.featured) ?? projects[0] ?? null;
  const { demoCoverage, githubCoverage } = getCoverageMetrics(projects);

  return (
    <section className="grid gap-6 p-6">
      <Panel className="space-y-4" padding="lg" tone="elevated">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--pr-color-text-accent)]">
              Projects Route
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Explorer workspace
            </h2>
            <p className="max-w-3xl text-base leading-8 text-[var(--pr-color-text-secondary)]">
              {routeHighlights.projects}
            </p>
          </div>
          <StatusStrip className="gap-3">
            <span>curated:{projects.length}</span>
            <span>featured:{featuredProject?.name ?? "none"}</span>
            <span>mode:server-sync</span>
          </StatusStrip>
        </div>
      </Panel>

      <div className="grid gap-6 xl:grid-cols-[17rem_minmax(0,1fr)_20rem]">
        <Sidebar
          footer={
            <StatusStrip className="justify-between">
              <span>source:github.api</span>
              <span>filter:curated</span>
            </StatusStrip>
          }
          subtitle="Selected repositories only"
          title="Repository Index"
        >
          <div className="grid gap-3">
            {projects.map((project) => (
              <Panel
                className="space-y-3"
                key={project.repo}
                padding="sm"
                tone={project.featured ? "elevated" : "default"}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--pr-color-text-secondary)]">
                      {project.category}
                    </p>
                  </div>
                  {project.featured && (
                    <Badge tone="accent" variant="subtle">
                      featured
                    </Badge>
                  )}
                </div>

                <p className="text-sm leading-6 text-[var(--pr-color-text-secondary)]">
                  {formatGitHubDate(project.lastUpdated)}
                </p>
              </Panel>
            ))}
          </div>
        </Sidebar>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => {
            const stack = getProjectStack(project);

            return (
              <Card className="space-y-5" key={project.repo} padding="lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.name}
                    </h3>
                  </div>
                  {project.featured && (
                    <Badge tone="success" variant="subtle">
                      featured
                    </Badge>
                  )}
                </div>

                <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                  {project.description}
                </p>

                <div className="space-y-2 text-sm text-[var(--pr-color-text-secondary)]">
                  <p>Last updated: {formatGitHubDate(project.lastUpdated)}</p>
                  <p>
                    GitHub sync: {project.github ? "live metadata" : "curated fallback"}
                  </p>
                  <p>Stars: {project.stars}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <Badge key={item} tone="violet" variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-2 text-sm leading-6 text-[var(--pr-color-text-secondary)]">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>- {highlight}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <Button asChild key={link.href} variant={link.label === "Demo" ? "primary" : "ghost"}>
                      <Link href={link.href} rel="noreferrer" target="_blank">
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-4">
          {featuredProject && (
            <SystemPanel
              description="Focused project detail pane"
              status={
                <Badge tone="accent" variant="subtle">
                  active
                </Badge>
              }
              title={featuredProject.name}
            >
              <div className="space-y-4">
                <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                  {featuredProject.description}
                </p>
                <StatusStrip className="justify-between">
                  <span>updated:{formatGitHubDate(featuredProject.lastUpdated)}</span>
                  <span>links:{featuredProject.links.length}</span>
                </StatusStrip>
              </div>
            </SystemPanel>
          )}

          <Panel padding="md" tone="elevated">
            <div className="grid gap-4">
              <MetricBar
                label="Demo coverage"
                tone="accent"
                value={demoCoverage}
                valueLabel={`${Math.round(demoCoverage)}%`}
              />
              <MetricBar
                label="GitHub metadata coverage"
                tone="violet"
                value={githubCoverage}
                valueLabel={`${Math.round(githubCoverage)}%`}
              />
            </div>
          </Panel>

          <TerminalPane
            prompt="github.sync --curated"
            status="idle"
            title="route_notes.log"
          >
            <div className="space-y-3 font-mono text-xs leading-6 text-[var(--pr-color-text-secondary)]">
              <p>{">"} Rendering curated repositories only.</p>
              <p>{">"} Sidebar stays lightweight by design.</p>
              <p>{">"} Filtering and detail state can deepen later without changing the layout model.</p>
            </div>
          </TerminalPane>
        </div>
      </div>
    </section>
  );
}
