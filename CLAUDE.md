@AGENTS.md

# Design direction

Premium, elegant, trust-first positioning — high-end private care, not a
generic budget care directory. This applies to every page going forward,
not just the homepage.

## Typography

- **Headings (h1–h3): Fraunces** (serif), loaded via `next/font/google` in
  `app/layout.tsx`, exposed as the `font-serif` Tailwind utility (mapped
  from `--font-fraunces` in `app/globals.css`). Weight 500–600
  (`font-medium` / `font-semibold`). Use `tracking-normal` on large serif
  headings — never `tracking-tight`, which reads generic/corporate on a
  serif face.
- **Body, nav, buttons: Inter** (sans), loaded the same way, exposed as
  `font-sans` (the body default — no class needed for body text).
- Never introduce a third typeface without updating this section.

## Palette

CSS variables live in `app/globals.css` (`:root` + `@theme inline`), consumed
as Tailwind utilities (`bg-primary`, `text-accent`, etc.) — never hardcode
hex values in components.

- `--color-primary: #1b2130` — charcoal-navy. Carries the visual weight:
  header background, footer background, CTA banner sections, and dark
  text-on-light emphasis where needed.
- `--color-accent: #c1592e` — terracotta. **Accent only, use sparingly**:
  primary CTA buttons, small highlight elements, icon accents, and the
  eyebrow label text above section headings (e.g. "OUR SERVICES", "WHY
  CHOOSE US"). Never as a section background or in large blocks —
  restraint on the accent color is what reads as premium; do not
  decorate multiple elements per section with it.
- `--color-background: #f4efe6` — warm cream. Stays dominant across the
  site body.
- `--color-text: #1a1a1a` — near-black, unchanged. **Headings on light
  backgrounds use this, not the charcoal-navy primary color** — colored
  headings read as generic corporate; near-black reads editorial/premium.
  Headings on colored (charcoal-navy) backgrounds use white.

Teal (#14453f / #1b5e5a) and amber (#d9a441) have been fully retired —
there should be zero references to either anywhere in the codebase.

## Spacing

- Major section vertical padding: `py-24 sm:py-32` (see `components/Section.tsx`,
  `components/Hero.tsx`, `components/CTABanner.tsx`). Don't shrink this —
  premium layouts need room to breathe.
- Long text blocks (paragraphs, section descriptions) are capped at
  `max-w-2xl`, never stretched full-width.

## "Quiet trust, not loud badges"

Trust and accreditation signals (CQC registration, DBS checks, etc.) are
shown as small, understated text — never as colorful badge graphics or
logo walls. See `components/TrustRow.tsx` (below the hero fold) and the
accreditation column in `components/WhyChooseUs.tsx` for the pattern:
plain text, muted color, minimal iconography. This is a deliberate
positioning choice — loud trust badges read as compensating for a lack of
credibility; quiet, confident text reads as already-credible.

## Imagery

No stock-photo-style placeholder imagery. Until real photography is
supplied, use a clean neutral placeholder block with a text label (e.g.
"Photo: Team member name") rather than generic stock-people images.

## Icons

Use `lucide-react` for all iconography (line icons, `strokeWidth={1.5}`,
colored via `text-primary`/`text-accent`). Don't hand-roll SVGs or use
emoji as icons — emoji reads informal/budget, inconsistent with the
premium positioning.

## Service page pattern (enforced)

Every service page (`app/personal-care/page.tsx`, `app/nursing-care/page.tsx`,
and any future service route) is a thin wrapper around
`components/ServicePageLayout.tsx` — it imports one content object and
renders `<ServicePageLayout {...content} />`. Nothing else. No page-level
markup, styling, or copy.

- **Content** lives in `content/services/<slug>.ts`, one file per service,
  typed against `ServicePageContent` (exported from `ServicePageLayout.tsx`).
  Fields: `serviceName`, `heroHeadline`, `heroSubtext`, `eligibilityPoints`
  (3–4 item "Is this right for you?" checklist), `includedItems` ("What's
  included" checklist), `relevantStat` (single `{ number, label }` — not
  the homepage's multi-stat `StatsRow`), `testimonial` (single
  `{ quote, name, location }` — not the homepage's rotating
  `TestimonialsCarousel`), and an optional `ctaText` override for the
  hero's primary CTA label.
- **Standard section labels** ("Is `{service}` Right for You?", "What's
  Included in `{service}`", the closing CTA banner title/button labels,
  the hero's secondary CTA label) are template-level, not per-service
  copy — they live in `content/site.ts` under `servicePage`, not in each
  service's content file. Only add a field to a per-service content file
  if the copy genuinely varies by service.
- **Shared building blocks**: `Hero`, `Section`, `Checklist` (checkmark
  bullet list — also used by `WhyChooseUs`), `StatHighlight` (single
  stat — also used by `StatsRow`), `TestimonialCard` (single testimonial
  — the homepage carousel is a different component for a different job),
  `CTABanner`. Adding a new service page should never require writing new
  markup — only a new content file.
- Placeholder/draft testimonials are marked with a `// DRAFT testimonial`
  comment directly above them in the content file — grep for that before
  launch to make sure every service has a real, permissioned client quote.
