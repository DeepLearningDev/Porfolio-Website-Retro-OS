"use client";

import { useRouter } from "next/navigation";
import { memo } from "react";

import { shellQuickLaunches } from "@/content/shell";
import { DesktopIcon } from "@/lib/pastel-retroware";

function ShellQuickLaunchesComponent() {
  const router = useRouter();

  return (
    <div className="grid gap-2">
      {shellQuickLaunches.map((item) => (
        <DesktopIcon
          description={item.description}
          icon={<span aria-hidden className="site-shell__desktop-icon-glyph" />}
          key={item.href}
          label={item.label}
          onClick={() => {
            if (item.href.startsWith("/")) {
              router.push(item.href);
              return;
            }

            window.open(item.href, "_blank", "noopener,noreferrer");
          }}
        />
      ))}
    </div>
  );
}

export const ShellQuickLaunches = memo(ShellQuickLaunchesComponent);
