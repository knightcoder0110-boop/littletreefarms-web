"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./Outcomes.module.css";

const tiers = [
  {
    tier: "Conservative",
    perTree: "$1,000",
    perAcre: "$25,000",
    description: "Average quality on average ground",
    highlight: false,
  },
  {
    tier: "Mid-Range",
    perTree: "$2,500",
    perAcre: "$62,500",
    description: "Good quality with proper management",
    highlight: true,
  },
  {
    tier: "Premium",
    perTree: "$5,000",
    perAcre: "$125,000",
    description: "Excellent trees on good soil, veneer quality",
    highlight: false,
  },
];

export function Outcomes() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className={`section ${styles.outcomes}`} id="outcomes">
      <div className="container">
        <div
          ref={ref}
          className={`section-header ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
        >
          <span className="section-label">Potential Outcomes</span>
          <h2>
            What Might 25 Trees Per Acre{" "}
            <span className={styles.accent}>Be Worth?</span>
          </h2>
          <p>
            These are honest scenarios based on real market data. Outcomes depend
            on log quality, site conditions, and market timing.
          </p>
        </div>

        <div className={`grid grid--3 stagger-children ${styles.cards}`}>
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`${styles.card} ${tier.highlight ? styles.cardHighlight : ""} ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
            >
              {tier.highlight && (
                <span className={styles.badge}>Most Likely</span>
              )}
              <span className={styles.tierName}>{tier.tier}</span>
              <div className={styles.pricing}>
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>Per Tree</span>
                  <span className={styles.priceValue}>{tier.perTree}</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>Per Acre (25 trees)</span>
                  <span className={`${styles.priceValue} ${styles.priceMain}`}>
                    {tier.perAcre}
                  </span>
                </div>
              </div>
              <p className={styles.tierDesc}>{tier.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.disclaimer}>
          <p>
            We want to be clear: these outcomes are not guaranteed. Timber
            markets fluctuate. Site quality matters. Management matters. But the
            underlying economics of black walnut timber have been consistent for
            generations, and there is no reason to believe that will change.
          </p>
        </div>

        <div className={styles.cta}>
          <Link href="/returns-calculator" className="btn btn--primary btn--lg">
            Calculate Your Potential Returns →
          </Link>
        </div>
      </div>
    </section>
  );
}
