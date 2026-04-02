"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stages = [
  { years: "Year 0",     title: "Planting",             trees: 218, description: "Plant 218 trees per acre at 10×20 ft spacing. The seedlings go in the ground. The clock starts." },
  { years: "Years 10–15", title: "First Thinning",     trees: 100, description: "Thin to approximately 100 trees per acre. Your best trees are now getting the space they need." },
  { years: "Years 20–25", title: "Second Thinning",    trees: 50,  description: "Thin again to approximately 50 trees per acre. The remaining trees are developing real timber value." },
  { years: "Years 35–50", title: "Final Harvest Stand", trees: 25, description: "25 trees per acre remain, spaced 35–40 feet apart. These are your timber trees — decades of clean, straight growth." },
];

export function Timeline() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden py-24 bg-parchment" id="timeline">
      <div className="absolute inset-0 pattern-lines pointer-events-none z-0" />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="kicker-label text-gold-dark mb-4 inline-block">The Timeline</span>
          <h2 className="text-ink mb-6">Patience Is the Price of Admission</h2>
          <p className="text-intro mx-auto max-w-[45ch] text-ink-light">Here&apos;s what the journey looks like.</p>
        </div>

        <div className="relative max-w-[680px] mx-auto max-[600px]:max-w-full">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5 opacity-30"
            style={{ background: "linear-gradient(to bottom, #c8a96e, #1a3a2a, #c8a96e)" }}
          />

          {stages.map((stage, i) => (
            <div
              key={i}
              className={`relative pl-[60px] pb-10 last:pb-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-[10px] top-2 w-[22px] h-[22px] rounded-full bg-parchment border-2 border-gold flex items-center justify-center shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gold block" />
              </div>

              <div className="bg-white border-l-4 border-gold rounded-xl px-8 py-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-x-1 max-[600px]:px-5">
                <span className="kicker-label !text-[0.65rem] text-gold-dark mb-2 block">{stage.years}</span>
                <h3 className="text-forest mb-3">{stage.title}</h3>
                <p className="text-ink-light mb-4">{stage.description}</p>
                <div className="inline-flex items-baseline gap-2 px-4 py-2 bg-parchment rounded-full">
                  <span className="font-display text-[clamp(1.3rem,1.1rem+0.5vw,1.6rem)] font-bold text-forest leading-none">{stage.trees}</span>
                  <span className="kicker-label !text-[0.65rem] text-ink-muted">trees/acre</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
