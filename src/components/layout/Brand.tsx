import Link from "next/link";
import { businessInfo } from "@/lib/config/business";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M24 4c7.5 0 13 5 13 12 0 6.5-5.5 11.5-13 11.5S11 22.5 11 16C11 9 16.5 4 24 4Z" />
      <path d="M24 10v17.5M24 14l-5-3.5M24 18l5.5-4M24 22l-6-4" opacity="0.7" />
      <path d="M24 27.5V36" />
      <path d="M10 36h28" />
      <path d="M24 36v6M24 38l-6 4M24 38l6 4M18 37l-7 4M30 37l7 4" opacity="0.8" />
    </svg>
  );
}

type BrandProps = {
  variant?: "compact" | "full";
  tone?: "light" | "dark";
  className?: string;
};

export function Brand({ variant = "compact", tone = "light", className = "" }: BrandProps) {
  const isDark = tone === "dark";
  const titleClass = isDark ? "text-cream" : "text-ink";
  const markClass = isDark ? "text-cream" : "text-forest";

  if (variant === "full") {
    return (
      <Link href="/" className={`flex flex-col items-start gap-3 transition-opacity hover:opacity-80 ${className}`} aria-label="Home">
        <BrandMark className={`h-16 w-16 ${markClass}`} />
        <div>
          <p className={`font-display text-2xl font-semibold uppercase tracking-[0.14em] ${titleClass}`}>
            {businessInfo.name}
          </p>
          <p className="mt-1 flex items-center gap-2 font-ui text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gold">
            <span className="h-px w-6 bg-gold/70" aria-hidden="true" />
            {businessInfo.address.state}
            <span className="h-px w-6 bg-gold/70" aria-hidden="true" />
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={`group flex items-center gap-2.5 transition-opacity hover:opacity-80 ${className}`} aria-label="Home">
      <BrandMark className={`h-9 w-9 shrink-0 ${markClass} transition-colors group-hover:text-gold`} />
      <span className="flex flex-col">
        <span className={`font-display text-lg font-semibold uppercase leading-none tracking-[0.14em] ${titleClass}`}>
          {businessInfo.name}
        </span>
        <span className="mt-1 font-ui text-[0.56rem] font-bold uppercase leading-none tracking-[0.14em] text-gold">
          {businessInfo.address.state}
        </span>
      </span>
    </Link>
  );
}
