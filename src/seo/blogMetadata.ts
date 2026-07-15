import type { Metadata } from "next";
import { siteMetadata } from "./siteMetadata";
// import { blogData } from "@/data/blogData";

export function generateBlogMetadata({
  title,
  description,
  slug,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${siteMetadata.siteUrl}/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteMetadata.siteUrl}/blog/${slug}`,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      type: "article",
      images: [
        {
          url: image || siteMetadata.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || siteMetadata.ogImage],
    },
  };
}
