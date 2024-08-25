"use client";

import { bunny } from "@/lib/constants/shared.const";
import { Media } from "@/lib/media";
import { Container, Section } from "@/lib/ui/craft";
import Balancer from "react-wrap-balancer";

export const DifferentVersionsSection = () => {
  return (
    <>
      <Section>
        <Container className="grid items-stretch">
          <h3>
            Different versions of the asset for desktop and mobile devices.
          </h3>
          <p className="text-muted-foreground">
            <Balancer>
              "A very common need is ability to provide different versions of
              the asset for desktop and mobile devices. Your API should allow
              for that. Take into account that Media could render video for
              Desktop and Image for mobile devices"
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
                autoPlay={false}
                className="w-full"
              />
            </Media.Root>
          </div>
          <span>Resize screen</span>
        </Container>
      </Section>
    </>
  );
};
