// src/app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { blogPosts } from "../../blogData/blogData";
import ImageGallery from "./components/imageGallery/ImageGallery";


interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Article({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main dir="rtl" className="min-h-screen bg-[#fcf9f6]">
      <header className="relative overflow-hidden">
        <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-[#f7dfe8]/60 blur-2xl" />
        <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-[#dfe9d7]/70 blur-2xl" />

        <div className="relative mx-auto max-w-5xl px-5 pb-6 pt-10 sm:px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e9ded9] bg-white/70 px-4 py-2 text-sm text-[#8b9472] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#8b9472]" />
            <span>{post.category ?? "مقالات"}</span>
            <span className="text-[#c7bdb7]">•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-balance text-3xl font-extrabold leading-[1.35] text-[#2b2b2b] sm:text-4xl">
            {post.title}
          </h1>

          {post.tags?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.slice(0, 8).map((t: string) => (
                <span
                  key={t}
                  className="rounded-full bg-white/80 px-3 py-1 text-xs text-[#8b9472] ring-1 ring-[#eadfda]"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      <article className="mx-auto mt-3 grid max-w-5xl grid-cols-1 gap-6 px-5 pb-14 sm:px-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <section className="rounded-[2.5rem] border border-[#eadfda] bg-white p-6 sm:p-8">
            <h2 className="mb-3 text-lg font-bold text-[#2b2b2b]">خلاصه</h2>
            <p className="text-[15px] leading-8 text-[#4b4b4b] sm:text-base">
              {post.content?.intro}
            </p>
          </section>

          <section className="rounded-[2.5rem] border border-[#eadfda] bg-white p-6 sm:p-8">
            <p className="whitespace-pre-line text-[15px] leading-8 text-[#4b4b4b] sm:text-base">
              {post.content?.main}
            </p>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2.5rem] border border-[#eadfda] bg-white p-6">
            <h3 className="text-base font-bold text-[#2b2b2b]">مشخصات مقاله</h3>

            <dl className="mt-4 space-y-3 text-sm">
              {post.date ? (
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#8b9472]">تاریخ</dt>
                  <dd className="text-[#2b2b2b]">{post.date}</dd>
                </div>
              ) : null}

              <div className="flex items-center justify-between gap-4">
                <dt className="text-[#8b9472]">زمان مطالعه</dt>
                <dd className="text-[#2b2b2b]">{post.readTime}</dd>
              </div>
            </dl>
          </div>

          <ImageGallery
            images={post.contentImage ?? []}
            title={post.title}
          />
        </aside>
      </article>
    </main>
  );
}
