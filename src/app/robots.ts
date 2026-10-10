import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://agencies.shri.org.in/sitemap.xml",
    host: "https://agencies.shri.org.in",
  };
}
