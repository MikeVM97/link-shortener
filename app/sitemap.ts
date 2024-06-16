import { MetadataRoute } from "next";
import { URL } from "./constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: URL as string,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // {
    //   url: 'http://localhost:3000/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: 'http://localhost:3000/blog',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
  ];
}
