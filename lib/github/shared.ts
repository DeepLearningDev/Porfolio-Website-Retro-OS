import type { PortfolioProject } from "./types";

const FALLBACK_DATE_LABEL = "Not updated";

export function formatGitHubDate(date: string | null, locale: string = "en-US") {
  if (!date) {
    return FALLBACK_DATE_LABEL;
  }

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
  }).format(new Date(date));
}

export function getProjectStack(
  project: Pick<PortfolioProject, "stack" | "primaryLanguage" | "tags">
) {
  const stack = new Set(project.stack);

  if (project.primaryLanguage) {
    stack.add(project.primaryLanguage);
  }

  project.tags.slice(0, 3).forEach((tag) => stack.add(tag));

  return Array.from(stack);
}
