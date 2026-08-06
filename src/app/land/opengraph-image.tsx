import { ImageResponse } from "next/og";

export const alt = "Give Your Land a Lasting Purpose — Rural Land Stewardship in Canada, from Little Tree Farm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", padding: "64px 72px", color: "#faf6f0", background: "linear-gradient(135deg, #3a241a 0%, #1a3a2a 55%, #0f2419 100%)", fontFamily: "Georgia, serif" }}>
      <div style={{ position: "absolute", inset: 26, border: "1px solid rgba(200,169,110,.55)", borderRadius: 24 }} />
      {/* Growth rings, top right */}
      <div style={{ position: "absolute", top: -90, right: -70, width: 420, height: 420, display: "flex" }}>
        {[150, 118, 88, 62, 40].map((r) => (
          <div key={r} style={{ position: "absolute", top: "50%", left: "50%", width: r * 2, height: r * 2, marginTop: -r, marginLeft: -r, border: "1px solid rgba(219,195,152,.35)", borderRadius: "50%" }} />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#dbc398", fontFamily: "Arial, sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>
          <span style={{ width: 42, height: 2, background: "#c8a96e" }} />
          Land Stewardship Program
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div style={{ fontSize: 76, lineHeight: 1.0, letterSpacing: -2.5 }}>Give Your Land a Lasting Purpose</div>
          <div style={{ marginTop: 22, color: "rgba(250,246,240,.76)", fontFamily: "Arial, sans-serif", fontSize: 26 }}>Donation, legacy, transfer and long-term stewardship options for rural landowners</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Arial, sans-serif", fontSize: 22 }}>
          <span>Little Tree Farm</span><span style={{ color: "#dbc398" }}>Rural Land Stewardship · Canada</span>
        </div>
      </div>
    </div>,
    size,
  );
}
