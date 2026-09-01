import { useTranslation } from "react-i18next";
import sparkleLg from "../../assets/icons/star-four-lg.svg";
import sparkleMd from "../../assets/icons/star-four-md.svg";
import sparkleSm from "../../assets/icons/star-four-sm.svg";
import styles from "./Steps.module.css";

export default function Steps() {
  const { t } = useTranslation();
  const items = t("steps.items", { returnObjects: true });

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <ol className={styles.list}>
          {items.map((step, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={step.title} className={styles.step}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
                {isLast && (
                  <div className={styles.sparkles} aria-hidden="true">
                    <img src={sparkleMd} alt="" className={styles.sparkleMd} />
                    <img src={sparkleLg} alt="" className={styles.sparkleLg} />
                    <img src={sparkleSm} alt="" className={styles.sparkleSm} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
