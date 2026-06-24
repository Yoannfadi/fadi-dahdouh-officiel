import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fadi Dahdouh — Ostéopathe de la voix · Créateur de Vocalosteo®";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(900px 500px at 75% 15%, rgba(191,160,110,0.18), transparent), #080808",
          color: "#FAFAFA",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#BFA06E",
            marginBottom: 28,
          }}
        >
          Ostéopathe de la voix
        </div>
        <div style={{ fontSize: 76, lineHeight: 1.05, fontStyle: "italic", maxWidth: 900 }}>
          Fadi Dahdouh
        </div>
        <div style={{ fontSize: 34, color: "#8A8A8A", marginTop: 24, maxWidth: 820 }}>
          Créateur de la méthode Vocalosteo®. Soin · Voix · Art · Scène · IA vocale.
        </div>
        <div
          style={{
            marginTop: 50,
            height: 2,
            width: 220,
            background: "#BFA06E",
            opacity: 0.6,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
