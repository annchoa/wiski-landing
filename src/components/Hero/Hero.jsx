import { useTranslation } from "react-i18next";
import Button from "~/components/ui/Button.jsx";
import africa from "~/assets/photos/africa.png";
import styles from "./Hero.module.css";

// The five palette dots under the CTA — a literal statement of the brand
// colors. Kept as data so the set is easy to reorder or extend.
const PALETTE_DOTS = [
  "var(--color-orange)",
  "var(--color-blue)",
  "var(--color-yellow)",
  "var(--color-cream)",
  "var(--color-text-muted)",
];

export default function Hero({ onCtaClick }) {
  const { t } = useTranslation();
  const headlineLines = t("hero.headline").split("\n");

  return (
    <section className={styles.hero} id="top">
      <div >
        <img src={africa} alt="" className={`${styles.photo} ${styles.photoA}`} />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>{t("hero.eyebrow")}</p>
        <h1 className={styles.headline}>
          {headlineLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < headlineLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <Button onClick={onCtaClick}>{t("hero.cta")}</Button>
        <div className={styles.dots} aria-hidden="true">
          {PALETTE_DOTS.map((color) => (
            <span key={color} className={styles.dot} style={{ background: color }} />
          ))}
        </div>
      </div>
    </section>
  );
}
