import { MetadataRoute } from "next";

const URL = process.env.CLIENT_HOSTNAME || "http://localhost:3000";

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
