"use client";

import { Container, Main, Section } from "@/lib/ui/craft";

// React and Next.js imports
import Link from "next/link";

import { Camera, Eye } from "lucide-react";
// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Button } from "@/components/ui/button";
import { Media } from "@/lib/media";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container className="flex flex-col items-center space-y-5 text-center">
          <Media.Root className="not-prose w-full overflow-hidden rounded-lg border">
            <Media.Image
              alt="placeholder"
              className=" mb-6 h-full object-cover md:mb-8 dark:invert"
              width={1920}
              height={1200}
              src="https://cdn.sanity.io/images/jtds2dzp/production/41acb82d21490bcd1cd6cc4b6ccbd9d986684d54-8192x5461.jpg?rect=20,0,8152,5461&w=2560&h=1715&q=75&auto=format"
            />
          </Media.Root>

          <h1 className="!mb-0">
            <Balancer>Hello there!</Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>Check out my solution for:</Balancer>
          </h3>
          <div className="not-prose mt-6 flex gap-2 md:mt-12">
            <Button asChild>
              <Link href="/media-component">
                <Camera className="mr-2" />
                Media Component
              </Link>
            </Button>
            <Button variant={"ghost"} asChild>
              <Link href="/assessing-design">
                <Eye className="mr-2" />
                Assessing Design
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </Main>
  );
}
