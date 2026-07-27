import type { ContentBlockContent } from "@/components/ContentBlock";
import type { PhotoContent } from "@/components/PhotoBlock";

export const aboutContent = {
  eyebrow: "About Us",
  heading: "Who We Are",
  intro:
    "Senior Health Care was incorporated in 2020, built on over 25 years of hands-on experience in the care industry. We specialise in enabling people to live independently and safely in their own homes, with carers who are qualified, experienced, and rigorously assessed against our internal Code of Practice — built to meet and support the standards set by the Care Quality Commission.",

  sections: [
    {
      heading: "Why We Started",
      body: "The pandemic exposed how vulnerable isolated and elderly people can be — and how much it matters to have care you can actually rely on, delivered by people who understand the work, not just the paperwork. Drawing on over two decades of experience across the care sector, Senior Health Care was founded to build a home care company around that understanding: dependable first, compassionate always.",
    },
    {
      heading: "Our Mission",
      body: "We provide compassionate, person-centred home care delivered with cultural respect and dignity. Every client's personal rights, preferences and routines are built directly into their care plan — not treated as an afterthought.",
    },
    {
      heading: "Our Standards",
      body: "Every member of our care team completes an enhanced DBS check and our own structured in-house training programme before working with any client. Ongoing performance is monitored by a qualified supervisor, so quality is maintained after placement, not just verified once at the start.",
    },
    {
      heading: "How We Work",
      body: "We understand that families need care they can trust to arrive reliably and respond quickly. Our care coordination team is structured to match the right carer to the right client, with the flexibility to adapt as circumstances change — because care needs rarely stay the same for long.",
    },
  ] satisfies ContentBlockContent[],

  // Optional real photo. Omit entirely rather than using a stock/placeholder
  // image — see the imagery rule in CLAUDE.md.
  photo: {
    src: "/images/team/bedside-care.jpeg",
    alt: "Senior Health Care carers providing bedside support",
  } satisfies PhotoContent,

  cta: {
    text: "Speak to Our Team",
    subtext:
      "Have questions about how we work? We're happy to talk it through.",
  },
};
