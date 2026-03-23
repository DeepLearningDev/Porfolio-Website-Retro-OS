import Link from "next/link";

import { ResumePanel } from "@/components/resume-panel";
import { aboutContent, currentFocus, heroContent, skillTelemetry } from "@/content/home";
import type { PortfolioProject } from "@/lib/github";
import {
  Badge,
  Button,
  MetricBar,
  TerminalPane,
} from "@/lib/pastel-retroware";

type HomeOverviewProps = {
  featuredProjects: PortfolioProject[];
};

function getStatusTone(status: PortfolioProject["status"]) {
  if (status === "Live") {
    return "success" as const;
  }

  if (status === "Active Build") {
    return "accent" as const;
  }

  return "violet" as const;
}

type HomeSectionProps = {
  title: string;
  description?: string;
  status?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

function HomeSection({
  children,
  className,
  description,
  status,
  title,
}: HomeSectionProps) {
  return (
    <section
      className={[
        "site-home__section",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="site-home__section-header">
        <div className="space-y-2">
          <h2 className="site-home__section-title">{title}</h2>
          {description ? (
            <p className="site-home__section-description">{description}</p>
          ) : null}
        </div>
        {status ? <div className="site-home__section-status">{status}</div> : null}
      </header>
      <div className="site-home__section-body">{children}</div>
    </section>
  );
}

export function HomeOverview({ featuredProjects }: HomeOverviewProps) {
  return (
    <section className="site-home">
      <div className="site-home__hero-grid">
        <HomeSection
          className="site-motion-enter"
          description="Software systems, frontend architecture, and intentionally designed product surfaces."
          status={
            <Badge tone="accent" variant="subtle">
              overview
            </Badge>
          }
          title={heroContent.eyebrow}
        >
          <div className="site-home__hero-copy">
            <h1 className="site-home__hero-headline">{heroContent.headline}</h1>

            <div className="site-home__callout">
              <p>{heroContent.roleSummary}</p>
              <p>{heroContent.valueProposition}</p>
            </div>

            <div className="site-home__cta-row">
              {heroContent.ctas.map((cta) => {
                const variant =
                  cta.variant === "secondary"
                    ? "secondary"
                    : cta.variant === "ghost"
                      ? "ghost"
                      : "primary";

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
        </HomeSection>

        <HomeSection
          className="site-motion-enter site-motion-enter--1"
          description="Current positioning"
          status={
            <Badge tone="accent" variant="subtle">
              available
            </Badge>
          }
          title="Current Focus"
        >
          <div className="space-y-4">
            <p className="site-home__callout text-sm leading-7 text-[var(--pr-color-text-secondary)]">
              {currentFocus.availability}
            </p>

            <div className="site-home__chip-row">
              {currentFocus.themes.map((theme) => (
                <span className="site-chip site-chip--violet" key={theme}>
                  {theme}
                </span>
              ))}
            </div>

            <div className="site-home__status-row">
              <span>region: Glen Allen, VA</span>
              <span>timezone: EDT</span>
            </div>
          </div>
        </HomeSection>
      </div>

      <div className="site-home__split-grid">
        <HomeSection
          className="site-motion-enter site-motion-enter--1"
          description="Software, systems, and frontend positioning"
          status={
            <Badge tone="success" variant="subtle">
              recruiter-ready
            </Badge>
          }
          title="Operating Profile"
        >
          <div className="space-y-6">
            <div className="site-home__callout text-sm leading-7 text-[var(--pr-color-text-secondary)]">
              <p>{aboutContent.intro}</p>
              <p>{aboutContent.positioning}</p>
            </div>

            <div className="site-home__strength-grid">
              {aboutContent.strengths.map((strength) => (
                <article className="site-home__mini-panel site-motion-hover" key={strength.title}>
                  <h3 className="text-lg font-semibold tracking-tight">{strength.title}</h3>
                  <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                    {strength.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </HomeSection>

        <TerminalPane
          className="site-motion-enter site-motion-enter--2"
          prompt="focus --current"
          status="live"
          title="currently_building.log"
        >
          <div className="space-y-3 border-l-2 border-[var(--pr-color-border-strong)] pl-4 font-mono text-xs leading-6 text-[var(--pr-color-text-secondary)]">
            {currentFocus.nowBuilding.map((item) => (
              <p key={item}>{">"} {item}</p>
            ))}
          </div>
        </TerminalPane>
      </div>

      <div className="site-home__deferred site-motion-enter site-motion-enter--2">
        <HomeSection
          description="Selected project snapshots with links and stack context"
          status={
            <Badge tone="accent" variant="subtle">
              featured
            </Badge>
          }
          title="Featured Work"
        >
          <div className="site-home__feature-grid">
            {featuredProjects.map((project) => (
              <article className="site-home__feature-card site-motion-hover" key={project.repo}>
                <div className="site-home__feature-header">
                  <div className="space-y-2">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
                  </div>
                  <Badge tone={getStatusTone(project.status)} variant="subtle">
                    {project.status}
                  </Badge>
                </div>

                <p className="site-home__callout text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                  {project.description}
                </p>

                <div className="site-home__chip-row">
                  {project.stack.map((item) => (
                    <span className="site-chip site-chip--violet" key={`${project.repo}-${item}`}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="site-home__action-row">
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
              </article>
            ))}
          </div>
        </HomeSection>
      </div>

      <div className="site-home__deferred site-home__split-grid">
        <HomeSection
          className="site-motion-enter site-motion-enter--3"
          description="Grouped strengths instead of a generic keyword dump"
          status={
            <Badge tone="violet" variant="subtle">
              telemetry
            </Badge>
          }
          title="Skills Telemetry"
        >
          <div className="site-home__skill-grid">
            {skillTelemetry.map((group) => (
              <article className="site-home__mini-panel site-motion-hover" key={group.group}>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3 border-b border-[var(--pr-color-border-muted)] pb-2">
                    <h3 className="text-lg font-semibold tracking-tight">{group.group}</h3>
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--pr-color-text-accent)]">
                      active focus
                    </span>
                  </div>
                  <p className="site-home__callout text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                    {group.summary}
                  </p>
                </div>

                <MetricBar
                  label={group.group}
                  tone="accent"
                  value={group.intensity}
                  valueLabel={`${group.intensity}%`}
                />

                <div className="site-home__chip-row">
                  {group.skills.map((skill) => (
                    <span className="site-chip site-chip--accent" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </HomeSection>

        <div className="grid gap-6">
          <ResumePanel />

          <HomeSection
            className="site-motion-enter site-motion-enter--4"
            description="What to expect from the current portfolio direction"
            status={
              <Badge tone="success" variant="subtle">
                building now
              </Badge>
            }
            title="System Status"
          >
            <div className="space-y-5">
              <p className="site-home__callout text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                I&apos;m currently shaping this portfolio around real project surfaces instead of a generic landing page, with the strongest emphasis on reusable interface systems, practical frontend architecture, and clear software communication.
              </p>

              <div className="site-home__chip-row">
                <span className="site-chip site-chip--accent">
                  interface systems
                </span>
                <span className="site-chip site-chip--violet">
                  project storytelling
                </span>
                <span className="site-chip site-chip--success">
                  recruiter clarity
                </span>
              </div>

              <div className="site-home__status-row">
                <span>portfolio_phase: overview.live</span>
                <span>next_module: resume.access</span>
              </div>
            </div>
          </HomeSection>
        </div>
      </div>
    </section>
  );
}
