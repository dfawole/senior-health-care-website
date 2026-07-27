"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ListenButton from "@/components/ListenButton";

export type HeroCta = {
  label: string;
  href: string;
};

export type HeroPhoto = {
  src: string;
  alt: string;
};

export type HeroContent = {
  eyebrow?: string;
  title: string;
  subhead?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  enableListen?: boolean;
  /** Optional full-bleed background photo. Omit for the default solid
   * charcoal-navy hero. */
  photo?: HeroPhoto;
};

type HeroProps = HeroContent;

export default function Hero({
  eyebrow,
  title,
  subhead,
  primaryCta,
  secondaryCta,
  enableListen = false,
  photo,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasCtas = Boolean(primaryCta || secondaryCta);

  const scrollToNextSection = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col items-center justify-center overflow-hidden text-white ${
        photo
          ? // The sticky header (h-[var(--header-height)] in Header.tsx) sits
            // in normal document flow above this section, but once the page
            // scrolls, it stays pinned over whatever is currently at the top
            // of the viewport — which, without this, would eventually be the
            // top of this photo. Reserving header-height of *extra* section
            // height (on top of the usual 85vh) means there's always a full
            // unobstructed 85vh of photo below the header, for any photo,
            // with no per-image tuning required.
            "min-h-[calc(85vh+var(--header-height))]"
          : "bg-primary min-h-[85vh]"
      }`}
    >
      {photo && (
        <>
          {/* Full-bleed background photo. Source photos are currently
              1280x1024 (cropped from the team gallery, not shot for hero
              use) — that's below the ~1920px+ width a hero background is
              displayed at on large desktop viewports, so some softness at
              those widths is expected and can't be fully corrected in code.
              Future hero photography should be shot/exported at 1920px+
              wide (ideally 2400px+) to avoid upscaling softness here.

              object-cover on this container (very wide, short relative to
              the ~1.25:1 source photos) crops a large vertical slice out of
              the source — at a typical 1440x900 viewport that's already
              ~14% of the source height, rising to ~26% on a wide/short
              browser window. Default (center) object-position splits that
              crop evenly top and bottom, which reaches well into face
              height on every photo shot so far (subjects framed in the
              upper third). Biasing to 15% keeps most of that crop on the
              bottom (floor/legs — the least important part of the frame)
              instead of the top, so subjects stay clear by default without
              per-photo tuning. This is a fixed assumption about the current
              photography style (people, upper-third framing) — revisit if
              future hero photos are composed differently. */}
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-[50%_15%]"
          />
          {/* Charcoal-navy scrim, strongest at the bottom where the hero text
              sits, so white/cream text stays legible over any photo. */}
          <div className="from-primary/75 via-primary/60 to-primary/40 absolute inset-0 bg-linear-to-t" />
        </>
      )}

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center sm:py-24">
        {eyebrow && (
          <p className="text-accent-light text-sm font-semibold tracking-wide uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl font-medium tracking-normal sm:text-5xl md:text-6xl">
          {title.split("\n").map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>
        {subhead && (
          <div className="flex max-w-xl items-center gap-2">
            <p className="text-lg text-white/85">{subhead}</p>
            {enableListen && (
              <ListenButton
                text={subhead}
                className="text-white/60 hover:text-white"
              />
            )}
          </div>
        )}
        {hasCtas && (
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            {primaryCta && (
              <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
            )}
            {secondaryCta && (
              <CTAButton href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </CTAButton>
            )}
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
        className="animate-gentle-bounce absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 transition hover:text-white"
      >
        <ChevronDown className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
      </button>
    </section>
  );
}
