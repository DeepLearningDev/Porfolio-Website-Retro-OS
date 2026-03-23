"use client";

import { usePathname, useRouter } from "next/navigation";
import { memo } from "react";

import { TaskbarButton } from "@/lib/pastel-retroware";
import { siteRoutes } from "@/lib/site-navigation";

function TaskbarControlsComponent() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="site-shell__taskbar-group">
      {siteRoutes.map((route, index) => {
        const isActive =
          route.href === "/"
            ? pathname === "/"
            : pathname?.startsWith(route.href);

        return (
          <TaskbarButton
            active={isActive}
            key={route.href}
            indicator={<span className="site-shell__taskbar-dot" />}
            onClick={() => router.push(route.href)}
          >
            <span className="site-shell__taskbar-label">{route.label}</span>
            <span className="sr-only">route {index + 1}</span>
          </TaskbarButton>
        );
      })}

      <TaskbarButton
        onClick={() =>
          window.open("/resume/kaleb-white-resume.pdf", "_blank", "noopener,noreferrer")
        }
      >
        <span className="site-shell__taskbar-label">Resume</span>
      </TaskbarButton>
    </div>
  );
}

export const TaskbarControls = memo(TaskbarControlsComponent);
