import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://phyothihaaung.netlify.app",
      lastModified: new Date(),
    },
  ];
}
