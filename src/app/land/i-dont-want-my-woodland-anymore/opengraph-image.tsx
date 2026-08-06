import { ImageResponse } from "next/og";

export const alt = "I don't want my woodland anymore — realistic options for Canadian landowners";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", padding: "64px 72px", color: "#faf6f0", background: "linear-gradient(135deg, #0f2419 0%, #2d5a3f 58%, #5c3d2e 100%)", fontFamily: "Georgia, serif" }}>
      <div style={{ position: "absolute", inset: 26, border: "1px solid rgba(200,169,110,.55)", borderRadius: 24 }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#dbc398", fontFamily: "Arial, sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>
          <span style={{ width: 42, height: 2, background: "#c8a96e" }} />
          Land Stewardship
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1040 }}>
          <div style={{ fontSize: 76, lineHeight: .98, letterSpacing: -3 }}>I Don&apos;t Want My Woodland Anymore</div>
          <div style={{ marginTop: 22, color: "rgba(250,246,240,.78)", fontFamily: "Arial, sans-serif", fontSize: 27 }}>Keep · Sell · Transfer · Donate · Restore · Plan</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Arial, sans-serif", fontSize: 22 }}>
          <span>Little Tree Farm</span><span style={{ color: "#dbc398" }}>A Canadian landowner guide</span>
        </div>
      </div>
    </div>,
    size,
  );
}
