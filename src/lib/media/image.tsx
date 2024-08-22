"use client";

import { MediaHoverCaption } from "@/lib/media/hover-caption";
import { MediaPlaceholder } from "@/lib/media/palceholder";
import Image, { type ImageProps } from "next/image";
import { type ReactNode, useState } from "react";

export type MediaImageProps = {
  className?: string;
  hoverCaption?: ReactNode;
} & ImageProps;

export const MediaImage = ({
  className,
  hoverCaption,
  ...props
}: MediaImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  const onLoadStart = () => {
    setIsLoading(true);
  };

  return (
    <figure className="group bg-gray-100 dark:bg-neutral-800">
      <MediaPlaceholder visible={isLoading}>
        Image is loading...
      </MediaPlaceholder>
      <Image
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        className={className}
        {...props}
      />

      <MediaHoverCaption>{hoverCaption}</MediaHoverCaption>
    </figure>
  );
};
