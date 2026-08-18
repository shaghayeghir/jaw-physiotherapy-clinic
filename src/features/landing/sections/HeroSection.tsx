"use client";

import { useState } from "react";
// فرض بر این است که کامپوننت Button شما یک لینک Next.js است یا یک A
import { Button } from "@/components/ui";
import Image from "next/image";
import {
  ShieldCheckIcon,
  UserCheck2,
  HeartHandshake,
  Leaf,
  Activity,
  X,
} from "lucide-react";

// ساختار داده ویژگی‌ها با اضافه شدن فیلد link و content
const FEATURES = [
  {
    id: "assessment",
    title: "ارزیابی تخصصی",
    description: "بررسی دقیق و علمی",
    icon: UserCheck2,
    // حالت پاپ‌آپ
    popupTitle: "ارزیابی تخصصی؛ اندازه‌گیری، تحلیل و پیگیری عینی درمان",
    popupContent: (
      <div className="space-y-4 text-sm leading-7 text-[#6b665f]">
        <p>
          پیشرفت درمان علاوه بر گزارش بهبودی توسط مراجع، باید تا حد امکان قابل
          اندازه‌گیری باشد. به همین دلیل، در طول درمان، دامنه باز شدن دهان،
          دامنه بدون درد، حرکات جانبی، شدت و محل درد، حساسیت عضلات و سایر
          شاخص‌های عملکردی به‌صورت منظم ارزیابی و ثبت می‌شوند تا روند درمان
          به‌صورت عینی قابل پیگیری باشد.
        </p>
        <p>
          در مواردی که ارزیابی دقیق‌تر حرکت فک ضروری باشد، مسیر حرکت فک با
          استفاده از تحلیل ویدئویی و نرم‌افزارهای تخصصی بررسی و دامنه حرکتی با
          ابزارهای استاندارد اندازه‌گیری ثبت می‌شود. این اطلاعات کمک می‌کنند
          تغییرات، حتی در حد چند میلی‌متر، به‌صورت عینی قابل مشاهده باشند و روند
          درمان بر اساس داده‌های واقعی، علاوه بر احساس مراجع، پیگیری شود.
        </p>
        <p className="font-medium text-[#8b9472]">
          یافته‌های این ارزیابی‌ها به من کمک می‌کنند تا از میان روش‌های درمانی
          مختلف مناسب‌ترین ترکیب را برای هر فرد انتخاب کنم.
        </p>
      </div>
    ),
  },
  {
    id: "non-invasive",
    title: "درمان غیرتهاجمی",
    description: "بدون نیاز به جراحی",
    icon: HeartHandshake,
    // این کارت نه لینک دارد و نه پاپ‌آپ
  },
  {
    id: "personalized",
    title: "طرح درمان شخصی‌سازی‌شده",
    description: "متناسب با شرایط شما",
    icon: Leaf,
    // حالت پاپ‌آپ
    popupTitle: "طرح درمان شخصی؛ درمان متناسب با زندگی هر بیمار",
    popupContent: (
      <div className="space-y-4 text-sm leading-7 text-[#6b665f]">
        <p>
          درمان تنها به اختلال مفصل یا عضله محدود نمی‌شود. باور دارم بهترین
          درمان، درمانی است که بر پایه شنیدن دقیق، ارزیابی علمی، تصمیم‌گیری
          مبتنی بر شواهد و احترام به تفاوت‌ها شکل بگیرد؛ زیرا هر فرد مسیر درمانی
          منحصربه‌فرد خود را دارد.
        </p>
        <p>
          هر بیمار برای من مجموعه‌ای از علائم نیست؛ بلکه یک مسئله بالینی است که
          باید با دقت شنیده، تحلیل و برای آن راه‌حلی متناسب طراحی شود. همین
          فرآیند تحلیل و یافتن بهترین مسیر درمان، چیزی است که بیش از هر چیز به
          کارم معنا می‌دهد.
        </p>
        <p>
          اینکه مراجع، معلم یا روانشناس است و ساعت‌ها صحبت می‌کند، کارمند است و
          زمان زیادی پشت میز می‌نشیند یا شغل دیگری دارد، در طراحی برنامه درمانی
          اهمیت دارد. همچنین به عواملی مانند کیفیت خواب، وضعیت بدنی، استرس و
          اضطراب توجه می‌کنم؛ زیرا این عوامل می‌توانند بر تجربه درد و روند بهبود
          تأثیر بگذارند.
        </p>
        <p className="font-medium text-[#d59a8f]">
          به همین دلیل، درمان برای هر مراجع متناسب با شرایط، اهداف و نیازهای
          عملکردی او طراحی می‌شود؛ نه بر اساس یک برنامه ثابت و یکسان.
        </p>
      </div>
    ),
  },
  {
    id: "stable",
    title: "بهبود پایدار",
    description: "کاهش درد و بازگشت عملکرد",
    icon: Activity,
    link: "/patientTestimonials", // <--- این بخش اضافه شد
  },
];

export default function HeroSection() {
  const [activePopup, setActivePopup] = useState<{
    title: string;
    content: React.ReactNode;
  } | null>(null);

  // یک کامپوننت کمکی برای رندر کردن کارت‌ها (چه a باشد، چه div)
  const CardContent = ({ feat, Icon, hasAction, handleAction }: any) => (
    <div
      className={`
        flex flex-row items-center gap-4 px-4 py-5 text-right
        transition-all duration-200
        
        /* کلیک‌خور بودن */
        ${hasAction ? "cursor-pointer hover:bg-[#faf6f2] group" : "cursor-default"}
        
        /* مرزها (Border logic as before) */
        border-b border-[#f5ece3] last:border-b-0
        sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(4)]:border-b-0
        sm:[&:nth-child(even)]:border-r sm:[&:nth-child(even)]:border-[#f5ece3]
        lg:border-b-0 lg:[&:nth-child(even)]:border-r-0
        lg:border-l lg:border-[#f5ece3] lg:last:border-l-0
      `}
      onClick={handleAction}
    >
      {/* بخش آیکون‌ها */}
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
          hasAction ? "group-hover:scale-105" : ""
        } ${
          feat.id % 2 === 0
            ? "bg-[#faede8] text-[#d59a8f]"
            : "bg-[#eff0ec] text-[#8b9472]"
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* بخش متون کارت */}
      <div className="flex flex-col justify-center">
        <h3
          className={`text-sm font-bold text-[#495144] flex items-center gap-1.5 ${
            hasAction ? "group-hover:text-[#9d6257] transition-colors" : ""
          }`}
        >
          {feat.title}
          {/* نمایش آیکون فلش برای لینک */}
        </h3>
        <p className="mt-1 text-xs text-[#8c857b] leading-relaxed">
          {feat.description}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full bg-white p-2 sm:p-8 lg:p-4">
        <section
          dir="rtl"
          className="relative rounded-[2.5rem] lg:rounded-[3.5rem] bg-[#fdf8f2] px-6 pt-2 pb-10 lg:pb-12"
        >
          <div className="flex w-full flex-col-reverse lg:flex-row items-center gap-8 lg:gap-18">
            {/* بخش متن هیرو */}
            <div className="w-full lg:max-w-[640px] text-center lg:text-right">
              <p className="inline-flex items-center gap-3 rounded-full bg-[#d59a8f] px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
                درمان تخصصی، بدون جراحی
                <ShieldCheckIcon
                  className="h-4 w-4 shrink-0 text-white"
                  aria-hidden="true"
                />
              </p>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#495144] sm:text-5xl">
                فیزیوتراپی تخصصی فک و گردن
              </h1>

              <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-base leading-7 text-[#6b665f] sm:text-lg">
                درمان اختلال مفصل گیجگاهی-فکی (TMJ) با رویکردی علمی و شخصی‌سازی
                شده
              </p>
              <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-base leading-7 text-[#d59a8f] sm:text-lg">
                آرامش جسم تو حس خوب من{" "}
                <span className="text-[#d59a8f] animate-pulse">❤</span>
              </p>

              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                <Button
                  size="lg"
                  className="bg-[#8b9472] text-white hover:bg-[#76805d]"
                  href="/assessment"
                >
                  شروع ارزیابی آنلاین
                </Button>
                <a
                  href="https://wa.me/989132702137" // لینک واتساپ مشاوره
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-[#caa497] bg-transparent px-8 text-sm font-medium text-[#9d6257] transition-colors hover:bg-[#f7ece7] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  تماس و مشاوره واتساپ
                </a>
              </div>
            </div>

            {/* بخش تصویر هیرو */}
            <div className="w-full flex justify-center">
              <div className="relative w-[260px] sm:w-[320px] lg:w-[580px] aspect-[4/3] max-w-full">
                <Image
                  src="/image/hero/jaw-physiotherapy-hero-transparent.png"
                  alt="TMD physiotherapy illustration"
                  fill
                  priority
                  className="object-contain"
                />
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-emerald-700/10 blur-3xl" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ۴ کارت ویژگی شناور */}
      <div className="relative z-10 px-4 sm:px-6 -mt-6 sm:-mt-17 lg:-mt-14">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-2 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#f5ece3]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              const hasAction =
                feat.link || (feat.popupTitle && feat.popupContent);

              // تابعی که هنگام کلیک اجرا می‌شود
              const handleAction = () => {
                if (feat.popupTitle && feat.popupContent) {
                  setActivePopup({
                    title: feat.popupTitle,
                    content: feat.popupContent,
                  });
                }
              };
              if (feat.link) {
                return (
                  <a key={idx} href={feat.link} className="block">
                    <CardContent
                      feat={feat}
                      Icon={Icon}
                      hasAction={hasAction}
                      handleAction={handleAction}
                    />
                  </a>
                );
              }

              return (
                <div key={idx}>
                  <CardContent
                    feat={feat}
                    Icon={Icon}
                    hasAction={hasAction}
                    handleAction={handleAction}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* کامپوننت پاپ‌آپ اختصاصی (Modal)  */}
      {activePopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-300"
          onClick={() => setActivePopup(null)}
          dir="rtl"
        >
          <div
            className="relative w-full max-w-2xl rounded-[2rem] bg-[#fdf8f2] border border-[#f5ece3] p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن هنگام کلیک داخل پاپ‌آپ
          >
            {/* دکمه بستن */}
            <button
              onClick={() => setActivePopup(null)}
              className="absolute top-4 left-4 p-1.5 rounded-full bg-white border border-[#f5ece3] text-[#8c857b] hover:text-[#495144] hover:bg-[#eff0ec] transition-colors"
              aria-label="بستن"
            >
              <X className="h-5 w-5" />
            </button>

            {/* عنوان پاپ‌آپ */}
            <div className="mb-6 pb-4 border-b border-[#caa497]/20">
              <h2 className="text-lg sm:text-xl font-bold text-[#495144]">
                {activePopup.title}
              </h2>
            </div>

            {/* محتوای پاپ‌آپ */}
            <div className="max-h-[60vh] overflow-y-auto pr-1">
              {activePopup.content}
            </div>

            {/* دکمه پایین */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActivePopup(null)}
                className="px-6 py-2 rounded-xl bg-[#8b9472] hover:bg-[#76805d] text-white text-sm font-semibold transition-colors"
              >
                متوجه شدم
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
