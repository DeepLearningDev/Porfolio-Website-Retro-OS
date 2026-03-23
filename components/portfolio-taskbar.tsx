"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { siteProfile } from "@/content/site";
import { siteRoutes, type SiteRoute } from "@/lib/site-navigation";
import {
  Badge,
  Separator,
  StatusStrip,
  Taskbar,
  TaskbarButton,
} from "@/lib/pastel-retroware";

type PortfolioTaskbarProps = {
  activeRoute: SiteRoute;
};

function getRouteIndex(route: SiteRoute) {
  return siteRoutes.findIndex((item) => item.href === route.href);
}

function formatClock(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

export function PortfolioTaskbar({ activeRoute }: PortfolioTaskbarProps) {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(() => formatClock(new Date()));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(formatClock(new Date()));
    }, 30_000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <Taskbar className="site-shell__taskbar" aria-label="Portfolio taskbar">
      <div className="site-shell__taskbar-inner">
        <div className="site-shell__taskbar-group">
          {siteRoutes.map((route) => {
            const isActive = route.href === activeRoute.href;

            return (
              <TaskbarButton
                active={isActive}
                key={route.href}
                indicator={<span className="site-shell__taskbar-dot" />}
                onClick={() => router.push(route.href)}
              >
                <span className="site-shell__taskbar-label">{route.label}</span>
              </TaskbarButton>
            );
          })}
        </div>

        <Separator className="site-shell__taskbar-separator" orientation="vertical" />

        <div className="site-shell__taskbar-group site-shell__taskbar-group--meta">
          <TaskbarButton onClick={() => window.open("/resume/kaleb-white-resume.pdf", "_blank", "noopener,noreferrer")}>
            <span className="site-shell__taskbar-label">Resume</span>
          </TaskbarButton>

          <StatusStrip className="site-shell__taskbar-status">
            <span>route:{getRouteIndex(activeRoute) + 1}</span>
            <span>network:online</span>
            <span>signal:{siteProfile.signalStrength}</span>
          </StatusStrip>

          <div className="site-shell__taskbar-time">
            <Badge tone="accent" variant="outline">
              {currentTime}
            </Badge>
          </div>
        </div>
      </div>
    </Taskbar>
  );
}
