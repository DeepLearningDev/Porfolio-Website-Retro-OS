import Link from "next/link";
import type { ReactNode } from "react";

import { ResumePanel } from "@/components/resume-panel";
import {
  aboutContent,
  currentFocus,
  heroContent,
  skillTelemetry,
} from "@/content/home";
import type { PortfolioProject } from "@/lib/github";
import { Button, MetricBar } from "@/lib/pastel-retroware";

type HomeOverviewProps = {
  featuredProjects: PortfolioProject[];
};

function HomeSection({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={["site-home__section", className].filter(Boolean).join(" ")}>
      <header className="site-home__section-header">
        <div>
          <p className="site-home__section-title">{title}</p>
          <p className="site-home__section-description">{description}</p>
        </div>
      </header>
      <div className="site-home__section-body">{children}</div>
    </section>
  );
}

function formatProjectMeta(project: PortfolioProject) {
  if (project.lastUpdated) {
    const date = new Date(project.lastUpdated);

    if (!Number.isNaN(date.getTime())) {
      return `Updated ${date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })}`;
    }
  }

  return project.primaryLanguage ? `${project.primaryLanguage} project` : "Portfolio project";
}

export function HomeOverview({ featuredProjects }: HomeOverviewProps) {
  return (
    <div className="site-home">
      <HomeSection
        className="site-motion-enter"
        description={heroContent.valueProposition}
        title={heroContent.eyebrow}
      >
        <div className="site-home__hero-grid">
          <div className="site-home__hero-copy">
            <div className="space-y-5">
              <div className="site-home__chip-row">
                <span className="site-chip site-chip--accent">DeepLearningDev</span>
                <span className="site-chip">Software Systems</span>
                <span className="site-chip">Frontend Architecture</span>
              </div>

              <div className="space-y-4">
                <h1 className="site-home__hero-headline">{heroContent.headline}</h1>
                <p className="max-w-3xl text-lg leading-8 text-[var(--pr-color-text-secondary)]">
                  {heroContent.roleSummary}
                </p>
              </div>
            </div>

            <div className="site-home__cta-row">
              {heroContent.ctas.map((cta) => (
                <Button asChild key={cta.href} variant={cta.variant}>
                  {cta.kind === "internal" ? (
                    <Link href={cta.href}>{cta.label}</Link>
                  ) : (
                    <a href={cta.href} rel="noreferrer" target="_blank">
                      {cta.label}
                    </a>
                  )}
                </Button>
              ))}
            </div>
          </div>

          <aside className="site-home__support-card site-motion-enter site-motion-enter--1">
            <div className="space-y-2">
              <p className="site-home__support-eyebrow">Current Focus</p>
              <h2 className="text-xl font-semibold tracking-tight text-[var(--pr-color-text-primary)]">
                {currentFocus.availability}
              </h2>
            </div>

            <div className="site-home__status-row">
              <span>Current Mode</span>
              <span>Shipping portfolio + product-facing systems</span>
            </div>

            <div className="site-shell__meta-list">
              {currentFocus.nowBuilding.map((item) => (
                <div className="site-shell__meta-row" key={item}>
                  <span className="site-home__bullet" />
                  <span className="flex-1 text-[var(--pr-color-text-secondary)]">{item}</span>
                </div>
              ))}
            </div>

            <div className="site-shell__inline-list">
              {currentFocus.themes.map((theme) => (
                <span className="site-shell__inline-item" key={theme}>
                  {theme}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </HomeSection>

      <HomeSection
        className="site-motion-enter site-motion-enter--1"
        description="Selected projects that best represent how I approach software systems, frontend architecture, and product-facing execution."
        title="Featured Work"
      >
        <div className="site-home__feature-grid">
          {featuredProjects.map((project) => (
            <article className="site-home__feature-card site-motion-hover" key={project.name}>
              <header className="site-home__feature-header">
                <div className="space-y-2">
                  <div className="site-home__chip-row">
                    <span className="site-chip site-chip--accent">{project.status}</span>
                    <span className="site-chip">{project.category}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-tight text-[var(--pr-color-text-primary)]">
                      {project.name}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.22em] text-[var(--pr-color-text-secondary)]">
                      {formatProjectMeta(project)}
                    </p>
                  </div>
                </div>
              </header>

              <div className="space-y-4">
                <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                  {project.description}
                </p>

                <div className="site-home__chip-row">
                  {project.stack.slice(0, 3).map((skill) => (
                    <span className="site-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="site-home__action-row">
                  {project.links.map((link) => (
                    <Button asChild key={link.href} variant={link.label === "Demo" ? "primary" : "secondary"}>
                      <a href={link.href} rel="noreferrer" target="_blank">
                        {link.label === "Demo" ? "Launch Project" : "View Source"}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </HomeSection>

      <div className="site-home__support-grid site-home__deferred">
        <div className="site-home__support-stack">
          <article className="site-home__support-card">
            <div className="space-y-3">
              <p className="site-home__support-eyebrow">Operating Profile</p>
              <div className="space-y-3">
                <p className="site-shell__body-copy">{aboutContent.intro}</p>
                <p className="site-shell__body-copy">{aboutContent.positioning}</p>
              </div>
            </div>

            <div className="site-home__strength-grid">
              {aboutContent.strengths.map((strength) => (
                <article className="site-home__mini-panel" key={strength.title}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--pr-color-text-accent)]">
                    {strength.title}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                    {strength.detail}
                  </p>
                </article>
              ))}
            </div>
          </article>

          <article className="site-home__support-card">
            <div className="space-y-2">
              <p className="site-home__support-eyebrow">Skills Telemetry</p>
              <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                Focus areas are grouped by the work I actually ship, not as a generic stack dump.
              </p>
            </div>

            <div className="site-home__skill-grid">
              {skillTelemetry.map((entry) => (
                <div className="site-home__mini-panel" key={entry.group}>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pr-color-text-primary)]">
                        {entry.group}
                      </h3>
                      <span className="site-chip">{entry.intensity}%</span>
                    </div>
                    <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                      {entry.summary}
                    </p>
                  </div>

                  <MetricBar
                    label={`${entry.group} intensity`}
                    max={100}
                    tone="accent"
                    value={entry.intensity}
                  />

                  <div className="site-shell__inline-list">
                    {entry.skills.map((skill) => (
                      <span className="site-shell__inline-item" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="site-home__support-stack">
          <article className="site-home__support-card">
            <div className="space-y-2">
              <p className="site-home__support-eyebrow">Currently Building</p>
              <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                Current work themes stay practical: clearer information hierarchy, reusable interface systems, and software surfaces that communicate state without noise.
              </p>
            </div>

            <div className="site-shell__inline-list">
              {currentFocus.themes.map((theme) => (
                <span className="site-shell__inline-item" key={theme}>
                  {theme}
                </span>
              ))}
            </div>
          </article>

          <ResumePanel />

          <article className="site-home__support-card">
            <div className="space-y-2">
              <p className="site-home__support-eyebrow">System Status</p>
              <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                Available for frontend-heavy software roles, product engineering work, and systems-oriented interface projects.
              </p>
            </div>

            <div className="site-shell__meta-list">
              <div className="site-home__status-row">
                <span>Availability</span>
                <span>Open to interviews</span>
              </div>
              <div className="site-home__status-row">
                <span>Focus</span>
                <span>Frontend systems + software products</span>
              </div>
              <div className="site-home__status-row">
                <span>Preferred Work</span>
                <span>TypeScript, React, product-facing interfaces</span>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </div>
  );
}
