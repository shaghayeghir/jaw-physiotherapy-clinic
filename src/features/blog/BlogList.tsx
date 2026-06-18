import { BlogCard } from "./BlogCard";

export const BlogList = () => {
  const posts = [
    {
      title: "درمان تخصصی فک",
      excerpt: "توضیحات کوتاه مقاله...",
      image: "/image/hero/jaw-physiotherapy-hero-transparent.png",
      date: "۱۴ خرداد",
    },
    {
      title: "درمان تخصصی فک",
      excerpt: "توضیحات کوتاه مقاله...",
      image: "/image/hero/jaw-physiotherapy-hero-transparent.png",
      date: "۱۴ خرداد",
    },
    {
      title: "درمان تخصصی فک",
      excerpt: "توضیحات کوتاه مقاله...",
      image: "/image/hero/jaw-physiotherapy-hero-transparent.png",
      date: "۱۴ خرداد",
    },
    {
      title: "درمان تخصصی فک",
      excerpt: "توضیحات کوتاه مقاله...",
      image: "/image/hero/jaw-physiotherapy-hero-transparent.png",
      date: "۱۴ خرداد",
    },
    {
      title: "درمان تخصصی فک",
      excerpt: "توضیحات کوتاه مقاله...",
      image: "/image/hero/jaw-physiotherapy-hero-transparent.png",
      date: "۱۴ خرداد",
    },
    {
      title: "درمان تخصصی فک",
      excerpt: "توضیحات کوتاه مقاله...",
      image: "/image/hero/jaw-physiotherapy-hero-transparent.png",
      date: "۱۴ خرداد",
    },
    // دیتای بیشتر...
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <BlogCard key={i} {...post} />
        ))}
      </div>
    </section>
  );
};
