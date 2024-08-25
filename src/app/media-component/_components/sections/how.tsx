// React and Next.js imports

// UI component imports

import { Container, Section } from "@/lib/ui/craft";
import Balancer from "react-wrap-balancer";
// Asset imports

export const HowSection = () => {
  return (
    <Section>
      <Container className="grid items-stretch">
        <h3>How?</h3>
        <p className="text-muted-foreground">
          <Balancer>
            Instead providing hermetic components I decided to go with
            block/composition pattern. This way I can provide all the
            functionality I need without having to worry about the
            implementation details. I also can easily reuse the components in
            other projects.
          </Balancer>
        </p>
        <div className="not-prose my-8 flex items-center gap-2">
          <pre className="not-prose">
            <code className="not-prose" lang="tsx">
              {`<MediaComponent 
  imgSrc={imgSrc}
  videoSrc={videoSrc} 
  onVideoPlay={onVideoPlay} 
  onVideoPause={onVideoPause} 
  onVideoEnded={onVideoEnded} 
  />
              `}
            </code>
          </pre>
        </div>

        <p className="text-muted-foreground">
          <Balancer>
            Keep components as simple as possible with as little of abstraction
            as possible. Media is divided between 3 main components: Media.Root,
            Media.Image, Media.Video.
          </Balancer>
        </p>

        <p className="text-muted-foreground">
          <Balancer>
            More components might seem to be overkill but I think it's worth it
            to have functionality spread across multiple components. This way
            developer can use them as LEGO blocks and compose them to create the
            desired UI.
          </Balancer>
        </p>
      </Container>
    </Section>
  );
};
