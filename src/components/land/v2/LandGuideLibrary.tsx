import Image from "next/image";
import Link from "next/link";
import { landGuides, type LandGuideCategory } from "@/lib/land/guides";
import styles from "./LandHubV2.module.css";

const categoryLabels: Record<LandGuideCategory, string> = {
  decide: "Decide",
  transfer: "Transfer",
  plan: "Plan",
  restore: "Restore",
  legacy: "Legacy",
};

export function LandGuideLibrary() {
  const primary = landGuides.find((guide) => guide.featured === "primary");
  const secondary = landGuides.filter((guide) => guide.featured === "secondary");
  const remaining = landGuides.filter((guide) => !guide.featured);

  if (!primary) {
    return null;
  }

  return (
    <section className={styles.librarySection} id="guides">
      <div className={styles.sectionWrap}>
        <div className={styles.libraryMasthead}>
          <div>
            <p className={styles.eyebrow}>Land Stewardship Knowledge Centre</p>
            <h2>Read for the decision you are actually facing.</h2>
          </div>
          <p>
            Plain-language guides for Canadian landowners considering succession,
            donation, transfer, woodland care and the long future of a rural property.
          </p>
        </div>

        <div className={styles.libraryFeatures}>
          <Link className={styles.libraryPrimary} href={primary.href}>
            <div className={styles.libraryPrimaryImage}>
              <Image
                src={primary.image}
                alt={primary.imageAlt}
                fill
                sizes="(max-width: 900px) 94vw, 58vw"
              />
              <span className={styles.startRibbon}>Start here</span>
            </div>
            <div className={styles.libraryPrimaryCopy}>
              <div className={styles.guideMeta}>
                <span>{categoryLabels[primary.category]}</span>
                <span>{primary.kind}</span>
              </div>
              <h3>{primary.title}</h3>
              <p>{primary.hook}</p>
              <span className={styles.readLink}>Open the guide <i aria-hidden="true">→</i></span>
            </div>
          </Link>

          <div className={styles.librarySecondary}>
            {secondary.map((guide, index) => (
              <Link href={guide.href} key={guide.id}>
                <div className={styles.secondaryNumber}>{String(index + 2).padStart(2, "0")}</div>
                <div>
                  <div className={styles.guideMeta}>
                    <span>{categoryLabels[guide.category]}</span>
                    <span>{guide.kind}</span>
                  </div>
                  <h3>{guide.shortTitle}</h3>
                  <p>{guide.hook}</p>
                  <span className={styles.readLink}>Read <i aria-hidden="true">→</i></span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.libraryIndex}>
          <div className={styles.indexHeader} aria-hidden="true">
            <span>Edition</span>
            <span>Guide</span>
            <span>Format</span>
          </div>
          {remaining.map((guide, index) => (
            <Link className={styles.indexRow} href={guide.href} key={guide.id}>
              <span className={styles.indexNumber}>{String(index + 4).padStart(2, "0")}</span>
              <span className={styles.indexTitle}>
                <small>{categoryLabels[guide.category]}</small>
                <strong>{guide.title}</strong>
                <em>{guide.hook}</em>
              </span>
              <span className={styles.indexKind}>{guide.kind}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h13M14 7l5 5-5 5" />
              </svg>
            </Link>
          ))}
        </div>

        <div className={styles.libraryPipeline}>
          <span className={styles.pipelineMark} aria-hidden="true">+</span>
          <div>
            <strong>A library designed to grow</strong>
            <p>
              New articles can be added by topic and situation without rebuilding
              the hub. Until a guide is published, it will not appear here or create
              a dead search-engine path.
            </p>
          </div>
          <a href="#conversation">Suggest a question</a>
        </div>
      </div>
    </section>
  );
}
