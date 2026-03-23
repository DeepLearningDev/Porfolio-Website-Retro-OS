"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";

import { Button } from "@/lib/pastel-retroware";

type ProjectSelectionButtonProps = {
  projectRepo: string;
  selected: boolean;
};

export function ProjectSelectionButton({
  projectRepo,
  selected,
}: ProjectSelectionButtonProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Button
      onClick={() => {
        const nextParams = new URLSearchParams(searchParams.toString());
        nextParams.set("project", projectRepo);

        startTransition(() => {
          router.replace(
            nextParams.size ? `${pathname}?${nextParams.toString()}` : pathname,
            { scroll: false }
          );
        });
      }}
      variant={selected ? "primary" : "ghost"}
    >
      {selected ? "Selected" : "Inspect"}
    </Button>
  );
}
