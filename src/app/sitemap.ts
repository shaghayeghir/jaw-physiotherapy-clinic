import type { MetadataRoute } from "next";

import { siteMetadata } from "@/seo/siteMetadata";
import { blogPosts } from "@/features/blog/blogData/blogData";

function safeDate(value?: string | Date) {
  if (!value) return new Date();

  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/blog",
    "/assessment",
    "/contact",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteMetadata.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
    lastModified: safeDate(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
