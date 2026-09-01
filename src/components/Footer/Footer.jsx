import { useTranslation } from "react-i18next";
import logo from "~/assets/logo-wiski.png";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();
  const legalLinks = t("footer.legal", { returnObjects: true });

  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Wiski Photobook" className={styles.logo} />

      <ul className={styles.legalList}>
        {legalLinks.map((label) => (
          <li key={label}>
            <a href="#" className={styles.legalLink}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <p className={styles.copyright}>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
    </footer>
  );
}
