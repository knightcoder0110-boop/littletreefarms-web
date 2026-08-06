"use client";

import { useEffect, useRef, useState } from "react";

/**
 * TreeRings — the Land Stewardship signature motif.
 * Concentric growth rings, slightly offset like a real trunk cross-section.
 * Rings trace themselves in once when scrolled into view (subtle), then rest.
 * Purely decorative: aria-hidden, no content.
 */
const RINGS = [
  { r: 34, dx: 1, dy: -1, o: 0.95 },
  { r: 58, dx: -2, dy: 1, o: 0.8 },
  { r: 84, dx: 2, dy: 2, o: 0.65 },
  { r: 112, dx: -1, dy: -2, o: 0.52 },
  { r: 142, dx: 2, dy: -1, o: 0.4 },
  { r: 172, dx: -2, dy: 2, o: 0.3 },
  { r: 198, dx: 1, dy: 1, o: 0.22 },
];

const YEARS = ["10", "25", "50", "100", "200"];

export function TreeRings({
  size = 380,
  withYears = false,
  color = "#c8a96e",
  className,
}: {
  size?: number;
  withYears?: boolean;
  color?: string;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 420 420"
      aria-hidden="true"
      focusable="false"
    >
      {RINGS.map((ring, i) => (
        <circle
          key={ring.r}
          cx={210 + ring.dx}
          cy={210 + ring.dy}
          r={ring.r}
          fill="none"
          stroke={color}
          strokeWidth={i === 0 ? 1.6 : 1.1}
          opacity={ring.o}
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={drawn ? 0 : 1}
          style={{
            transitionProperty: "stroke-dashoffset",
            transitionDuration: "1.7s",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: `${i * 0.14}s`,
          }}
        />
      ))}
      <circle
        cx="210"
        cy="210"
        r="6"
        fill={color}
        style={{
          opacity: drawn ? 1 : 0,
          transition: "opacity 0.6s ease 0.2s",
        }}
      />
      {withYears &&
        YEARS.map((year, i) => {
          const ring = RINGS[Math.min(i + 2, RINGS.length - 1)];
          const angle = (-38 * Math.PI) / 180;
          const x = 210 + ring.dx + (ring.r + 14) * Math.cos(angle);
          const y = 210 + ring.dy + (ring.r + 14) * Math.sin(angle);
          return (
            <text
              key={year}
              x={x}
              y={y}
              textAnchor="middle"
              fill={color}
              opacity={drawn ? 0.75 : 0}
              fontFamily="Arial, sans-serif"
              fontSize="11"
              letterSpacing="2"
              style={{ transition: `opacity 0.8s ease ${0.9 + i * 0.1}s` }}
            >
              {year}
            </text>
          );
        })}
    </svg>
  );
}
