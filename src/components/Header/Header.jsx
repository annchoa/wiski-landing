import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.jsx";
import logo from "../../assets/logo-wiski-yellow.png";
import userIcon from "../../assets/icons/user.svg";
import cartIcon from "../../assets/icons/shopping-cart-simple.svg";
import styles from "./Header.module.css";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = t("nav.links", { returnObjects: true });

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logoLink} onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Wiski Photobook" className={styles.logo} />
        </a>

        <button
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">{t("nav.menu")}</span>
          <span className={styles.menuIcon} aria-hidden="true" />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        >
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link}>
                <a href="#" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.navFooter}>
            <LanguageSwitcher />
          </div>
        </nav>

        <div className={styles.icons}>
          <button className={styles.iconButton} aria-label={t("nav.account")}>
            <img src={userIcon} alt="" aria-hidden="true" />
          </button>
          <button className={styles.iconButton} aria-label={t("nav.cart")}>
            <img src={cartIcon} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
