import { ProjectsExplorer } from "@/components/projects-explorer";
import { getPortfolioProjects } from "@/lib/github";

export default async function ProjectsPage() {
  const projects = await getPortfolioProjects();

  return <ProjectsExplorer projects={projects} />;
}
