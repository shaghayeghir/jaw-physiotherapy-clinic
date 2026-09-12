import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  ClipboardCheck,
  Hand,
  Network,
  Dumbbell,
  ArrowRight,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";
import type { Metadata } from "next";
import { servicesData } from "@/features/services/lib/services";

const iconMap = {
  ClipboardCheck,
  Hand,
  Network,
  Dumbbell,
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug || s.id === slug);

  if (!service) {
    return {
      title: "خدمت یافت نشد | کلینیک فیزیوتراپی فک و گردن",
    };
  }

  return {
    title: `${service.title} | کلینیک فیزیوتراپی تخصصی فک و گردن`,
    description: service.excerpt,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.excerpt,
      type: "article",
    },
  };
}

export default async function SingleServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug || s.id === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName];
  const isSage = service.accentColor === "sage";

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fdf8f2] text-[#495144] py-12 px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* بازگشت */}
        <div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6b665f] hover:text-[#8b9472] transition-colors"
          >
            <ArrowRight size={18} />
            <span>بازگشت به همه خدمات</span>
          </Link>
        </div>

        {/* هدر خدمت */}
        <header className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-[#f5ece3] shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span
                className={`inline-block text-xs font-bold px-3.5 py-1.5 rounded-full mb-3.5 ${
                  isSage
                    ? "bg-[#eff0ec] text-[#8b9472]"
                    : "bg-[#faede8] text-[#d59a8f]"
                }`}
              >
                خدمت شماره {service.number}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#495144] leading-snug">
                {service.title}
              </h1>
            </div>
            <div
              className={`w-16 h-16 rounded-3xl flex-shrink-0 flex items-center justify-center ${
                isSage
                  ? "bg-[#eff0ec] text-[#8b9472]"
                  : "bg-[#faede8] text-[#d59a8f]"
              }`}
            >
              <IconComponent size={32} />
            </div>
          </div>

          <p className="mt-6 text-base sm:text-lg text-[#8c857b] leading-relaxed border-t border-[#f5ece3] pt-6 font-medium">
            {service.excerpt}
          </p>
        </header>

        {/* تصویر اختصاصی در صورت وجود */}
        {service.image && (
          <div className="relative h-[280px] sm:h-[400px] w-full overflow-hidden rounded-[2.5rem] bg-white border border-[#f5ece3] shadow-[0_10px_35px_rgba(0,0,0,0.03)] p-4">
            <Image
              src={service.image}
              alt={service.imageAlt || service.title}
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        )}

        {/* متن اصلی و کامل بدون کوچکترین تغییر */}
        <article className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-[#f5ece3] shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
          <div className="rounded-2xl bg-[#faf6f2] p-6 sm:p-8">
            <p className="whitespace-pre-line text-base sm:text-lg leading-8 sm:leading-9 text-[#6b665f] font-normal">
              {service.content}
            </p>
          </div>
        </article>

        {/* CTA رزرو نوبت */}
        <section className="bg-gradient-to-r from-[#8b9472] to-[#767e60] text-white rounded-[2.5rem] p-8 sm:p-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-right">
            <h3 className="text-xl sm:text-2xl font-bold">
              نیاز به ارزیابی تخصصی فک و گردن دارید؟
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white/90 leading-relaxed">
              جهت دریافت وقت مشاوره و معاینه دقیق بالینی با ما در ارتباط باشید.
            </p>
          </div>
            <a
              href="https://wa.me/989132702137"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#495144] hover:bg-[#fdf8f2] font-bold text-sm transition-all shadow-md flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>مشاوره در واتساپ</span>
            </a>
        </section>
      </div>
    </main>
  );
}
