"use client";

import Link from "next/link";
import { useScrollAnimation, useAnimatedCounter } from "@/hooks/useScrollAnimation";
import styles from "./SystemOverview.module.css";

const steps = [
  {
    icon: "⊞",
    title: "10 × 20 ft Spacing",
    description:
      "Trees are planted in a grid pattern — 10 feet apart within rows, 20 feet between rows. This drives upward growth, producing tall, straight trunks with minimal branching.",
  },
  {
    icon: "🌱",
    title: "218 Trees Per Acre",
    description:
      "At this spacing, you plant approximately 218 trees per acre. Each seedling costs $8, making your total seedling investment just $1,744 per acre.",
  },
  {
    icon: "✂",
    title: "Strategic Thinning",
    description:
      "Over time, you thin the plantation — removing lower-value trees and giving the best ones more room. This is how you turn 218 seedlings into 25 exceptional timber trees.",
  },
];

export function SystemOverview() {
  const { ref, isVisible } = useScrollAnimation();
  const treesCounter = useAnimatedCounter(218, 2000);
  const costCounter = useAnimatedCounter(1744, 2000);

  return (
    <section className={`section ${styles.system}`} id="system">
      <div className="container">
        <div
          ref={ref}
          className={`section-header ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
        >
          <span className="section-label">The System</span>
          <h2>How the Planting System Works</h2>
          <p>Clear, proven, and built for timber value.</p>
        </div>

        <div className={`${styles.steps} stagger-children`}>
          {steps.map((step, i) => (
            <div
              key={i}
              className={`${styles.step} ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
            >
              <div className={styles.stepNumber}>
                <span>{step.icon}</span>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tight Spacing Explanation */}
        <div className={styles.explanation}>
          <div className={styles.explainContent}>
            <h3>Why Tight Spacing Matters</h3>
            <p>
              When trees are planted close together, they compete for light.
              That competition drives them upward, producing tall, straight
              trunks with minimal branching in the lower sections. This is what
              creates high-value timber.
            </p>
            <p>
              A wide-open-grown walnut tree spreads its branches low and wide —
              beautiful, but not ideal for timber. A plantation-grown walnut
              grows tall and clean.
            </p>
          </div>
          <div className={styles.explainStats} ref={treesCounter.ref}>
            <div className={styles.miniStat}>
              <span className={styles.miniNumber}>{treesCounter.count}</span>
              <span className={styles.miniLabel}>trees planted per acre</span>
            </div>
            <div className={styles.miniStat} ref={costCounter.ref}>
              <span className={styles.miniNumber}>${costCounter.count.toLocaleString()}</span>
              <span className={styles.miniLabel}>total seedling cost per acre</span>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <Link href="/planting-system" className="btn btn--primary">
            Learn the Full Planting System →
          </Link>
        </div>
      </div>
    </section>
  );
}
