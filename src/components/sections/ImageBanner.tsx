"use client";

import Image from "next/image";

interface ImageBannerProps {
  src: string;
  alt: string;
  quote: string;
  attribution?: string;
  id?: string;
}

export function ImageBanner({ src, alt, quote, attribution, id }: ImageBannerProps) {
  return (
    <div className="relative w-full h-[480px] max-md:h-[360px] overflow-hidden flex items-center justify-center" id={id}>
      <div className="absolute inset-0">
        <Image src={src} alt={alt} fill sizes="100vw" style={{ objectFit: "cover" }} quality={85} />
      </div>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(10,20,12,0.48) 0%, rgba(10,20,12,0.65) 50%, rgba(10,20,12,0.52) 100%)" }}
      />
      <div className="relative z-10 text-center px-6 max-w-[900px]">
        <blockquote
          className="text-3xl italic font-normal text-cream leading-snug max-md:text-2xl"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
        >
          <span className="text-gold text-[1.1em] inline-block">&ldquo;</span>
          {quote}
          <span className="text-gold text-[1.1em] inline-block">&rdquo;</span>
        </blockquote>
        {attribution && (
          <p className="kicker-label !text-sm text-white/65 mt-6">
            — {attribution}
          </p>
        )}
      </div>
    </div>
  );
}
