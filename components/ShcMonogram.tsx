import { SHC_MONOGRAM_PATHS, SHC_MONOGRAM_VIEWBOX } from "@/lib/shcMonogram";

type ShcMonogramProps = {
  /** "dark" = navy S/C + terracotta H, for light backgrounds. "light" =
   * white S/C + accent-light terracotta H, for the navy background. */
  variant?: "dark" | "light";
  className?: string;
};

const VARIANT_FILL_CLASSES: Record<"dark" | "light", [string, string, string]> =
  {
    dark: ["fill-primary", "fill-accent", "fill-primary"],
    light: ["fill-white", "fill-accent-light", "fill-white"],
  };

export default function ShcMonogram({
  variant = "dark",
  className,
}: ShcMonogramProps) {
  const fills = VARIANT_FILL_CLASSES[variant];

  return (
    <svg
      viewBox={SHC_MONOGRAM_VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {SHC_MONOGRAM_PATHS.map((path, index) => (
        <path
          key={index}
          d={path.d}
          transform={path.transform}
          className={fills[index]}
        />
      ))}
    </svg>
  );
}
