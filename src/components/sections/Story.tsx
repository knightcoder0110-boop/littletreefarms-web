"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./Story.module.css";

export function Story() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className={`section section--alt ${styles.story}`} id="story">
      <div className={`container container--narrow`}>
        <div
          ref={ref}
          className={`${styles.content} ${isVisible ? styles.visible : ""}`}
        >
          <span className="section-label">The Story That Started It All</span>
          <h2 className={styles.heading}>
            A Grandfather&apos;s Fence Line.{" "}
            <span className={styles.accent}>A Family&apos;s Fortune.</span>
          </h2>
          <hr className="divider divider--center" />

          <div className={styles.prose}>
            <p>
              There&apos;s a story that gets told in certain farming families —
              passed down quietly, like the land itself. A grandfather planted a
              row of black walnut trees along the edge of his property back in
              the 1960s. He didn&apos;t think much of it. He just liked the idea
              of doing something useful with that strip of ground that was too
              rocky to plow and too shaded to graze.
            </p>

            <p>
              Decades later, his grandchildren had those trees appraised. The
              timber cruiser walked the row, measured the trunks, checked the
              grain. Then he handed over a number that made the family go quiet.
            </p>

            <blockquote className={styles.quote}>
              &ldquo;Those trees — planted with a shovel and a little patience —
              were worth more per acre than most of the farmland in the
              county.&rdquo;
            </blockquote>

            <p>
              That story isn&apos;t rare. It&apos;s just not told loudly enough.
              And if you own land — even a few acres of unused field, old
              pasture, or scrubby ground you haven&apos;t known what to do with
              — this page was written for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
