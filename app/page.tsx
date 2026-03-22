import { HomeOverview } from "@/components/home-overview";
import { getPortfolioProjects } from "@/lib/github";

export default async function HomePage() {
  const featuredProjects = (await getPortfolioProjects())
    .filter((project) => project.featured)
    .slice(0, 4);

  return <HomeOverview featuredProjects={featuredProjects} />;
}
