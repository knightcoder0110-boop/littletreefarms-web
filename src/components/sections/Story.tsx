"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Story() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden py-28 bg-parchment" id="story">
      {/* Topographic pattern */}
      <div className="absolute inset-0 pattern-topo pointer-events-none z-0" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[90px] opacity-40 z-[1]"
        style={{ background: "linear-gradient(to bottom, transparent, #c8a96e, transparent)" }}
      />

      <div className="relative z-[1] max-w-[780px] mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* ─── Centered header ─── */}
          <div className="text-center mb-12">
            <span className="kicker-label text-gold-dark mb-5 inline-block">
              The Story That Started It All
            </span>
            <h2 className="text-ink mb-4">
              A Grandfather&apos;s Fence Line.{" "}
              <em className="text-walnut italic">A Family&apos;s Fortune.</em>
            </h2>
            <div className="w-16 h-[3px] bg-gold mx-auto mt-8" />
          </div>

          {/* ─── Left-aligned prose ─── */}
          <div className="mt-10">
            <p className="text-intro text-ink-light font-medium mb-8 w-full">
              There&apos;s a story that gets told in certain farming families — passed down quietly, like the land itself. A grandfather planted a row of black walnut trees along the edge of his property back in the 1960s. He didn&apos;t think much of it. He just liked the idea of doing something useful with that strip of ground that was too rocky to plow and too shaded to graze.
            </p>
            <p className="text-intro text-ink-light font-medium mb-8 w-full">
              Decades later, his grandchildren had those trees appraised. The timber cruiser walked the row, measured the trunks, checked the grain. Then he handed over a number that made the family go quiet.
            </p>

            <blockquote className="text-2xl italic text-walnut py-8 px-10 border-l-4 border-gold my-10 w-full bg-gold/[0.06] rounded-r-xl shadow-sm max-md:px-5">
              &ldquo;Those trees — planted with a shovel and a little patience — were worth more per acre than most of the farmland in the county.&rdquo;
            </blockquote>

            <p className="text-intro text-ink-light font-medium w-full">
              That story isn&apos;t rare. It&apos;s just not told loudly enough. And if you own land — even a few acres of unused field, old pasture, or scrubby ground you haven&apos;t known what to do with — this page was written for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
