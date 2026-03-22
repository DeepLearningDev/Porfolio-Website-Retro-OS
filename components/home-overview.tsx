import Link from "next/link";

import { aboutContent, currentFocus, heroContent, skillTelemetry } from "@/content/home";
import type { ProjectCard } from "@/lib/github";
import {
  Badge,
  Button,
  Card,
  MetricBar,
  Panel,
  StatusStrip,
  SystemPanel,
  TerminalPane,
} from "@/lib/pastel-retroware";

type HomeOverviewProps = {
  featuredProjects: ProjectCard[];
};

function getStatusTone(status: ProjectCard["status"]) {
  if (status === "Live") {
    return "success" as const;
  }

  if (status === "Active Build") {
    return "accent" as const;
  }

  return "violet" as const;
}

export function HomeOverview({ featuredProjects }: HomeOverviewProps) {
  return (
    <section className="grid gap-6 p-6">
      <Panel className="space-y-8" padding="lg" tone="elevated">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--pr-color-text-accent)]">
                {heroContent.eyebrow}
              </p>
              <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
                {heroContent.headline}
              </h2>
            </div>

            <div className="max-w-3xl space-y-4 text-base leading-8 text-[var(--pr-color-text-secondary)]">
              <p>{heroContent.roleSummary}</p>
              <p>{heroContent.valueProposition}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {heroContent.ctas.map((cta) => {
                const variant = cta.variant === "secondary" ? "secondary" : cta.variant === "ghost" ? "ghost" : "primary";

                if (cta.kind === "external") {
                  return (
                    <Button asChild key={cta.label} variant={variant}>
                      <a href={cta.href} rel="noreferrer" target="_blank">
                        {cta.label}
                      </a>
                    </Button>
                  );
                }

                return (
                  <Button asChild key={cta.label} variant={variant}>
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                );
              })}
            </div>
          </div>

          <SystemPanel
            description="Current positioning"
            status={
              <Badge tone="accent" variant="subtle">
                available
              </Badge>
            }
            title="Current Focus"
          >
            <div className="space-y-4">
              <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                {currentFocus.availability}
              </p>

              <div className="flex flex-wrap gap-2">
                {currentFocus.themes.map((theme) => (
                  <Badge key={theme} tone="violet" variant="outline">
                    {theme}
                  </Badge>
                ))}
              </div>

              <StatusStrip className="justify-between">
                <span>region: Glen Allen, VA</span>
                <span>timezone: EDT</span>
              </StatusStrip>
            </div>
          </SystemPanel>
        </div>
      </Panel>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <SystemPanel
          description="Software, systems, and frontend positioning"
          status={
            <Badge tone="success" variant="subtle">
              recruiter-ready
            </Badge>
          }
          title="Operating Profile"
        >
          <div className="space-y-6">
            <div className="space-y-4 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
              <p>{aboutContent.intro}</p>
              <p>{aboutContent.positioning}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {aboutContent.strengths.map((strength) => (
                <Panel className="space-y-3" key={strength.title} padding="sm">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {strength.title}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                    {strength.detail}
                  </p>
                </Panel>
              ))}
            </div>
          </div>
        </SystemPanel>

        <TerminalPane
          prompt="focus --current"
          status="live"
          title="currently_building.log"
        >
          <div className="space-y-3 font-mono text-xs leading-6 text-[var(--pr-color-text-secondary)]">
            {currentFocus.nowBuilding.map((item) => (
              <p key={item}>{">"} {item}</p>
            ))}
          </div>
        </TerminalPane>
      </div>

      <SystemPanel
        description="Selected project snapshots with links and stack context"
        status={
          <Badge tone="accent" variant="subtle">
            featured
          </Badge>
        }
        title="Featured Work"
      >
        <div className="grid gap-4 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card className="space-y-5" key={project.repo} padding="lg">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                </div>
                <Badge tone={getStatusTone(project.status)} variant="subtle">
                  {project.status}
                </Badge>
              </div>

              <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={`${project.repo}-${item}`} tone="violet" variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary">
                  <Link href="/projects">Open Detail</Link>
                </Button>
                {project.links.map((link) => (
                  <Button asChild key={link.href} variant="ghost">
                    <Link href={link.href} rel="noreferrer" target="_blank">
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </SystemPanel>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)]">
        <SystemPanel
          description="Grouped strengths instead of a generic keyword dump"
          status={
            <Badge tone="violet" variant="subtle">
              telemetry
            </Badge>
          }
          title="Skills Telemetry"
        >
          <div className="grid gap-5">
            {skillTelemetry.map((group) => (
              <Panel className="space-y-4" key={group.group} padding="md">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {group.group}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--pr-color-text-accent)]">
                      active focus
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                    {group.summary}
                  </p>
                </div>

                <MetricBar
                  label={group.group}
                  tone="accent"
                  value={group.intensity}
                  valueLabel={`${group.intensity}%`}
                />

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} tone="accent" variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Panel>
            ))}
          </div>
        </SystemPanel>

        <SystemPanel
          description="What to expect from the current portfolio direction"
          status={
            <Badge tone="success" variant="subtle">
              building now
            </Badge>
          }
          title="System Status"
        >
          <div className="space-y-5">
            <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
              I’m currently shaping this portfolio around real project surfaces instead of a generic landing page, with the strongest emphasis on reusable interface systems, practical frontend architecture, and clear software communication.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge tone="accent" variant="outline">
                interface systems
              </Badge>
              <Badge tone="violet" variant="outline">
                project storytelling
              </Badge>
              <Badge tone="success" variant="outline">
                recruiter clarity
              </Badge>
            </div>

            <StatusStrip className="justify-between">
              <span>portfolio_phase: overview.live</span>
              <span>next_module: contact.form</span>
            </StatusStrip>
          </div>
        </SystemPanel>
      </div>
    </section>
  );
}
