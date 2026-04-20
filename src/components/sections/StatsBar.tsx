"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "$8", label: "Per Seedling" },
  { value: "218", label: "Trees Per Acre" },
  { value: "$125K+", label: "Potential Per Acre" },
];

export function StatsBar() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[#0d2318]" aria-label="Key investment figures">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto px-6 py-12 flex items-center justify-center gap-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-2 text-center flex-1 ${i < stats.length - 1 ? "border-r border-white/[0.08]" : ""}`}
          >
            <span className="font-display text-[clamp(2.2rem,1.8rem+1.5vw,3rem)] font-bold text-gold leading-none">
              {stat.value}
            </span>
            <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.15em] text-cream/40">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
