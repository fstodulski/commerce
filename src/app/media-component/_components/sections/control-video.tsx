"use client";

import { Button } from "@/components/ui/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/esm/styles/prism/dracula";

// React and Next.js imports

// UI component imports

import { bunny } from "@/lib/constants/shared.const";
import { Media } from "@/lib/media";
import { Container, Section } from "@/lib/ui/craft";
import { Pause, Play } from "lucide-react";
import { useState } from "react";
import Balancer from "react-wrap-balancer";
// Asset imports

export const ControlVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      <Section>
        <Container className="grid items-stretch">
          <h3>Control video playback externally</h3>
          <p className="text-muted-foreground">
            <Balancer>
              "Bonus: Consider a scenario where the Media component needs to
              control video playback externally, such as in a slider where the
              video only plays when visible on the screen. Determine how your
              API could support this functionality for occasional use."
            </Balancer>
          </p>
          <div className="not-prose my-8 flex items-center gap-2 overflow-hidden rounded-md">
            <Media.Root className="w-full">
              <Media.Video
                thumbnail={{
                  src: bunny,
                  alt: "Picture 1",
                  width: 160,
                  height: 160,
                }}
                autoPlay={isPlaying}
                className="w-full"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => console.log("ended")}
              >
                {(ref) => (
                  <Button
                    size="icon"
                    type="button"
                    onClick={() =>
                      isPlaying ? ref.current?.pause() : ref.current?.play()
                    }
                    className="absolute top-2 right-2 z-20 opacity-0 duration-300 ease-in-out group-hover:opacity-100"
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </Button>
                )}
              </Media.Video>
            </Media.Root>
          </div>
        </Container>

        <Container className="grid items-stretch">
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`<Media.Root className="w-full">
  <Media.Video
    thumbnail={{
      src: bunny,
      alt: "Picture 1",
      width: 160,
      height: 160,
    }}
    autoPlay={isPlaying}
    className="w-full"
    onPlay={() => setIsPlaying(true)}
    onPause={() => setIsPlaying(false)}
    onEnded={() => console.log("ended")}
  >
  {(ref) => (
    <Button
      size="icon"
      type="button"
      onClick={() =>
        isPlaying ? ref.current?.pause() : ref.current?.play()
      }
      className="absolute top-2 right-2 z-20 opacity-0 duration-300 ease-in-out group-hover:opacity-100"
    >
      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
    </Button>
  )}
  </Media.Video>
</Media.Root>
            `}
          </SyntaxHighlighter>
        </Container>
      </Section>
    </>
  );
};
