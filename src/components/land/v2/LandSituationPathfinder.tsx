"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import type { LandSituationId } from "@/lib/land/guides";
import styles from "./LandHubV2.module.css";

export type PathfinderLink = {
  href: string;
  title: string;
  note: string;
};

export type PathfinderItem = {
  id: LandSituationId;
  shortLabel: string;
  title: string;
  context: string;
  firstMove: string;
  primary: PathfinderLink;
  alternate: PathfinderLink;
};

type LandSituationPathfinderProps = {
  items: readonly PathfinderItem[];
};

export function LandSituationPathfinder({ items }: LandSituationPathfinderProps) {
  const [activeId, setActiveId] = useState<LandSituationId>(items[0].id);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function moveFocus(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    let nextIndex = index;

    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = items.length - 1;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % items.length;
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + items.length) % items.length;
    }

    const nextItem = items[nextIndex];
    setActiveId(nextItem.id);
    buttonRefs.current[nextIndex]?.focus();
  }

  return (
    <section className={styles.pathfinderSection} id="pathfinder">
      <div className={styles.sectionWrap}>
        <div className={styles.sectionIntroGrid}>
          <div>
            <p className={styles.eyebrow}>Your situation</p>
            <h2>Start with where you are, not with a legal instrument.</h2>
          </div>
          <p>
            “Donate,” “sell,” and “leave it in a will” are possible tools—not
            starting points. Choose the thought closest to yours and we’ll point
            you toward a useful first read.
          </p>
        </div>

        <div className={styles.pathfinderFrame}>
          <div
            className={styles.pathfinderTabs}
            role="tablist"
            aria-label="Choose your land situation"
            aria-orientation="vertical"
          >
            {items.map((item, index) => {
              const isActive = item.id === activeId;
              return (
                <button
                  className={isActive ? styles.pathfinderTabActive : styles.pathfinderTab}
                  id={`situation-tab-${item.id}`}
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  onKeyDown={(event) => moveFocus(event, index)}
                  ref={(node) => { buttonRefs.current[index] = node; }}
                  role="tab"
                  aria-controls={`situation-panel-${item.id}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.shortLabel}</strong>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h13M14 7l5 5-5 5" />
                  </svg>
                </button>
              );
            })}
          </div>

          <div className={styles.pathfinderPanels}>
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <article
                  className={styles.pathfinderPanel}
                  id={`situation-panel-${item.id}`}
                  key={item.id}
                  role="tabpanel"
                  aria-labelledby={`situation-tab-${item.id}`}
                  hidden={!isActive}
                  tabIndex={0}
                >
                  <p className={styles.panelLabel}>A useful way in</p>
                  <h3>{item.title}</h3>
                  <p className={styles.panelContext}>{item.context}</p>
                  <div className={styles.firstMove}>
                    <span>Before choosing an outcome</span>
                    <p>{item.firstMove}</p>
                  </div>
                  <div className={styles.pathfinderRoutes}>
                    <Link className={styles.primaryRoute} href={item.primary.href}>
                      <span>Start here</span>
                      <strong>{item.primary.title}</strong>
                      <p>{item.primary.note}</p>
                      <em>Read this guide <span aria-hidden="true">→</span></em>
                    </Link>
                    <Link className={styles.alternateRoute} href={item.alternate.href}>
                      <span>Then consider</span>
                      <strong>{item.alternate.title}</strong>
                      <p>{item.alternate.note}</p>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
