import "server-only";

import type {
  GitHubFetchStatus,
  GitHubRepoOwnerType,
  GitHubRepository,
  GitHubRepositoryCollection,
} from "./types";

type GitHubApiRepository = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  updated_at: string;
  archived: boolean;
  fork: boolean;
  private: boolean;
  topics?: string[];
  owner: {
    login: string;
    type: GitHubRepoOwnerType;
  };
};

const GITHUB_API_BASE = "https://api.github.com";
const DEFAULT_GITHUB_OWNER = "DeepLearningDev";
const DEFAULT_REVALIDATE_SECONDS = 60 * 60;

function getGitHubToken() {
  return process.env.GITHUB_TOKEN?.trim() || null;
}

export function getGitHubOwner() {
  return process.env.GITHUB_OWNER?.trim() || DEFAULT_GITHUB_OWNER;
}

function buildGitHubHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "portfolio-website-retro-os",
  };

  const token = getGitHubToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

function toRepository(repo: GitHubApiRepository): GitHubRepository {
  return {
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    htmlUrl: repo.html_url,
    homepage: repo.homepage,
    primaryLanguage: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    pushedAt: repo.pushed_at,
    updatedAt: repo.updated_at,
    archived: repo.archived,
    fork: repo.fork,
    private: repo.private,
    topics: repo.topics ?? [],
    owner: {
      login: repo.owner.login,
      type: repo.owner.type,
    },
  };
}

function getFetchStatus(response: Response): GitHubFetchStatus {
  if (response.ok) {
    return "success";
  }

  if (response.status === 404) {
    return "missing";
  }

  if (response.status === 403 || response.status === 429) {
    return "rate_limited";
  }

  return "error";
}

async function fetchGitHubJson<T>(pathname: string): Promise<{
  data: T | null;
  status: GitHubFetchStatus;
}> {
  const response = await fetch(`${GITHUB_API_BASE}${pathname}`, {
    headers: buildGitHubHeaders(),
    next: {
      revalidate: DEFAULT_REVALIDATE_SECONDS,
      tags: ["github-repositories"],
    },
  });

  const status = getFetchStatus(response);
  if (!response.ok) {
    return {
      data: null,
      status,
    };
  }

  return {
    data: (await response.json()) as T,
    status,
  };
}

export async function fetchGitHubRepository(
  repoName: string,
  owner: string = getGitHubOwner()
): Promise<{
  repository: GitHubRepository | null;
  status: GitHubFetchStatus;
}> {
  const result = await fetchGitHubJson<GitHubApiRepository>(
    `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repoName)}`
  );

  return {
    repository: result.data ? toRepository(result.data) : null,
    status: result.status,
  };
}

export async function fetchGitHubRepositories(
  owner: string = getGitHubOwner()
): Promise<GitHubRepositoryCollection> {
  const result = await fetchGitHubJson<GitHubApiRepository[]>(
    `/users/${encodeURIComponent(owner)}/repos?per_page=100&sort=updated&type=owner`
  );

  return {
    repositories:
      result.data?.map(toRepository).filter((repo) => !repo.private && !repo.fork) ?? [],
    status: result.status,
  };
}
