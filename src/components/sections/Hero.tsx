"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background image */}
      <div className={styles.bgImage}>
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=85&auto=format&fit=crop"
          alt="Tall ancient forest with dramatic light — representing the long-term power of timber investment"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.bgOverlay} />
      <div className={styles.bgGrain} />

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Black Walnut Timber Investment</span>
          <h1 className={styles.title}>
            What If the Best Investment You Ever Made Was Already{" "}
            <span className={styles.accent}>Growing in Your Backyard?</span>
          </h1>
          <p className={styles.subtitle}>
            Landowners across North America are quietly turning unused fields and
            forgotten pastures into generational timber wealth — with one of
            nature&apos;s most valuable hardwood trees.
          </p>
          <div className={styles.actions}>
            <Link href="/guide" className="btn btn--gold btn--lg">
              Download Free Planting Guide
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a href="#story" className={`btn btn--ghost btn--lg ${styles.scrollBtn}`}>
              Read the Story
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 3V13M8 13L4 9M8 13L12 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>$8</span>
            <span className={styles.statLabel}>Per Seedling</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>218</span>
            <span className={styles.statLabel}>Trees Per Acre</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>$125K+</span>
            <span className={styles.statLabel}>Potential Per Acre</span>
          </div>
        </div>
      </div>

      {/* Photo credit */}
      <span className={styles.credit}>
        Photo by{" "}
        <a
          href="https://unsplash.com/@kazuend"
          target="_blank"
          rel="noopener noreferrer"
        >
          kazuend
        </a>{" "}
        on Unsplash
      </span>
    </section>
  );
}
