export type GitHubRepoOwnerType = "User" | "Organization";

export type GitHubRepository = {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  primaryLanguage: string | null;
  stars: number;
  forks: number;
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
  label: "GitHub" | "Demo";
  href: string;
};

export type GitHubFetchStatus =
  | "success"
  | "missing"
  | "rate_limited"
  | "error";

export type PortfolioProjectStatus = "Live" | "Active Build" | "Case Study";

export type CuratedProjectDefinition = {
  category: "application" | "system" | "tooling";
  repo: string;
  description: string;
  highlights: string[];
  status: PortfolioProjectStatus;
  stack: string[];
  tags: string[];
  demoUrl?: string;
  featured?: boolean;
  hidden?: boolean;
  order?: number;
};

export type PortfolioProject = Omit<CuratedProjectDefinition, "demoUrl"> & {
  source: "github" | "curated-fallback";
  name: string;
  githubUrl: string;
  demoUrl: string | null;
  description: string;
  stars: number;
  lastUpdated: string | null;
  primaryLanguage: string | null;
  links: ProjectLink[];
  github: GitHubRepository | null;
};

export type GitHubRepositoryCollection = {
  repositories: GitHubRepository[];
  status: GitHubFetchStatus;
};
