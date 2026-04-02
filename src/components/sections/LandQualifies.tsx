"use client";

import Link from "next/link";
import { useScrollAnimation, useAnimatedCounter } from "@/hooks/useScrollAnimation";

const qualifications = [
  "Empty fields not in active crop rotation",
  "Pasture edges and fence lines",
  "Acreage around homes and rural properties",
  "Old farmland retired from production",
  "Floodplain edges and creek margins",
];

const CheckIcon = () => (
  <svg className="shrink-0 w-[22px] h-[22px] text-forest" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function LandQualifies() {
  const { ref, isVisible } = useScrollAnimation();
  const c1 = useAnimatedCounter(218,  2000);
  const c2 = useAnimatedCounter(1744, 2000);
  const c3 = useAnimatedCounter(25,   1500);
  const c4 = useAnimatedCounter(125,  2000);

  const stats = [
    { ref: c1.ref, value: c1.count,              label: "Trees planted per acre" },
    { ref: c2.ref, value: `$${c2.count.toLocaleString()}`, label: "Seedling cost per acre" },
    { ref: c3.ref, value: c3.count,              label: "Final timber trees per acre" },
    { ref: c4.ref, value: `$${c4.count},000+`,   label: "Potential premium value per acre" },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-cream" id="your-land">
      <div className="absolute inset-0 pattern-crosshatch pointer-events-none z-0" />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-[1.2fr_1fr] gap-16 items-start max-md:grid-cols-1 max-md:gap-10">

          {/* Content */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="kicker-label text-gold-dark mb-4 inline-block">Your Land Qualifies</span>
            <h2 className="text-ink mb-8">You Might Be Surprised How Much Land Qualifies</h2>

            <ul className="mb-8">
              {qualifications.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-ink py-3 border-b border-black/[0.05] last:border-0">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-ink-light italic mb-8">
              You don&apos;t need to convert your entire farm. Even one acre — planted thoughtfully — begins a process that compounds over time.
            </p>

            <Link href="/your-land" className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-lg bg-forest text-cream border-2 border-forest transition-all duration-300 hover:bg-forest-light hover:border-forest-light hover:-translate-y-0.5 hover:shadow-lg">
              Check If Your Land Qualifies →
            </Link>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <div key={i} ref={stat.ref} className="text-center py-8 px-5 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <span className="block font-display text-[clamp(1.8rem,1.5rem+1vw,2.4rem)] font-bold text-forest leading-none mb-2">{stat.value}</span>
                <span className="kicker-label !text-[0.65rem] text-ink-muted leading-snug block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
