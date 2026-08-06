import styles from "./LandArticle.module.css";

export type LandFaqItem = {
  question: string;
  answer: string;
};

type LandFaqProps = {
  items: readonly LandFaqItem[];
};

export function LandFaq({ items }: LandFaqProps) {
  return (
    <div className={styles.faqList}>
      {items.map((item) => (
        <details className={styles.faqItem} key={item.question}>
          <summary>
            <span>{item.question}</span>
            <span className={styles.faqMark} aria-hidden="true" />
          </summary>
          <div className={styles.faqAnswer}>
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
