import "server-only";
import { cache } from "react";

import { curatedProjects } from "@/content/projects";

import { fetchGitHubRepositories, getGitHubOwner } from "./client";
import type { PortfolioProject } from "./types";

export const getPortfolioProjects = cache(async (): Promise<PortfolioProject[]> => {
  const owner = getGitHubOwner();
  const { repositories, status } = await fetchGitHubRepositories();
  const repositoryByName = new Map(repositories.map((repo) => [repo.name, repo] as const));

  return curatedProjects
    .filter((project) => !project.hidden)
    .map((project) => {
      const github = repositoryByName.get(project.repo) ?? null;
      const githubUrl = github?.htmlUrl ?? `https://github.com/${owner}/${project.repo}`;
      const demoUrl =
        project.demoUrl?.trim() || github?.homepage?.trim() || null;
      const mergedTags = Array.from(
        new Set([
          ...project.tags,
          ...(github?.primaryLanguage ? [github.primaryLanguage] : []),
        ])
      );

      return {
        ...project,
        name: github?.name ?? project.repo,
        description: project.description || github?.description || "",
        githubUrl,
        demoUrl,
        stars: github?.stars ?? 0,
        lastUpdated: github?.updatedAt ?? null,
        primaryLanguage: github?.primaryLanguage ?? null,
        tags: mergedTags,
        links: [
          {
            label: "GitHub",
            href: githubUrl,
          },
          ...(demoUrl && demoUrl !== githubUrl
            ? [
                {
                  label: "Demo" as const,
                  href: demoUrl,
                },
              ]
            : []),
        ],
        source: github && status === "success" ? "github" : "curated-fallback",
        github,
      } satisfies PortfolioProject;
    })
    .sort((left, right) => {
      const leftOrder = left.order ?? Number.MAX_SAFE_INTEGER;
      const rightOrder = right.order ?? Number.MAX_SAFE_INTEGER;
      return leftOrder - rightOrder;
    });
});

export const getFeaturedPortfolioProjects = cache(
  async (limit: number = 4): Promise<PortfolioProject[]> =>
    (await getPortfolioProjects())
      .filter((project) => project.featured)
      .slice(0, limit)
);
