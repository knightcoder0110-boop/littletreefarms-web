"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./HonestTruth.module.css";

export function HonestTruth() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className={`section ${styles.truth}`} id="honest-truth">
      {/* Background image - atmospheric farmland */}
      <div className={styles.bgImage}>
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=75&auto=format&fit=crop"
          alt="Golden sunrise over rural farmland — land with investment potential"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.bgOverlay} />

      <div className="container container--narrow">
        <div
          ref={ref}
          className={`${styles.content} ${isVisible ? styles.visible : ""}`}
        >
          <span className={styles.symbol}>✦</span>
          <span className={styles.label}>An Honest Truth</span>
          <h2 className={styles.heading}>
            What If Your Land Was Growing Something That Got More Valuable{" "}
            <span className={styles.accent}>Every Single Year?</span>
          </h2>
          <hr className="divider divider--center" />

          <div className={styles.prose}>
            <p>
              The land you own right now — that field, that pasture, that back
              forty — it&apos;s already doing something. It&apos;s growing
              grass. It&apos;s growing weeds. It&apos;s sitting there, year
              after year, not reaching its potential.
            </p>
            <p>
              What if, in 30 years, your children walked that land and saw
              not just trees — but security? Legacy? Something you built for
              them, quietly, one seedling at a time?
            </p>
          </div>

          <blockquote className={styles.quote}>
            &ldquo;Black walnut timber doesn&apos;t promise overnight riches. It
            promises something better: a slow, steady, compounding of value
            that mirrors the best things in life.&rdquo;
          </blockquote>

          <p className={styles.closing}>
            The grandfather who planted those trees along the fence line
            didn&apos;t know exactly what they&apos;d be worth. He just knew
            that planting something good was better than planting nothing at
            all. You have that same opportunity right now.
          </p>
        </div>
      </div>

      {/* Photo credit */}
      <span className={styles.credit}>
        Photo:{" "}
        <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
          Unsplash
        </a>
      </span>
    </section>
  );
}
