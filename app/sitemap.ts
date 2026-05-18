import type { MetadataRoute } from "next";
import { blogPosts, services } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.85 },
  { path: "/services", priority: 0.95 },
  { path: "/case-studies", priority: 0.8 },
  { path: "/contact", priority: 0.9 },
  { path: "/blog", priority: 0.8 },
  { path: "/careers", priority: 0.55 },
  { path: "/privacy-policy", priority: 0.25 },
  { path: "/terms-and-conditions", priority: 0.25 },
  ...services.map((service) => ({ path: `/services/${service.slug}`, priority: 0.92 })),
  ...blogPosts.map((post) => ({ path: `/blog/${post.slug}`, priority: 0.75 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
