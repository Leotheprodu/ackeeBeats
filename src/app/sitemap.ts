import { MetadataRoute } from "next";
import { domainUrl } from "@global/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${domainUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
