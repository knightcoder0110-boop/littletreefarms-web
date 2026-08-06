import { LandInquiryForm } from "./LandInquiryForm";
import styles from "./LandHubV2.module.css";

export function LandConversationPanel() {
  return (
    <section className={styles.conversationSection} id="conversation">
      <div className={`${styles.sectionWrap} ${styles.conversationGrid}`}>
        <div className={styles.conversationIntro}>
          <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>Begin before you are certain</p>
          <h2>A first conversation can be small.</h2>
          <p>
            You do not need a transfer plan, appraisal or complete file. Begin with
            the broad shape of the property and the future you would like to explore.
          </p>
          <blockquote>
            “I own about 40 acres of mixed woodland in New Brunswick. My children
            do not want it, but I would rather not see it cleared.”
          </blockquote>
          <p className={styles.conversationBoundary}>
            Please do not send deeds, tax records, banking details, identification
            numbers or other sensitive documents in a first message.
          </p>
        </div>

        <div className={styles.conversationCard}>
          <div className={styles.conversationCardTop}>
            <span>Initial inquiry · no obligation</span>
            <strong>Tell us the broad shape of the property.</strong>
          </div>
          <LandInquiryForm idPrefix="land-hub" />
        </div>
      </div>
    </section>
  );
}
