"use client";

import Link from "next/link";
import { TreeRings } from "@/components/land/TreeRings";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Homepage teaser for the Land Stewardship Program (/land).
 * Sits between HonestTruth and FAQ: after the timber-investment story,
 * it welcomes the other audience — owners of rural land they no longer want.
 */
export function LandStewardship() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 overflow-hidden bg-cream" id="land-stewardship">
      <div className="max-w-300 mx-auto px-8">
        <div
          ref={ref}
          className={`grid grid-cols-[1.15fr_0.85fr] gap-16 items-center transition-all duration-1000 max-[940px]:grid-cols-1 max-[940px]:gap-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div>
            <span className="kicker-label text-walnut mb-4 inline-block">New — Land Stewardship Program</span>
            <h2 className="text-forest-dark mb-5">
              Already Own Land You <em className="text-gold-dark italic">No Longer Want?</em>
            </h2>
            <p className="text-forest/85 text-lg leading-relaxed mb-4 max-w-[52ch]">
              A woodlot you inherited. Farmland nobody farms anymore. A property the kids won&apos;t
              take on. Rural land can keep serving a meaningful purpose — as restored forest,
              wildlife habitat, seed orchards or a living legacy in your name.
            </p>
            <p className="text-forest/70 leading-relaxed mb-9 max-w-[52ch]">
              Our land stewardship program helps Canadian landowners explore donation, legacy,
              transfer and long-term stewardship options. No pressure. No obligation. Every
              property considered individually.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/land"
                className="inline-flex items-center gap-2 px-7 py-4 font-ui text-sm font-bold tracking-wide rounded-xl bg-forest-dark text-cream border-2 border-forest-dark transition-all duration-300 hover:bg-forest hover:border-forest hover:-translate-y-0.5"
              >
                Explore the Program →
              </Link>
              <Link
                href="/land#inquire"
                className="inline-flex items-center gap-2 px-7 py-4 font-ui text-sm font-bold tracking-wide rounded-xl bg-transparent text-forest-dark border-2 border-forest-dark/35 transition-all duration-300 hover:border-forest-dark hover:-translate-y-0.5"
              >
                Tell Us About Your Property
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center max-[940px]:hidden">
            <div className="rounded-full border border-gold/30 p-10 bg-white/40">
              <TreeRings size={300} color="#c8a96e" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
