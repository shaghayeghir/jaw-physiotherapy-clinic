// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #fcf9f6 0%, #f5ece6 100%)",
          color: "#6b7280",
          fontSize: 48,
          fontWeight: 700,
          padding: "60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 34,
            color: "#8b9472",
            marginBottom: 20,
          }}
        >
          کلینیک تخصصی فیزیوتراپی فک
        </div>

        <div
          style={{
            fontSize: 56,
            color: "#5f6b53",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          ارزیابی و درمان اختلالات فک، درد و TMJ
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
