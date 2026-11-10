import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { PHOTOBOOK_EDITOR_URL } from "@/config";

export function FinalCta() {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="final-cta-title"
      className="flex flex-col items-center gap-8 bg-secondary px-6 py-16 text-center text-secondary-foreground md:py-24"
    >
      <h2
        id="final-cta-title"
        className="max-w-3xl text-balance font-heading text-[32px] leading-[1.1] font-bold text-foreground md:text-5xl"
      >
        {t("finalCta.headline")}
      </h2>
      <Button asChild size="lg" className="h-[54px] w-full px-8 text-lg font-semibold md:w-auto">
        <a href={PHOTOBOOK_EDITOR_URL}>{t("finalCta.cta")}</a>
      </Button>
    </section>
  );
}
