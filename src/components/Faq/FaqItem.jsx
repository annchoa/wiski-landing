import { useState } from "react";
import styles from "./FaqItem.module.css";

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button
        className={styles.trigger}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{question}</span>
        <span className={`${styles.icon} ${open ? styles.iconOpen : ""}`} aria-hidden="true" />
      </button>
      {open && <p className={styles.answer}>{answer}</p>}
    </div>
  );
}
