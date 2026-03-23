import { resumeContent } from "@/content/resume";
import { Button } from "@/lib/pastel-retroware";

export function ResumePanel() {
  const { primaryFile } = resumeContent;

  return (
    <article className="site-home__support-card site-motion-hover">
      <div className="space-y-2">
        <p className="site-home__support-eyebrow">{resumeContent.title}</p>
        <h3 className="text-xl font-semibold tracking-tight">{primaryFile.label}</h3>
        <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
          {resumeContent.description}
        </p>
      </div>

      <div className="site-home__status-row">
        <span>{primaryFile.format}</span>
        <span>{resumeContent.updatedLabel}</span>
      </div>

      <p className="site-shell__body-copy">{resumeContent.availabilityNote}</p>

      <div className="site-shell__inline-list">
        {resumeContent.highlights.map((highlight) => (
          <span className="site-shell__inline-item" key={highlight}>
            {highlight}
          </span>
        ))}
      </div>

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
    </article>
  );
}
