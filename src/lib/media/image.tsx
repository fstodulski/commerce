"use client";

import { MediaHoverCaption } from "@/lib/media/hover-caption";
import { MediaPlaceholder } from "@/lib/media/palceholder";
import Image, { type ImageProps } from "next/image";
import { type ReactNode, useState } from "react";

export type MediaImageProps<T> = {
  className?: string;
  hoverCaption?: ReactNode;
  mediaPlaceholder?: ReactNode;
} & ImageProps &
  T;

export const MediaImage = <T,>({
  className,
  hoverCaption,
  mediaPlaceholder,
  ...props
}: MediaImageProps<T>) => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  const onLoadStart = () => {
    setIsLoading(true);
  };

  return (
    <figure className="group bg-gray-100 dark:bg-neutral-800">
      {mediaPlaceholder && (
        <MediaPlaceholder visible={isLoading}>
          {mediaPlaceholder}
        </MediaPlaceholder>
      )}

      <Image
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        className={className}
        {...props}
      />

      {hoverCaption && <MediaHoverCaption>{hoverCaption}</MediaHoverCaption>}
    </figure>
  );
};
