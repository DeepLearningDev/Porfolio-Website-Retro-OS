import Link from "next/link";

import { getExplorerHref, type ProjectFilter } from "@/lib/projects-explorer";

type ProjectFilterOption = {
  id: ProjectFilter;
  label: string;
  description: string;
  count: number;
};

type ProjectFilterControlsProps = {
  activeFilter: ProjectFilter;
  filters: ProjectFilterOption[];
};

export function ProjectFilterControls({
  activeFilter,
  filters,
}: ProjectFilterControlsProps) {
  return (
    <div className="space-y-4">
      {filters.map((filter) => {
        const isActive = filter.id === activeFilter;

        return (
          <Link
            className={[
              "site-motion-hover w-full cursor-pointer rounded-none border border-[var(--pr-color-border-muted)] bg-[var(--pr-color-bg-canvas)] p-3 text-left transition",
              isActive ? "shadow-[0_0_0_1px_var(--pr-color-accent-violet)]" : "",
            ].join(" ")}
            href={getExplorerHref(filter.id, null)}
            key={filter.id}
            scroll={false}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold tracking-tight">{filter.label}</p>
                <span
                  className={`site-chip ${isActive ? "site-chip--accent" : "site-chip--violet"}`}
                >
                  {filter.count}
                </span>
              </div>
              <p className="text-sm leading-6 text-[var(--pr-color-text-secondary)]">
                {filter.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
