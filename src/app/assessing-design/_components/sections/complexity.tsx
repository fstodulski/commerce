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
    question: "Carousel with scrolling",
    answer:
      "Proposed by the design team carousel with product images that user can scroll through while scrolling down the page might be tricky to implement. It might require some additional logic like: snapping points, counting progress from scroll event.",
  },
  {
    question: "Add to cart flow",
    answer:
      "Different flows between mobile and desktop for 'add to cart'. Mobile implementation requires additional step: 'select size'. Also, while having drawer with sizes opened - use can display table of sizes (as additional drawe/modal opened above the drawer). Content inside of the table should be easy to scroll horizonally. ",
  },
  {
    question: "Product Top Bar with product informations",
    answer:
      "Suggested top bar with product informations is a important part of the design that needs to be carefully taken care of. It should responde to the users acions of scrolling and resizing the window.",
  },
  {
    question: "Mobile design",
    answer:
      "Unfortunately, the design for a mobile version is more complex and requires additional logic. Some part should be implemented differently which will require more time and effort. ",
  },
];

export const ComplexitySection = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Complexity</h3>
        <h4 className="text-muted-foreground">
          How complex it the design is? What are the main challanges?
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
