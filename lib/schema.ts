import { absoluteUrl, siteConfig } from "./seo";

const socialLinks = Object.values(siteConfig.social).filter(Boolean);

export function organizationSchema(): Record<string, unknown> {
  const orgId = `${absoluteUrl()}#organization`;
  const websiteId = `${absoluteUrl()}#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": orgId,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: absoluteUrl(),
        logo: absoluteUrl("/icon"),
        image: absoluteUrl("/opengraph-image"),
        founder: {
          "@type": "Person",
          name: siteConfig.founder,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "City", name: "Hyderabad" },
          { "@type": "Country", name: "India" },
          { "@type": "Place", name: "Global" },
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.385,
          longitude: 78.4867,
        },
        email: siteConfig.contactEmail,
        ...(siteConfig.contactPhone ? { telephone: siteConfig.contactPhone } : {}),
        sameAs: socialLinks,
        slogan: "AI creative and performance marketing for future-ready brands.",
        knowsAbout: siteConfig.services,
        makesOffer: siteConfig.services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
            provider: { "@id": orgId },
            areaServed: "India",
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl(),
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        publisher: { "@id": orgId },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl()}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl(),
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl()}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is OrbitClick Media?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "OrbitClick Media is a premium AI-powered creative and performance marketing agency in Hyderabad, India, focused on AI video production, motion graphics, branding, SEO, Meta Ads, Google Ads, and modern web experiences.",
            },
          },
          {
            "@type": "Question",
            name: "Who founded OrbitClick Media?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "OrbitClick Media was founded by Harshini Geesala.",
            },
          },
          {
            "@type": "Question",
            name: "Where is OrbitClick Media located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "OrbitClick Media is based in Hyderabad, India and works with brands across India and global markets.",
            },
          },
          {
            "@type": "Question",
            name: "What services does OrbitClick Media offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "OrbitClick Media offers AI video production, motion graphics, performance marketing, Meta Ads, Google Ads, branding, web design, SEO, and creative strategy.",
            },
          },
        ],
      },
    ],
  };
}
