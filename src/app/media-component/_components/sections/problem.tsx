// React and Next.js imports

// UI component imports

import { Container, Section } from "@/lib/ui/craft";
import Balancer from "react-wrap-balancer";
// Asset imports

export const ProblemSection = () => {
  return (
    <Section>
      <Container className="grid items-stretch">
        <h3>DX: How to use Media component</h3>
        <p className="text-muted-foreground">
          <Balancer>
            Take into consideration that Media component is one of most commonly
            used component in the codebase and focus on it’s DX for common use
            cases
          </Balancer>
        </p>
        <div className="not-prose my-8 flex items-center gap-2">
          <pre className="not-prose">
            <code className="not-prose" lang="tsx">
              {`<Media.Root className="w-40">
  <Media.Image
    hoverCaption={imageHoverCaption()}
    className=""
    width={160}
    height={160}
    src={pic1}
    alt="Picture 1"
  />
</Media.Root>
`}
            </code>
          </pre>
        </div>

        <p className="text-muted-foreground">
          <Balancer>
            Easy usage of Media component is to wrap image or video with
            Media.Root component. Media.Root component is responsible for
            wrapping the image or video with necessary styles and provide a way
            to control the image or video playback.
          </Balancer>
        </p>
      </Container>
    </Section>
  );
};
