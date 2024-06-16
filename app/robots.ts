import { MetadataRoute } from "next";

const URL = window.location.href;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${URL}/sitemap.xml`,
  };
}
