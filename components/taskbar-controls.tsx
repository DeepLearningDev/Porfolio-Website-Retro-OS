"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

import { siteRoutes } from "@/lib/site-navigation";

function TaskbarControlsComponent() {
  const pathname = usePathname();

  return (
    <nav className="site-shell__taskbar-apps" aria-label="Primary taskbar navigation">
      {siteRoutes.map((route, index) => {
        const isActive =
          route.href === "/"
            ? pathname === "/"
            : pathname?.startsWith(route.href);

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={`site-shell__taskbar-app${isActive ? " site-shell__taskbar-app--active" : ""}`}
            key={route.href}
            href={route.href}
          >
            <span aria-hidden="true" className="site-shell__taskbar-app-dot" />
            <span className="site-shell__taskbar-app-label">{route.label}</span>
            <span className="sr-only">route {index + 1}</span>
          </Link>
        );
      })}

      <a
        className="site-shell__taskbar-app"
        href="/resume/kaleb-white-resume.pdf"
        rel="noreferrer"
        target="_blank"
      >
        <span aria-hidden="true" className="site-shell__taskbar-app-dot" />
        <span className="site-shell__taskbar-app-label">Resume</span>
      </a>
    </nav>
  );
}

export const TaskbarControls = memo(TaskbarControlsComponent);
