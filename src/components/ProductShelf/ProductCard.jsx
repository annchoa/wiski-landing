import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "~/components/ui/Button.jsx";
import styles from "./ProductCard.module.css";

const BADGE_COLOR_BY_ID = {
  ruta: "var(--color-blue)",
  momento: "var(--color-orange)",
};

export default function ProductCard({ product, image }) {
  const { t } = useTranslation();
  const [added, setAdded] = useState(false);

  return (
    <article className={styles.card}>
      <span
        className={styles.badge}
        style={{ background: BADGE_COLOR_BY_ID[product.id] ?? "var(--color-blue)" }}
      >
        {product.badge}
      </span>

      <img src={image} alt="" className={styles.image} />

      <div className={styles.body}>
        <div className={styles.heading}>
          <h3 className={styles.title}>{product.title}</h3>
          <span className={styles.price}>{product.price}</span>
        </div>
        <p className={styles.description}>{product.body}</p>
        <Button variant="secondary" className={styles.cta} onClick={() => setAdded(true)}>
          {added ? t("products.ctaAdded") : t("products.cta")}
        </Button>
      </div>
    </article>
  );
}
