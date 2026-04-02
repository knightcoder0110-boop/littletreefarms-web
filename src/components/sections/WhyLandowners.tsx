"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { number: "01", title: "It Uses Land That Was Doing Nothing", description: "That field edge. That strip along the fence line. That back corner that floods a little in spring. Black walnut is adaptable and can thrive on land that isn't ideal for crops or grazing." },
  { number: "02", title: "It Requires Very Little Ongoing Work", description: "Once established, a black walnut plantation doesn't need daily attention. You're not farming it like a crop. You're stewarding it like a forest. The trees do the work." },
  { number: "03", title: "It Creates Something Real and Lasting", description: "There's a deep satisfaction in planting something that will outlive you. Something your children will inherit. Something that grows more valuable with every passing year." },
  { number: "04", title: "It Diversifies Your Land's Income Potential", description: "Adding a timber component to your land creates a long-term asset that doesn't compete with your current operation — it complements it." },
];

export function WhyLandowners() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden py-24 bg-forest text-cream" id="why-landowners">
      <div className="absolute inset-0 pattern-lines-dark pointer-events-none z-0" />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="kicker-label text-gold mb-4 inline-block">Why Landowners Love This System</span>
          <h2 className="text-cream mb-4">Four Reasons This Makes Sense for Your Land</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`p-8 bg-white/[0.05] border-l-4 border-transparent rounded-xl transition-all duration-300 hover:bg-white/[0.08] hover:border-gold hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="inline-block font-display text-[3rem] font-bold text-gold opacity-35 leading-none mb-4">{reason.number}</span>
              <h3 className="text-cream mb-3">{reason.title}</h3>
              <p className="text-white/88 font-medium">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
