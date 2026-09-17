import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://shieldseal-waterproofing.vercel.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
