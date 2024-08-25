import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, Section } from "@/lib/ui/craft";

type Item = {
  question: string;
  answer: string;
  link?: string;
};

const content: Item[] = [
  {
    question: "Assets",
    answer:
      "In the e-commerce assets are the most important part of the design. They are used to communicate the brand and product. Image or video assets should be displayed in the correct resolution, ratio and format. Caching it's important in this case. All assets should be served from CDN.",
  },
  {
    question: "Localization",
    answer:
      "Page should provide solution to change language and currency visible on the product page. It should be possible to switch language and currency without page refresh. Page should be translated to all supported languages and currencies. All translations should be provided by the client.",
  },
  {
    question: "It's all about the images",
    answer:
      "To provide the best experience for the user, all places where images are used should be propared to diplasy a placeholder or any other form of visual loading state. It's important to consider this in the design process.",
  },
];

export const PinPointsSection = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Pinpoints</h3>
        <h4 className="text-muted-foreground">
          Areas that need special attention during the design and implementation
          process.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};
