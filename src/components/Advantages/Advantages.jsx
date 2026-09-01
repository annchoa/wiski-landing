import { useTranslation } from "react-i18next";
import styles from "./Advantages.module.css";

export default function Advantages() {
  const { t } = useTranslation();
  const items = t("advantages.items", { returnObjects: true });

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{t("advantages.heading")}</h2>
        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
