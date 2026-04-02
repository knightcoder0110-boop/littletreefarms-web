"use client";

import Link from "next/link";
import { useScrollAnimation, useAnimatedCounter } from "@/hooks/useScrollAnimation";
import styles from "./LandQualifies.module.css";

const qualifications = [
  "Empty fields not in active crop rotation",
  "Pasture edges and fence lines",
  "Acreage around homes and rural properties",
  "Old farmland retired from production",
  "Floodplain edges and creek margins",
];

export function LandQualifies() {
  const { ref, isVisible } = useScrollAnimation();
  const treesCounter = useAnimatedCounter(218, 2000);
  const costCounter = useAnimatedCounter(1744, 2000);
  const finalCounter = useAnimatedCounter(25, 1500);
  const valueCounter = useAnimatedCounter(125, 2000);

  return (
    <section className={`section ${styles.land}`} id="your-land">
      <div className="container">
        <div className={styles.grid}>
          <div
            ref={ref}
            className={`${styles.content} ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
          >
            <span className="section-label">Your Land Qualifies</span>
            <h2>
              You Might Be Surprised How Much Land Qualifies
            </h2>
            <ul className={styles.list}>
              {qualifications.map((item, i) => (
                <li
                  key={i}
                  className={styles.listItem}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <svg
                    className={styles.check}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M6 10L9 13L14 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className={styles.note}>
              You don&apos;t need to convert your entire farm. Even one acre —
              planted thoughtfully — begins a process that compounds over time.
            </p>
            <Link href="/your-land" className="btn btn--primary">
              Check If Your Land Qualifies →
            </Link>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard} ref={treesCounter.ref}>
              <span className={styles.statNumber}>{treesCounter.count}</span>
              <span className={styles.statLabel}>Trees planted per acre</span>
            </div>
            <div className={styles.statCard} ref={costCounter.ref}>
              <span className={styles.statNumber}>
                ${costCounter.count.toLocaleString()}
              </span>
              <span className={styles.statLabel}>Seedling cost per acre</span>
            </div>
            <div className={styles.statCard} ref={finalCounter.ref}>
              <span className={styles.statNumber}>{finalCounter.count}</span>
              <span className={styles.statLabel}>Final timber trees per acre</span>
            </div>
            <div className={styles.statCard} ref={valueCounter.ref}>
              <span className={styles.statNumber}>
                ${valueCounter.count},000+
              </span>
              <span className={styles.statLabel}>
                Potential premium value per acre
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
