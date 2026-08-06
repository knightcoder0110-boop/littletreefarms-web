"use client";

import { useEffect, useState } from "react";
import styles from "./ForestCentury.module.css";

/* ── Era definitions ─────────────────────────────────────────── */
const ERAS = [
  { start: 0, name: "The Decision", gen: "Your hands", line: "An open field, a quiet choice: this ground will become a forest." },
  { start: 10, name: "The Tending", gen: "Your hands", line: "Small stems, big faith. Watering, weeding, protecting every seedling." },
  { start: 25, name: "The Thicket", gen: "Your children's curiosity", line: "The canopy closes. Deer find cover. The field forgets it was a field." },
  { start: 40, name: "The Standing Forest", gen: "Your children", line: "Trunks you can barely reach around, and a trail your children now walk." },
  { start: 60, name: "The Mature Stand", gen: "Your grandchildren", line: "Deep shade and birdsong. Seed falls into soil you prepared decades ago." },
  { start: 80, name: "The Living Legacy", gen: "Generations you won't meet", line: "You are gone. The forest is not. New seedlings rise in your trees' shade." },
] as const;

/* ── Sky palette across the century ──────────────────────────── */
const SKY_STOPS = [
  { y: 0, c: "#f4e6c6" },
  { y: 10, c: "#f2dfae" },
  { y: 25, c: "#ecdcb6" },
  { y: 40, c: "#e3e2c4" },
  { y: 60, c: "#eac98d" },
  { y: 80, c: "#cf9a66" },
  { y: 100, c: "#33503f" },
] as const;

/* ── Deterministic tree layout ───────────────────────────────── */
const TREES = Array.from({ length: 9 }, (_, i) => ({
  x: 80 + i * 127 + ((i * 41) % 30) - 15,
  baseY: 512 + ((i * 37) % 24) - 6,
  maxH: 155 + ((i * 53) % 80),
  delay: (i % 3) * 2.2,
  scale: 0.85 + ((i * 29) % 30) / 100,
}));

const CANOPY_YOUNG = { r: 163, g: 196, b: 167 }; // sage-light
const CANOPY_OLD = { r: 26, g: 58, b: 42 }; // forest

/* ── Helpers ─────────────────────────────────────────────────── */
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (v: number, a: number, b: number) => clamp01((v - a) / (b - a));

function hexToRgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function mix(c1: { r: number; g: number; b: number }, c2: { r: number; g: number; b: number }, t: number) {
  return `rgb(${Math.round(c1.r + (c2.r - c1.r) * t)}, ${Math.round(c1.g + (c2.g - c1.g) * t)}, ${Math.round(c1.b + (c2.b - c1.b) * t)})`;
}

function skyColor(year: number) {
  let lower: { y: number; c: string } = SKY_STOPS[0];
  let upper: { y: number; c: string } = SKY_STOPS[SKY_STOPS.length - 1];
  for (let i = 0; i < SKY_STOPS.length - 1; i++) {
    if (year >= SKY_STOPS[i].y && year <= SKY_STOPS[i + 1].y) {
      lower = SKY_STOPS[i];
      upper = SKY_STOPS[i + 1];
      break;
    }
  }
  const t = upper.y === lower.y ? 0 : (year - lower.y) / (upper.y - lower.y);
  return mix(hexToRgb(lower.c), hexToRgb(upper.c), t);
}

const growth = (year: number, delay: number) => 1 - Math.exp(-Math.max(0, year - delay) / 26);

function eraFor(year: number) {
  let index = 0;
  for (let i = 0; i < ERAS.length; i++) if (year >= ERAS[i].start) index = i;
  return index;
}

/* ── Component ───────────────────────────────────────────────── */
export function ForestCentury() {
  const [year, setYear] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setYear((y) => {
        if (y >= 100) {
          setPlaying(false);
          return 100;
        }
        return Math.min(100, y + 0.5);
      });
    }, 40);
    return () => window.clearInterval(id);
  }, [playing]);

  const eraIndex = eraFor(year);
  const era = ERAS[eraIndex];
  const canopyTone = mix(CANOPY_YOUNG, CANOPY_OLD, smooth(year, 0, 58));

  const sunX = 150 + (year / 100) * 900;
  const sunY = 400 - Math.sin(Math.PI * Math.min(1, year / 95)) * 300;
  const sunOpacity = 1 - smooth(year, 80, 96);

  const meters = [
    { label: "Canopy cover", value: Math.min(100, Math.round(100 * (1 - Math.exp(-year / 26)))) },
    { label: "Wildlife habitat", value: Math.min(100, Math.round(100 * (1 - Math.exp(-year / 48)))) },
    { label: "Seed for future forests", value: Math.min(100, Math.round(Math.max(0, year - 28) * 1.55)) },
  ];

  const detail = (a: number, b: number) => ({
    opacity: smooth(year, a, b),
    transition: "opacity 0.8s ease",
  });

  return (
    <section className={styles.section} id="century" aria-labelledby="century-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>An interactive century</p>
          <h2 id="century-heading">Watch a Forest Become a Legacy</h2>
          <p>
            One decision, one hundred years. Drag through time — or press play — and watch an open
            field become the forest your grandchildren will walk beneath.
          </p>
        </div>

        <div className={styles.simulator}>
          <div className={styles.stage}>
            <div className={styles.scene} aria-hidden="true">
              <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMax slice" role="img">
                {/* Sky + light */}
                <rect x="0" y="0" width="1200" height="620" fill={skyColor(year)} style={{ transition: "fill 0.6s linear" }} />
                <ellipse cx="600" cy="472" rx="720" ry="150" fill="#dbc398" opacity={0.22 + 0.38 * smooth(year, 55, 85)} style={{ transition: "opacity 0.6s linear" }} />
                <circle cx={sunX} cy={sunY} r="30" fill="#e9c87e" opacity={sunOpacity} style={{ transition: "opacity 0.6s linear" }} />

                {/* Hills */}
                <path d="M0,470 C 240,428 480,452 720,438 C 950,425 1100,448 1200,440 L1200,620 L0,620 Z" fill="#7a9b7e" opacity="0.55" />
                <path d="M0,522 C 220,492 460,514 700,502 C 920,490 1080,510 1200,500 L1200,620 L0,620 Z" fill="#43614a" />

                {/* Freshly planted seed row */}
                <g style={{ opacity: 1 - smooth(year, 3, 12), transition: "opacity 0.8s ease" }}>
                  {TREES.map((t, i) => (
                    <circle key={i} cx={t.x} cy={t.baseY - 4} r="3.5" fill="#c8a96e" />
                  ))}
                </g>

                {/* Grass tufts */}
                <g stroke="#7a9b7e" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: 1 - smooth(year, 15, 45), transition: "opacity 0.8s ease" }}>
                  {[140, 300, 520, 660, 830, 1010, 1150].map((x) => (
                    <g key={x}>
                      <line x1={x} y1={560} x2={x} y2={546} />
                      <line x1={x + 8} y1={561} x2={x + 11} y2={548} />
                      <line x1={x - 8} y1={561} x2={x - 11} y2={548} />
                    </g>
                  ))}
                </g>

                {/* The forest — nine trees growing with the year */}
                {TREES.map((t, i) => {
                  const s = Math.max(0.03, growth(year, t.delay)) * t.scale;
                  const h = t.maxH;
                  const r = t.maxH * 0.3;
                  return (
                    <g key={i} transform={`translate(${t.x} ${t.baseY})`}>
                      <g style={{ transform: `scale(${s})`, transformBox: "fill-box", transformOrigin: "50% 100%", transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1)" }}>
                        <rect x={-h * 0.028} y={-h} width={h * 0.056} height={h} rx={h * 0.02} fill="#3a241a" />
                        <circle cx={-r * 0.68} cy={-h + r * 0.15} r={r * 0.72} fill={canopyTone} style={{ transition: "fill 0.6s linear" }} />
                        <circle cx={r * 0.68} cy={-h + r * 0.15} r={r * 0.72} fill={canopyTone} style={{ transition: "fill 0.6s linear" }} />
                        <circle cx={0} cy={-h - r * 0.35} r={r} fill={canopyTone} style={{ transition: "fill 0.6s linear" }} />
                      </g>
                    </g>
                  );
                })}

                {/* Walking trail */}
                <polygon points="562,620 642,620 618,505 592,505" fill="#ede6da" style={detail(38, 50)} />

                {/* Parent + child on the trail */}
                <g transform="translate(604 512)" fill="#2c2c2c" style={detail(40, 52)}>
                  <circle cx="0" cy="-40" r="7" />
                  <rect x="-5.5" y="-34" width="11" height="26" rx="5" />
                  <circle cx="17" cy="-26" r="5" />
                  <rect x="13" y="-21" width="8" height="16" rx="4" />
                </g>

                {/* Deer */}
                <g transform="translate(960 486)" fill="#3a241a" style={detail(24, 34)}>
                  <ellipse cx="0" cy="-14" rx="19" ry="10" />
                  <line x1="14" y1="-18" x2="22" y2="-32" stroke="#3a241a" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="24" cy="-34" r="6" />
                  <line x1="-12" y1="-6" x2="-12" y2="8" stroke="#3a241a" strokeWidth="4" strokeLinecap="round" />
                  <line x1="10" y1="-6" x2="10" y2="8" stroke="#3a241a" strokeWidth="4" strokeLinecap="round" />
                </g>

                {/* Birds */}
                <g stroke="#1a3a2a" strokeWidth="2.5" fill="none" strokeLinecap="round" style={detail(36, 46)}>
                  <path d={`M${300 + Math.min(60, Math.max(0, year - 36))} 150 q7,-8 14,0 q7,-8 14,0`} />
                  <path d={`M${380 + Math.min(80, Math.max(0, year - 36) * 1.2)} 120 q6,-7 12,0 q6,-7 12,0`} />
                  <path d={`M${340 + Math.min(50, Math.max(0, year - 36) * 0.8)} 185 q5,-6 10,0 q5,-6 10,0`} />
                </g>

                {/* Bench */}
                <g transform="translate(178 506)" fill="#3a241a" style={detail(76, 86)}>
                  <rect x="-32" y="-8" width="64" height="6" rx="3" />
                  <rect x="-26" y="-2" width="6" height="14" />
                  <rect x="20" y="-2" width="6" height="14" />
                  <rect x="-32" y="-22" width="64" height="5" rx="2.5" />
                </g>

                {/* Elder with cane + child — the next generation */}
                <g transform="translate(1005 516)" fill="#2c2c2c" style={detail(78, 88)}>
                  <circle cx="0" cy="-38" r="6.5" />
                  <rect x="-5" y="-32" width="10" height="25" rx="5" />
                  <line x1="10" y1="-18" x2="14" y2="4" stroke="#2c2c2c" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="-18" cy="-25" r="4.5" />
                  <rect x="-21.5" y="-20" width="7" height="15" rx="3.5" />
                </g>

                {/* New seedlings rising under the old canopy */}
                <g fill="#a3c4a7" style={detail(72, 84)}>
                  {TREES.filter((_, i) => i % 2 === 0).map((t, i) => (
                    <path key={i} d={`M${t.x + 34} ${t.baseY} l6 -16 l6 16 Z`} />
                  ))}
                </g>

                {/* Dusk veil */}
                <rect x="0" y="0" width="1200" height="620" fill="#0f2419" opacity={smooth(year, 68, 100) * 0.38} pointerEvents="none" style={{ transition: "opacity 0.6s linear" }} />
              </svg>
            </div>

            <div className={styles.hud}>
              <div className={styles.yearRow}>
                <span className={styles.year}>Year {Math.round(year)}</span>
                <span className={styles.generation}>{era.gen}</span>
              </div>
              <div aria-live="polite">
                <h3 className={styles.eraName}>{era.name}</h3>
                <p className={styles.eraLine}>{era.line}</p>
              </div>
              <div className={styles.meters}>
                {meters.map((m) => (
                  <div className={styles.meter} key={m.label}>
                    <span className={styles.meterLabel}>{m.label}</span>
                    <span className={styles.meterValue}>{m.value}%</span>
                    <span className={styles.meterTrack}><span className={styles.meterFill} style={{ width: `${m.value}%` }} /></span>
                  </div>
                ))}
              </div>
              <p className={styles.hudNote}>Illustrative only — every site, species and steward grows differently.</p>
            </div>
          </div>

          <div className={styles.controls}>
            <div className={styles.controlRow}>
              <button
                type="button"
                className={styles.playButton}
                onClick={() => {
                  if (year >= 100) setYear(0);
                  setPlaying((p) => !p);
                }}
                aria-label={playing ? "Pause the forest timeline" : "Play the forest timeline"}
              >
                {playing ? (
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true"><rect x="0" y="0" width="4" height="14" rx="1.5" /><rect x="8" y="0" width="4" height="14" rx="1.5" /></svg>
                ) : (
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true"><path d="M1 1.5v11c0 .8.9 1.3 1.6.9l9-5.5c.6-.4.6-1.4 0-1.8l-9-5.5C1.9.2 1 .7 1 1.5Z" /></svg>
                )}
                {playing ? "Pause" : year >= 100 ? "Watch it again" : "Watch a century pass"}
              </button>
              <input
                className={styles.slider}
                type="range"
                min={0}
                max={100}
                step={1}
                value={Math.round(year)}
                style={{ ["--fill" as string]: `${year}%` }}
                onChange={(e) => {
                  setPlaying(false);
                  setYear(Number(e.target.value));
                }}
                aria-label="Drag through one hundred years of forest growth"
              />
            </div>
            <div className={styles.tickRow} aria-hidden="true">
              <span>YEAR 0</span><span>25</span><span>50</span><span>75</span><span>100</span>
            </div>
            <div className={styles.chips}>
              {ERAS.map((e, i) => (
                <button
                  key={e.name}
                  type="button"
                  className={`${styles.chip} ${i === eraIndex ? styles.chipActive : ""}`}
                  onClick={() => {
                    setPlaying(false);
                    setYear(e.start);
                  }}
                >
                  {e.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Full era text, available to crawlers and screen readers */}
        <ul className={styles.visuallyHidden}>
          {ERAS.map((e) => (
            <li key={e.name}>
              {e.name} (year {e.start}): {e.line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
