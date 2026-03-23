import Link from "next/link";

import {
  shellQuickLaunches,
  shellSkillMonitor,
  shellStatusWidgets,
  shellTelemetry,
  shellWhoAmI,
} from "@/content/shell";
import { MetricBar } from "@/lib/pastel-retroware";

export function ShellRail() {
  return (
    <aside className="site-shell__rail site-motion-enter site-motion-enter--3">
      <section className="site-shell__lite-panel site-shell__lite-panel--primary site-motion-hover">
        <header className="site-shell__lite-panel-header">
          <div>
            <h3 className="site-shell__lite-panel-title">{shellWhoAmI.title}</h3>
            <p className="site-shell__lite-panel-description">{shellWhoAmI.subtitle}</p>
          </div>
          <span className="site-chip site-chip--accent">root</span>
        </header>
        <div className="site-shell__lite-panel-body">
          <p className="site-shell__body-copy site-shell__body-copy--callout">{shellWhoAmI.body}</p>

          <div className="site-shell__mono-block">
            {shellWhoAmI.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="site-shell__widget-list">
            {shellStatusWidgets.map((widget) => (
              <article className="site-shell__widget-row" key={widget.label}>
                <div className="site-shell__widget-row-header">
                  <span className="site-shell__widget-row-label site-shell__widget-row-label--accent">
                    {widget.label}
                  </span>
                  <span className={`site-chip site-chip--${widget.tone}`}>
                    {widget.value}
                  </span>
                </div>
                <p className="site-shell__body-copy">{widget.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell__lite-panel site-motion-hover">
        <header className="site-shell__lite-panel-header">
          <div>
            <h3 className="site-shell__lite-panel-title">System Telemetry</h3>
            <p className="site-shell__lite-panel-description">Metrics and skill monitor</p>
          </div>
          <span className="site-chip site-chip--success">active</span>
        </header>
        <div className="site-shell__lite-panel-body">
          {shellTelemetry.map((metric) => (
            <MetricBar
              key={metric.label}
              label={metric.label}
              tone={metric.label === "Network" ? "success" : "accent"}
              value={
                metric.label === "CPU"
                  ? 24.5
                  : metric.label === "RAM"
                    ? 82
                    : metric.label === "Network"
                      ? 64
                      : 99.9
              }
              valueLabel={metric.value}
            />
          ))}
          <div className="site-shell__widget-list">
            {shellSkillMonitor.map((skill) => (
              <article className="site-shell__widget-row" key={skill.label}>
                <div className="site-shell__widget-row-header">
                  <span className="site-shell__widget-row-label site-shell__widget-row-label--accent">
                    {skill.label}
                  </span>
                  <span className="site-chip site-chip--violet">{skill.value}%</span>
                </div>
              </article>
            ))}
          </div>

          <div className="site-shell__terminal-log">
            <p>$ shell.layout = multi-panel</p>
            <p>$ widgets = online</p>
            <p>$ interaction = readable</p>
            <p>$ OS mode = simulated no further</p>
          </div>

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
        </div>
      </section>
    </aside>
  );
}
