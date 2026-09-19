import { MetadataRoute } from "next";
import { ROBOTS_DATABASE } from "@/data/robots";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://physicalaidirectory.com";
  const currentDate = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/humanoid-robots-for-sale`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/humanoid-robot-price-guide`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/open-source/lerobot-guide`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    }
  ];

  // Dynamic robot detail pages
  const robotRoutes: MetadataRoute.Sitemap = ROBOTS_DATABASE.map((robot) => ({
    url: `${baseUrl}/robots/${robot.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...robotRoutes];
}
