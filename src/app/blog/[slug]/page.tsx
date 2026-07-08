
import { blogPosts } from "@/features/blog/blogData/blogData";
import { notFound } from "next/navigation";
import Article from "@/features/blog/components/article/Article";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return <Article params={params} />;
}
