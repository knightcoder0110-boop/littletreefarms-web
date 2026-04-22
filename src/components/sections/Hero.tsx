"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  onOpenLeadForm: () => void;
}

export function Hero({ onOpenLeadForm }: HeroProps) {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden" id="hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/main-landing-page/black-walnut-tree.jpg"
          alt="Tall mature black walnut trees reaching into a clear blue sky at Little Tree Farm"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(15,36,25,0.85) 0%, rgba(26,58,42,0.75) 40%, rgba(15,36,25,0.88) 100%)" }}
      />

      {/* Headline — vertically centered in the hero */}
      <div
        className="relative z-[2] max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center"
        style={{ paddingTop: "calc(80px + 4rem)", paddingBottom: "7rem" }}
      >
        <div
          className="text-center max-w-[860px]"
          style={{ animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <span className="kicker-label text-gold mb-6 inline-block">
            Black Walnut Timber Investment
          </span>
          <h1 className="text-cream tracking-[-0.02em] mb-8">
            What If the Best Investment You Ever Made Was Already{" "}
            <em className="text-gold not-italic">Growing in Your Backyard?</em>
          </h1>
          <p className="text-intro text-white/75 max-w-[600px] mx-auto mb-10">
            Landowners across North America are quietly turning unused fields and forgotten pastures into generational timber wealth — with one of nature&apos;s most valuable hardwood trees.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 max-md:flex-col max-md:w-full">
            <button
              onClick={onOpenLeadForm}
              className="inline-flex items-center gap-2 px-9 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-lg bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark hover:-translate-y-0.5 max-md:w-full justify-center"
            >
              Download Free Planting Guide
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <a
              href="#story"
              className="inline-flex items-center gap-2 px-9 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-lg bg-transparent text-gold border-2 border-gold/30 transition-all duration-300 hover:bg-gold/10 hover:border-gold hover:-translate-y-0.5 max-md:w-full justify-center"
            >
              Read the Story
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>


    </section>
  );
}
