import Link from "next/link";

import { getExplorerHref, type ProjectFilter } from "@/lib/projects-explorer";
import { Button } from "@/lib/pastel-retroware";

type ProjectSelectionButtonProps = {
  projectRepo: string;
  selected: boolean;
  activeFilter: ProjectFilter;
};

export function ProjectSelectionButton({
  projectRepo,
  selected,
  activeFilter,
}: ProjectSelectionButtonProps) {
  return (
    <Button asChild variant={selected ? "primary" : "ghost"}>
      <Link href={getExplorerHref(activeFilter, projectRepo)} scroll={false}>
        {selected ? "Selected" : "Inspect"}
      </Link>
    </Button>
  );
}
