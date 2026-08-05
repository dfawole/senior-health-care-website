import Image from "next/image";
import { Download } from "lucide-react";
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
import ProcessSteps from "@/components/ProcessSteps";
import { siteContent } from "@/content/site";
import { homeContent } from "@/content/home";

export type ServiceTestimonial = {
  quote: string;
  name: string;
  location: string;
};

export type ServicePageContent = {
  serviceName: string;
  /** Route segment, e.g. "personal-care" — also used as the filename for
   * the generated PDF guide at /guides/<slug>.pdf. */
  slug: string;
  heroHeadline: string;
  heroSubtext: string;
  /** Optional hero background photo. Omit for the default solid
   * charcoal-navy hero. */
  heroPhoto?: HeroPhoto;
  whyChooseUs: CardItem[];
  eligibilityPoints: string[];
  includedItems: string[];
  /** Optional real photo shown inline beside the "What's Included" list,
   * for tying a specific photo to that list rather than a generic
   * bottom-of-page block. Omit entirely rather than using a stock/placeholder
   * image — see the imagery rule in CLAUDE.md. */
  includedPhoto?: PhotoContent;
  relevantStat: StatHighlightContent;
  testimonial: ServiceTestimonial;
  /** Titles of exactly two other services to surface in the "You Might
   * Also Be Interested In" section, matched against
   * homeContent.services.items — not a separate content copy. */
  relatedServices?: [string, string];
  faqs: FAQItem[];
  ctaText?: string;
  /** Optional real photo. Omit entirely rather than using a stock/placeholder
   * image — see the imagery rule in CLAUDE.md. */
  photo?: PhotoContent;
};

type ServicePageLayoutProps = ServicePageContent;

export default function ServicePageLayout({
  serviceName,
  slug,
  heroHeadline,
  heroSubtext,
  heroPhoto,
  whyChooseUs,
  eligibilityPoints,
  includedItems,
  includedPhoto,
  relevantStat,
  testimonial,
  relatedServices,
  faqs,
  ctaText,
  photo,
}: ServicePageLayoutProps) {
  const { servicePage, phone } = siteContent;
  const primaryCtaLabel = ctaText ?? servicePage.defaultCtaText;
  const allServices: CardItem[] = homeContent.services.items;
  const relatedItems: CardItem[] = (relatedServices ?? [])
    .map((title) => allServices.find((item) => item.title === title))
    .filter((item): item is CardItem => item !== undefined);

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
        {includedPhoto ? (
          <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Checklist items={includedItems} enableListen />
            <div className="border-primary/10 overflow-hidden rounded-lg border">
              <Image
                src={includedPhoto.src}
                alt={includedPhoto.alt}
                width={1280}
                height={1024}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl">
            <Checklist items={includedItems} enableListen />
          </div>
        )}
        <div className="mx-auto mt-8 flex max-w-2xl justify-center">
          <a
            href={`/guides/${slug}.pdf`}
            download
            className="text-primary inline-flex items-center gap-2 text-sm font-semibold hover:underline"
          >
            <Download
              className="h-4 w-4"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            {servicePage.downloadGuideLabel}
          </a>
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

      {relatedItems.length > 0 && (
        <Section
          eyebrow={servicePage.relatedServicesEyebrow}
          title={servicePage.relatedServicesTitle}
          tone="muted"
        >
          <CardGrid items={relatedItems} />
        </Section>
      )}

      <Section eyebrow="FAQs" title={servicePage.faqTitle(serviceName)}>
        <div className="mx-auto max-w-2xl">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <Section
        eyebrow={siteContent.processSteps.eyebrow}
        title={siteContent.processSteps.title}
        tone="muted"
      >
        <ProcessSteps />
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
