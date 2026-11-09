import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    nonExplicitSupportedLngs: true,
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "wiski-language",
      caches: ["localStorage"],
    },
    resources: { es: { translation: es }, en: { translation: en } },
    interpolation: { escapeValue: false },
  });

export default i18n;
