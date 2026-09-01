import { useTranslation } from "react-i18next";
import ReviewCard from "./ReviewCard.jsx";
import styles from "./Reviews.module.css";

export default function Reviews() {
  const { t } = useTranslation();
  const reviews = t("reviews.items", { returnObjects: true });

  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{t("reviews.heading")}</h2>
        <div className={styles.grid}>
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
