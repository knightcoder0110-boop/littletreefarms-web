"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./Investment.module.css";

export function Investment() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className={`section ${styles.investment}`} id="investment">
      <div className="container">
        <div
          ref={ref}
          className={`section-header ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
        >
          <span className="section-label">A Different Kind of Investment</span>
          <h2>
            This Investment Doesn&apos;t Fluctuate With the Market.{" "}
            <br />
            <span className={styles.accent}>It Just Grows.</span>
          </h2>
          <p>
            Black walnut timber is one of the most quietly powerful long-term
            investments available to landowners today. Not because of some
            complicated financial scheme. But because of simple biology and
            simple economics.
          </p>
        </div>

        <div className={`grid grid--3 stagger-children ${styles.cards}`}>
          <div className={`card ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <path d="M24 14V34M24 14L18 20M24 14L30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Plant a Tree</h3>
            <p className={styles.cardText}>
              You plant a tree. The tree grows. You don&apos;t need to be a
              forester. You don&apos;t need expensive equipment. You need land,
              seedlings, and patience.
            </p>
          </div>

          <div className={`card ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <path d="M16 28L22 22L26 26L32 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="32" cy="20" r="2" fill="currentColor" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Watch It Compound</h3>
            <p className={styles.cardText}>
              Over decades, that tree becomes increasingly rare and increasingly
              valuable. Black walnut timber value compounds naturally — no active
              management required.
            </p>
          </div>

          <div className={`card ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <path d="M18 30C18 30 20 26 24 26C28 26 30 30 30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="20" cy="21" r="1.5" fill="currentColor" />
                <circle cx="28" cy="21" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Harvest Generational Wealth</h3>
            <p className={styles.cardText}>
              The best part? A single tree can be worth thousands. Your children
              or grandchildren inherit not just land — but legacy timber that
              grows more valuable every year.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <Link href="/seedlings" className="btn btn--secondary">
            Request Walnut Seedlings →
          </Link>
        </div>
      </div>
    </section>
  );
}
