import { appName, domainUrl, appDescription } from "@global/constants";

export const StructuredData = () => {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: appName,
    url: `https://${domainUrl}`,
    description: appDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: `https://${domainUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: appName,
    url: `https://${domainUrl}`,
    logo: `https://${domainUrl}/logo_ackee.png`,
    description:
      "Tienda de beats y productora musical especializada en Trap, Reggaeton, Afrobeat y Pop.",
    sameAs: [
      "https://www.instagram.com/leotheprodu",
      "https://www.flproductionscr.com",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CR",
    },
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: appName,
    image: `https://${domainUrl}/logo_ackee.png`,
    "@id": `https://${domainUrl}`,
    url: `https://${domainUrl}`,
    telephone: "+50663017707",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Jose",
      addressCountry: "CR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
    </>
  );
};
