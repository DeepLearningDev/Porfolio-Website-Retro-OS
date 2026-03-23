import { HomeOverview } from "@/components/home-overview";
import { getFeaturedPortfolioProjects } from "@/lib/github";

export default async function HomePage() {
  const featuredProjects = await getFeaturedPortfolioProjects(4);

  return <HomeOverview featuredProjects={featuredProjects} />;
}
