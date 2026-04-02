"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./TripleCTA.module.css";

const ctas = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="10" y="6" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 16H32M16 22H28M16 28H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 36L24 32L28 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Download Free Planting Guide",
    description:
      "Everything you need to start your first acre. Site selection, spacing, thinning, and a year-by-year management timeline.",
    href: "/guide",
    btnClass: "btn--gold",
    btnText: "Get the Guide →",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 6C24 6 8 16 8 26C8 33.7 15.2 40 24 40C32.8 40 40 33.7 40 26C40 16 24 6 24 6Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 40V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 24L24 18L29 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Request Walnut Seedlings",
    description:
      "Premium black walnut seedlings from our Nova Scotia nursery. A-grade, bare root, and ready to plant.",
    href: "/seedlings",
    btnClass: "btn--primary",
    btnText: "Request Seedlings →",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 16V24L30 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="36" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Join the Growers List",
    description:
      "Monthly market insights, planting tips, and early access to seedling availability. No spam. No pressure.",
    href: "/growers",
    btnClass: "btn--secondary",
    btnText: "Join Now →",
  },
];

export function TripleCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className={`section ${styles.tripleCta}`} id="get-started">
      <div className="container">
        <div
          ref={ref}
          className={`section-header ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
        >
          <span className="section-label">Ready to Start?</span>
          <h2>See What Your Land Could Grow</h2>
          <p>
            These offers are low-pressure and completely free. We&apos;re here
            to help you make a smart decision for your land — on your timeline.
          </p>
        </div>

        <div className={`grid grid--3 stagger-children ${styles.cards}`}>
          {ctas.map((cta, i) => (
            <div
              key={i}
              className={`${styles.card} ${isVisible ? "animate-on-scroll is-visible" : "animate-on-scroll"}`}
            >
              <div className={styles.cardIcon}>{cta.icon}</div>
              <h3 className={styles.cardTitle}>{cta.title}</h3>
              <p className={styles.cardText}>{cta.description}</p>
              <Link href={cta.href} className={`btn ${cta.btnClass}`}>
                {cta.btnText}
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.trust}>
          <p>
            Grown in Nova Scotia. Shipped across Canada. Trusted by landowners
            coast to coast.
          </p>
          <a
            href="https://littletreefarmns.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.storeLink}
          >
            Visit our nursery store at littletreefarmns.com →
          </a>
        </div>
      </div>
    </section>
  );
}
