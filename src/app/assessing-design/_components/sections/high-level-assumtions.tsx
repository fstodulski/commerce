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
  images?: string[];
};

const content: Item[] = [
  {
    question: "Design Consistency",
    answer:
      "Designs are aligned with the overall brand and user experience goals.",
  },
  {
    question: "Static Mockups",
    answer:
      "Designs are provided as static mockups; interactive elements will need further refinement.",
  },
  {
    question: "Product Images",
    answer:
      "Assume all product images are provided by the client. Images are prepared in size and extensions variants like .png, .jpg, .webp. They are well optimized for the web. They are server from CDN and cached for a long time.",
  },
  {
    question: "SEO Optimization",
    answer:
      "Things related to SEO optimization are out of scope for this assessment. However, It need to be mentioned and considered during the design process. Things like: title, description, alt text, meta tags, etc. Structure of product page html, urls, ld+json schema should be provided by the client or dedicated SEO team. ",
  },
  {
    question: "Product Page Accesibility",
    answer:
      "Product information is available via seo-friendly (human-readable) urls like 'slug' or 'id'. Response is cached for a long time.",
  },
  {
    question: "Product Page Content",
    answer:
      "Designs are prepared based on the (possibly) real content. No Lorem Ipsum is used. Client understands that the desired outcome might be different from the initial design (large/short text, etc.)",
  },
];

export const HighLevelAssumptionsSection = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">High Level Assumptions</h3>
        <h4 className="text-muted-foreground">
          For the assessment purposes I will use the following assumptions:
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
