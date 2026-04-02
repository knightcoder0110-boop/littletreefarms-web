"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./Timeline.module.css";

const stages = [
  {
    years: "Year 0",
    title: "Planting",
    trees: 218,
    description:
      "Plant 218 trees per acre at 10×20 ft spacing. The seedlings go in the ground. The clock starts.",
  },
  {
    years: "Years 10–15",
    title: "First Thinning",
    trees: 100,
    description:
      "Thin to approximately 100 trees per acre. Your best trees are now getting the space they need.",
  },
  {
    years: "Years 20–25",
    title: "Second Thinning",
    trees: 50,
    description:
      "Thin again to approximately 50 trees per acre. The remaining trees are developing real timber value.",
  },
  {
    years: "Years 35–50",
    title: "Final Harvest Stand",
    trees: 25,
    description:
      "25 trees per acre remain, spaced 35–40 feet apart. These are your timber trees — decades of clean, straight growth.",
  },
];

export function Timeline() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className={`section section--alt ${styles.timeline}`} id="timeline">
      <div className="container">
        <div
          ref={ref}
          className={`section-header ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
        >
          <span className="section-label">The Timeline</span>
          <h2>Patience Is the Price of Admission</h2>
          <p>Here&apos;s what the journey looks like.</p>
        </div>

        <div className={styles.stages}>
          <div className={styles.line} />
          {stages.map((stage, i) => (
            <div
              key={i}
              className={`${styles.stage} ${isVisible ? styles.visible : ""}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className={styles.dot}>
                <span className={styles.dotInner} />
              </div>
              <div className={styles.stageCard}>
                <span className={styles.years}>{stage.years}</span>
                <h3 className={styles.stageTitle}>{stage.title}</h3>
                <p className={styles.stageText}>{stage.description}</p>
                <div className={styles.treeCount}>
                  <span className={styles.treeNumber}>{stage.trees}</span>
                  <span className={styles.treeLabel}>trees/acre</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
