"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ctas = [
  {
    icon: <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="w-full h-full"><rect x="10" y="6" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M16 16H32M16 22H28M16 28H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M20 36L24 32L28 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Download Free Planting Guide",
    description: "Everything you need to start your first acre. Site selection, spacing, thinning, and a year-by-year management timeline.",
    href: "/guide",
    btnCls: "bg-gold text-forest-dark border-gold hover:bg-gold-dark hover:border-gold-dark",
    btnText: "Get the Guide →",
  },
  {
    icon: <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="w-full h-full"><path d="M24 6C24 6 8 16 8 26C8 33.7 15.2 40 24 40C32.8 40 40 33.7 40 26C40 16 24 6 24 6Z" stroke="currentColor" strokeWidth="1.5"/><path d="M24 40V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M19 24L24 18L29 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Request Walnut Seedlings",
    description: "Premium black walnut seedlings from our Nova Scotia nursery. A-grade, bare root, and ready to plant.",
    href: "/seedlings",
    btnCls: "bg-forest text-cream border-forest hover:bg-forest-light hover:border-forest-light",
    btnText: "Request Seedlings →",
  },
  {
    icon: <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="w-full h-full"><circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5"/><path d="M24 16V24L30 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="36" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/></svg>,
    title: "Join the Growers List",
    description: "Monthly market insights, planting tips, and early access to seedling availability. No spam. No pressure.",
    href: "/growers",
    btnCls: "bg-transparent text-forest border-forest hover:bg-forest hover:text-cream",
    btnText: "Join Now →",
  },
];

interface TripleCTAProps {
  onOpenLeadForm: () => void;
}

export function TripleCTA({ onOpenLeadForm }: TripleCTAProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 bg-parchment" id="get-started">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="kicker-label text-gold-dark mb-4 inline-block">Ready to Start?</span>
          <h2 className="text-ink mb-6">See What Your Land Could Grow</h2>
          <p className="text-intro max-w-[52ch] mx-auto text-ink-light">
            These offers are low-pressure and completely free. We&apos;re here to help you make a smart decision for your land — on your timeline.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16 max-md:grid-cols-1">
          {ctas.map((cta, i) => (
            <div
              key={i}
              className={`bg-white border-t-4 border-transparent rounded-2xl px-8 py-10 text-center flex flex-col items-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 text-forest mb-6">{cta.icon}</div>
              <h3 className="text-forest mb-4">{cta.title}</h3>
              <p className="text-small text-ink-light mb-8 flex-1">{cta.description}</p>
              <button onClick={onOpenLeadForm} className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-ui text-xs font-bold tracking-[0.08em] uppercase rounded-lg border-2 transition-all duration-300 hover:-translate-y-0.5 ${cta.btnCls}`}>
                {cta.btnText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center p-8 bg-cream-dark rounded-2xl shadow-sm">
          <p className="font-ui text-base text-ink-muted mb-3 font-medium">
            Grown in Nova Scotia. Shipped across Canada. Trusted by landowners coast to coast.
          </p>
          <a href="https://littletreefarmns.com" target="_blank" rel="noopener noreferrer" className="font-ui text-sm font-bold text-forest transition-colors hover:text-gold-dark">
            Visit our nursery store at littletreefarmns.com →
          </a>
        </div>
      </div>
    </section>
  );
}
