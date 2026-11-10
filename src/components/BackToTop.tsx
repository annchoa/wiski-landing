import { ArrowUpIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// PROTOTYPE: desktop only. The hero fills one screen, so the arrow shows after one screen height.
export function BackToTop() {
  const { t } = useTranslation();
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const update = () => setPastHero(window.scrollY > window.innerHeight);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!pastHero) return null;

  return (
    <button
      type="button"
      aria-label={t("header.backToTop")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-8 bottom-8 z-40 hidden size-12 items-center justify-center rounded-full bg-secondary text-foreground shadow-lg transition-transform hover:-translate-y-1 md:flex"
    >
      <ArrowUpIcon aria-hidden className="size-6" weight="bold" />
    </button>
  );
}
