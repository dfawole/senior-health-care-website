import type { Metadata } from "next";
import { Heart } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Page Not Found",
  description: siteContent.notFoundPage.body,
});

export default function NotFound() {
  const { notFoundPage } = siteContent;

  return (
    <div className="bg-background py-24 sm:py-32">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 text-center">
        <Heart
          className="text-accent h-10 w-10"
          strokeWidth={1.5}
          fill="currentColor"
          fillOpacity={0.15}
          aria-hidden="true"
        />
        <p className="text-accent text-sm font-semibold tracking-wide uppercase">
          {notFoundPage.eyebrow}
        </p>
        <h1 className="text-text font-serif text-4xl font-medium tracking-normal sm:text-5xl">
          {notFoundPage.heading}
        </h1>
        <p className="text-text/70 max-w-md text-base">{notFoundPage.body}</p>
        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <CTAButton href="/">{notFoundPage.homeLabel}</CTAButton>
          <CTAButton href="/contact" variant="secondary">
            {notFoundPage.contactLabel}
          </CTAButton>
        </div>
      </Reveal>
    </div>
  );
}
