"use client";

import { useMemo, useState } from "react";

import { ProjectModule } from "@/components/project-module";
import { routeHighlights } from "@/content/site";
import { formatGitHubDate } from "@/lib/github/shared";
import type { PortfolioProject } from "@/lib/github/types";
import {
  Badge,
  MetricBar,
  Panel,
  ScrollArea,
  Sidebar,
  StatusStrip,
  TerminalPane,
  Window,
  WindowBody,
  WindowControls,
  WindowHeader,
} from "@/lib/pastel-retroware";

type ProjectsExplorerProps = {
  projects: PortfolioProject[];
};

type ProjectFilter = "all" | "featured" | PortfolioProject["category"];

const projectFilters: Array<{
  id: ProjectFilter;
  label: string;
  description: string;
}> = [
  {
    id: "all",
    label: "All Projects",
    description: "Curated portfolio work across applications, systems, and tooling.",
  },
  {
    id: "featured",
    label: "Featured",
    description: "Best first-pass projects for recruiters and quick portfolio review.",
  },
  {
    id: "application",
    label: "Applications",
    description: "Interface-driven product work and practical user-facing builds.",
  },
  {
    id: "system",
    label: "Systems",
    description: "Workflow-heavy, data-aware, and operational software projects.",
  },
  {
    id: "tooling",
    label: "Tooling",
    description: "Framework, DX, and reusable engineering infrastructure work.",
  },
];

const widgetStats = [
  { label: "Builds", value: "06", detail: "Curated portfolio modules", tone: "accent" as const },
  { label: "Featured", value: "04", detail: "High-signal projects", tone: "violet" as const },
  { label: "Live", value: "01", detail: "GitHub-backed demo", tone: "success" as const },
];

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

function getStatusTone(status: PortfolioProject["status"]) {
  if (status === "Live") {
    return "success" as const;
  }

  if (status === "Active Build") {
    return "accent" as const;
  }

  return "violet" as const;
}

export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("featured");
  const [selectedRepo, setSelectedRepo] = useState<string>(
    projects.find((project) => project.featured)?.repo ?? projects[0]?.repo ?? ""
  );

  const { demoCoverage, githubCoverage } = getCoverageMetrics(projects);
  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    if (activeFilter === "featured") {
      return projects.filter((project) => project.featured);
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  const selectedProject =
    visibleProjects.find((project) => project.repo === selectedRepo) ??
    visibleProjects[0] ??
    projects[0] ??
    null;

  const featuredCount = projects.filter((project) => project.featured).length;
  const nonFeaturedCount = projects.length - featuredCount;

  return (
    <section className="grid gap-6 p-6 pb-28">
      <Window className="relative overflow-hidden rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-panel)] shadow-none">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(127,127,255,0.06)_22%,transparent_48%,rgba(94,231,255,0.04)_78%,transparent_100%)]"
        />
        <WindowHeader
          className="border-b border-[var(--pr-color-border-muted)]"
          title="project_explorer.exe"
          subtitle={routeHighlights.projects}
          status={
            <Badge tone="accent" variant="subtle">
              curated matrix
            </Badge>
          }
        >
          <WindowControls>
            <span aria-hidden className="h-3 w-3 border border-[var(--pr-color-border-window)] bg-[var(--pr-color-accent-cyan)]" />
            <span aria-hidden className="h-3 w-3 border border-[var(--pr-color-border-window)] bg-[var(--pr-color-accent-violet)]" />
            <span aria-hidden className="h-3 w-3 border border-[var(--pr-color-border-window)] bg-[var(--pr-color-accent-pink)]" />
          </WindowControls>
        </WindowHeader>
        <WindowBody className="relative overflow-hidden">
          <div className="grid gap-6 xl:grid-cols-[15rem_minmax(0,1fr)_18rem]">
            <Window className="rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-canvas-alt)] shadow-none xl:mt-3">
              <WindowHeader
                className="border-b border-[var(--pr-color-border-muted)]"
                title="filters.rail"
                subtitle="Explorer categories"
                status={
                  <Badge tone="success" variant="subtle">
                    {projects.length} items
                  </Badge>
                }
              />
              <WindowBody className="space-y-4">
                <Sidebar
                  className="border-0 bg-transparent p-0"
                  footer={
                    <StatusStrip className="justify-between border-t border-[var(--pr-color-border-muted)] pt-3">
                      <span>featured:{featuredCount}</span>
                      <span>view:{activeFilter}</span>
                    </StatusStrip>
                  }
                  subtitle="Curated repository showcase"
                  title="Explorer Rail"
                >
                  <div className="space-y-4">
                    {projectFilters.map((filter) => {
                      const count =
                        filter.id === "all"
                          ? projects.length
                          : filter.id === "featured"
                            ? featuredCount
                            : projects.filter((project) => project.category === filter.id).length;

                      return (
                        <Panel
                          className={[
                            "cursor-pointer rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas)] transition",
                            filter.id === activeFilter
                              ? "shadow-[0_0_0_1px_var(--pr-color-accent-violet)]"
                              : "",
                          ].join(" ")}
                          key={filter.id}
                          onClick={() => setActiveFilter(filter.id)}
                          padding="sm"
                          tone="default"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-3">
                              <p className="font-semibold tracking-tight">{filter.label}</p>
                              <Badge tone={filter.id === activeFilter ? "accent" : "violet"} variant="outline">
                                {count}
                              </Badge>
                            </div>
                            <p className="text-sm leading-6 text-[var(--pr-color-text-secondary)]">
                              {filter.description}
                            </p>
                          </div>
                        </Panel>
                      );
                    })}
                  </div>
                </Sidebar>

                <Panel className="rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas)]" padding="sm">
                  <div className="space-y-2">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                      System Notes
                    </p>
                    <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                      {featuredCount} featured projects lead the page, with {nonFeaturedCount} additional modules available in the current view.
                    </p>
                  </div>
                </Panel>
              </WindowBody>
            </Window>

            <div className="grid gap-6">
              <Window className="rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-canvas-alt)] shadow-none xl:-mt-2">
                <WindowHeader
                  className="border-b border-[var(--pr-color-border-muted)]"
                  title="project_matrix.exe"
                  subtitle="Dense system modules"
                  status={
                    <Badge tone="success" variant="subtle">
                      {visibleProjects.length} visible
                    </Badge>
                  }
                >
                  <WindowControls>
                    <span aria-hidden className="h-3 w-3 border border-[var(--pr-color-border-window)] bg-[var(--pr-color-accent-cyan)]" />
                    <span aria-hidden className="h-3 w-3 border border-[var(--pr-color-border-window)] bg-[var(--pr-color-accent-violet)]" />
                    <span aria-hidden className="h-3 w-3 border border-[var(--pr-color-border-window)] bg-[var(--pr-color-accent-blue)]" />
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
                    {selectedProject && (
                      <Badge tone={getStatusTone(selectedProject.status)} variant="outline">
                        selected: {selectedProject.name}
                      </Badge>
                    )}
                  </div>

                  <ScrollArea className="max-h-[46rem]" viewportClassName="pr-2">
                    <div className="grid gap-4 xl:grid-cols-2">
                      {visibleProjects.map((project) => (
                        <ProjectModule
                          key={project.repo}
                          onSelect={() => setSelectedRepo(project.repo)}
                          project={project}
                          selected={selectedProject?.repo === project.repo}
                        />
                      ))}
                    </div>
                  </ScrollArea>

                  {selectedProject && (
                    <Panel className="rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-panel)]" padding="md">
                      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)]">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-2 border-b border-[var(--pr-color-border-muted)] pb-2">
                            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                              Focused module
                            </p>
                            <Badge tone={getStatusTone(selectedProject.status)} variant="subtle">
                              {selectedProject.status}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-semibold tracking-tight">{selectedProject.name}</h3>
                          <p className="border-l-2 border-[var(--pr-color-border-strong)] pl-3 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                            {selectedProject.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.slice(0, 4).map((tag) => (
                              <Badge key={`${selectedProject.repo}-focus-${tag}`} tone="accent" variant="outline">
                                {tag}
                              </Badge>
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
                            <span>{selectedProject.source === "github" ? "GitHub live" : "Curated fallback"}</span>
                          </div>
                        </div>
                      </div>
                    </Panel>
                  )}
                </WindowBody>
              </Window>

              <div className="grid gap-4 md:grid-cols-2">
                <Window className="rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-canvas-alt)] shadow-none xl:ml-4">
                  <WindowHeader
                    className="border-b border-[var(--pr-color-border-muted)]"
                    title="system_metrics.exe"
                    subtitle="Coverage and health"
                    status={
                      <Badge tone="accent" variant="subtle">
                        live stats
                      </Badge>
                    }
                  />
                  <WindowBody className="grid gap-4">
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
                    {widgetStats.map((stat) => (
                      <Panel
                        className="rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas)]"
                        key={stat.label}
                        padding="sm"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                            {stat.label}
                          </span>
                          <Badge tone={stat.tone} variant="outline">
                            {stat.value}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[var(--pr-color-text-secondary)]">
                          {stat.detail}
                        </p>
                      </Panel>
                    ))}
                  </WindowBody>
                </Window>

                <Window className="rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-canvas-alt)] shadow-none xl:-mt-4">
                  <WindowHeader
                    className="border-b border-[var(--pr-color-border-muted)]"
                    title="system_notes.log"
                    subtitle="Runtime context"
                    status={
                      <Badge tone="success" variant="subtle">
                        stable
                      </Badge>
                    }
                  />
                  <WindowBody className="space-y-3">
                    <TerminalPane prompt="projects.showcase --primary" status="active" title="explorer_notes.log">
                      <div className="space-y-3 border-l-2 border-[var(--pr-color-border-strong)] pl-3 font-mono text-xs leading-6 text-[var(--pr-color-text-secondary)]">
                        <p>{">"} This route is the primary portfolio showcase.</p>
                        <p>{">"} Curated project data stays readable before deeper filtering is added.</p>
                        <p>{">"} Detail updates happen in-place without pretending to be a desktop window manager.</p>
                      </div>
                    </TerminalPane>
                  </WindowBody>
                </Window>
              </div>
            </div>

            <div className="grid gap-6">
              <Window className="rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-canvas-alt)] shadow-none xl:mt-3">
                <WindowHeader
                  className="border-b border-[var(--pr-color-border-muted)]"
                  title="whoami.sys"
                  subtitle="Profile and focus"
                  status={
                    <Badge tone="success" variant="subtle">
                      operator
                    </Badge>
                  }
                />
                <WindowBody className="space-y-4">
                  <Panel className="rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas)]" padding="sm">
                    <p className="border-l-2 border-[var(--pr-color-border-strong)] pl-3 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                      {routeHighlights.projects}
                    </p>
                  </Panel>

                  <Panel className="rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas)]" padding="sm">
                    <div className="space-y-3">
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                        Project metadata
                      </p>
                      <StatusStrip className="justify-between border border-[var(--pr-color-border-muted)] px-3 py-2">
                        <span>curated:{projects.length}</span>
                        <span>featured:{featuredCount}</span>
                      </StatusStrip>
                      <StatusStrip className="justify-between border border-[var(--pr-color-border-muted)] px-3 py-2">
                        <span>sources:github</span>
                        <span>mode:matrix</span>
                      </StatusStrip>
                    </div>
                  </Panel>
                </WindowBody>
              </Window>

              <Window className="rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-canvas-alt)] shadow-none xl:ml-4">
                <WindowHeader
                  className="border-b border-[var(--pr-color-border-muted)]"
                  title="skill_monitor.exe"
                  subtitle="Focus areas"
                  status={
                    <Badge tone="violet" variant="subtle">
                      system
                    </Badge>
                  }
                />
                <WindowBody className="grid gap-3">
                  {[
                    { label: "Frontend Systems", value: 92 },
                    { label: "Software & Platform", value: 84 },
                    { label: "Data & AI Workflows", value: 78 },
                  ].map((entry, index) => (
                    <Panel
                      className="rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas)]"
                      key={entry.label}
                      padding="sm"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold tracking-tight">{entry.label}</span>
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                          {entry.value}%
                        </span>
                      </div>
                      <MetricBar
                        className="mt-3"
                        label={entry.label}
                        tone={index === 1 ? "violet" : index === 2 ? "success" : "accent"}
                        value={entry.value}
                        valueLabel={`${entry.value}%`}
                      />
                    </Panel>
                  ))}
                </WindowBody>
              </Window>
            </div>
          </div>
        </WindowBody>
      </Window>
    </section>
  );
}
