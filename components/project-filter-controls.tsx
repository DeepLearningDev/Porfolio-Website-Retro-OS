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
    <div className="project-filter__list">
      {filters.map((filter) => {
        const isActive = filter.id === activeFilter;

        return (
          <Link
            className={[
              "project-filter__item site-motion-hover",
              isActive ? "project-filter__item--active" : "",
            ].join(" ")}
            href={getExplorerHref(filter.id, null)}
            key={filter.id}
            scroll={false}
          >
            <div className="project-filter__item-body">
              <div className="project-filter__item-header">
                <p className="project-filter__item-title">{filter.label}</p>
                <span
                  className={`site-chip ${isActive ? "site-chip--accent" : "site-chip--violet"}`}
                >
                  {filter.count}
                </span>
              </div>
              <p className="project-filter__item-description">
                {filter.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
