"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function HonestTruth() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-[600px] py-24 overflow-hidden flex items-center max-md:min-h-0" id="honest-truth">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/main-landing-page/trees-from-groundview.jpg"
          alt="Trees viewed from ground level looking up at the canopy"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(10,20,12,0.58) 0%, rgba(10,20,12,0.52) 40%, rgba(10,20,12,0.65) 100%)" }}
      />

      <div className="relative z-[2] max-w-[800px] mx-auto px-6 w-full">
        <div
          ref={ref}
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="font-display text-[2rem] text-gold block mb-3">✦</span>
          <span className="kicker-label text-gold mb-4 inline-block">The Honest Truth</span>
          <h2 className="text-white mb-4">
            This Is a <em className="text-gold italic not-italic">Patient Investment</em>
          </h2>
          <div className="w-14 h-[3px] bg-gold mx-auto my-8" />

          <p className="text-intro text-white/88 mx-auto mb-8 max-w-[55ch] font-medium" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}>
            We won&apos;t pretend that black walnut timber is a quick return. It&apos;s not. If you&apos;re looking for something that pays off in 5 years, this isn&apos;t it. But if you&apos;re a landowner who thinks in decades — who wants to do something meaningful with your land — this is one of the most elegant systems available.
          </p>

          <blockquote
            className="text-2xl italic text-cream py-10 px-12 mx-auto my-10 max-w-[55ch] rounded-2xl border-l-4 border-gold shadow-xl max-md:px-6"
            style={{ background: "rgba(10,30,15,0.58)", backdropFilter: "blur(12px)" }}
          >
            <span className="text-gold text-[1.8rem] leading-none block mb-2 opacity-50 font-display">&ldquo;</span>
            You plant a tree. You walk away. And every single year, without exception, that tree does what no stock, no bond, and no savings account can do — it grows.
          </blockquote>

          <p className="text-intro text-white/82 mx-auto mt-8 font-medium" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}>
            That&apos;s the honest pitch. No hype. No pressure. Just trees, time, and the most valuable hardwood on the continent.
          </p>
        </div>
      </div>
    </section>
  );
}
