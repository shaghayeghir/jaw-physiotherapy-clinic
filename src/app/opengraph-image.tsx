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
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f1ec",
          color: "#4f5b45",
          fontSize: 60,
          fontWeight: 700,
        }}
      >
        TMJ Physiotherapy Clinic
      </div>
    ),
    size
  );
}
