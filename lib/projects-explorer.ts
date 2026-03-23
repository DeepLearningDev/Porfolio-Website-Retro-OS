import type { PortfolioProject } from "@/lib/github/types";

export type ProjectFilter = "all" | "featured" | PortfolioProject["category"];

export const projectFilters: Array<{
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

export function getValidProjectFilter(value: string | null | undefined): ProjectFilter {
  if (value === "all" || value === "featured" || value === "application" || value === "system" || value === "tooling") {
    return value;
  }

  return "featured";
}

export function filterProjects(
  projects: PortfolioProject[],
  activeFilter: ProjectFilter
) {
  if (activeFilter === "all") {
    return projects;
  }

  if (activeFilter === "featured") {
    return projects.filter((project) => project.featured);
  }

  return projects.filter((project) => project.category === activeFilter);
}

export function getProjectCountByFilter(projects: PortfolioProject[]) {
  const featuredCount = projects.filter((project) => project.featured).length;

  return {
    all: projects.length,
    featured: featuredCount,
    application: projects.filter((project) => project.category === "application").length,
    system: projects.filter((project) => project.category === "system").length,
    tooling: projects.filter((project) => project.category === "tooling").length,
  } satisfies Record<ProjectFilter, number>;
}

export function getCoverageMetrics(projects: PortfolioProject[]) {
  const demoCount = projects.filter((project) =>
    project.links.some((link) => link.label === "Demo")
  ).length;
  const githubBackedCount = projects.filter((project) => project.github).length;

  return {
    demoCoverage: projects.length ? (demoCount / projects.length) * 100 : 0,
    githubCoverage: projects.length ? (githubBackedCount / projects.length) * 100 : 0,
  };
}

export function getExplorerHref(
  filter: ProjectFilter,
  selectedRepo?: string | null
) {
  const params = new URLSearchParams();

  params.set("filter", filter);

  if (selectedRepo) {
    params.set("project", selectedRepo);
  }

  return `/projects?${params.toString()}`;
}
