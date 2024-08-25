// React and Next.js

// Layout Components
import Balancer from "react-wrap-balancer";

import { Container, Section } from "@/lib/ui/craft";
// Icons
import { BarChart, Eye, Flag } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Eye className="size-6" />,
    title: "Overview the task",
    description: "Evaluating PDP designs for implementation readiness.",
  },
  {
    icon: <BarChart className="size-6" />,
    title: "Importance of the PDP in e-commerce",
    description:
      "The PDP is crucial for driving conversions and enhancing user experience.",
  },
  {
    icon: <Flag className="size-6" />,
    title: "Goals of the assessment",
    description:
      "Identify actionable items, highlight areas needing special attention, and propose solutions.",
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
            <Balancer>
              Optimizing PDPs for Effective E-Commerce Implementation{" "}
            </Balancer>
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
