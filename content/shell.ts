export const shellQuickLaunches = [
  {
    label: "Explorer",
    href: "/projects",
    description: "Project modules and case studies",
  },
  {
    label: "Resume",
    href: "/resume/kaleb-white-resume.pdf",
    description: "Public resume asset",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Direct outreach route",
  },
] as const;

export const shellStatusWidgets = [
  {
    label: "Uptime",
    value: "4.5 years",
    detail: "Professional experience",
    tone: "accent" as const,
  },
  {
    label: "Coverage",
    value: "92%",
    detail: "GitHub-backed metadata",
    tone: "violet" as const,
  },
  {
    label: "Delivery",
    value: "Active",
    detail: "Portfolio mode",
    tone: "success" as const,
  },
] as const;

export const shellSkillMonitor = [
  {
    label: "TypeScript",
    value: 94,
  },
  {
    label: "React Systems",
    value: 90,
  },
  {
    label: "Operational UI",
    value: 86,
  },
] as const;

export const shellWhoAmI = {
  title: "about_me.sh",
  subtitle: "Operator profile and routing summary",
  body:
    "DeepLearningDev builds portfolio surfaces, software systems, and frontend architecture that stay readable under real use. The emphasis is on clean hierarchy, reusable components, and practical polish.",
  lines: [
    "$ whoami",
    "DeepLearningDev // software engineer",
    "$ uptime",
    "4.5 years of dev experience",
    "$ locate skillsets",
    "> TypeScript",
    "> React",
    "> Systems Design",
  ],
};

export const shellTelemetry = [
  {
    label: "CPU",
    value: "24.5%",
    detail: "design surface load",
  },
  {
    label: "RAM",
    value: "12.8 GB",
    detail: "interface memory",
  },
  {
    label: "Network",
    value: "1.2 GB/s",
    detail: "active routing",
  },
  {
    label: "Stability",
    value: "99.9%",
    detail: "system readiness",
  },
] as const;
