# Points to cover:

## 1. DX: How to use Media component
"Take into consideration that Media component is one of most commonly used component in the codebase and focus on it’s DX for common use cases".

#### How?
Instead providing hermetic components I decided to go with block/composition pattern. This way I can provide all the functionality I need without having to worry about the implementation details. I also can easily reuse the components in other projects.

Keep components as simple as possible with as little of abstraction as possible. 

Media is divided between 3 main components:
- Media.Root
```tsx
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
```

- Media.Image
```tsx
export type MediaImageProps = {
  className?: string;
  hoverCaption?: ReactNode;
  mediaPlaceholder?: ReactNode;
} & ImageProps;

export const MediaImage = ({
  className,
  hoverCaption,
  mediaPlaceholder,
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

```

- Media Video
```tsx

export type MediaVideoProps = {
  className?: string;
  children?: ReactNode;
  hoverCaption?: ReactNode;
  mediaPlaceholder?: ReactNode;
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
  mediaPlaceholder,
  thumbnail,
  ...props
}: MediaVideoProps) => {
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
        onLoad={onLoad}
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
```

As you can see there are some additioanl components to use with Media component.


- MediaPlaceholder - used to display loading state of the Image/Video
```tsx
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
```

- MediaHoverCaption
```tsx
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
        "absolute top-0 left-0 z-20 flex h-full w-full items-end bg-gradient-to-b from-gray-50/0 via-gray-300/20 to-gray-700/90 p-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
};
```

More components might seem to be overkill but I think it's worth it to have functionality spread across multiple components. This way developer can use them as LEGO blocks and compose them to create the desired UI.

## 2. Control video playback externally
"Bonus: Consider a scenario where the Media component needs to control video playback externally, such as in a slider where the video only plays when visible on the screen. Determine how your API could support this functionality for occasional use."

#### How?
I did simply wrap native video element. Inherited all props and events. Developer can simply control playback externally via props and events.

```tsx
<Media.Video
  thumbnail={{
    src: bunny,
    alt: "Picture 1",
    width: 160,
    height: 160,
  }}
  className=""
  onPlay={() => console.log("play")}
  onPause={() => console.log("pause")}
  onEnded={() => console.log("ended")}
  hoverCaption={videoHoverCaption()}
/>
```

## 3. Pay/Pouse controls position
Using component rendering props I can easily control where the controls are positioned.

```tsx
     <Media.Video
          thumbnail={{
            src: bunny,
            alt: "Picture 1",
            width: 160,
            height: 160,
          }}
          autoPlay={isPlaying}
          className=""
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => console.log("ended")}
          hoverCaption={videoHoverCaption()}
        >
          {(ref) => (
            <Button
              size="icon"
              type="button"
              onClick={() =>
                isPlaying ? ref.current?.pause() : ref.current?.play()
              }
              className="absolute top-2 right-2 z-20"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </Button>
          )}
        </Media.Video>
        ```