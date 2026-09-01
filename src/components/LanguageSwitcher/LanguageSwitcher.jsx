import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const LANGUAGES = ["es", "en"];

/** Plain <select> so it stays keyboard- and screen-reader-friendly for free. */
export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  return (
    <label className={styles.wrapper}>
      <span className="visually-hidden">{t("language.label")}</span>
      <select
        className={styles.select}
        value={i18n.resolvedLanguage}
        onChange={(event) => i18n.changeLanguage(event.target.value)}
      >
        {LANGUAGES.map((code) => (
          <option key={code} value={code}>
            {t(`language.${code}`)}
          </option>
        ))}
      </select>
    </label>
  );
}
