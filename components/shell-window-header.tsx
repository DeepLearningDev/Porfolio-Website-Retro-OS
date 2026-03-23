"use client";

import { usePathname } from "next/navigation";
import { memo } from "react";

import { Badge, WindowControls, WindowHeader } from "@/lib/pastel-retroware";
import { getActiveRoute } from "@/lib/site-navigation";

function ShellWindowHeaderComponent() {
  const pathname = usePathname();
  const activeRoute = getActiveRoute(pathname);

  return (
    <WindowHeader
      className="site-shell__window-header"
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
  );
}

export const ShellWindowHeader = memo(ShellWindowHeaderComponent);
