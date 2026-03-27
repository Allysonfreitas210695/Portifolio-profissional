import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "linear-gradient(to bottom right, #818cf8, #38bdf8)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#020617",
          fontWeight: "bold",
          borderRadius: "8px",
        }}
      >
        A
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
