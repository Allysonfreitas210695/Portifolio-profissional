import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Allyson Freitas | Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "#020617",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "40px" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "linear-gradient(to bottom right, #818cf8, #38bdf8)",
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "64px",
              color: "#020617",
              fontWeight: "bold",
            }}
          >
            A
          </div>
          <div style={{ fontSize: "80px", fontWeight: "bold", letterSpacing: "-0.05em" }}>
            Allyson Freitas
          </div>
        </div>
        <div
          style={{
            fontSize: "36px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Transformando desafios complexos em experiências digitais extraordinárias através de precisão técnica e curadoria estética.
        </div>
        <div
          style={{
            marginTop: "60px",
            fontSize: "24px",
            padding: "16px 40px",
            background: "rgba(129, 140, 248, 0.1)",
            border: "1px solid rgba(129, 140, 248, 0.2)",
            borderRadius: "100px",
            color: "#818cf8",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Fullstack Developer • Digital Curator
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
