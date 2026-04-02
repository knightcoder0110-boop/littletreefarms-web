"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="w-full h-full">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
        <path d="M24 14V34M24 14L18 20M24 14L30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Plant a Tree",
    text: "You plant a tree. The tree grows. You don\u2019t need to be a forester. You don\u2019t need expensive equipment. You need land, seedlings, and patience.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="w-full h-full">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
        <path d="M16 28L22 22L26 26L32 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="20" r="2" fill="currentColor"/>
      </svg>
    ),
    title: "Watch It Compound",
    text: "Over decades, that tree becomes increasingly rare and increasingly valuable. Black walnut timber value compounds naturally \u2014 no active management required.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="w-full h-full">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
        <path d="M18 30C18 30 20 26 24 26C28 26 30 30 30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="21" r="1.5" fill="currentColor"/>
        <circle cx="28" cy="21" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "Harvest Generational Wealth",
    text: "A single tree can be worth thousands. Your children or grandchildren inherit not just land \u2014 but legacy timber that grows more valuable every year.",
  },
];

interface InvestmentProps {
  onOpenLeadForm: () => void;
}

export function Investment({ onOpenLeadForm }: InvestmentProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden py-24 bg-cream" id="investment">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ backgroundImage: "radial-gradient(circle, rgba(200,169,110,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="kicker-label text-gold-dark mb-4 inline-block">A Different Kind of Investment</span>
          <h2 className="text-ink mb-6">
            This Investment Doesn&apos;t Fluctuate With the Market.<br />
            <em className="text-forest not-italic italic">It Just Grows.</em>
          </h2>
          <p className="text-intro max-w-[55ch] mx-auto text-ink-light">
            Black walnut timber is one of the most quietly powerful long-term investments available to landowners today. Not because of some complicated financial scheme. But because of simple biology and simple economics.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12 max-md:grid-cols-1">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-8 shadow-md border-l-4 border-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-gold ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 text-forest mb-5">{card.icon}</div>
              <h3 className="text-forest mb-3">{card.title}</h3>
              <p className="text-ink-light">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenLeadForm}
            className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-lg border-2 border-forest text-forest transition-all duration-300 hover:bg-forest hover:text-cream hover:-translate-y-0.5"
          >
            Request Walnut Seedlings →
          </button>
        </div>
      </div>
    </section>
  );
}
