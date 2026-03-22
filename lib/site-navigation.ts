export type SiteRoute = {
  href: "/" | "/projects" | "/contact";
  label: string;
  description: string;
  windowTitle: string;
};

export const siteRoutes: SiteRoute[] = [
  {
    href: "/",
    label: "Overview",
    description: "Landing route for profile, featured work, and system status.",
    windowTitle: "overview.sys",
  },
  {
    href: "/projects",
    label: "Projects",
    description: "Project explorer route for curated GitHub-backed work.",
    windowTitle: "projects.exe",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Terminal-style contact route for outreach and availability.",
    windowTitle: "contact.exe",
  },
];

export function getActiveRoute(pathname: string | null): SiteRoute {
  const route =
    siteRoutes.find((item) =>
      item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)
    ) ?? siteRoutes[0];

  return route;
}
