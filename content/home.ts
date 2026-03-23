export const heroContent = {
  eyebrow: "Operator Overview",
  headline: "Kaleb White builds software systems that are clear, fast, and visually intentional.",
  roleSummary:
    "Web and software developer focused on TypeScript products, data-heavy workflows, and retro-futuristic frontend systems.",
  valueProposition:
    "I design and build practical tools that make complex information easier to navigate, whether the work is a portfolio-facing interface, an operational dashboard, or a backend-driven product surface.",
  ctas: [
    { href: "/projects", label: "View Projects", kind: "internal" as const, variant: "primary" as const },
    {
      href: "/resume/kaleb-white-resume.html",
      label: "View Resume",
      kind: "external" as const,
      variant: "secondary" as const,
    },
    { href: "/contact", label: "Contact", kind: "internal" as const, variant: "ghost" as const },
    { href: "https://github.com/DeepLearningDev", label: "GitHub", kind: "external" as const, variant: "ghost" as const },
    {
      href: "https://www.linkedin.com/in/kaleb-white-95135921b",
      label: "LinkedIn",
      kind: "external" as const,
      variant: "ghost" as const,
    },
  ],
};

export const aboutContent = {
  intro:
    "I work best where software, systems thinking, and interface clarity overlap. My background leans toward building useful products around data, automation, and operational visibility rather than shipping generic marketing pages.",
  positioning:
    "That usually means translating noisy workflows into structured application surfaces, tightening information hierarchy, and making tools feel dependable under real use instead of impressive only in screenshots.",
  strengths: [
    {
      title: "Software Product Thinking",
      detail:
        "I approach frontend work as product infrastructure, not decoration. The goal is clarity, maintainability, and useful interaction patterns.",
    },
    {
      title: "Systems & Data Workflows",
      detail:
        "I’m comfortable working on pipeline-oriented, reporting-heavy, and operational software where the interface has to communicate state cleanly.",
    },
    {
      title: "UI Craft & Design Systems",
      detail:
        "I enjoy building visual systems with strong identity, especially when they still need to stay reusable, accessible, and production-ready.",
    },
  ],
};

export const skillTelemetry = [
  {
    group: "Frontend Systems",
    summary: "Component architecture, interaction structure, and visual polish for product-facing interfaces.",
    skills: ["TypeScript", "React", "Next.js", "Design Systems"],
    intensity: 92,
  },
  {
    group: "Software & Platform Work",
    summary: "Application logic, workflow shaping, and practical tooling around maintainable systems.",
    skills: ["Node.js", "Application Architecture", "DX", "Automation"],
    intensity: 84,
  },
  {
    group: "Data & AI Workflows",
    summary: "Data movement, analytics-oriented systems, and product surfaces for AI or telemetry-heavy use cases.",
    skills: ["Python", "ETL", "Monitoring", "AI Workflows"],
    intensity: 78,
  },
] as const;

export const currentFocus = {
  availability: "Open to software engineering and frontend-focused opportunities.",
  nowBuilding: [
    "Retro-futuristic portfolio surfaces with practical information hierarchy",
    "Token-driven component systems and reusable UI architecture",
    "Data-aware tools that communicate system state clearly",
  ],
  themes: ["Interface systems", "Operational dashboards", "Developer tooling", "AI-adjacent products"],
};
