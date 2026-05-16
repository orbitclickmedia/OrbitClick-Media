import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const routes = [{ path: "/", priority: 1 }];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
