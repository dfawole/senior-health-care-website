import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { respiteCareContent } from "@/content/services/respite-care";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: respiteCareContent.serviceName,
  description: respiteCareContent.heroSubtext,
  ogTitle: respiteCareContent.heroHeadline,
});

export default function RespiteCarePage() {
  return <ServicePageLayout {...respiteCareContent} />;
}
