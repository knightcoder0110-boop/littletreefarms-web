/**
 * PlantingGrid — 2D SVG schematic of the 14 × 14 ft square planting layout.
 *
 * Pure presentational component (no hooks), so it renders in both server and
 * client trees. Draws one acre as a 15 × 15 square grid (≈222 trees/acre at
 * 14 ft spacing) and can optionally highlight the ~43 final-crop trees that
 * remain after thinning.
 */

const GRID = 15; // points per side → 15 × 15 = 225 ≈ 222 trees per acre

// Evenly spaced indices used to mark the ~43 final-crop trees (7 cols × 6 rows = 42 ≈ 43)
const FINAL_COLS = [0, 2, 5, 7, 9, 12, 14];
const FINAL_ROWS = [0, 3, 6, 8, 11, 14];

// Layout geometry (SVG user units)
const M_LEFT = 70;
const M_TOP = 58;
const INNER = 330;
const STEP = INNER / (GRID - 1);

const COLORS = {
  acreFill: "#f4efe3",
  acreStroke: "#c8a96e",
  planted: "#2f5a43",
  final: "#c8a96e",
  finalRing: "#1a3a2a",
  dim: "#8a8474",
  caption: "#5b574c",
};

interface PlantingGridProps {
  className?: string;
  /** Highlight the ~43 final-crop trees that remain after thinning. */
  showFinalStand?: boolean;
}

export function PlantingGrid({ className, showFinalStand = true }: PlantingGridProps) {
  const x = (i: number) => M_LEFT + i * STEP;
  const y = (j: number) => M_TOP + j * STEP;
  const isFinal = (r: number, c: number) =>
    showFinalStand && FINAL_ROWS.includes(r) && FINAL_COLS.includes(c);

  const acreX = M_LEFT - 18;
  const acreY = M_TOP - 18;
  const acreSize = INNER + 36;

  const cells = [];
  for (let r = 0; r < GRID; r++) {
    for (let c = 0; c < GRID; c++) {
      cells.push({ r, c, final: isFinal(r, c) });
    }
  }

  return (
    <figure className={className}>
      <svg
        viewBox="0 0 470 470"
        width="100%"
        height="auto"
        role="img"
        aria-label="Top-down diagram of one acre planted on a 14 by 14 foot square grid — about 222 black walnut trees per acre, thinned to roughly 43 final crop trees."
        style={{ display: "block" }}
      >
        <title>14 × 14 ft square planting layout</title>

        {/* Acre boundary */}
        <rect
          x={acreX}
          y={acreY}
          width={acreSize}
          height={acreSize}
          rx="6"
          fill={COLORS.acreFill}
          stroke={COLORS.acreStroke}
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />

        {/* 14 ft dimension — top, between first two trees */}
        <g stroke={COLORS.dim} strokeWidth="1">
          <line x1={x(0)} y1={M_TOP - 30} x2={x(1)} y2={M_TOP - 30} />
          <line x1={x(0)} y1={M_TOP - 35} x2={x(0)} y2={M_TOP - 25} />
          <line x1={x(1)} y1={M_TOP - 35} x2={x(1)} y2={M_TOP - 25} />
        </g>
        <text
          x={(x(0) + x(1)) / 2}
          y={M_TOP - 38}
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          fill={COLORS.caption}
        >
          14 ft
        </text>

        {/* 14 ft dimension — left, between first two rows */}
        <g stroke={COLORS.dim} strokeWidth="1">
          <line x1={M_LEFT - 30} y1={y(0)} x2={M_LEFT - 30} y2={y(1)} />
          <line x1={M_LEFT - 35} y1={y(0)} x2={M_LEFT - 25} y2={y(0)} />
          <line x1={M_LEFT - 35} y1={y(1)} x2={M_LEFT - 25} y2={y(1)} />
        </g>
        <text
          x={M_LEFT - 38}
          y={(y(0) + y(1)) / 2 + 4}
          textAnchor="end"
          fontSize="13"
          fontWeight="600"
          fill={COLORS.caption}
        >
          14 ft
        </text>

        {/* Trees */}
        {cells.map(({ r, c, final }) =>
          final ? (
            <circle
              key={`${r}-${c}`}
              cx={x(c)}
              cy={y(r)}
              r="6"
              fill={COLORS.final}
              stroke={COLORS.finalRing}
              strokeWidth="1.25"
            />
          ) : (
            <circle key={`${r}-${c}`} cx={x(c)} cy={y(r)} r="3.4" fill={COLORS.planted} />
          )
        )}

        {/* Caption */}
        <text
          x="235"
          y={M_TOP + INNER + 42}
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={COLORS.caption}
        >
          One acre · 14 × 14 ft square grid
        </text>
      </svg>

      {/* Legend */}
      <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-light">
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block rounded-full"
            style={{ width: 9, height: 9, background: COLORS.planted }}
          />
          ≈222 planted per acre
        </span>
        {showFinalStand && (
          <span className="inline-flex items-center gap-2">
            <span
              className="inline-block rounded-full"
              style={{ width: 13, height: 13, background: COLORS.final, border: `1.5px solid ${COLORS.finalRing}` }}
            />
            ≈43 final crop trees after thinning
          </span>
        )}
      </figcaption>
    </figure>
  );
}
