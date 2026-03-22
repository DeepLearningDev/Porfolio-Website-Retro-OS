import { curatedProjects, type CuratedProjectDefinition } from "@/content/projects";

type GitHubRepoOwnerType = "User" | "Organization";

export type GitHubRepository = {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stargazersCount: number;
  forksCount: number;
  pushedAt: string;
  updatedAt: string;
  archived: boolean;
  fork: boolean;
  private: boolean;
  topics: string[];
  owner: {
    login: string;
    type: GitHubRepoOwnerType;
  };
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectCard = CuratedProjectDefinition & {
  name: string;
  repoUrl: string;
  github: GitHubRepository | null;
  lastUpdated: string | null;
  links: ProjectLink[];
};

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
const GITHUB_OWNER = "DeepLearningDev";

function getGitHubToken() {
  return process.env.GITHUB_TOKEN?.trim() || null;
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
    language: repo.language,
    stargazersCount: repo.stargazers_count,
    forksCount: repo.forks_count,
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

export async function fetchGitHubRepository(
  repoName: string,
  owner: string = GITHUB_OWNER
): Promise<GitHubRepository | null> {
  const response = await fetch(
    `${GITHUB_API_BASE}/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repoName)}`,
    {
      headers: buildGitHubHeaders(),
      next: {
        revalidate: 60 * 60,
      },
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch repository ${owner}/${repoName}: ${response.status}`);
  }

  const data = (await response.json()) as GitHubApiRepository;
  return toRepository(data);
}

export async function fetchGitHubRepositories(
  owner: string = GITHUB_OWNER
): Promise<GitHubRepository[]> {
  const response = await fetch(
    `${GITHUB_API_BASE}/users/${encodeURIComponent(owner)}/repos?per_page=100&sort=updated&type=owner`,
    {
      headers: buildGitHubHeaders(),
      next: {
        revalidate: 60 * 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch repositories for ${owner}: ${response.status}`);
  }

  const data = (await response.json()) as GitHubApiRepository[];
  return data.map(toRepository).filter((repo) => !repo.private && !repo.fork);
}

export async function getCuratedProjects() {
  const repositories = await fetchGitHubRepositories().catch(() => []);
  const repositoryByName = new Map(repositories.map((repo) => [repo.name, repo] as const));

  return curatedProjects
    .map((project) => {
      const github = repositoryByName.get(project.repo) ?? null;
      const demoUrl =
        project.demoUrl?.trim() || github?.homepage?.trim() || undefined;
      const githubUrl =
        github?.htmlUrl ?? `https://github.com/${GITHUB_OWNER}/${project.repo}`;

      return {
        ...project,
        name: github?.name ?? project.repo,
        repoUrl: githubUrl,
        github,
        lastUpdated: github?.updatedAt ?? null,
        links: [
          {
            label: "GitHub",
            href: githubUrl,
          },
          ...(demoUrl && demoUrl !== githubUrl
            ? [
                {
                  label: "Demo",
                  href: demoUrl,
                },
              ]
            : []),
        ],
      } satisfies ProjectCard;
    })
    .sort((left, right) => {
      const leftOrder = left.order ?? Number.MAX_SAFE_INTEGER;
      const rightOrder = right.order ?? Number.MAX_SAFE_INTEGER;
      return leftOrder - rightOrder;
    });
}

export function formatGitHubDate(date: string | null, locale: string = "en-US") {
  if (!date) {
    return "Not updated";
  }

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
  }).format(new Date(date));
}

export function getProjectStack(project: ProjectCard) {
  const stack = new Set(project.stack);
  if (project.github?.language) {
    stack.add(project.github.language);
  }

  return Array.from(stack);
}

export { curatedProjects };
