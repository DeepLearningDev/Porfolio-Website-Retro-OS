import {
  contactAvailability,
  contactFormCopy,
  contactHero,
  getContactMethods,
  preferredChannels,
} from "@/content/contact";
import {
  Badge,
  Button,
  Input,
  Panel,
  StatusStrip,
  SystemPanel,
  TerminalPane,
  Textarea,
} from "@/lib/pastel-retroware";

export function ContactSurface() {
  const contactMethods = getContactMethods();
  const contactEmail =
    contactMethods.find((method) => method.channel === "email")?.href?.replace(
      /^mailto:/,
      ""
    ) ?? null;
  const hasEmail = Boolean(contactEmail);

  return (
    <section className="grid gap-6 p-6">
      <Panel className="space-y-4" padding="lg" tone="elevated">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--pr-color-text-accent)]">
              {contactHero.eyebrow}
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {contactHero.headline}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-[var(--pr-color-text-secondary)]">
              {contactHero.summary}
            </p>
          </div>

          <StatusStrip className="gap-3">
            <span>availability: open</span>
            <span>response: 1-3 business days</span>
            <span>timezone: EDT</span>
          </StatusStrip>
        </div>
      </Panel>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <SystemPanel
          description="Direct channels for project inquiries and collaboration"
          status={
            <Badge tone="accent" variant="subtle">
              direct contact
            </Badge>
          }
          title="Reach Out"
        >
          <div className="grid gap-4">
            {contactMethods.map((method) => (
              <Panel className="space-y-3" key={method.label} padding="md" tone="default">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-lg font-semibold tracking-tight">{method.label}</p>
                    <p className="text-sm text-[var(--pr-color-text-secondary)]">
                      {method.value}
                    </p>
                  </div>
                  <Badge tone={method.tone} variant="outline">
                    {method.statusLabel}
                  </Badge>
                </div>

                <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                  {method.note}
                </p>

                <div className="flex flex-wrap gap-3">
                  {method.href ? (
                    <Button asChild variant="secondary">
                      <a href={method.href} rel="noreferrer" target="_blank">
                        Open {method.label}
                      </a>
                    </Button>
                  ) : (
                    <Button disabled variant="secondary">
                      {method.label} unavailable
                    </Button>
                  )}
                  {method.label === "Email" && !hasEmail && (
                    <span className="text-sm text-[var(--pr-color-text-secondary)]">
                      Use the form to send details until a public address is configured.
                    </span>
                  )}
                </div>
              </Panel>
            ))}
          </div>
        </SystemPanel>

        <TerminalPane
          prompt="contact --message"
          status="ready"
          title="initiate_contact.log"
        >
          <form
            action={contactEmail ? `mailto:${contactEmail}` : undefined}
            className="grid gap-4"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                  {contactFormCopy.fields.name}
                </span>
                <Input
                  autoComplete="name"
                  name="name"
                  placeholder="Your name"
                  size="md"
                />
              </label>
              <label className="grid gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                  {contactFormCopy.fields.email}
                </span>
                <Input
                  autoComplete="email"
                  name="email"
                  placeholder="you@example.com"
                  size="md"
                  type="email"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                {contactFormCopy.fields.subject}
              </span>
              <Input
                autoComplete="off"
                name="subject"
                placeholder="Project inquiry, collaboration, or question"
                size="md"
              />
            </label>

            <label className="grid gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
                {contactFormCopy.fields.message}
              </span>
              <Textarea
                name="message"
                placeholder="Share the project, timeline, and what kind of help you need."
                size="md"
              />
            </label>

            <div className="grid gap-4 border-t border-[var(--pr-color-border-muted)] pt-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
              <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                {hasEmail
                  ? "This form opens your mail client with the message details prefilled."
                  : "Email is not published here yet, so the form stays as a ready-to-wire fallback."}
              </p>

                <div className="flex flex-wrap gap-3">
                <Button
                  disabled={!hasEmail}
                  type="submit"
                  variant={hasEmail ? "primary" : "secondary"}
                >
                  {contactFormCopy.submitLabel}
                </Button>
                <Button asChild variant="ghost">
                  <a href="https://www.linkedin.com/in/kaleb-white-95135921b" rel="noreferrer" target="_blank">
                    {contactFormCopy.fallbackLabel}
                  </a>
                </Button>
              </div>
            </div>
          </form>
        </TerminalPane>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
        <SystemPanel
          description="Clear response expectations for recruiters and collaborators"
          status={
            <Badge tone="success" variant="subtle">
              response policy
            </Badge>
          }
          title="Availability"
        >
          <div className="space-y-4">
            <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
              {contactAvailability.status}
            </p>
            <Panel padding="sm" tone="default">
              <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                {contactAvailability.workingStyle}
              </p>
            </Panel>
            <div className="space-y-3">
              {[
                contactAvailability.responseExpectation,
                "GitHub and LinkedIn are the most reliable public channels in this build.",
                `Primary working timezone: ${contactAvailability.timeZone}.`,
              ].map((item) => (
                <Panel key={item} padding="sm" tone="default">
                  <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                    {item}
                  </p>
                </Panel>
              ))}
            </div>
          </div>
        </SystemPanel>

        <SystemPanel
          description="Preferred outreach flow"
          status={
            <Badge tone="violet" variant="subtle">
              preferred channels
            </Badge>
          }
          title="Channel Priority"
        >
          <div className="grid gap-3">
            {preferredChannels.map((channel) => (
              <Panel className="space-y-2" key={channel.label} padding="sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--pr-color-text-accent)]">
                    {channel.label}
                  </p>
                  <Badge tone="accent" variant="outline">
                    {channel.priority}
                  </Badge>
                </div>
                <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                  {channel.description}
                </p>
              </Panel>
            ))}
          </div>
        </SystemPanel>
      </div>
    </section>
  );
}
