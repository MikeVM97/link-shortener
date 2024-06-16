import { MetadataRoute } from "next";

const URL = window.location.href;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: URL,
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
