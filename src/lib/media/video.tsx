import { MediaHoverCaption } from "@/lib/media/hover-caption";
import { MediaImage, type MediaImageProps } from "@/lib/media/image";
import { cn } from "@/lib/utils";
import type { ReactNode, VideoHTMLAttributes } from "react";

export type MediaVideoProps = {
  className?: string;
  children?: ReactNode;
  hoverCaption?: ReactNode;
  thumbnail: Pick<MediaImageProps, "src" | "alt" | "width" | "height">;
} & VideoHTMLAttributes<HTMLVideoElement>;

export const MediaVideo = ({
  className,
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  children,
  hoverCaption,
  thumbnail,
  ...props
}: MediaVideoProps) => {
  return (
    <figure className={cn("group relative z-0 flex", className)}>
      {thumbnail.src && (
        <MediaImage
          width={thumbnail.width}
          height={thumbnail.height}
          className="sm:hidden"
          hoverCaption={hoverCaption}
          src={thumbnail.src}
          alt="Video thumbnail"
        />
      )}

      <video
        className="z-10 hidden h-full w-full object-cover sm:flex"
        {...props}
        loop
        muted
        autoPlay
        controls={controls}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      <MediaHoverCaption>{hoverCaption}</MediaHoverCaption>
    </figure>
  );
};
