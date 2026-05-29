import { MetadataRoute } from "next";
import places from "@/data/places";
import blogs from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://almora-tourism.vercel.app/";

  const placeUrls = places.map((place) => ({
    url: `${baseUrl}/places/${place.slug}`,
    lastModified: new Date(),
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/places`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
    },

    ...placeUrls,
    ...blogUrls,
  ];
}