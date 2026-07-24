/* eslint-disable react/forbid-dom-props -- ImageResponse renders via Satori,
   which only understands inline styles, not Tailwind classes or CSS files. */
import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/ogFonts";
import { siteContent } from "@/content/site";

export const alt = siteContent.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#1B2130",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
            fill="#D26C41"
          />
        </svg>
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: 26,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#D26C41",
          }}
        >
          {siteContent.name}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 32,
          maxWidth: 880,
          fontFamily: "Fraunces",
          fontWeight: 600,
          fontSize: 56,
          lineHeight: 1.25,
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        {siteContent.tagline}
      </div>
    </div>,
    { ...size, fonts },
  );
}
