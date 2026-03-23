import Link from "next/link";

import {
  shellQuickLaunches,
  shellSkillMonitor,
  shellStatusWidgets,
  shellTelemetry,
  shellWhoAmI,
} from "@/content/shell";

export function ShellRail() {
  return (
    <aside className="site-shell__rail site-motion-enter site-motion-enter--3">
      <section className="site-shell__lite-panel site-shell__lite-panel--primary">
        <header className="site-shell__lite-panel-header">
          <div>
            <h3 className="site-shell__lite-panel-title">{shellWhoAmI.title}</h3>
            <p className="site-shell__lite-panel-description">{shellWhoAmI.subtitle}</p>
          </div>
          <span className="site-shell__widget-row-label site-shell__widget-row-label--accent">root</span>
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

          <div className="border-t border-[var(--pr-color-border-muted)] pt-4">
            <p className="site-shell__eyebrow">telemetry</p>
            <div className="mt-3 site-shell__meta-list">
              {shellTelemetry.map((metric) => (
                <div className="site-shell__meta-row" key={metric.label}>
                  <span className="site-shell__widget-row-label">{metric.label}</span>
                  <span className="site-shell__metric-value">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--pr-color-border-muted)] pt-4">
            <p className="site-shell__eyebrow">focus areas</p>
            <div className="mt-3 site-shell__inline-list">
              {shellSkillMonitor.map((skill) => (
                <span className="site-shell__inline-item" key={skill.label}>
                  {skill.label} {skill.value}%
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--pr-color-border-muted)] pt-4">
            <p className="site-shell__eyebrow">shortcuts</p>
            <nav className="mt-3 site-shell__quick-links">
              {shellQuickLaunches.map((item) => (
                <Link className="site-shell__quick-link" href={item.href} key={item.href}>
                  <span className="font-medium">{item.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--pr-color-text-secondary)]">
                    {item.description}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </aside>
  );
}
