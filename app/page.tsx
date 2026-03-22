import { HomeOverview } from "@/components/home-overview";
import { getCuratedProjects } from "@/lib/github";

export default async function HomePage() {
  const featuredProjects = (await getCuratedProjects()).filter((project) => project.featured).slice(0, 4);

  return <HomeOverview featuredProjects={featuredProjects} />;
}
