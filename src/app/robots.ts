import { MetadataRoute } from "next";
import { domainUrl } from "@global/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `https://${domainUrl}/sitemap.xml`,
  };
}
