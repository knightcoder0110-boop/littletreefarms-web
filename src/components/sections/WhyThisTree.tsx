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
        <div className="grid grid-cols-[1.1fr_1fr] gap-16 items-stretch mb-16 max-md:grid-cols-1 max-md:gap-10">

          <div
            ref={ref}
            className={`flex flex-col justify-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="kicker-label text-gold mb-6 inline-block">Why This Tree</span>
            <h2 className="text-cream mb-8">
              Black Walnut Is in a Category of Its Own Among North American Hardwoods
            </h2>
            <p className="text-intro text-white/90 font-semibold mb-12">
              Black walnut (<em>Juglans nigra</em>) has been prized for centuries — by furniture makers, cabinetmakers, gunsmiths, and now by luxury interior designers and instrument builders around the world.
            </p>

            <div className="flex flex-col gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-5">
                  <span className="shrink-0 text-gold text-2xl pt-1 leading-none">{f.icon}</span>
                  <div>
                    <h3 className="text-cream mb-2">{f.title}</h3>
                    <p className="text-white/80 font-medium">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative w-full h-full min-h-[600px] max-md:min-h-[400px] overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Image
              src="/main-landing-page/tall-image.jpg"
              alt="Mature black walnut tree with spreading branches and full canopy"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(15,36,25,0.2) 0%, transparent 100%)" }}
            />
          </div>
        </div>

        {/* ── Counter ── */}
        <div className="text-center py-12 px-10 bg-white/[0.05] rounded-2xl" ref={counter.ref}>
          <p className="text-intro text-white/90 mx-auto max-w-[55ch] mb-8 font-medium">
            When a high-quality black walnut log reaches the veneer market, a single tree can be worth thousands of dollars.{" "}
            <strong className="text-cream">Not the whole acre. A single tree.</strong>
          </p>
          <span className="font-display text-[clamp(4rem,3rem+3vw,6.5rem)] font-bold text-gold leading-none block">{counter.count}+</span>
          <span className="kicker-label !text-sm text-white/60 mt-3 block">
            Years a black walnut tree can live — a true generational asset
          </span>
        </div>
      </div>
    </section>
  );
}
