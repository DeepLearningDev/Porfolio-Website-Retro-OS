import { ProjectFilterControls } from "@/components/project-filter-controls";
import { ProjectGrid } from "@/components/project-grid";
import { routeHighlights } from "@/content/site";
import { formatGitHubDate } from "@/lib/github/shared";
import type { PortfolioProject } from "@/lib/github/types";
import {
  filterProjects,
  getCoverageMetrics,
  getProjectCountByFilter,
  type ProjectFilter,
  projectFilters,
} from "@/lib/projects-explorer";
import {
  Badge,
  MetricBar,
  ScrollArea,
  TerminalPane,
  Window,
  WindowBody,
  WindowControls,
  WindowHeader,
} from "@/lib/pastel-retroware";

type ProjectsExplorerProps = {
  activeFilter: ProjectFilter;
  projects: PortfolioProject[];
  selectedRepo: string | null;
};

const widgetStats = [
  { label: "Builds", value: "06", detail: "Curated portfolio modules", tone: "accent" as const },
  { label: "Featured", value: "04", detail: "High-signal projects", tone: "violet" as const },
  { label: "Live", value: "01", detail: "GitHub-backed demo", tone: "success" as const },
];

function getStatusTone(status: PortfolioProject["status"]) {
  if (status === "Live") {
    return "success" as const;
  }

  if (status === "Active Build") {
    return "accent" as const;
  }

  return "violet" as const;
}

export function ProjectsExplorer({
  activeFilter,
  projects,
  selectedRepo,
}: ProjectsExplorerProps) {
  const counts = getProjectCountByFilter(projects);
  const featuredCount = counts.featured;
  const visibleProjects = filterProjects(projects, activeFilter);
  const { demoCoverage, githubCoverage } = getCoverageMetrics(projects);
  const selectedProject =
    visibleProjects.find((project) => project.repo === selectedRepo) ??
    visibleProjects[0] ??
    projects[0] ??
    null;
  const nonFeaturedCount = projects.length - featuredCount;

  return (
    <section className="grid gap-6 p-6 pb-28">
      <Window className="site-motion-enter overflow-hidden rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-panel)] shadow-none">
        <WindowHeader
          className="border-b border-[var(--pr-color-border-muted)]"
          subtitle={routeHighlights.projects}
          title="project_explorer.exe"
          status={
            <Badge tone="accent" variant="subtle">
              curated matrix
            </Badge>
          }
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
            <Window className="site-motion-enter site-motion-enter--1 rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-canvas-alt)] shadow-none xl:mt-3">
              <WindowHeader
                className="border-b border-[var(--pr-color-border-muted)]"
                subtitle="Explorer categories"
                title="filters.rail"
                status={
                  <Badge tone="success" variant="subtle">
                    {projects.length} items
                  </Badge>
                }
              />
              <WindowBody className="space-y-4">
                <ProjectFilterControls
                  activeFilter={activeFilter}
                  filters={projectFilters.map((filter) => ({
                    ...filter,
                    count: counts[filter.id],
                  }))}
                />

                <section className="site-shell__lite-panel site-motion-hover">
                  <header className="site-shell__lite-panel-header">
                    <div>
                      <h3 className="site-shell__lite-panel-title">System Notes</h3>
                      <p className="site-shell__lite-panel-description">Current filter context</p>
                    </div>
                    <span className="site-chip site-chip--accent">{activeFilter}</span>
                  </header>
                  <div className="site-shell__lite-panel-body">
                    <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                      {featuredCount} featured projects lead the page, with {nonFeaturedCount} additional modules available in the current view.
                    </p>
                  </div>
                </section>
              </WindowBody>
            </Window>

            <div className="grid gap-6">
              <Window className="site-motion-enter site-motion-enter--2 rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-canvas-alt)] shadow-none xl:-mt-2">
                <WindowHeader
                  className="border-b border-[var(--pr-color-border-muted)]"
                  subtitle="Dense system modules"
                  title="project_matrix.exe"
                  status={
                    <Badge tone="success" variant="subtle">
                      {visibleProjects.length} visible
                    </Badge>
                  }
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
                      className="h-3 w-3 border border-[var(--pr-color-border-window)] bg-[var(--pr-color-accent-blue)]"
                    />
                  </WindowControls>
                </WindowHeader>

                <WindowBody className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--pr-color-border-muted)] pb-3">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                        Project inventory
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                        {visibleProjects.length} project{visibleProjects.length === 1 ? "" : "s"} in the current view.
                      </p>
                    </div>
                    {selectedProject ? (
                      <Badge tone={getStatusTone(selectedProject.status)} variant="outline">
                        selected: {selectedProject.name}
                      </Badge>
                    ) : null}
                  </div>

                  <ScrollArea className="max-h-[46rem]" viewportClassName="pr-2">
                    <ProjectGrid
                      projects={visibleProjects}
                      selectedRepo={selectedProject?.repo ?? null}
                    />
                  </ScrollArea>

                  {selectedProject ? (
                    <section className="site-shell__lite-panel site-motion-hover">
                      <header className="site-shell__lite-panel-header">
                        <div>
                          <h3 className="site-shell__lite-panel-title">Focused Module</h3>
                          <p className="site-shell__lite-panel-description">
                            Selected project details
                          </p>
                        </div>
                        <Badge tone={getStatusTone(selectedProject.status)} variant="subtle">
                          {selectedProject.status}
                        </Badge>
                      </header>
                      <div className="site-shell__lite-panel-body">
                        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)]">
                          <div className="space-y-3">
                            <h3 className="text-2xl font-semibold tracking-tight">
                              {selectedProject.name}
                            </h3>
                            <p className="border-l-2 border-[var(--pr-color-border-strong)] pl-3 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                              {selectedProject.description}
                            </p>
                            <div className="site-home__chip-row">
                              {selectedProject.tags.slice(0, 4).map((tag) => (
                                <span className="site-chip site-chip--accent" key={`${selectedProject.repo}-focus-${tag}`}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="grid gap-3 text-sm">
                            <div className="flex items-center justify-between gap-3 border-b border-[var(--pr-color-border-muted)] pb-2">
                              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                                Last Updated
                              </span>
                              <span>{formatGitHubDate(selectedProject.lastUpdated)}</span>
                            </div>
                            <div className="flex items-center justify-between gap-3 border-b border-[var(--pr-color-border-muted)] pb-2">
                              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                                Primary Language
                              </span>
                              <span>{selectedProject.primaryLanguage ?? "Curated only"}</span>
                            </div>
                            <div className="flex items-center justify-between gap-3 border-b border-[var(--pr-color-border-muted)] pb-2">
                              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                                Stars
                              </span>
                              <span>{selectedProject.stars}</span>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                                Source
                              </span>
                              <span>
                                {selectedProject.source === "github"
                                  ? "GitHub live"
                                  : "Curated fallback"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  ) : null}
                </WindowBody>
              </Window>

              <div className="grid gap-4 md:grid-cols-2">
                <section className="site-shell__lite-panel site-motion-enter site-motion-enter--3">
                  <header className="site-shell__lite-panel-header">
                    <div>
                      <h3 className="site-shell__lite-panel-title">System Metrics</h3>
                      <p className="site-shell__lite-panel-description">Coverage and health</p>
                    </div>
                    <Badge tone="accent" variant="subtle">
                      live stats
                    </Badge>
                  </header>
                  <div className="site-shell__lite-panel-body">
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
                    <div className="site-shell__widget-list">
                      {widgetStats.map((stat) => (
                        <article className="site-shell__widget-row" key={stat.label}>
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                              {stat.label}
                            </span>
                            <span className={`site-chip site-chip--${stat.tone}`}>
                              {stat.value}
                            </span>
                          </div>
                          <p className="text-sm leading-6 text-[var(--pr-color-text-secondary)]">
                            {stat.detail}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="site-shell__lite-panel site-motion-enter site-motion-enter--4">
                  <header className="site-shell__lite-panel-header">
                    <div>
                      <h3 className="site-shell__lite-panel-title">System Notes</h3>
                      <p className="site-shell__lite-panel-description">Runtime context</p>
                    </div>
                    <Badge tone="success" variant="subtle">
                      stable
                    </Badge>
                  </header>
                  <div className="site-shell__lite-panel-body">
                    <TerminalPane
                      prompt="projects.showcase --primary"
                      status="active"
                      title="explorer_notes.log"
                    >
                      <div className="space-y-3 border-l-2 border-[var(--pr-color-border-strong)] pl-3 font-mono text-xs leading-6 text-[var(--pr-color-text-secondary)]">
                        <p>{">"} This route is the primary portfolio showcase.</p>
                        <p>{">"} Curated project data stays readable before deeper filtering is added.</p>
                        <p>{">"} Detail updates happen in-place without pretending to be a desktop window manager.</p>
                      </div>
                    </TerminalPane>
                  </div>
                </section>
              </div>
            </div>

            <div className="grid gap-6">
              <section className="site-shell__lite-panel site-motion-enter site-motion-enter--2">
                <header className="site-shell__lite-panel-header">
                  <div>
                    <h3 className="site-shell__lite-panel-title">whoami.sys</h3>
                    <p className="site-shell__lite-panel-description">Profile and focus</p>
                  </div>
                  <Badge tone="success" variant="subtle">
                    operator
                  </Badge>
                </header>
                <div className="site-shell__lite-panel-body">
                  <p className="border-l-2 border-[var(--pr-color-border-strong)] pl-3 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                    {routeHighlights.projects}
                  </p>

                  <div className="site-shell__widget-list">
                    <article className="site-shell__widget-row">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                          curated
                        </span>
                        <span className="site-chip site-chip--accent">{projects.length}</span>
                      </div>
                      <p className="text-sm leading-6 text-[var(--pr-color-text-secondary)]">
                        Featured: {featuredCount}
                      </p>
                    </article>
                    <article className="site-shell__widget-row">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                          source
                        </span>
                        <span className="site-chip site-chip--violet">github</span>
                      </div>
                      <p className="text-sm leading-6 text-[var(--pr-color-text-secondary)]">
                        mode: {activeFilter}
                      </p>
                    </article>
                  </div>
                </div>
              </section>

              <section className="site-shell__lite-panel site-motion-enter site-motion-enter--3">
                <header className="site-shell__lite-panel-header">
                  <div>
                    <h3 className="site-shell__lite-panel-title">skill_monitor.exe</h3>
                    <p className="site-shell__lite-panel-description">Focus areas</p>
                  </div>
                  <Badge tone="violet" variant="subtle">
                    system
                  </Badge>
                </header>
                <div className="site-shell__lite-panel-body">
                  {[
                    { label: "Frontend Systems", value: 92 },
                    { label: "Software & Platform", value: 84 },
                    { label: "Data & AI Workflows", value: 78 },
                  ].map((entry, index) => (
                    <article className="site-shell__widget-row" key={entry.label}>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold tracking-tight">{entry.label}</span>
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                          {entry.value}%
                        </span>
                      </div>
                      <MetricBar
                        label={entry.label}
                        tone={index === 1 ? "violet" : index === 2 ? "success" : "accent"}
                        value={entry.value}
                        valueLabel={`${entry.value}%`}
                      />
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </WindowBody>
      </Window>
    </section>
  );
}
