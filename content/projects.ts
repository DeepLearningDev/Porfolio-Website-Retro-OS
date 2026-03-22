import type { CuratedProjectDefinition } from "@/lib/github";

export const curatedProjects: readonly CuratedProjectDefinition[] = [
  {
    category: "tooling",
    repo: "Fluxer.js",
    description:
      "TypeScript-first framework for building Fluxer bots with a clean runtime surface.",
    highlights: [
      "Framework-oriented package structure",
      "Focused on fast bot setup with minimal friction",
    ],
    status: "Active Build",
    stack: ["TypeScript", "Node.js", "Framework Design"],
    tags: ["bot framework", "developer tooling", "typescript"],
    featured: true,
    order: 1,
  },
  {
    category: "system",
    repo: "Transaction-Anomaly-Detection-System",
    description:
      "Rule-based anomaly detection system for suspicious financial activity and reporting.",
    highlights: [
      "Signal detection for irregular transactions",
      "Operational reporting orientation",
    ],
    status: "Case Study",
    stack: ["Python", "Analytics", "Monitoring"],
    tags: ["anomaly detection", "finance", "reporting"],
    featured: true,
    order: 2,
  },
  {
    category: "system",
    repo: "ETL-Data-Pipeline",
    description:
      "Structured financial ETL pipeline with validation, transformation, and reporting stages.",
    highlights: [
      "Extraction and transformation flow",
      "Database-oriented data organization",
    ],
    status: "Case Study",
    stack: ["Python", "SQL", "ETL"],
    tags: ["pipeline", "data engineering", "automation"],
    featured: true,
    order: 3,
  },
  {
    category: "application",
    repo: "Clipboard.github.io",
    description:
      "Small browser-based clipboard utility focused on lightweight local workflows.",
    highlights: [
      "Client-side productivity utility",
      "GitHub Pages-friendly deployment model",
    ],
    status: "Live",
    stack: ["JavaScript", "HTML", "CSS"],
    tags: ["browser utility", "productivity", "lightweight app"],
    demoUrl: "https://deeplearningdev.github.io/Clipboard.github.io/",
    featured: true,
    order: 4,
  },
  {
    category: "application",
    repo: "Timesheet-Management-WebApp",
    description:
      "Time and productivity tracking application built around practical workflow management.",
    highlights: [
      "Business-oriented dashboard patterns",
      "Task and logging workflows",
    ],
    status: "Case Study",
    stack: ["JavaScript", "Vue", "SQL"],
    tags: ["business app", "productivity", "workflow management"],
    order: 5,
  },
  {
    category: "application",
    repo: "Arcadia-Webapp",
    description:
      "Broader web application ecosystem exploring higher-fidelity interface composition.",
    highlights: [
      "UI ecosystem experimentation",
      "Application shell and interaction work",
    ],
    status: "Case Study",
    stack: ["JavaScript", "Next.js", "Web App"],
    tags: ["ui exploration", "application shell", "frontend systems"],
    order: 6,
  },
];

export type CuratedProjectEntry = (typeof curatedProjects)[number];
