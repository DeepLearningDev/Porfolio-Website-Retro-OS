import Link from "next/link";
import type { ReactNode } from "react";

import { siteProfile, shellLinks, shellMetrics } from "@/content/site";
import {
  Badge,
  Button,
  Panel,
  Separator,
  Sidebar,
  StatusStrip,
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
        <Panel
          asChild
          className="site-shell__topbar site-motion-enter"
          padding="sm"
          tone="elevated"
        >
          <header>
            <div className="site-shell__topbar-chrome">
              <div className="site-shell__brand-row">
                <Link className="site-shell__brand" href="/">
                  {siteProfile.alias}
                </Link>
                <Badge tone="accent" variant="outline">
                  {siteProfile.status}
                </Badge>
              </div>

              <ShellTopNav />
            </div>
          </header>
        </Panel>

        <div className="site-shell__desktop">
          <Sidebar
            className="site-shell__sidebar site-motion-enter site-motion-enter--1"
            footer={
              <StatusStrip className="justify-between">
                <span>signal:{siteProfile.signalStrength}</span>
                <span>timezone:{siteProfile.timezone}</span>
              </StatusStrip>
            }
            subtitle={siteProfile.role}
            title={siteProfile.name}
          >
            <Panel className="space-y-4" padding="sm" tone="elevated">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--pr-color-text-accent)]">
                  Operating Profile
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--pr-color-text-secondary)]">
                  {siteProfile.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {siteProfile.focusAreas.map((area) => (
                  <Badge key={area} tone="violet" variant="outline">
                    {area}
                  </Badge>
                ))}
              </div>
            </Panel>

            <div className="grid gap-3">
              {shellMetrics.map((metric) => (
                <Panel className="space-y-2" key={metric.label} padding="sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pr-color-text-secondary)]">
                      {metric.label}
                    </span>
                    <span className="text-sm font-semibold text-[var(--pr-color-text-primary)]">
                      {metric.value}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-[var(--pr-color-text-secondary)]">
                    {metric.detail}
                  </p>
                </Panel>
              ))}
            </div>

            <Separator />

            <ShellQuickLaunches />

            <div className="grid gap-2">
              {shellLinks.map((item) => (
                <Button asChild className="justify-start" key={item.href} variant="ghost">
                  <a href={item.href} rel="noreferrer" target="_blank">
                    {item.label}
                  </a>
                </Button>
              ))}
            </div>
          </Sidebar>

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
