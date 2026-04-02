"use client";

import Link from "next/link";
import { useScrollAnimation, useAnimatedCounter } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: "⊞", title: "10 × 20 ft Spacing", description: "Trees are planted in a grid pattern — 10 feet apart within rows, 20 feet between rows. This drives upward growth, producing tall, straight trunks with minimal branching." },
  { icon: "🌱", title: "218 Trees Per Acre", description: "At this spacing, you plant approximately 218 trees per acre. Each seedling costs $8, making your total seedling investment just $1,744 per acre." },
  { icon: "✂", title: "Strategic Thinning", description: "Over time, you thin the plantation — removing lower-value trees and giving the best ones more room. This is how you turn 218 seedlings into 25 exceptional timber trees." },
];

export function SystemOverview() {
  const { ref, isVisible } = useScrollAnimation();
  const treesCounter = useAnimatedCounter(218, 2000);
  const costCounter  = useAnimatedCounter(1744, 2000);

  return (
    <section className="relative overflow-hidden py-24 bg-cream" id="system">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ backgroundImage: "radial-gradient(circle, rgba(26,58,42,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="kicker-label text-gold-dark mb-4 inline-block">The System</span>
          <h2 className="text-ink mb-6">How the Planting System Works</h2>
          <p className="text-intro max-w-[50ch] mx-auto text-ink-light">Clear, proven, and built for timber value.</p>
        </div>

        <div className="flex flex-col gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-start gap-6 p-8 bg-white rounded-xl border-l-4 border-transparent shadow-sm transition-all duration-300 hover:border-gold hover:shadow-lg hover:translate-x-2 max-md:flex-col max-md:gap-4 max-md:hover:translate-x-0 max-md:hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-parchment rounded-xl text-2xl">{step.icon}</div>
              <div>
                <h3 className="text-forest mb-2">{step.title}</h3>
                <p className="text-ink-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Explanation */}
        <div className="grid grid-cols-[1.5fr_1fr] gap-12 items-center p-10 bg-parchment rounded-2xl mb-12 max-md:grid-cols-1 max-md:gap-8 max-md:p-6">
          <div>
            <h3 className="text-ink mb-4">Why Tight Spacing Matters</h3>
            <p className="text-ink-light mb-4">
              When trees are planted close together, they compete for light. That competition drives them upward, producing tall, straight trunks with minimal branching in the lower sections. This is what creates high-value timber.
            </p>
            <p className="text-ink-light">
              A wide-open-grown walnut tree spreads its branches low and wide — beautiful, but not ideal for timber. A plantation-grown walnut grows tall and clean.
            </p>
          </div>
          <div className="flex flex-col gap-5" ref={treesCounter.ref}>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <span className="block font-display text-[clamp(2rem,1.8rem+1vw,2.6rem)] font-bold text-forest leading-none mb-2">{treesCounter.count}</span>
              <span className="kicker-label !text-[0.7rem] text-ink-muted">trees planted per acre</span>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm" ref={costCounter.ref}>
              <span className="block font-display text-[clamp(2rem,1.8rem+1vw,2.6rem)] font-bold text-forest leading-none mb-2">${costCounter.count.toLocaleString()}</span>
              <span className="kicker-label !text-[0.7rem] text-ink-muted">total seedling cost per acre</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/planting-system" className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-lg bg-forest text-cream border-2 border-forest transition-all duration-300 hover:bg-forest-light hover:border-forest-light hover:-translate-y-0.5 hover:shadow-lg">
            Learn the Full Planting System →
          </Link>
        </div>
      </div>
    </section>
  );
}
