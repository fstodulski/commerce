import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type MediaRootProps = {
  className?: string;
  children: ReactNode;
};
export const MediaRoot = ({ className, children }: MediaRootProps) => {
  return (
    <figure className={cn("relative flex overflow-hidden", className)}>
      {children}
    </figure>
  );
};
