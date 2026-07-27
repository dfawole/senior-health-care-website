import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";

export type CTABannerContent = {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

type CTABannerProps = CTABannerContent;

export default function CTABanner({
  title,
  description,
  primaryCta,
  secondaryCta,
}: CTABannerProps) {
  return (
    <section className="bg-primary text-white">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-4 py-20 text-center sm:py-24">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-serif text-3xl font-medium tracking-normal sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-xl text-lg text-white/85">{description}</p>
          )}
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
          <CTAButton href={secondaryCta.href} variant="outline">
            {secondaryCta.label}
          </CTAButton>
        </div>
      </Reveal>
    </section>
  );
}
