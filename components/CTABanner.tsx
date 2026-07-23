import CTAButton from "@/components/CTAButton";

export type CTABannerContent = {
  title: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

type CTABannerProps = CTABannerContent;

export default function CTABanner({
  title,
  primaryCta,
  secondaryCta,
}: CTABannerProps) {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-4 py-24 text-center sm:py-32">
        <h2 className="font-serif text-3xl font-medium tracking-normal sm:text-4xl">
          {title}
        </h2>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
          <CTAButton href={secondaryCta.href} variant="outline">
            {secondaryCta.label}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
