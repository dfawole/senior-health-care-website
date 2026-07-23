import { Check } from "lucide-react";
import Section from "@/components/Section";

export type WhyChooseUsContent = {
  eyebrow?: string;
  title?: string;
  paragraph: string;
  points: string[];
  accreditationsLabel: string;
  accreditations: string[];
};

type WhyChooseUsProps = WhyChooseUsContent;

export default function WhyChooseUs({
  eyebrow,
  title,
  paragraph,
  points,
  accreditationsLabel,
  accreditations,
}: WhyChooseUsProps) {
  return (
    <Section eyebrow={eyebrow} title={title} tone="muted">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-2xl">
          <p className="text-text/70 text-base">{paragraph}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check
                  className="text-primary mt-0.5 h-5 w-5 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-text text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-primary/10 flex flex-col justify-center gap-3 border-t pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
          <p className="text-text/40 text-xs font-semibold tracking-wide uppercase">
            {accreditationsLabel}
          </p>
          <ul className="flex flex-col gap-2">
            {accreditations.map((item) => (
              <li key={item} className="text-text/70 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
