"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { routeHighlights } from "@/content/site";
import { formatGitHubDate, getProjectStack } from "@/lib/github/shared";
import type { PortfolioProject } from "@/lib/github/types";
import {
  Badge,
  Button,
  Card,
  ExplorerItem,
  ExplorerList,
  MetricBar,
  Panel,
  ScrollArea,
  Sidebar,
  StatusStrip,
  SystemPanel,
  TerminalPane,
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
    <section className="grid gap-6 p-6">
      <Panel className="space-y-4" padding="lg" tone="elevated">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--pr-color-text-accent)]">
              Projects Route
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Project explorer
            </h2>
            <p className="max-w-3xl text-base leading-8 text-[var(--pr-color-text-secondary)]">
              {routeHighlights.projects}
            </p>
          </div>
          <StatusStrip className="gap-3">
            <span>curated:{projects.length}</span>
            <span>featured:{featuredCount}</span>
            <span>mode:primary-showcase</span>
          </StatusStrip>
        </div>
      </Panel>

      <div className="grid gap-6 xl:grid-cols-[17rem_minmax(0,1fr)_21rem]">
        <Sidebar
          footer={
            <StatusStrip className="justify-between">
              <span>source:github.api</span>
              <span>filter:{activeFilter}</span>
            </StatusStrip>
          }
          subtitle="Curated repository showcase"
          title="Explorer Rail"
        >
          <div className="space-y-4">
            <ExplorerList>
              {projectFilters.map((filter) => (
                <ExplorerItem
                  description={filter.description}
                  key={filter.id}
                  label={filter.label}
                  meta={
                    filter.id === "all"
                      ? projects.length
                      : filter.id === "featured"
                        ? featuredCount
                        : projects.filter((project) => project.category === filter.id).length
                  }
                  onClick={() => setActiveFilter(filter.id)}
                  selected={filter.id === activeFilter}
                />
              ))}
            </ExplorerList>

            <Panel padding="sm">
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                  Showcase Notes
                </p>
                <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                  {featuredCount} featured projects lead the page, with {nonFeaturedCount} additional case-study entries available in the explorer.
                </p>
              </div>
            </Panel>
          </div>
        </Sidebar>

        <div className="grid gap-4">
          <Panel padding="sm" tone="elevated">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                  Project Inventory
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
          </Panel>

          <ScrollArea className="max-h-[58rem]">
            <div className="grid gap-4 pr-2 md:grid-cols-2">
              {visibleProjects.map((project) => {
                const stack = getProjectStack(project);
                const isSelected = selectedProject?.repo === project.repo;

                return (
                  <Card
                    className={[
                      "space-y-5 transition",
                      isSelected
                        ? "border-[var(--pr-color-border-strong)] shadow-[var(--pr-glow-violet-soft)]"
                        : "",
                    ].join(" ")}
                    interactive
                    key={project.repo}
                    onClick={() => setSelectedRepo(project.repo)}
                    padding="lg"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                          {project.category}
                        </p>
                        <h3 className="text-2xl font-semibold tracking-tight">
                          {project.name}
                        </h3>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge tone={getStatusTone(project.status)} variant="subtle">
                          {project.status}
                        </Badge>
                        {project.featured && (
                          <Badge tone="accent" variant="outline">
                            featured
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                      {project.description}
                    </p>

                    <div className="space-y-2 text-sm text-[var(--pr-color-text-secondary)]">
                      <p>Last updated: {formatGitHubDate(project.lastUpdated)}</p>
                      <p>Stars: {project.stars}</p>
                      <p>
                        Source: {project.source === "github" ? "live GitHub metadata" : "curated fallback"}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {stack.map((item) => (
                        <Badge key={`${project.repo}-${item}`} tone="violet" variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <Button
                          asChild
                          key={link.href}
                          variant={link.label === "Demo" ? "primary" : "ghost"}
                        >
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
          </ScrollArea>
        </div>

        <div className="grid gap-4">
          {selectedProject && (
            <SystemPanel
              description="Focused project detail"
              status={
                <Badge tone={getStatusTone(selectedProject.status)} variant="subtle">
                  {selectedProject.status}
                </Badge>
              }
              title={selectedProject.name}
            >
              <div className="space-y-5">
                <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                  {selectedProject.description}
                </p>

                <div className="grid gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                      Last Updated
                    </span>
                    <span className="text-sm text-[var(--pr-color-text-primary)]">
                      {formatGitHubDate(selectedProject.lastUpdated)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                      Primary Language
                    </span>
                    <span className="text-sm text-[var(--pr-color-text-primary)]">
                      {selectedProject.primaryLanguage ?? "Curated only"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                      Stars
                    </span>
                    <span className="text-sm text-[var(--pr-color-text-primary)]">
                      {selectedProject.stars}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={`${selectedProject.repo}-tag-${tag}`} tone="accent" variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                    Project Highlights
                  </p>
                  <ul className="space-y-2 text-sm leading-6 text-[var(--pr-color-text-secondary)]">
                    {selectedProject.highlights.map((highlight) => (
                      <li key={highlight}>- {highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  {selectedProject.links.map((link) => (
                    <Button
                      asChild
                      key={`${selectedProject.repo}-${link.href}`}
                      variant={link.label === "Demo" ? "primary" : "secondary"}
                    >
                      <Link href={link.href} rel="noreferrer" target="_blank">
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                </div>
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
            prompt="projects.showcase --primary"
            status="active"
            title="explorer_notes.log"
          >
            <div className="space-y-3 font-mono text-xs leading-6 text-[var(--pr-color-text-secondary)]">
              <p>{">"} This route is the primary portfolio showcase.</p>
              <p>{">"} Curated project data stays readable before deeper filtering is added.</p>
              <p>{">"} Detail updates happen in-place without pretending to be a desktop window manager.</p>
            </div>
          </TerminalPane>
        </div>
      </div>
    </section>
  );
}
