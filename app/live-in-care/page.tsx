import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { liveInCareContent } from "@/content/services/live-in-care";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: liveInCareContent.serviceName,
  description: liveInCareContent.heroSubtext,
  ogTitle: liveInCareContent.heroHeadline,
});

export default function LiveInCarePage() {
  return <ServicePageLayout {...liveInCareContent} />;
}
