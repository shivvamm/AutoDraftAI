import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is AutoDraft free?",
    answer: "Yes! AutoDraft offers a free trial to help you get started.",
    value: "item-1",
  },
  {
    question: "How does AutoDraft detect important emails?",
    answer:
      "AutoDraft uses AI algorithms to analyze your email patterns and identifies messages that require your attention.",
    value: "item-2",
  },
  {
    question: "Can I edit the drafts created by AutoDraft?",
    answer:
      "Absolutely! You can review and edit any drafts before sending them.",
    value: "item-3",
  },
  {
    question: "Is my email data secure?",
    answer:
      "Yes, we prioritize your privacy and use encryption to protect your data.",
    value: "item-4",
  },
  {
    question: "What platforms does AutoDraft support?",
    answer:
      "AutoDraft is designed to work seamlessly with major email providers and is accessible via web and mobile.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
