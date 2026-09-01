import styles from "./StarRating.module.css";

const STAR_PATH =
  "M10 1.5l2.35 5.06 5.4.63-4.02 3.73 1.1 5.38L10 13.6l-4.83 2.7 1.1-5.38-4.02-3.73 5.4-.63z";

/** Five-star rating, drawn with one inline SVG so no icon asset is needed. */
export default function StarRating({ count = 5 }) {
  return (
    <div className={styles.row} aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <svg key={index} viewBox="0 0 20 20" width="16" height="16" className={styles.star}>
          <path d={STAR_PATH} fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}
