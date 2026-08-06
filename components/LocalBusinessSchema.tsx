import { siteContent } from "@/content/site";

/** Site-wide LocalBusiness structured data — rendered once in the root
 * layout so every page carries the same, single source of truth for the
 * business's name/address/phone (critical for local SEO accuracy; keep
 * this in sync with content/site.ts, never hardcode a second copy). */
export default function LocalBusinessSchema() {
  const { name, url, phone, email, address, hours } = siteContent;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url,
    telephone: phone.display,
    email: email.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.line1,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.countryCode,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.days,
      opens: hours.opens,
      closes: hours.closes,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
