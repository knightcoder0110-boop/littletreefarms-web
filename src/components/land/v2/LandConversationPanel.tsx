import Link from "next/link";
import { businessInfo } from "@/lib/config/business";
import styles from "./LandHubV2.module.css";

const firstNoteDetails = [
  "The province or territory",
  "An approximate acreage range",
  "Woodland, field, wetland, buildings or other broad features",
  "What you hope—or worry—will happen next",
] as const;

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
            <strong>What to include in your note</strong>
          </div>
          <ol>
            {firstNoteDetails.map((detail, index) => (
              <li key={detail}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {detail}
              </li>
            ))}
          </ol>
          <div className={styles.conversationActions}>
            <Link className={styles.conversationPrimary} href="/contact">
              Use the contact form <span aria-hidden="true">→</span>
            </Link>
            <a
              className={styles.conversationSecondary}
              href={`mailto:${businessInfo.contact.email}?subject=Land%20stewardship%20conversation`}
            >
              Email {businessInfo.contact.email}
            </a>
          </div>
          <div className={styles.conversationContactLine}>
            <span>Prefer to speak?</span>
            <a href={`tel:${businessInfo.contact.phone}`}>{businessInfo.contact.phoneDisplay}</a>
          </div>
          <p className={styles.conversationPrivacy}>
            Contact details are used to respond to your inquiry. Read our{" "}
            <Link href="/privacy">privacy policy</Link>. A conversation does not
            commit either party to a transfer or other arrangement.
          </p>
        </div>
      </div>
    </section>
  );
}
