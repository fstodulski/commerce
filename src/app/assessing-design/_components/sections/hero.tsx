import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

// UI Components
import { Button } from "@/components/ui/button";

import { Media } from "@/lib/media";
import { Container, Section } from "@/lib/ui/craft";
// Assets

export const HeroSection = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center">
          <Button
            asChild
            className="not-prose mb-6 flex w-fit"
            size="sm"
            variant="outline"
          >
            <Link href="/assessing-design">
              Recruitment Task Article <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
          <h1 className="!mb-0">
            <Balancer>
              Assessing the Product Details Page (PDP) Designs
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              Providing a detailed solution for evaluating and preparing to
              implement new PDP designs from a client. This breakdown will
              include actionable items, key assumptions, and strategies to
              address areas of complexity, guiding the development team
              effectively
            </Balancer>
          </h3>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Media.Root className="h-full w-full object-cover object-bottom">
              <Media.Image
                className="not-prose h-full w-full object-cover object-bottom"
                src="/placeholder.png"
                width={1920}
                height={1080}
                alt="hero image"
              />
            </Media.Root>
          </div>
        </div>
      </Container>
    </Section>
  );
};
