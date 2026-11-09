import { CaretDownIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const LANGUAGES = ["es", "en"];

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative flex items-center">
      <select
        aria-label={t("header.language")}
        value={i18n.resolvedLanguage}
        onChange={(event) => i18n.changeLanguage(event.target.value)}
        className="cursor-pointer appearance-none bg-transparent py-1 pr-5 text-base font-medium"
      >
        {LANGUAGES.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      <CaretDownIcon aria-hidden className="pointer-events-none absolute right-0 size-4" />
    </div>
  );
}
