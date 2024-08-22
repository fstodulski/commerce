import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type MediaHoverCaptionProps = {
  className?: string;
  children?: ReactNode;
};
export const MediaHoverCaption = ({
  className,
  children,
}: MediaHoverCaptionProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 left-0 z-20 flex h-full w-full items-end bg-gradient-to-b from-gray-50/0 via-gray-300/20 to-gray-700/90 p-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
};
