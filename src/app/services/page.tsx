import Link from "next/link";
import {
  ClipboardCheck,
  Hand,
  Network,
  Dumbbell,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import { servicesData } from "@/features/services/lib/services";


export const metadata: Metadata = {
  title: "خدمات تخصصی فیزیوتراپی فک و گردن | ارزیابی، درمان دستی و توانبخشی",
  description:
    "مجموعه خدمات تخصصی کلینیک شامل ارزیابی دقیق مفصل فک (TMJ)، درمان دستی تخصصی، مدیریت ارتباط فک و گردن و تمرین‌درمانی پیشرفته.",
};

// نگاشت دقیق نام آیکون‌ها
const iconMap = {
  ClipboardCheck,
  Hand,
  Network,
  Dumbbell,
};

type IconKey = keyof typeof iconMap;

export default function ServicesIndexPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#fdf8f2] text-[#495144] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* هدر بخش */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eff0ec] text-[#8b9472] text-sm font-medium mb-4 border border-[#8b9472]/20">
            <Sparkles size={16} />
            <span>مسیر علمی و یکپارچه بهبودی</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#495144] tracking-tight leading-tight">
            خدمات تخصصی فیزیوتراپی فک و صورت
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6b665f] leading-relaxed">
            رویکردی ساختاریافته و شواهد‌محور برای درمان اختلالات مفصل گیجگاهی-فکی (TMD)، دردهای عضلانی صورت، سردردها و مشکلات گردن.
          </p>
        </header>

        {/* گرید خدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            // جلوگیری از خطای TypeScript با Type Narrowing منعطف
            const rawService = service as Record<string, any>;
            
            const iconName = (service.iconName as IconKey) in iconMap
              ? (service.iconName as IconKey)
              : "ClipboardCheck";
            const IconComponent = iconMap[iconName];

            const isSage = service.accentColor === "sage";

            // استخراج بج (heroBadge یا step یا مقدار پیش‌فرض مرحله)
            const badgeText =
              rawService.heroBadge ||
              rawService.badge ||
              rawService.step ||
              `مرحله ۰${index + 1}`;

            // استخراج بولت‌پوینت‌ها (detailedPoints یا clinicalFocus یا points)
            const highlights: string[] =
              rawService.detailedPoints ||
              rawService.clinicalFocus ||
              rawService.points ||
              [];

            return (
              <article
                key={service.id || service.slug || index}
                className="group relative bg-white rounded-[2rem] p-7 sm:p-8 border border-[#f5ece3] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(139,148,114,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* بج بالا و آیکون */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                        isSage
                          ? "bg-[#eff0ec] text-[#8b9472]"
                          : "bg-[#faede8] text-[#d59a8f]"
                      }`}
                    >
                      {badgeText}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isSage
                          ? "bg-[#eff0ec] text-[#8b9472]"
                          : "bg-[#faede8] text-[#d59a8f]"
                      }`}
                    >
                      <IconComponent size={24} />
                    </div>
                  </div>

                  {/* عنوان و توضیح مختصر */}
                  <h2 className="text-xl sm:text-2xl font-bold text-[#495144] group-hover:text-[#8b9472] transition-colors">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[#6b665f] text-sm sm:text-base leading-relaxed">
                    {service.excerpt}
                  </p>

                  {/* تمرکز بالینی / نکات برجسته */}
                  {highlights.length > 0 && (
                    <ul className="mt-6 space-y-2.5">
                      {highlights.slice(0, 3).map((item, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#495144]/80"
                        >
                          <CheckCircle2
                            size={16}
                            className={`shrink-0 ${isSage ? "text-[#8b9472]" : "text-[#d59a8f]"}`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* دکمه انتقال به صفحه جزئیات خدمت */}
                <div className="mt-8 pt-6 border-t border-[#f5ece3]">
                  <Link
                    href={`/services/${service.slug}`}
                    className={`inline-flex items-center justify-between w-full px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      isSage
                        ? "bg-[#eff0ec] text-[#8b9472] hover:bg-[#8b9472] hover:text-white"
                        : "bg-[#faede8] text-[#d59a8f] hover:bg-[#d59a8f] hover:text-white"
                    }`}
                  >
                    <span>مطالعه جزییات و برنامه درمانی</span>
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* بنر پایانی آموزش */}
        <div className="mt-16 rounded-[2.5rem] bg-gradient-to-r from-[#eff0ec] to-[#faede8] p-8 sm:p-10 border border-[#f5ece3] text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-[#495144]">
            آموزش؛ کلید ماندگاری بهبودی
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#6b665f] max-w-2xl mx-auto leading-relaxed">
            ما بر این باوریم که آگاهی بیمار از پاتولوژی خود، نیمی از مسیر درمان است. تمامی خدمات ما با ارائه آموزش‌های اختصاصی سبک زندگی و تمرینات هدفمند همراه خواهد بود.
          </p>
        </div>
      </div>
    </main>
  );
}
