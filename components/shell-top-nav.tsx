"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

import { Button } from "@/lib/pastel-retroware";
import { siteRoutes } from "@/lib/site-navigation";

function ShellTopNavComponent() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="site-shell__topbar-nav">
      {siteRoutes.map((route) => {
        const isActive =
          route.href === "/"
            ? pathname === "/"
            : pathname?.startsWith(route.href);

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
  );
}

export const ShellTopNav = memo(ShellTopNavComponent);
