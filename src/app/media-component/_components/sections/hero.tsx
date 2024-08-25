// React and Next.js imports
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Media } from "@/lib/media";
import { Container, Section } from "@/lib/ui/craft";
import { ArrowRight } from "lucide-react";
// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports

export const HeroSection = () => {
  return (
    // Asset imports

    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="/media-component">
              Yet another react library
              <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
            <Balancer>Media Component API Task</Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              A Comprehensive Guide to Building and Implementing a Flexible
              Media Rendering Solution
            </Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Media.Root className="h-full w-full object-cover object-bottom">
              <Media.Video
                hoverCaption={
                  <span className="p-4 font-light text-4xl text-white md:w-3/4">
                    <span className="md:hidden">And now Im a image.</span>
                    <span className="hidden md:block">
                      Hello there - look! I'm a video taken from you page
                    </span>
                  </span>
                }
                thumbnail={{
                  src: "/placeholder.png",
                  alt: "placeholder",
                  width: 1920,
                  height: 1080,
                  className: "h-full w-full object-cover",
                }}
                src="https://stream.mux.com/59G95ITFNCNw5g3s1PeaFfomJOFarUJBNlUVl800QFIM/high.mp4"
                width={1920}
                height={1080}
              />
            </Media.Root>
          </div>
        </div>
      </Container>
    </Section>
  );
};
