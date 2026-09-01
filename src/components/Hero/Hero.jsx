import { useTranslation } from "react-i18next";
import Button from "../ui/Button.jsx";
import photo02 from "../../assets/photos/photo-02.jpg";
import photo04 from "../../assets/photos/photo-04.jpg";
import photo05 from "../../assets/photos/photo-05.jpg";
import photo06 from "../../assets/photos/photo-06.jpg";
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
      <div className={styles.collage}>
        <img src={photo04} alt="" className={`${styles.photo} ${styles.photoA}`} />
        <img src={photo02} alt="" className={`${styles.photo} ${styles.photoB}`} />
        <img src={photo05} alt="" className={`${styles.photo} ${styles.photoC}`} />
        <img src={photo06} alt="" className={`${styles.photo} ${styles.photoD}`} />
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
