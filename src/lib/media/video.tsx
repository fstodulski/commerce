"use client";

import { MediaHoverCaption } from "@/lib/media/hover-caption";
import { MediaImage, type MediaImageProps } from "@/lib/media/image";
import { MediaPlaceholder } from "@/lib/media/palceholder";
import { cn } from "@/lib/utils";
import {
  type ReactNode,
  type VideoHTMLAttributes,
  useRef,
  useState,
} from "react";

export type MediaVideoProps<T> = {
  className?: string;
  children?: ({
    videoRef,
  }: {
    videoRef: HTMLVideoElement;
  }) => ReactNode;
  hoverCaption?: ReactNode;
  mediaPlaceholder?: ReactNode;
  thumbnail: Pick<
    MediaImageProps<T>,
    "src" | "alt" | "width" | "height" | "className"
  >;
} & VideoHTMLAttributes<HTMLVideoElement>;

export const MediaVideo = <T,>({
  className,
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  children,
  hoverCaption,
  mediaPlaceholder,
  thumbnail,
  ...props
}: MediaVideoProps<T>) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <figure className={cn("group relative z-0 flex", className)}>
      {mediaPlaceholder && (
        <MediaPlaceholder visible={isLoading}>
          {mediaPlaceholder}
        </MediaPlaceholder>
      )}
      {thumbnail.src && (
        <MediaImage
          width={thumbnail.width}
          height={thumbnail.height}
          className={cn("sm:hidden", thumbnail.className)}
          hoverCaption={hoverCaption}
          src={thumbnail.src}
          alt="Video thumbnail"
        />
      )}

      <video
        ref={ref}
        className="z-10 hidden h-full w-full object-cover sm:flex"
        {...props}
        loop
        muted
        autoPlay={autoPlay}
        onLoad={onLoad}
        controls={controls}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      {ref.current &&
        children?.({
          videoRef: ref.current,
        })}

      <MediaHoverCaption>{hoverCaption}</MediaHoverCaption>
    </figure>
  );
};
