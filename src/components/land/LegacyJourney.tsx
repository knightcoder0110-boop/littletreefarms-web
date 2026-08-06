"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./LegacyJourney.module.css";

/* ── The story ───────────────────────────────────────────────── */
const CHAPTERS = [
  {
    numeral: "I",
    name: "An Ordinary Morning",
    paras: [
      "The gate still sticks the way it always has. The woodlot you planted — or your father did — stands exactly where it stood yesterday. From the porch, none of it looks like a legal problem.",
      "It looks like yours. And for as long as you're here, it is.",
    ],
  },
  {
    numeral: "II",
    name: "The Quiet Question",
    paras: [
      "But one day, the house will be quiet. Ownership doesn't continue automatically — land is one of the few things in life that must always belong to someone.",
      "In that quiet, a question arrives for the people you love: what happens to the land now?",
    ],
  },
  {
    numeral: "III",
    name: "What the Law Does Next",
    paras: [
      "Without your instructions, the answer comes from process, not memory. The property becomes part of your estate. An executor gathers papers. Debts and taxes are counted before wishes are.",
      "The law isn't unkind. It simply doesn't know what you hoped for — unless you wrote it down.",
    ],
  },
  {
    numeral: "IV",
    name: "The Kitchen Table",
    paras: [
      "Your family gathers. One child would keep the land. One would sell it. One lives three provinces away and just wants the questions to stop.",
      "Nobody is fighting yet. But every unwritten wish is now a decision someone else must make — guessing at your voice in the room.",
    ],
  },
  {
    numeral: "V",
    name: "The Fork",
    paras: [
      "This is the moment the same piece of land splits into two futures.",
      "The difference between them isn't money, or luck, or how much your family loves you. It's whether you decided — while you still could.",
    ],
  },
  {
    numeral: "VI",
    name: "The Future Nobody Chose",
    paras: [
      "In one future, a sign goes up by the road. The woodlot gets measured in lot lines. The land sells — not because anyone wanted that, but because it was the default.",
      "Nothing went wrong. That's the sad part. Nothing was ever pointed anywhere.",
    ],
  },
  {
    numeral: "VII",
    name: "The Future You Can Choose",
    paras: [
      "In the other future, the same gate opens for someone who was expecting it. The forest still stands. The plan you made in life is carried out in good hands.",
      "Your name fades from the paperwork. What you loved doesn't.",
    ],
  },
  {
    numeral: "VIII",
    name: "This Story Hasn't Happened Yet",
    paras: [
      "Both of these futures are still available to you — because you're still here. The pen is still in your hand.",
      "Below is the honest, practical guide: what the law actually does with land when an owner dies, and every way to shape what happens next.",
    ],
  },
] as const;

/* ── Scene state per chapter ─────────────────────────────────── */
const SCENE = [
  { sky: "#f3e2b8", sun: 0.95, smoke: 1, windows: 0.95, letter: 0, papers: 0, family: 0, split: 0, sold: 0, stumps: 0, trees: 1, lush: 0, walkers: 0, you: 0, birds: 0.85, grey: 0 },
  { sky: "#d9d3c0", sun: 0.3, smoke: 0, windows: 0.12, letter: 1, papers: 0, family: 0, split: 0, sold: 0, stumps: 0, trees: 1, lush: 0, walkers: 0, you: 0, birds: 0, grey: 0.26 },
  { sky: "#c4c9bf", sun: 0.15, smoke: 0, windows: 0.08, letter: 0, papers: 1, family: 0, split: 0, sold: 0, stumps: 0, trees: 1, lush: 0, walkers: 0, you: 0, birds: 0, grey: 0.34 },
  { sky: "#d2cab4", sun: 0.4, smoke: 0, windows: 0.25, letter: 0, papers: 0, family: 1, split: 0, sold: 0, stumps: 0, trees: 1, lush: 0, walkers: 0, you: 0, birds: 0, grey: 0.18 },
  { sky: "#e7dcc0", sun: 0.6, smoke: 0, windows: 0.2, letter: 0, papers: 0, family: 0, split: 1, sold: 0, stumps: 0, trees: 1, lush: 0, walkers: 0, you: 0, birds: 0.2, grey: 0 },
  { sky: "#c8c3b1", sun: 0.1, smoke: 0, windows: 0.04, letter: 0, papers: 0, family: 0, split: 0, sold: 1, stumps: 1, trees: 0, lush: 0, walkers: 0, you: 0, birds: 0, grey: 0.32 },
  { sky: "#f0d9a0", sun: 0.9, smoke: 0, windows: 0.5, letter: 0, papers: 0, family: 0, split: 0, sold: 0, stumps: 0, trees: 1, lush: 1, walkers: 1, you: 0, birds: 1, grey: 0 },
  { sky: "#f5cfae", sun: 1, smoke: 1, windows: 0.9, letter: 0, papers: 0, family: 0, split: 0, sold: 0, stumps: 0, trees: 1, lush: 0, walkers: 0, you: 1, birds: 0.9, grey: 0 },
];

const TREES = [
  { x: 620, y: 472, h: 150 },
  { x: 712, y: 463, h: 178 },
  { x: 802, y: 472, h: 142 },
  { x: 888, y: 461, h: 182 },
  { x: 955, y: 473, h: 128 },
  { x: 548, y: 479, h: 116 },
];

/* ── Small drawing helpers ───────────────────────────────────── */
function Tree({ x, y, h, color }: { x: number; y: number; h: number; color: string }) {
  const r = h * 0.3;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-h * 0.025} y={-h} width={h * 0.05} height={h} fill="#3a241a" />
      <circle cx={-r * 0.6} cy={-h + r * 0.2} r={r * 0.7} fill={color} />
      <circle cx={r * 0.6} cy={-h + r * 0.2} r={r * 0.7} fill={color} />
      <circle cx={0} cy={-h - r * 0.3} r={r} fill={color} />
    </g>
  );
}

function Stump({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx={0} cy={0} rx={r} ry={r * 0.45} fill="#5c3d2e" />
      <ellipse cx={0} cy={-1} rx={r * 0.6} ry={r * 0.26} fill="none" stroke="#8b6f56" strokeWidth="1.5" />
    </g>
  );
}

function Figure({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx={0} cy={-34} r={6.5} />
      <rect x={-5} y={-28} width={10} height={26} rx={5} />
    </g>
  );
}

const fade = (v: number) => ({ opacity: v, transition: "opacity 0.9s ease" });

/* ── Component ───────────────────────────────────────────────── */
export function LegacyJourney() {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const panels = rootRef.current?.querySelectorAll("[data-chapter]");
    if (!panels) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.chapter));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    panels.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, []);

  const s = SCENE[active];
  const chapter = CHAPTERS[active];

  return (
    <section className={styles.journey} id="two-futures" aria-labelledby="journey-heading" ref={rootRef}>
      <div className={styles.journeyHeader}>
        <p className={styles.journeyEyebrow}>An illustrated story</p>
        <h2 id="journey-heading">A Story of Two Futures</h2>
        <p>Scroll slowly. This is the story of one piece of land — told twice.</p>
      </div>

      <div className={styles.journeyGrid}>
        <div className={styles.sceneCol}>
          <div className={styles.sceneFrame}>
            <svg viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              {/* Sky + sun */}
              <rect x="0" y="0" width="1000" height="620" fill={s.sky} style={{ transition: "fill 0.9s ease" }} />
              <circle cx="740" cy="150" r="34" fill="#e9c87e" style={fade(s.sun)} />

              {/* Land */}
              <path d="M0,430 C 180,395 380,415 560,402 C 740,390 880,410 1000,398 L1000,620 L0,620 Z" fill="#7a9b7e" opacity="0.5" />
              <path d="M0,492 C 200,470 420,486 620,478 C 800,471 920,484 1000,476 L1000,620 L0,620 Z" fill="#43614a" />
              <polygon points="470,620 545,620 512,492 480,492" fill="#ede6da" opacity="0.5" />

              {/* The house */}
              <g transform="translate(150 514)">
                <rect x="78" y="-118" width="16" height="34" fill="#3a241a" />
                <path d="M86,-122 q6,-14 -2,-24 q-8,-10 2,-22" stroke="#faf6f0" strokeWidth="5" fill="none" strokeLinecap="round" style={fade(s.smoke)} />
                <polygon points="-14,-84 60,-126 134,-84" fill="#3a241a" />
                <rect x="0" y="-84" width="120" height="84" fill="#ede6da" />
                <rect x="14" y="-46" width="20" height="46" fill="#5c3d2e" />
                <rect x="52" y="-66" width="22" height="20" fill="#e9c87e" stroke="#3a241a" strokeWidth="2" style={fade(s.windows)} />
                <rect x="88" y="-66" width="22" height="20" fill="#e9c87e" stroke="#3a241a" strokeWidth="2" style={fade(s.windows)} />
              </g>

              {/* A letter at the door */}
              <g transform="translate(300 512)" style={fade(s.letter)}>
                <rect x="0" y="-22" width="46" height="30" rx="3" fill="#faf6f0" stroke="#d8d0bd" />
                <path d="M2,-20 L23,-4 L44,-20" stroke="#d8d0bd" strokeWidth="2" fill="none" />
              </g>

              {/* The woodlot — standing */}
              <g style={fade(s.trees)}>
                {TREES.map((t) => <Tree key={t.x} x={t.x} y={t.y} h={t.h} color="#2d5a3f" />)}
              </g>

              {/* The woodlot — thriving */}
              <g style={fade(s.lush)}>
                {TREES.map((t) => <Tree key={t.x} x={t.x} y={t.y} h={t.h * 1.12} color="#1a3a2a" />)}
                {TREES.filter((_, i) => i % 2 === 0).map((t) => (
                  <circle key={t.x} cx={t.x + 18} cy={t.y - t.h * 1.1} r={t.h * 0.09} fill="#a3c4a7" opacity="0.85" />
                ))}
                {TREES.filter((_, i) => i % 2 === 1).map((t) => (
                  <path key={t.x} d={`M${t.x - 26} ${t.y} l5 -13 l5 13 Z`} fill="#a3c4a7" />
                ))}
              </g>

              {/* The woodlot — cleared */}
              <g style={fade(s.stumps)}>
                {TREES.map((t) => <Stump key={t.x} x={t.x} y={t.y} r={t.h * 0.075 + 5} />)}
              </g>

              {/* Estate papers */}
              <g transform="translate(495 505)" style={fade(s.papers)}>
                <rect x="-8" y="-66" width="54" height="68" rx="3" fill="#ede6da" transform="rotate(-7)" />
                <rect x="-2" y="-64" width="54" height="68" rx="3" fill="#faf6f0" stroke="#d8d0bd" />
                <line x1="8" y1="-48" x2="42" y2="-48" stroke="#c9c0aa" strokeWidth="3" />
                <line x1="8" y1="-36" x2="42" y2="-36" stroke="#c9c0aa" strokeWidth="3" />
                <line x1="8" y1="-24" x2="34" y2="-24" stroke="#c9c0aa" strokeWidth="3" />
              </g>

              {/* Family around the table */}
              <g transform="translate(280 522)" fill="#2c2c2c" style={fade(s.family)}>
                <rect x="-24" y="-18" width="48" height="6" rx="3" />
                <rect x="-18" y="-12" width="5" height="14" />
                <rect x="13" y="-12" width="5" height="14" />
                <g transform="translate(-40 0) scale(0.9)"><circle cx="0" cy="-34" r="6.5" /><rect x="-5" y="-28" width="10" height="26" rx="5" /></g>
                <g transform="translate(40 0) scale(0.9)"><circle cx="0" cy="-34" r="6.5" /><rect x="-5" y="-28" width="10" height="26" rx="5" /></g>
                <g transform="translate(-8 2) scale(0.72)"><circle cx="0" cy="-40" r="6.5" /><rect x="-5" y="-34" width="10" height="30" rx="5" /></g>
                <g transform="translate(14 4) scale(0.55)"><circle cx="0" cy="-44" r="6.5" /><rect x="-5" y="-38" width="10" height="32" rx="5" /></g>
              </g>

              {/* SOLD sign + survey stakes */}
              <g style={fade(s.sold)}>
                <g transform="translate(560 512)">
                  <rect x="-2.5" y="-52" width="5" height="52" fill="#3a241a" />
                  <rect x="-36" y="-88" width="74" height="38" rx="5" fill="#5c3d2e" stroke="#c8a96e" strokeWidth="2" />
                  <text x="1" y="-62" textAnchor="middle" fill="#dbc398" fontFamily="Arial, sans-serif" fontSize="19" fontWeight="bold" letterSpacing="3">SOLD</text>
                </g>
                <g transform="translate(648 520)"><rect x="-2" y="-24" width="4" height="24" fill="#3a241a" /><polygon points="2,-24 16,-20 2,-16" fill="#c8a96e" /></g>
                <g transform="translate(706 524)"><rect x="-2" y="-24" width="4" height="24" fill="#3a241a" /><polygon points="2,-24 16,-20 2,-16" fill="#c8a96e" /></g>
              </g>

              {/* Walkers on the path */}
              <g fill="#2c2c2c" style={fade(s.walkers)}>
                <Figure x={498} y={522} />
                <Figure x={516} y={528} s={0.62} />
              </g>

              {/* You, today */}
              <g fill="#2c2c2c" style={fade(s.you)}>
                <Figure x={478} y={524} s={1.05} />
              </g>

              {/* Birds */}
              <g stroke="#1a3a2a" strokeWidth="2.5" fill="none" strokeLinecap="round" style={fade(s.birds)}>
                <path d="M300,140 q7,-8 14,0 q7,-8 14,0" />
                <path d="M372,110 q6,-7 12,0 q6,-7 12,0" />
                <path d="M336,172 q5,-6 10,0 q5,-6 10,0" />
              </g>

              {/* Muted days */}
              <rect x="0" y="0" width="1000" height="620" fill="#5a6460" pointerEvents="none" style={fade(s.grey)} />

              {/* The fork — two futures over one land */}
              <g pointerEvents="none" style={fade(s.split)}>
                <rect x="0" y="0" width="500" height="620" fill="#5a6460" opacity="0.38" />
                <rect x="500" y="0" width="500" height="620" fill="#2d5a3f" opacity="0.22" />
                {TREES.filter((t) => t.x > 500).map((t) => (
                  <path key={t.x} d={`M${t.x + 30} ${t.y} l6 -15 l6 15 Z`} fill="#a3c4a7" />
                ))}
                <line x1="524" y1="70" x2="478" y2="620" stroke="#c8a96e" strokeWidth="3" />
              </g>
            </svg>

            <div className={styles.sceneLabel} aria-hidden="true">
              <span className={styles.sceneNumeral}>{chapter.numeral}</span>
              <span className={styles.sceneName}>{chapter.name}</span>
            </div>

            <div className={styles.dots} role="group" aria-label="Story chapters">
              {CHAPTERS.map((c, i) => (
                <button
                  key={c.numeral}
                  type="button"
                  className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                  aria-label={`Go to chapter ${c.numeral}: ${c.name}`}
                  aria-current={i === active ? "true" : undefined}
                  onClick={() => document.getElementById(`chapter-${i}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.chapters}>
          {CHAPTERS.map((c, i) => (
            <div className={styles.chapter} key={c.numeral} id={`chapter-${i}`} data-chapter={i}>
              <div className={styles.card}>
                <p className={styles.cardKicker}>Chapter {c.numeral}</p>
                <h3>{c.name}</h3>
                {c.paras.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bridge}>
        <h2>Both Futures Are <em>Still Available.</em></h2>
        <p>The difference is a plan. Here is the complete, practical guide — what the law actually does with land when an owner dies, and every way to shape what happens next.</p>
        <a className={styles.bridgeCue} href="#simple-answer">
          Continue to the guide
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </div>
    </section>
  );
}
