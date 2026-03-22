"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { siteProfile, shellLinks, shellMetrics } from "@/content/site";
import {
  Badge,
  Button,
  Panel,
  Sidebar,
  StatusStrip,
  Window,
  WindowBody,
  WindowControls,
  WindowHeader,
} from "@/lib/pastel-retroware";
import { getActiveRoute, siteRoutes } from "@/lib/site-navigation";

type PortfolioShellProps = {
  children: ReactNode;
};

export function PortfolioShell({ children }: PortfolioShellProps) {
  const pathname = usePathname();
  const activeRoute = getActiveRoute(pathname);

  return (
    <div className="site-shell">
      <div aria-hidden className="site-shell__ambient" />
      <div className="site-shell__frame">
        <Panel
          asChild
          className="site-shell__topbar"
          padding="sm"
          tone="elevated"
        >
          <header>
            <div className="flex items-center gap-4">
              <Link className="site-shell__brand" href="/">
                {siteProfile.alias}
              </Link>
              <Badge tone="accent" variant="outline">
                {siteProfile.status}
              </Badge>
            </div>

            <nav
              aria-label="Primary"
              className="flex flex-wrap items-center justify-end gap-2"
            >
              {siteRoutes.map((route) => {
                const isActive = route.href === activeRoute.href;

                return (
                  <Button
                    asChild
                    className="min-w-28"
                    key={route.href}
                    variant={isActive ? "secondary" : "ghost"}
                  >
                    <Link aria-current={isActive ? "page" : undefined} href={route.href}>
                      {route.label}
                    </Link>
                  </Button>
                );
              })}
            </nav>
          </header>
        </Panel>

        <div className="site-shell__workspace">
          <Sidebar
            className="site-shell__sidebar"
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

          <Window className="site-shell__window">
            <WindowHeader
              status={
                <Badge tone="success" variant="subtle">
                  shell.ready
                </Badge>
              }
              subtitle={activeRoute.description}
              title={activeRoute.windowTitle}
            >
              <WindowControls>
                <span aria-hidden className="site-shell__control site-shell__control--cyan" />
                <span aria-hidden className="site-shell__control site-shell__control--violet" />
                <span aria-hidden className="site-shell__control site-shell__control--pink" />
              </WindowControls>
            </WindowHeader>

            <WindowBody className="site-shell__window-body">{children}</WindowBody>
          </Window>
        </div>
      </div>
    </div>
  );
}
