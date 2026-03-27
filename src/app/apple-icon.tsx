import { ImageResponse } from "next/og";
import React from "react";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom right, #818cf8, #38bdf8)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#020617",
          fontWeight: "bold",
          borderRadius: "40px",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
