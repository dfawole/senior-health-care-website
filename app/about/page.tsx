import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ContentBlock from "@/components/ContentBlock";
import CTABanner from "@/components/CTABanner";
import StaggerGroup from "@/components/StaggerGroup";
import StaggerItem from "@/components/StaggerItem";
import { aboutContent } from "@/content/about";
import { siteContent } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: aboutContent.heading,
  description: aboutContent.intro.split(". ")[0] + ".",
});

export default function AboutPage() {
  return (
    <>
      <Hero title={aboutContent.eyebrow} />

      <Section title={aboutContent.heading} description={aboutContent.intro} />

      <Section tone="muted">
        <StaggerGroup className="mx-auto flex max-w-2xl flex-col gap-12">
          {aboutContent.sections.map((section) => (
            <StaggerItem key={section.heading}>
              <ContentBlock heading={section.heading} body={section.body} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <CTABanner
        title={aboutContent.cta.text}
        description={aboutContent.cta.subtext}
        primaryCta={{
          label: siteContent.servicePage.closingCtaPrimaryLabel,
          href: siteContent.phone.href,
        }}
        secondaryCta={{
          label: siteContent.servicePage.closingCtaSecondaryLabel,
          href: "/contact",
        }}
      />
    </>
  );
}
