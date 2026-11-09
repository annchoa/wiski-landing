import { useTranslation } from "react-i18next";
import heroBackground from "@/assets/hero-bw.png";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { PHOTOBOOK_EDITOR_URL } from "@/config";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-svh flex-col items-center justify-between overflow-hidden px-6 pt-32 pb-12 md:pt-36"
    >
      <img
        src={heroBackground}
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover object-bottom"
      />
      <img src={logo} alt={t("hero.logoAlt")} className="w-[220px] md:w-[353px]" />
      <div className="flex flex-col items-center gap-8 text-center">
        <h1
          id="hero-title"
          className="max-w-xl text-balance font-heading text-[32px] leading-[1.1] font-bold text-on-image md:text-[40px]"
        >
          {t("hero.headline")}
        </h1>
        <Button asChild size="lg" className="h-[54px] px-8 text-lg font-semibold">
          <a href={PHOTOBOOK_EDITOR_URL}>{t("hero.cta")}</a>
        </Button>
      </div>
    </section>
  );
}
