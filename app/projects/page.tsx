import { ProjectsExplorer } from "@/components/projects-explorer";
import { getCuratedProjects } from "@/lib/github";

export default async function ProjectsPage() {
  const projects = await getCuratedProjects();

  return <ProjectsExplorer projects={projects} />;
}
