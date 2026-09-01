import { useTranslation } from "react-i18next";
import FaqItem from "./FaqItem.jsx";
import styles from "./Faq.module.css";

export default function Faq() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true });

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{t("faq.heading")}</h2>
        <div className={styles.list}>
          {items.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
