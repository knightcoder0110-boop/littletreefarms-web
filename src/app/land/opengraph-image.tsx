import { ImageResponse } from "next/og";

export const alt = "Give Your Land a Lasting Purpose — Rural Land Stewardship in Canada by Little Tree Farm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: "34px",
        color: "#102619",
        background: "linear-gradient(145deg, #214a35 0%, #0d2418 100%)",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          border: "1px solid rgba(226,207,170,.55)",
          borderRadius: "22px",
          background: "#fffdf8",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "62%",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 52px 42px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "13px",
              color: "#57392c",
              fontFamily: "Arial, sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            <span style={{ display: "flex", width: "38px", height: "2px", background: "#c8a96e" }} />
            Land Stewardship · Canada
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", color: "#173a29", fontSize: "69px", lineHeight: 0.96, letterSpacing: "-2.7px" }}>
              Give Your Land a Lasting Purpose
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "24px",
                color: "#58655c",
                fontFamily: "Arial, sans-serif",
                fontSize: "21px",
                lineHeight: 1.45,
              }}
            >
              Responsible transfer, restoration and long-term stewardship options for rural landowners.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "15px",
              borderTop: "1px solid rgba(23,58,41,.22)",
              color: "#173a29",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            <span>Little Tree Farm</span>
            <span style={{ color: "#8b6f56" }}>Land Futures Atlas · 01</span>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "38%",
            overflow: "hidden",
            background: "#e9e0d3",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "42px",
              right: "-26px",
              bottom: "48px",
              left: "20px",
              display: "flex",
              overflow: "hidden",
              clipPath: "polygon(9% 4%, 81% 0, 100% 18%, 92% 91%, 30% 100%, 0 73%, 3% 22%)",
              background: "linear-gradient(165deg, #a7b986 0%, #496b4d 46%, #173a29 100%)",
            }}
          >
            {[0, 1, 2, 3, 4, 5].map((ring) => (
              <div
                key={ring}
                style={{
                  position: "absolute",
                  top: `${62 + ring * 24}px`,
                  left: `${-86 + ring * 6}px`,
                  display: "flex",
                  width: `${500 - ring * 18}px`,
                  height: `${250 - ring * 10}px`,
                  border: "2px solid rgba(255,253,248,.34)",
                  borderRadius: "50%",
                  transform: `rotate(${-12 + ring * 2}deg)`,
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                right: "34px",
                bottom: "34px",
                display: "flex",
                flexDirection: "column",
                color: "#fffdf8",
                fontFamily: "Arial, sans-serif",
                textTransform: "uppercase",
              }}
            >
              <span style={{ display: "flex", fontSize: "13px", letterSpacing: "2px", opacity: 0.72 }}>Future use</span>
              <span style={{ display: "flex", marginTop: "5px", fontSize: "20px", fontWeight: 700 }}>Not yet written</span>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "28px",
              right: "26px",
              display: "flex",
              color: "#57392c",
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "1px",
            }}
          >
            44.4699° N · 64.6304° W
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
