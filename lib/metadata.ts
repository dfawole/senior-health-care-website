import type { Metadata } from "next";
import { siteContent } from "@/content/site";

type PageMetadataInput = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
};

export function buildPageMetadata({
  title,
  description,
  ogTitle,
  ogDescription,
}: PageMetadataInput): Metadata {
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;

  return {
    title,
    description,
    openGraph: {
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      siteName: siteContent.name,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description: resolvedOgDescription,
    },
  };
}
