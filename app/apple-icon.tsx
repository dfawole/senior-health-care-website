/* eslint-disable react/forbid-dom-props -- ImageResponse renders via Satori,
   which only understands inline styles, not Tailwind classes or CSS files. */
import { ImageResponse } from "next/og";
import { SHC_MONOGRAM_PATHS, SHC_MONOGRAM_VIEWBOX } from "@/lib/shcMonogram";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Light variant (white S/C + accent-light H) for the navy background,
// matching the dark-background color rule used everywhere else.
const FILLS = ["#FFFFFF", "#D26C41", "#FFFFFF"];

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1B2130",
      }}
    >
      <svg
        width="130"
        height="130"
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
    </div>,
    { ...size },
  );
}
