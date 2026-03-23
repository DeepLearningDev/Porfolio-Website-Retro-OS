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
    contactMethods.find((method) => method.channel === "email")?.value ?? "kwhite.dev@gmail.com";

  return (
    <section className="grid gap-6 p-6">
      <Panel
        className="site-motion-enter space-y-4 rounded-none border border-[var(--pr-color-border-strong)] bg-[var(--pr-color-bg-panel)]"
        padding="lg"
        tone="elevated"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3 border-l-2 border-[var(--pr-color-border-strong)] pl-4">
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

          <StatusStrip className="gap-3 border border-[var(--pr-color-border-muted)] px-3 py-2">
            <span>availability: open</span>
            <span>response: 1-3 business days</span>
            <span>timezone: EDT</span>
          </StatusStrip>
        </div>
      </Panel>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <SystemPanel
          className="site-motion-enter site-motion-enter--1"
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
              <Panel
                className="site-motion-hover space-y-3 rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas-alt)]"
                key={method.label}
                padding="md"
                tone="default"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--pr-color-border-muted)] pb-3">
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

                <p className="border-l-2 border-[var(--pr-color-border-strong)] pl-3 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                  {method.note}
                </p>

                <div className="flex flex-wrap gap-3 border-t border-[var(--pr-color-border-muted)] pt-4">
                  {method.href ? (
                    <Button asChild variant="secondary">
                      <a href={method.href} rel="noreferrer" target="_blank">
                        Open {method.label}
                      </a>
                    </Button>
                  ) : (
                    <Badge tone="violet" variant="subtle">
                      copy handle: {method.value}
                    </Badge>
                  )}
                </div>
              </Panel>
            ))}
          </div>
        </SystemPanel>

        <TerminalPane
          className="site-motion-enter site-motion-enter--2"
          prompt="contact --message"
          status="ready"
          title="initiate_contact.log"
        >
          <form
            action={`mailto:${contactEmail}`}
            className="grid gap-4"
            encType="text/plain"
            method="post"
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
              <p className="border-l-2 border-[var(--pr-color-border-strong)] pl-3 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                This form opens your mail client with the message details prefilled.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button type="submit" variant="primary">
                  {contactFormCopy.submitLabel}
                </Button>
                <Button asChild variant="ghost">
                  <a
                    href="https://www.linkedin.com/in/kaleb-white-95135921b/"
                    rel="noreferrer"
                    target="_blank"
                  >
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
          className="site-motion-enter site-motion-enter--3"
          description="Clear response expectations for recruiters and collaborators"
          status={
            <Badge tone="success" variant="subtle">
              response policy
            </Badge>
          }
          title="Availability"
        >
          <div className="space-y-4">
            <p className="border-l-2 border-[var(--pr-color-border-strong)] pl-3 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
              {contactAvailability.status}
            </p>
            <Panel
              className="site-motion-hover rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas-alt)]"
              padding="sm"
              tone="default"
            >
              <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                {contactAvailability.workingStyle}
              </p>
            </Panel>
            <div className="space-y-3">
              {[
                contactAvailability.responseExpectation,
                "Email and LinkedIn are the fastest public channels for direct outreach.",
                `Primary working timezone: ${contactAvailability.timeZone}.`,
              ].map((item) => (
                <Panel
                  className="site-motion-hover rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas-alt)]"
                  key={item}
                  padding="sm"
                  tone="default"
                >
                  <p className="text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                    {item}
                  </p>
                </Panel>
              ))}
            </div>
          </div>
        </SystemPanel>

        <SystemPanel
          className="site-motion-enter site-motion-enter--4"
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
              <Panel
                className="site-motion-hover space-y-2 rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas-alt)]"
                key={channel.label}
                padding="sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--pr-color-border-muted)] pb-2">
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
