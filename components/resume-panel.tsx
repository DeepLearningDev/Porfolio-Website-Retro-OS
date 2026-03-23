import { resumeContent } from "@/content/resume";
import { Badge, Button } from "@/lib/pastel-retroware";

export function ResumePanel() {
  const { primaryFile } = resumeContent;

  return (
    <section className="site-home__section site-motion-enter site-motion-enter--3 site-motion-hover">
      <header className="site-home__section-header">
        <div className="space-y-2">
          <h2 className="site-home__section-title">{resumeContent.title}</h2>
          <p className="site-home__section-description">{resumeContent.description}</p>
        </div>
        <Badge tone="success" variant="subtle">
          file ready
        </Badge>
      </header>

      <div className="site-home__section-body space-y-5">
        <p className="site-home__callout text-sm leading-7 text-[var(--pr-color-text-secondary)]">
          {resumeContent.availabilityNote}
        </p>

        <article className="site-home__mini-panel">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--pr-color-border-muted)] pb-3">
            <div className="space-y-1">
              <p className="text-lg font-semibold tracking-tight">{primaryFile.label}</p>
              <p className="text-sm text-[var(--pr-color-text-secondary)]">
                Format: {primaryFile.format}
              </p>
            </div>
            <Badge tone="accent" variant="outline">
              {resumeContent.updatedLabel}
            </Badge>
          </div>

          <div className="site-home__chip-row">
            {resumeContent.highlights.map((highlight) => (
              <span className="site-chip site-chip--violet" key={highlight}>
                {highlight}
              </span>
            ))}
          </div>
        </article>

        <div className="site-home__action-row">
          <Button asChild variant="primary">
            <a href={primaryFile.href} rel="noreferrer" target="_blank">
              View Resume
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a download={primaryFile.downloadName} href={primaryFile.href}>
              Download Resume
            </a>
          </Button>
        </div>

        <div className="site-home__status-row">
          <span>asset: public.resume</span>
          <span>usage: recruiter-review</span>
        </div>
      </div>
    </section>
  );
}
