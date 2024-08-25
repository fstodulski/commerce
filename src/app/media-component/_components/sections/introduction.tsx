// React and Next.js

// Layout Components
import Balancer from "react-wrap-balancer";

import { Container, Section } from "@/lib/ui/craft";
// Icons
import { ArrowDownUp, Box, Eye } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Box className="size-6" />,
    title: "Just like LEGO",
    description: "Built with blocks. Use only what you need.",
  },
  {
    icon: <Eye className="size-6" />,
    title: "Simple DX",
    description:
      "Media component is one of most commonly used component in the codebase. It has to be simple to use and easy to understand.",
  },
  {
    icon: <ArrowDownUp className="size-6" />,
    title: "Simple API",
    description: "Native API - as simple as possible.",
  },
];

export const IntroductionSection = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Introduction</Balancer>
          </h3>
          <h4 className="font-light text-2xl opacity-70">
            <Balancer>Media - simplified and easy</Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-primary text-xl">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
