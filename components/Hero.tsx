import CTAButton from "@/components/CTAButton";

export type HeroCta = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow?: string;
  title: string;
  subhead: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
};

type HeroProps = HeroContent;

export default function Hero({
  eyebrow,
  title,
  subhead,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center sm:py-32">
        {eyebrow && (
          <p className="text-accent text-sm font-semibold tracking-wide uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl font-medium tracking-normal sm:text-5xl md:text-6xl">
          {title.split("\n").map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="max-w-xl text-lg text-white/85">{subhead}</p>
        <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
          <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
          <CTAButton href={secondaryCta.href} variant="outline">
            {secondaryCta.label}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
