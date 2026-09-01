import StarRating from "./StarRating.jsx";
import styles from "./ReviewCard.module.css";

function initialsFor(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ReviewCard({ review }) {
  return (
    <article className={styles.card}>
      <StarRating />
      <h3 className={styles.title}>{review.title}</h3>
      <p className={styles.body}>{review.body}</p>
      <div className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">
          {initialsFor(review.name)}
        </span>
        <div>
          <p className={styles.name}>{review.name}</p>
          <p className={styles.date}>{review.date}</p>
        </div>
      </div>
    </article>
  );
}
