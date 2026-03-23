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
  MetricBar,
  Separator,
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

            <div className="site-shell__widget-list">
              {shellStatusWidgets.map((widget) => (
                <article className="site-shell__widget-row" key={widget.label}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-accent)]">
                      {widget.label}
                    </span>
                    <span className={`site-chip site-chip--${widget.tone}`}>
                      {widget.value}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-[var(--pr-color-text-secondary)]">
                    {widget.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </WindowBody>
      </Window>

      <section className="site-shell__lite-panel site-motion-hover">
        <header className="site-shell__lite-panel-header">
          <div>
            <h3 className="site-shell__lite-panel-title">System Metrics</h3>
            <p className="site-shell__lite-panel-description">System metrics</p>
          </div>
          <Badge tone="violet" variant="subtle">
            monitor
          </Badge>
        </header>
        <div className="site-shell__lite-panel-body">
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
      </section>

      <section className="site-shell__lite-panel site-motion-hover">
        <header className="site-shell__lite-panel-header">
          <div>
            <h3 className="site-shell__lite-panel-title">Skill Monitor</h3>
            <p className="site-shell__lite-panel-description">Skill monitor</p>
          </div>
          <Badge tone="success" variant="subtle">
            active
          </Badge>
        </header>
        <div className="site-shell__lite-panel-body">
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
      </section>

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

      <section className="site-shell__lite-panel site-motion-hover">
        <header className="site-shell__lite-panel-header">
          <div>
            <h3 className="site-shell__lite-panel-title">Quick Launch</h3>
            <p className="site-shell__lite-panel-description">Pinned routes</p>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
            pinned
          </span>
        </header>
        <div className="site-shell__quick-links">
          {shellQuickLaunches.map((item) => (
            <Link className="site-shell__quick-link" href={item.href} key={item.href}>
              <span className="font-medium">{item.label}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--pr-color-text-secondary)]">
                {item.description}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
}
