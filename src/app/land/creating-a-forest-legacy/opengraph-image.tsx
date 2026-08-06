import { ImageResponse } from "next/og";

export const alt = "Creating a Forest Legacy in Canada — a guide for landowners from Little Tree Farm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", padding: "64px 72px", color: "#faf6f0", background: "linear-gradient(135deg, #3a241a 0%, #1a3a2a 55%, #0f2419 100%)", fontFamily: "Georgia, serif" }}>
      <div style={{ position: "absolute", inset: 26, border: "1px solid rgba(200,169,110,.55)", borderRadius: 24 }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#dbc398", fontFamily: "Arial, sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>
          <span style={{ width: 42, height: 2, background: "#c8a96e" }} />
          Land Stewardship
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 990 }}>
          <div style={{ fontSize: 82, lineHeight: .98, letterSpacing: -3 }}>Creating a Forest Legacy</div>
          <div style={{ marginTop: 22, color: "rgba(250,246,240,.76)", fontFamily: "Arial, sans-serif", fontSize: 27 }}>A forest can outlive the person who plants it</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Arial, sans-serif", fontSize: 22 }}>
          <span>Little Tree Farm</span><span style={{ color: "#dbc398" }}>Restoration · Succession · Seed Orchards</span>
        </div>
      </div>
    </div>,
    size,
  );
}
