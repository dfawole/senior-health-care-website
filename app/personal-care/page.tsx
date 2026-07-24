import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { personalCareContent } from "@/content/services/personal-care";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: personalCareContent.serviceName,
  description: personalCareContent.heroSubtext,
  ogTitle: personalCareContent.heroHeadline,
});

export default function PersonalCarePage() {
  return <ServicePageLayout {...personalCareContent} />;
}
