import { resumeContent } from "@/content/resume";
import { Badge, Button, Panel, StatusStrip, SystemPanel } from "@/lib/pastel-retroware";

export function ResumePanel() {
  const { primaryFile } = resumeContent;

  return (
    <SystemPanel
      description={resumeContent.description}
      status={
        <Badge tone="success" variant="subtle">
          file ready
        </Badge>
      }
      title={resumeContent.title}
    >
      <div className="space-y-5">
        <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
          {resumeContent.availabilityNote}
        </p>

        <Panel className="space-y-3" padding="sm" tone="elevated">
          <div className="flex flex-wrap items-center justify-between gap-3">
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

          <div className="flex flex-wrap gap-2">
            {resumeContent.highlights.map((highlight) => (
              <Badge key={highlight} tone="violet" variant="outline">
                {highlight}
              </Badge>
            ))}
          </div>
        </Panel>

        <div className="flex flex-wrap gap-3">
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

        <StatusStrip className="justify-between">
          <span>asset: public.resume</span>
          <span>usage: recruiter-review</span>
        </StatusStrip>
      </div>
    </SystemPanel>
  );
}
