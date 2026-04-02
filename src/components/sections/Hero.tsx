"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden" id="hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=85&auto=format&fit=crop"
          alt="Tall ancient forest with dramatic light shafts — representing the long-term power of timber investment"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(15,36,25,0.85) 0%, rgba(26,58,42,0.75) 40%, rgba(15,36,25,0.88) 100%)" }}
      />

      <div
        className="relative z-[2] max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center justify-center min-h-dvh gap-14"
        style={{ paddingTop: "calc(80px + 4rem)", paddingBottom: "3rem" }}
      >
        {/* Headline block */}
        <div
          className="text-center max-w-[860px]"
          style={{ animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <span className="inline-block font-ui text-xs font-bold tracking-[0.2em] uppercase text-gold mb-6">
            Black Walnut Timber Investment
          </span>
          <h1
            className="font-display text-[clamp(3.5rem,3rem+3vw,5.8rem)] font-bold text-cream leading-[1.05] tracking-[-0.02em] mb-8"
          >
            What If the Best Investment You Ever Made Was Already{" "}
            <em className="text-gold not-italic">Growing in Your Backyard?</em>
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-[600px] mx-auto mb-10 !font-ui">
            Landowners across North America are quietly turning unused fields and forgotten pastures into generational timber wealth — with one of nature&apos;s most valuable hardwood trees.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 max-md:flex-col max-md:w-full">
            <Link
              href="/guide"
              className="inline-flex items-center gap-2 px-9 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-lg bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark hover:-translate-y-0.5 max-md:w-full justify-center"
            >
              Download Free Planting Guide
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <a
              href="#story"
              className="inline-flex items-center gap-2 px-9 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-lg bg-transparent text-gold border-2 border-gold/30 transition-all duration-300 hover:bg-gold/10 hover:border-gold hover:-translate-y-0.5 max-md:w-full justify-center"
            >
              Read the Story
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 px-10 py-7 bg-white/[0.07] rounded-2xl backdrop-blur-lg"
          style={{ animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
        >
          {[
            { value: "$8", label: "Per Seedling" },
            { value: "218", label: "Trees Per Acre" },
            { value: "$125K+", label: "Potential Per Acre" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center">
              <span className="font-display text-[clamp(1.8rem,1.5rem+1.2vw,2.4rem)] font-bold text-cream leading-none">{stat.value}</span>
              <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <span className="absolute bottom-3 right-4 z-10 text-[10px] text-white/25">
        Photo by <a href="https://unsplash.com/@kazuend" target="_blank" rel="noopener noreferrer" className="underline text-white/35">kazuend</a> on Unsplash
      </span>
    </section>
  );
}
