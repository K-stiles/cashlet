
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { faqData } from "@/data/faq";

export default function FAQsFour() {

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-7xl">
          <Accordion
            type="single"
            collapsible
            className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
          >
            {faqData.map((item) => {
              const faqItem = {
                ...item,
                id: item.question.toLowerCase().replace(/\s+/g, "-"),
              };
              return (
                <div className="group w-full" key={faqItem.id}>
                  <AccordionItem
                    value={faqItem.id}
                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                      {faqItem.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base">{faqItem.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                </div>
              );
            })}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            Can't find what you're looking for? Contact our{" "}
            <Link to="#" className="text-primary font-medium hover:underline">
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
