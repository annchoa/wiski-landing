import { useTranslation } from "react-i18next";
import logo from "@/assets/logo-secondary.png";
import { CONTACT_EMAIL } from "@/config";

// TODO: point these links to the real legal pages.
const LEGAL_LINKS = [
  { key: "terms", href: "#" },
  { key: "privacy", href: "#" },
] as const;

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary px-6 py-12 text-secondary md:py-16">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-16">
          <div className="flex flex-col gap-4 md:w-80">
            <img src={logo} alt={t("hero.logoAlt")} className="w-40" />
            <p>{t("footer.tagline")}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold">{t("footer.legal")}</h2>
            {LEGAL_LINKS.map(({ key, href }) => (
              <a key={key} href={href} className="opacity-80 hover:opacity-100">
                {t(`footer.${key}`)}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold">{t("footer.contact")}</h2>
            <a href={`mailto:${CONTACT_EMAIL}`} className="opacity-80 hover:opacity-100">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <hr className="border-secondary/20" />
        <p className="text-sm opacity-70">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
