import Link from "next/link";

import { shellQuickLaunches } from "@/content/shell";

export function ShellQuickLaunches() {
  return (
    <div className="site-shell__desktop-links">
      {shellQuickLaunches.map((item) => {
        const isExternal = item.href.startsWith("http");

        const content = (
          <>
            <span aria-hidden className="site-shell__desktop-icon-glyph" />
            <span className="site-shell__desktop-link-copy">
              <span className="site-shell__desktop-link-title">{item.label}</span>
              <span className="site-shell__desktop-link-meta">{item.description}</span>
            </span>
          </>
        );

        if (isExternal) {
          return (
            <a
              className="site-shell__desktop-link"
              href={item.href}
              key={item.href}
              rel="noreferrer"
              target="_blank"
            >
              {content}
            </a>
          );
        }

        return (
          <Link className="site-shell__desktop-link" href={item.href} key={item.href}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}
