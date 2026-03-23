"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

import { siteRoutes } from "@/lib/site-navigation";

function TaskbarControlsComponent() {
  const pathname = usePathname();

  return (
    <div className="site-shell__taskbar-group">
      {siteRoutes.map((route, index) => {
        const isActive =
          route.href === "/"
            ? pathname === "/"
            : pathname?.startsWith(route.href);

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={`site-shell__taskbar-link${isActive ? " site-shell__taskbar-link--active" : ""}`}
            key={route.href}
            href={route.href}
          >
            <span className="site-shell__taskbar-dot" />
            <span className="site-shell__taskbar-label">{route.label}</span>
            <span className="sr-only">route {index + 1}</span>
          </Link>
        );
      })}

      <a
        className="site-shell__taskbar-link"
        href="/resume/kaleb-white-resume.pdf"
        rel="noreferrer"
        target="_blank"
      >
        <span className="site-shell__taskbar-dot" />
        <span className="site-shell__taskbar-label">Resume</span>
      </a>
    </div>
  );
}

export const TaskbarControls = memo(TaskbarControlsComponent);
