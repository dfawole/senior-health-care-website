import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Checklist from "@/components/Checklist";
import StatHighlight, {
  type StatHighlightContent,
} from "@/components/StatHighlight";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import { siteContent } from "@/content/site";

export type ServiceTestimonial = {
  quote: string;
  name: string;
  location: string;
};

export type ServicePageContent = {
  serviceName: string;
  heroHeadline: string;
  heroSubtext: string;
  eligibilityPoints: string[];
  includedItems: string[];
  relevantStat: StatHighlightContent;
  testimonial: ServiceTestimonial;
  ctaText?: string;
};

type ServicePageLayoutProps = ServicePageContent;

export default function ServicePageLayout({
  serviceName,
  heroHeadline,
  heroSubtext,
  eligibilityPoints,
  includedItems,
  relevantStat,
  testimonial,
  ctaText,
}: ServicePageLayoutProps) {
  const { servicePage, phone } = siteContent;
  const primaryCtaLabel = ctaText ?? servicePage.defaultCtaText;

  return (
    <>
      <Hero
        eyebrow={serviceName}
        title={heroHeadline}
        subhead={heroSubtext}
        primaryCta={{ label: primaryCtaLabel, href: "/contact" }}
        secondaryCta={{
          label: servicePage.heroSecondaryCtaLabel,
          href: phone.href,
        }}
      />

      <Section title={servicePage.eligibilityTitle(serviceName)}>
        <div className="mx-auto max-w-2xl">
          <Checklist items={eligibilityPoints} />
        </div>
      </Section>

      <Section title={servicePage.includedTitle(serviceName)} tone="muted">
        <div className="mx-auto max-w-2xl">
          <Checklist items={includedItems} />
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <StatHighlight
            number={relevantStat.number}
            label={relevantStat.label}
          />
          <TestimonialCard
            quote={testimonial.quote}
            author={testimonial.name}
            role={testimonial.location}
          />
        </div>
      </Section>

      <CTABanner
        title={servicePage.closingCtaTitle(serviceName)}
        primaryCta={{
          label: servicePage.closingCtaPrimaryLabel,
          href: phone.href,
        }}
        secondaryCta={{
          label: servicePage.closingCtaSecondaryLabel,
          href: "/contact",
        }}
      />
    </>
  );
}
