import Link from "next/link";
import type { ReactNode } from "react";

import { siteProfile, shellLinks, shellMetrics } from "@/content/site";
import {
  Window,
  WindowBody,
} from "@/lib/pastel-retroware";
import { PortfolioTaskbar } from "@/components/portfolio-taskbar";
import { ShellRail } from "@/components/shell-rail";
import { ShellQuickLaunches } from "@/components/shell-quick-launches";
import { ShellTopNav } from "@/components/shell-top-nav";
import { ShellWindowHeader } from "@/components/shell-window-header";

type PortfolioShellProps = {
  children: ReactNode;
};

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="site-shell">
      <div aria-hidden className="site-shell__ambient" />
      <div className="site-shell__frame">
        <header className="site-shell__topbar site-motion-enter">
          <div className="site-shell__topbar-chrome">
            <div className="site-shell__brand-row">
              <Link className="site-shell__brand" href="/">
                {siteProfile.alias}
              </Link>
              <span className="site-chip site-chip--accent">{siteProfile.status}</span>
            </div>

            <ShellTopNav />
          </div>
        </header>

        <div className="site-shell__desktop">
          <aside className="site-shell__sidebar site-motion-enter site-motion-enter--1">
            <div className="site-shell__sidebar-header">
              <div>
                <p className="site-shell__sidebar-title">{siteProfile.name}</p>
                <p className="site-shell__sidebar-subtitle">{siteProfile.role}</p>
              </div>
            </div>

            <section className="site-shell__sidebar-section">
              <div>
                <p className="site-shell__eyebrow">
                  Operating Profile
                </p>
                <p className="site-shell__body-copy site-shell__body-copy--spaced">
                  {siteProfile.summary}
                </p>
              </div>

              <div className="site-home__chip-row">
                {siteProfile.focusAreas.map((area) => (
                  <span className="site-chip site-chip--violet" key={area}>
                    {area}
                  </span>
                ))}
              </div>
            </section>

            <section className="site-shell__sidebar-section">
              <div className="site-shell__widget-list">
                {shellMetrics.map((metric) => (
                  <article className="site-shell__widget-row" key={metric.label}>
                    <div className="site-shell__widget-row-header">
                      <span className="site-shell__widget-row-label">
                        {metric.label}
                      </span>
                      <span className="site-shell__metric-value">
                        {metric.value}
                      </span>
                    </div>
                    <p className="site-shell__body-copy">{metric.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <ShellQuickLaunches />

            <nav className="site-shell__sidebar-links">
              {shellLinks.map((item) => (
                <a
                  className="site-shell__sidebar-link"
                  href={item.href}
                  key={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="site-shell__statusbar">
              <span>signal:{siteProfile.signalStrength}</span>
              <span>timezone:{siteProfile.timezone}</span>
            </div>
          </aside>

          <Window className="site-shell__window site-motion-enter site-motion-enter--2">
            <ShellWindowHeader />
            <WindowBody className="site-shell__window-body">{children}</WindowBody>
          </Window>

          <ShellRail />
        </div>
      </div>
      <PortfolioTaskbar />
    </div>
  );
}
