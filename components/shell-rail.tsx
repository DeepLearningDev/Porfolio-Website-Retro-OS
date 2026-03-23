import Link from "next/link";

import {
  shellQuickLaunches,
  shellSkillMonitor,
  shellStatusWidgets,
  shellTelemetry,
  shellWhoAmI,
} from "@/content/shell";
import {
  Badge,
  Button,
  MetricBar,
  Panel,
  Separator,
  SystemPanel,
  TerminalPane,
  Window,
  WindowBody,
  WindowControls,
  WindowHeader,
} from "@/lib/pastel-retroware";

export function ShellRail() {
  return (
    <aside className="site-shell__rail site-motion-enter site-motion-enter--3">
      <Window
        className="site-shell__rail-window site-shell__rail-window--primary site-motion-hover"
        tone="terminal"
      >
        <WindowHeader
          className="site-shell__rail-window-header"
          status={<Badge tone="accent" variant="subtle">root</Badge>}
          subtitle={shellWhoAmI.subtitle}
          title={shellWhoAmI.title}
        >
          <WindowControls />
        </WindowHeader>
        <WindowBody className="site-shell__rail-window-body" padded>
          <div className="space-y-4">
            <p className="border-l-2 border-[var(--pr-color-border-strong)] pl-3 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
              {shellWhoAmI.body}
            </p>

            <div className="space-y-2 font-mono text-xs leading-6 text-[var(--pr-color-text-secondary)]">
              {shellWhoAmI.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <Separator />

            <div className="grid gap-2">
              {shellStatusWidgets.map((widget) => (
                <Panel
                  className="site-motion-hover space-y-1 rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas-alt)]"
                  key={widget.label}
                  padding="sm"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-accent)]">
                      {widget.label}
                    </span>
                    <Badge tone={widget.tone} variant="outline">
                      {widget.value}
                    </Badge>
                  </div>
                  <p className="text-sm leading-6 text-[var(--pr-color-text-secondary)]">
                    {widget.detail}
                  </p>
                </Panel>
              ))}
            </div>
          </div>
        </WindowBody>
      </Window>

      <SystemPanel
        className="site-motion-hover"
        description="System metrics"
        status={<Badge tone="violet" variant="subtle">monitor</Badge>}
        title="System Metrics"
      >
        <div className="grid gap-4">
          {shellTelemetry.map((metric) => (
            <MetricBar
              key={metric.label}
              label={metric.label}
              tone={metric.label === "Network" ? "success" : "accent"}
              value={metric.label === "CPU" ? 24.5 : metric.label === "RAM" ? 82 : metric.label === "Network" ? 64 : 99.9}
              valueLabel={metric.value}
            />
          ))}
        </div>
      </SystemPanel>

      <SystemPanel
        className="site-motion-hover"
        description="Skill monitor"
        status={<Badge tone="success" variant="subtle">active</Badge>}
        title="Skill Monitor"
      >
        <div className="grid gap-3">
          {shellSkillMonitor.map((skill) => (
            <MetricBar
              key={skill.label}
              label={skill.label}
              tone="violet"
              value={skill.value}
              valueLabel={`${skill.value}%`}
            />
          ))}
        </div>
      </SystemPanel>

      <TerminalPane
        className="site-motion-hover"
        prompt="status --log"
        status="live"
        title="core_telemetry.log"
      >
        <div className="space-y-2 font-mono text-xs leading-6 text-[var(--pr-color-text-secondary)]">
          <p>$ shell.layout = multi-panel</p>
          <p>$ widgets = online</p>
          <p>$ interaction = readable</p>
          <p>$ OS mode = simulated no further</p>
        </div>
      </TerminalPane>

      <Panel
        className="site-motion-hover space-y-3 rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas-alt)]"
        padding="sm"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--pr-color-text-accent)]">
            Quick Launch
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
            pinned
          </span>
        </div>

        <div className="grid gap-2">
          {shellQuickLaunches.map((item) => (
            <Button asChild className="justify-start" key={item.href} variant="ghost">
              <Link href={item.href}>
                <span className="flex flex-col items-start">
                  <span>{item.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--pr-color-text-secondary)]">
                    {item.description}
                  </span>
                </span>
              </Link>
            </Button>
          ))}
        </div>
      </Panel>
    </aside>
  );
}
