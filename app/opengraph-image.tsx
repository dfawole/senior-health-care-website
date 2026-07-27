/* eslint-disable react/forbid-dom-props -- ImageResponse renders via Satori,
   which only understands inline styles, not Tailwind classes or CSS files. */
import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/ogFonts";
import { siteContent } from "@/content/site";
import { SHC_MONOGRAM_PATHS, SHC_MONOGRAM_VIEWBOX } from "@/lib/shcMonogram";

export const alt = siteContent.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Light variant (white S/C + accent-light H) for the navy background,
// matching the dark-background color rule used everywhere else.
const FILLS = ["#FFFFFF", "#D26C41", "#FFFFFF"];

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
      <svg
        width="150"
        height="150"
        viewBox={SHC_MONOGRAM_VIEWBOX}
        xmlns="http://www.w3.org/2000/svg"
      >
        {SHC_MONOGRAM_PATHS.map((path, index) => (
          <path
            key={index}
            d={path.d}
            transform={path.transform}
            fill={FILLS[index]}
          />
        ))}
      </svg>

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
