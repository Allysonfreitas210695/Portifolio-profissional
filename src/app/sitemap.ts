import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allysonfreitas.dev";
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Future routes:
    // { url: `${baseUrl}/projetos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ];
}
