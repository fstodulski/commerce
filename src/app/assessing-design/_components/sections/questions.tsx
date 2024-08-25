import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, Section } from "@/lib/ui/craft";
import Image from "next/image";

type Item = {
  question: string;
  answer: string;
  link?: string;
  images?: string[];
};

const content: Item[] = [
  {
    question: "Tables and bigger screens",
    answer:
      "Current design is missing design for tables and bigger screens (bigger than 1400). It's important to consider this in the design process. Tables and bigger screens might require some additional logic, different layout, etc.",
  },
  {
    question: "Lack of consistency",
    answer:
      "There are differents between currency visible in the product page header and in the product details. It's important that both are consisten. It might create unnecessary confusion for the developer",
    images: ["/header_currency.png", "/product_currency.png"],
  },
  {
    question: "More colours?",
    answer:
      "The design doesn not consider the possibility of having more colours per product. It's important to consider this in the design process. It might need some additional logic, different layout, etc.",
    images: ["/colours.png"],
  },
  {
    question: "Behaviour of the product details tabs.",
    answer:
      "There are many different approaches for the designed behaviour of the product details tabs. CSS only (opacity), dynamicly loaded (lazy loading) or url state (query params). Based on answers from client and SEO tema (they are also imporant), we will be able to select best approach.",
    images: ["/product_tabs.png"],
  },
];

export const QuestionsSection = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Questions</h3>
        <h4 className="text-muted-foreground">
          Things I might need to ask design team or client itself.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="grid grid-cols-1 gap-2 text-base md:w-3/4">
                  <span>{item.answer}</span>

                  {item.images &&
                    item?.images?.length > 0 &&
                    item.images?.map((image, index) => (
                      <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={index}
                        className="not-prose relative flex h-96 w-full overflow-hidden rounded-lg border"
                      >
                        <Image
                          src={image}
                          width={400}
                          height={400}
                          alt="placeholder"
                          className="fill w-full object-cover"
                        />
                      </div>
                    ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};
