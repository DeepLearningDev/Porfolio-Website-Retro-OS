import { ProjectsExplorer } from "@/components/projects-explorer";
import { getPortfolioProjects } from "@/lib/github";
import { getValidProjectFilter } from "@/lib/projects-explorer";

type ProjectsPageProps = {
  searchParams?: Promise<{
    filter?: string | string[];
    project?: string | string[];
  }>;
};

function getSingleValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = searchParams ? await searchParams : undefined;
  const projects = await getPortfolioProjects();
  const activeFilter = getValidProjectFilter(getSingleValue(params?.filter));
  const selectedRepo = getSingleValue(params?.project) ?? null;

  return (
    <ProjectsExplorer
      activeFilter={activeFilter}
      projects={projects}
      selectedRepo={selectedRepo}
    />
  );
}
