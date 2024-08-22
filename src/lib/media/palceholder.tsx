import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type MediaPlaceholderProps = {
  className?: string;
  children?: ReactNode;
  visible: boolean;
};
export const MediaPlaceholder = ({
  className,
  visible,
  children,
}: MediaPlaceholderProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute flex h-full w-full items-center justify-center bg-gray-100 font-light text-xs opacity-0 dark:bg-neutral-800",
        className,
        {
          "opacity-100": visible,
        },
      )}
    >
      {children ?? "Media is loading..."}
    </div>
  );
};
