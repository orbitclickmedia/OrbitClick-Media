import type { Metadata } from "next";

export const siteConfig = {
  name: "OrbitClick Media",
  shortName: "OrbitClick",
  founder: "Harshini Geesala",
  city: "Hyderabad",
  country: "India",
  locale: "en_IN",
  defaultTitle: "AI Creative & Performance Marketing Agency Hyderabad | OrbitClick Media",
  titleTemplate: "%s | OrbitClick Media",
  description:
    "OrbitClick Media is a Hyderabad-based AI creative and performance marketing agency specializing in Meta Ads, Google Ads, AI video production, branding, SEO, and web development.",
  keywords: [
    "OrbitClick Media",
    "OrbitClick",
    "OrbitClick Media Hyderabad",
    "AI Creative Agency Hyderabad",
    "Motion Graphics Agency Hyderabad",
    "Performance Marketing Agency Hyderabad",
    "AI Video Production Agency India",
    "Meta Ads agency Hyderabad",
    "Google Ads agency Hyderabad",
    "branding agency Hyderabad",
    "web design agency Hyderabad",
    "SEO agency Hyderabad",
  ],
  services: [
    "AI Video Production",
    "Motion Graphics",
    "Performance Marketing",
    "Meta Ads",
    "Google Ads",
    "Branding",
    "Web Design",
    "SEO",
    "Creative Strategy",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://orbit-click-media.vercel.app",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@orbitclickmedia.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/orbitclickmedia",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/orbitclick-media",
  },
};

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  images?: string[];
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  images = ["/opengraph-image"],
  noIndex = false,
}: SeoInput = {}): Metadata {
  const canonical = absoluteUrl(path);
  const resolvedTitle = title || siteConfig.defaultTitle;

  return {
    metadataBase: new URL(siteConfig.url),
    title: title ? { default: resolvedTitle, template: siteConfig.titleTemplate } : siteConfig.defaultTitle,
    description,
    applicationName: siteConfig.name,
    generator: "Next.js",
    keywords: siteConfig.keywords,
    alternates: {
      canonical,
      languages: {
        "en-IN": canonical,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description,
      images: images.map((image) => ({
        url: absoluteUrl(image),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview`,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: images.map((image) => absoluteUrl(image)),
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "marketing agency",
    icons: {
      icon: [
        { url: "/icon", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon", type: "image/png" }],
    },
    manifest: "/manifest.webmanifest",
    other: {
      "google-site-verification": "cr29Lip1JH5PriIewXe-ZU971Vha1ltlEGFRiHzBNvw",
      "geo.region": "IN-TG",
      "geo.placename": "Hyderabad",
      "ICBM": "17.3850, 78.4867",
    },
  };
}
