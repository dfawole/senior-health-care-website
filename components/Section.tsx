import type { ReactNode } from "react";

export type SectionTone = "default" | "muted" | "primary";

export type SectionHeading = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

type SectionProps = SectionHeading & {
  id?: string;
  tone?: SectionTone;
  children?: ReactNode;
};

const toneClasses: Record<
  SectionTone,
  { bg: string; heading: string; body: string; eyebrow: string }
> = {
  default: {
    bg: "bg-background",
    heading: "text-text",
    body: "text-text/70",
    eyebrow: "text-accent",
  },
  muted: {
    bg: "bg-white",
    heading: "text-text",
    body: "text-text/70",
    eyebrow: "text-accent",
  },
  primary: {
    bg: "bg-primary",
    heading: "text-white",
    body: "text-white/80",
    // text-accent fails WCAG AA against bg-primary — use the lightened
    // accent-light variant for accent-colored text on dark backgrounds.
    eyebrow: "text-accent-light",
  },
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  tone = "default",
  children,
}: SectionProps) {
  const tones = toneClasses[tone];
  const hasHeading = Boolean(eyebrow || title || description);

  return (
    <section id={id} className={`${tones.bg} py-24 sm:py-32`}>
      <div className="mx-auto max-w-6xl px-4">
        {hasHeading && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && (
              <p
                className={`text-sm font-semibold tracking-wide uppercase ${tones.eyebrow}`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`mt-2 font-serif text-3xl font-medium tracking-normal ${tones.heading}`}
              >
                {title}
              </h2>
            )}
            {description && (
              <p className={`mt-4 text-base ${tones.body}`}>{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
