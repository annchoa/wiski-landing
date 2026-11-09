import { useTranslation } from "react-i18next";

const STEPS = ["choose", "upload", "personalize", "pay", "wait"] as const;

export function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="scroll-mt-20 bg-muted px-6 py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 md:gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            id="how-it-works-title"
            className="font-heading text-[32px] leading-[1.1] font-bold md:text-[40px]"
          >
            {t("howItWorks.title")}
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">{t("howItWorks.subtitle")}</p>
        </div>
        <ol className="grid gap-8 md:grid-cols-5">
          {STEPS.map((step, index) => (
            <li key={step} className="flex gap-4 md:flex-col">
              <span
                aria-hidden
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xl font-bold text-primary-foreground md:size-12"
              >
                {index + 1}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-xl font-bold md:text-[22px]">
                  {t(`howItWorks.steps.${step}.title`)}
                </h3>
                <p className="text-base text-muted-foreground">
                  {t(`howItWorks.steps.${step}.body`)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
