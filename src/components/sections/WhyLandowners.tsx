"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./WhyLandowners.module.css";

const reasons = [
  {
    number: "01",
    title: "It Uses Land That Was Doing Nothing",
    description:
      "That field edge. That strip along the fence line. That back corner that floods a little in spring. Black walnut is adaptable and can thrive on land that isn't ideal for crops or grazing.",
  },
  {
    number: "02",
    title: "It Requires Very Little Ongoing Work",
    description:
      "Once established, a black walnut plantation doesn't need daily attention. You're not farming it like a crop. You're stewarding it like a forest. The trees do the work.",
  },
  {
    number: "03",
    title: "It Creates Something Real and Lasting",
    description:
      "There's a deep satisfaction in planting something that will outlive you. Something your children will inherit. Something that grows more valuable with every passing year.",
  },
  {
    number: "04",
    title: "It Diversifies Your Land's Income Potential",
    description:
      "Adding a timber component to your land creates a long-term asset that doesn't compete with your current operation — it complements it.",
  },
];

export function WhyLandowners() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className={`section section--dark ${styles.whyLandowners}`}
      id="why-landowners"
    >
      <div className="container">
        <div
          ref={ref}
          className={`section-header ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
        >
          <span className="section-label">Why Landowners Love This System</span>
          <h2>Four Reasons This Makes Sense for Your Land</h2>
        </div>

        <div className={`grid grid--2 ${styles.reasons}`}>
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`${styles.reason} ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className={styles.number}>{reason.number}</span>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonText}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
