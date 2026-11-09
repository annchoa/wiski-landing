import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/content/faq";

export function Faq() {
  const { t } = useTranslation();

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-20 bg-muted px-6 py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-[800px] flex-col gap-10 md:gap-14">
        <h2
          id="faq-title"
          className="text-center font-heading text-[32px] leading-[1.1] font-bold md:text-[40px]"
        >
          {t("faq.title")}
        </h2>
        <Accordion type="single" collapsible defaultValue={FAQ_ITEMS[0]}>
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item} value={item} className="py-2">
              <AccordionTrigger className="text-lg font-semibold md:text-xl">
                {t(`faq.items.${item}.question`)}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground md:text-lg">
                {t(`faq.items.${item}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
