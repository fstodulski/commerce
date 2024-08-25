"use client";

// React and Next.js imports

// UI component imports

import { bunny } from "@/lib/constants/shared.const";
import { Media } from "@/lib/media";
import { Container, Section } from "@/lib/ui/craft";
import SyntaxHighlighter from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/esm/styles/prism/dracula";
import Balancer from "react-wrap-balancer";
// Asset imports

export const OneForAllSection = () => {
  return (
    <>
      <Section>
        <Container className="grid items-stretch">
          <h3>One For All.</h3>
          <p className="text-muted-foreground">
            <Balancer>
              Media component should be able to handle content from different
              services (For example Sanity, Mux, Shopify or other).
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
          <p className="text-muted-foreground">
            <Balancer>
              Media.Video and Media.Image are generic components. They implment
              basic interface matching Video and Next Image Props but also they
              use rest of passed props. Instead of creating separate components
              for Sanity, Mux, etc, just use extenral page props and pass them.
            </Balancer>
          </p>
        </Container>

        <Container className="grid items-stretch">
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
            
            // Sanity props will be passed to the component NextImage
            type SanityImageProps = {
              options: {
                hotspot: boolean;
              }
            };

            <Media.Root className="w-full">
              <Media.Image<SanityImageProps> // << Here passing Sanity type
                src={imageSrc}
                autoPlay={false}
                className="w-full"
              />
            </Media.Root>
            `}
          </SyntaxHighlighter>
        </Container>
      </Section>
    </>
  );
};
