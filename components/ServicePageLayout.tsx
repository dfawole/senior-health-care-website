import Hero, { type HeroPhoto } from "@/components/Hero";
import Section from "@/components/Section";
import Checklist from "@/components/Checklist";
import CardGrid, { type CardItem } from "@/components/CardGrid";
import StatHighlight, {
  type StatHighlightContent,
} from "@/components/StatHighlight";
import TestimonialCard from "@/components/TestimonialCard";
import PhotoBlock, { type PhotoContent } from "@/components/PhotoBlock";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
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
  /** Optional hero background photo. Omit for the default solid
   * charcoal-navy hero. */
  heroPhoto?: HeroPhoto;
  whyChooseUs: CardItem[];
  eligibilityPoints: string[];
  includedItems: string[];
  relevantStat: StatHighlightContent;
  testimonial: ServiceTestimonial;
  faqs: FAQItem[];
  ctaText?: string;
  /** Optional real photo. Omit entirely rather than using a stock/placeholder
   * image — see the imagery rule in CLAUDE.md. */
  photo?: PhotoContent;
};

type ServicePageLayoutProps = ServicePageContent;

export default function ServicePageLayout({
  serviceName,
  heroHeadline,
  heroSubtext,
  heroPhoto,
  whyChooseUs,
  eligibilityPoints,
  includedItems,
  relevantStat,
  testimonial,
  faqs,
  ctaText,
  photo,
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
        enableListen
        photo={heroPhoto}
      />

      <Section title={servicePage.eligibilityTitle(serviceName)}>
        <div className="mx-auto max-w-2xl">
          <Checklist items={eligibilityPoints} enableListen />
        </div>
      </Section>

      <Section title={servicePage.whyChooseUsTitle(serviceName)} tone="muted">
        <CardGrid items={whyChooseUs} />
      </Section>

      <Section title={servicePage.includedTitle(serviceName)}>
        <div className="mx-auto max-w-2xl">
          <Checklist items={includedItems} enableListen />
        </div>
      </Section>

      {photo && (
        <Section tone="muted">
          <PhotoBlock {...photo} />
        </Section>
      )}

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

      <Section
        eyebrow="FAQs"
        title={servicePage.faqTitle(serviceName)}
        tone="muted"
      >
        <div className="mx-auto max-w-2xl">
          <FAQAccordion items={faqs} />
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
