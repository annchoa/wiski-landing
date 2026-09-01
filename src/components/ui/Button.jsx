import styles from "./Button.module.css";

/**
 * Shared button. `variant` picks the visual style so every call site stays
 * declarative instead of re-styling buttons by hand.
 */
export default function Button({ variant = "primary", className = "", children, ...rest }) {
  const variantClass = variant === "secondary" ? styles.secondary : styles.primary;
  return (
    <button className={`${styles.button} ${variantClass} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
