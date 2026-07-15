import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function loadFont(url: string) {
  return fetch(new URL(url, import.meta.url)).then((res) =>
    res.arrayBuffer()
  );
}

export default async function OpenGraphImage() {
  const regular = await loadFont("./fonts/Vazirmatn-Regular.ttf");
  const bold = await loadFont("./fonts/Vazirmatn-Bold.ttf");

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
          background:
            "linear-gradient(135deg, #fcf9f6 0%, #f6efe9 45%, #efe4da 100%)",
          color: "#5f6b53",
          textAlign: "center",
          padding: "64px",
          fontFamily: "Vazirmatn",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            color: "#8b9472",
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          کلینیک تخصصی فیزیوتراپی فک و TMJ
        </div>

        <div
          style={{
            fontSize: 58,
            fontWeight: 800,
            lineHeight: 1.35,
            maxWidth: 960,
            color: "#4f5b45",
          }}
        >
          ارزیابی و درمان درد فک، کلیک مفصل و اختلالات TMJ
        </div>

        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            marginTop: 28,
            color: "#7c8570",
          }}
        >
          نوبت‌دهی و مشاوره تخصصی
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Vazirmatn",
          data: regular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Vazirmatn",
          data: bold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
