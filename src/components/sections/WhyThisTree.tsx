"use client";

import Image from "next/image";
import { useScrollAnimation, useAnimatedCounter } from "@/hooks/useScrollAnimation";

const features = [
  { icon: "✦", title: "Extraordinary Grain", description: "Rich, dark, chocolatey tone with a tight, straight grain that takes finish beautifully. There is no synthetic substitute." },
  { icon: "◆", title: "Consistent Demand", description: "High-end furniture, cabinetry, musical instruments, and luxury interiors all rely on quality walnut. That demand never disappears." },
  { icon: "◈", title: "Limited Supply", description: "Wild black walnut trees of timber quality are increasingly scarce. Plantation-grown walnut commands premium prices." },
  { icon: "❖", title: "Generational Lifespan", description: "A black walnut tree can live over 100 years. A tree planted today could be harvested by your grandchildren." },
];

export function WhyThisTree() {
  const { ref, isVisible } = useScrollAnimation();
  const counter = useAnimatedCounter(100, 2500);

  return (
    <section className="relative overflow-hidden py-28 bg-forest text-cream" id="why-this-tree">
      <div className="absolute inset-0 pattern-dots-dark pointer-events-none z-0" />
      <div
        className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-6">

        {/* ── Top: header + image ── */}
        <div className="grid grid-cols-[1.3fr_1fr] gap-14 items-start mb-16 max-md:grid-cols-1 max-md:gap-10">

          <div
            ref={ref}
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="inline-block font-ui text-[0.72rem] font-bold tracking-[0.2em] uppercase text-gold mb-5">Why This Tree</span>
            <h2 className="font-display text-[clamp(2.2rem,1.8rem+2vw,3.4rem)] font-bold text-cream leading-[1.1] mb-6">
              Black Walnut Is in a Category of Its Own Among North American Hardwoods
            </h2>
            <p className="font-display text-[clamp(1.15rem,1rem+0.5vw,1.3rem)] text-white/90 leading-[1.9] font-medium">
              Black walnut (<em>Juglans nigra</em>) has been prized for centuries — by furniture makers, cabinetmakers, gunsmiths, and now by luxury interior designers and instrument builders around the world.
            </p>
          </div>

          {/* Image — full bleed within its grid cell */}
          <div
            className={`relative w-full overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=85&auto=format&fit=crop"
              alt="Premium dark walnut wood grain with rich chocolate-brown tones"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              style={{ objectFit: "cover" }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ background: "linear-gradient(to top, rgba(15,36,25,0.25) 0%, transparent 50%)" }}
            />
          </div>
        </div>

        {/* ── Feature grid ── */}
        <div className="grid grid-cols-2 gap-6 mb-16 max-md:grid-cols-1">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bg-white/[0.06] border-l-4 border-transparent rounded-xl p-8 transition-all duration-300 hover:bg-white/[0.09] hover:border-gold ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="block font-display text-[1.8rem] text-gold mb-4 leading-none">{f.icon}</span>
              <h3 className="font-display text-[1.3rem] font-bold text-cream mb-3">{f.title}</h3>
              <p className="font-display text-[clamp(1.05rem,0.95rem+0.3vw,1.15rem)] text-white/85 leading-[1.85] font-medium">{f.description}</p>
            </div>
          ))}
        </div>

        {/* ── Counter ── */}
        <div className="text-center py-12 px-10 bg-white/[0.05] rounded-2xl" ref={counter.ref}>
          <p className="font-display text-[clamp(1.15rem,1rem+0.5vw,1.3rem)] text-white/90 max-w-[55ch] mx-auto mb-8 leading-[1.8] font-medium">
            When a high-quality black walnut log reaches the veneer market, a single tree can be worth thousands of dollars.{" "}
            <strong className="text-cream">Not the whole acre. A single tree.</strong>
          </p>
          <span className="font-display text-[clamp(4rem,3rem+3vw,6.5rem)] font-bold text-gold leading-none block">{counter.count}+</span>
          <span className="font-ui text-sm text-white/60 uppercase tracking-[0.1em] font-semibold mt-3 block">
            Years a black walnut tree can live — a true generational asset
          </span>
        </div>
      </div>
    </section>
  );
}
