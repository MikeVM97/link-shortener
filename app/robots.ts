import { MetadataRoute } from "next";
import { URL } from "./constants";

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
