"use client";

import Image from "next/image";
import { useScrollAnimation, useAnimatedCounter } from "@/hooks/useScrollAnimation";
import styles from "./WhyThisTree.module.css";

const features = [
  {
    title: "Extraordinary Grain",
    description:
      "Rich, dark, chocolatey tone with a tight, straight grain that takes finish beautifully. There is no synthetic substitute.",
    icon: "✦",
  },
  {
    title: "Consistent Demand",
    description:
      "High-end furniture, cabinetry, musical instruments, and luxury interiors all rely on quality walnut. That demand never disappears.",
    icon: "◆",
  },
  {
    title: "Limited Supply",
    description:
      "Wild black walnut trees of timber quality are increasingly scarce. Plantation-grown walnut commands premium prices.",
    icon: "◈",
  },
  {
    title: "Generational Lifespan",
    description:
      "A black walnut tree can live over 100 years. A tree planted today could be harvested by your grandchildren.",
    icon: "❖",
  },
];

export function WhyThisTree() {
  const { ref, isVisible } = useScrollAnimation();
  const counter = useAnimatedCounter(100, 2500);

  return (
    <section className={`section section--dark ${styles.whyTree}`} id="why-this-tree">
      <div className="container">
        <div className={styles.topGrid}>
          <div
            ref={ref}
            className={`${styles.headerContent} ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
          >
            <span className="section-label">Why This Tree</span>
            <h2>
              Black Walnut Is in a Category of Its Own Among North American
              Hardwoods
            </h2>
            <p className={styles.headerText}>
              Black walnut (<em>Juglans nigra</em>) has been prized for centuries
              — by furniture makers, cabinetmakers, gunsmiths, and now by luxury
              interior designers and instrument builders around the world.
            </p>
          </div>

          {/* Walnut grain image */}
          <div className={`${styles.grainImage} ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop"
              alt="Rich dark walnut wood grain showing the premium quality and chocolate-brown tones"
              width={500}
              height={350}
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ objectFit: "cover", borderRadius: "var(--radius-lg)" }}
            />
            <span className={styles.imgCredit}>
              Photo:{" "}
              <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
                Unsplash
              </a>
            </span>
          </div>
        </div>

        <div className={`grid grid--2 ${styles.features}`}>
          {features.map((feature, i) => (
            <div
              key={i}
              className={`card card--dark ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className={styles.featureIcon}>{feature.icon}</span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlight} ref={counter.ref}>
          <p className={styles.highlightNote}>
            When a high-quality black walnut log reaches the veneer market, a
            single tree can be worth thousands of dollars.{" "}
            <strong>Not the whole acre. A single tree.</strong>
          </p>
          <div className={styles.counterBlock}>
            <span className={styles.counterNumber}>{counter.count}+</span>
            <span className={styles.counterLabel}>
              Years a black walnut tree can live — a true generational asset
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
