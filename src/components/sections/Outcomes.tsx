"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tiers = [
  {
    tier: "Conservative",
    perTree: "$1,000",
    perAcre: "$25,000",
    description: "Average quality on average ground",
    highlight: false,
  },
  {
    tier: "Mid-Range",
    perTree: "$2,500",
    perAcre: "$62,500",
    description: "Good quality with proper management",
    highlight: true,
  },
  {
    tier: "Premium",
    perTree: "$5,000",
    perAcre: "$125,000",
    description: "Excellent trees on good soil, veneer quality",
    highlight: false,
  },
];

export function Outcomes() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden py-28 bg-cream" id="outcomes">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 50%, rgba(200,169,110,0.04) 0%, transparent 50%), radial-gradient(ellipse at 85% 30%, rgba(26,58,42,0.03) 0%, transparent 40%)",
        }}
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="kicker-label text-gold-dark mb-5 inline-block">
            Potential Outcomes
          </span>
          <h2 className="text-ink mb-6">
            What Might 25 Trees Per Acre{" "}
            <em className="text-gold-dark italic">Be Worth?</em>
          </h2>
          <p className="text-intro max-w-[55ch] mx-auto text-ink-light font-medium">
            These are honest scenarios based on real market data. Outcomes depend
            on log quality, site conditions, and market timing.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12 max-md:grid-cols-1">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full ${
                tier.highlight
                  ? "bg-[#0a0a0a] text-cream shadow-2xl scale-[1.05] border border-gold/30 z-10"
                  : "bg-white text-ink shadow-lg hover:shadow-xl mt-4 mb-4"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {tier.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-forest-dark kicker-label !text-[0.7rem] px-6 py-2 rounded-full whitespace-nowrap shadow-md">
                  Most Likely
                </span>
              )}

              <span
                className={`kicker-label !text-[0.75rem] mb-6 block ${
                  tier.highlight ? "text-gold-light" : "text-ink-muted"
                }`}
              >
                {tier.tier}
              </span>

              <div className="mb-6">
                <div className="flex flex-col items-center gap-1 py-3">
                  <span className={`kicker-label !text-[0.65rem] ${tier.highlight ? "text-white/50" : "text-ink-muted"}`}>
                    Per Tree
                  </span>
                  <span className={`font-display text-[clamp(1.5rem,1.3rem+0.6vw,1.85rem)] font-bold leading-none ${tier.highlight ? "text-cream" : "text-ink"}`}>
                    {tier.perTree}
                  </span>
                </div>
                <div className={`w-12 h-px mx-auto opacity-40 ${tier.highlight ? "bg-gold" : "bg-gold"}`} />
                <div className="flex flex-col items-center gap-1 py-3">
                  <span className={`kicker-label !text-[0.65rem] ${tier.highlight ? "text-white/50" : "text-ink-muted"}`}>
                    Per Acre (25 trees)
                  </span>
                  <span className={`font-display text-[clamp(2rem,1.7rem+1vw,2.6rem)] font-bold leading-none ${tier.highlight ? "text-gold" : "text-forest"}`}>
                    {tier.perAcre}
                  </span>
                </div>
              </div>

              <p className={`italic text-small ${tier.highlight ? "text-white/70" : "text-ink-muted"}`}>
                {tier.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[700px] mx-auto mb-12 text-center">
          <p className="text-ink-muted italic">
            We want to be clear: these outcomes are not guaranteed. Timber
            markets fluctuate. Site quality matters. Management matters. But the
            underlying economics of black walnut timber have been consistent for
            generations, and there is no reason to believe that will change.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/returns-calculator"
            className="inline-flex items-center gap-2 px-10 py-5 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl bg-forest text-cream border-2 border-forest transition-all duration-300 hover:bg-forest-light hover:border-forest-light hover:-translate-y-0.5 hover:shadow-xl"
          >
            Calculate Your Potential Returns →
          </Link>
        </div>
      </div>
    </section>
  );
}
