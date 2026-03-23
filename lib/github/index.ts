export { curatedProjects } from "@/content/projects";

export { fetchGitHubRepositories, fetchGitHubRepository, getGitHubOwner } from "./client";
export { getFeaturedPortfolioProjects, getPortfolioProjects } from "./projects";
export { formatGitHubDate, getProjectStack } from "./shared";
export type {
  CuratedProjectDefinition,
  GitHubFetchStatus,
  GitHubRepository,
  GitHubRepositoryCollection,
  PortfolioProject,
  PortfolioProjectStatus,
  ProjectLink,
} from "./types";
