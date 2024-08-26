// React and Next.js

// Layout Components
import Balancer from "react-wrap-balancer";

import { Container, Section } from "@/lib/ui/craft";
// Icons
import { Code, Phone, Scissors } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Phone className="size-6" />,
    title: "Contact the client",
    description: "Reach out to the client. Ask for clarifications.",
  },
  {
    icon: <Scissors className="size-6" />,
    title: "Cut design into iterations",
    description:
      "Break down the design into smaller pieces. This will help you to focus on the most important aspects. Also will help to easily introduce to developers.",
  },
  {
    icon: <Code className="size-6" />,
    title: "Implementing the design",
    description:
      "Create epics/tickets and assign them to developers. This will help to keep the project organized.",
  },
];

export const ActionPointsSection = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Action points</Balancer>
          </h3>
          <h4 className="font-light text-2xl opacity-70">
            <Balancer>Okey, what next?</Balancer>
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
