import styles from "./LandHubV2.module.css";

export type LandHubFaqItem = {
  question: string;
  answer: string;
};

type LandHubFaqProps = {
  items: readonly LandHubFaqItem[];
};

export function LandHubFaq({ items }: LandHubFaqProps) {
  return (
    <section className={styles.faqSection} aria-labelledby="faq-title">
      <div className={styles.sectionWrap}>
        <div className={styles.faqHeading}>
          <div>
            <p className={styles.eyebrow}>Program questions</p>
            <h2 id="faq-title">Clear answers before a conversation.</h2>
          </div>
          <p>
            The program is still developing. These answers describe the starting
            principles—not a promise about any particular property or arrangement.
          </p>
        </div>

        <div className={styles.faqList}>
          {items.map((item, index) => (
            <details key={item.question} className={styles.faqItem}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.question}</strong>
                <i aria-hidden="true" />
              </summary>
              <div>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
