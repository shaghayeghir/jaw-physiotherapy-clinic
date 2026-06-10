"use client";

import { Button } from "@/components/ui";
import Image from "next/image";
import {
  ShieldCheckIcon,
  UserCheck2,
  HeartHandshake,
  Leaf,
  Activity,
} from "lucide-react";
// دیتا مربوط به ۴ ویژگی زیر هیرو
const FEATURES = [
  {
    title: "ارزیابی تخصصی",
    description: "بررسی دقیق و علمی",
    icon: UserCheck2,
  },
  {
    title: "درمان غیرتهاجمی",
    description: "بدون نیاز به جراحی",
    icon: HeartHandshake,
  },
  {
    title: "طرح درمان شخصی‌سازی‌شده",
    description: "متناسب با شرایط شما",
    icon: Leaf,
  },
  {
    title: "بهبود پایدار",
    description: "کاهش درد و بازگشت عملکرد",
    icon: Activity,
  },
];
export default function HeroSection() {
return (
    <>
      <section
        dir="rtl"
        className="w-full bg-[#fdf8f2] px-4 pt-6 pb-12 sm:px-6 lg:px-8"
      >
        {/* استفاده از flex-col-reverse در موبایل برای بالا آمدن متن و پایین رفتن عکس */}
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
              فیزیوتراپی تخصصی فک و دهان
            </h1>

            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-base leading-7 text-[#6b665f] sm:text-lg">
              درمان اختلال مفصل گیجگاهی-فکی (TMJ) با رویکردی علمی و شخصی‌سازی شده
            </p>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
              <Button
                size="lg"
                className="bg-[#8b9472] text-white hover:bg-[#76805d]"
              >
                شروع ارزیابی آنلاین
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#caa497] bg-transparent text-[#9d6257] dark:text-[#9d6257] hover:bg-[#f7ece7] whitespace-nowrap"
              >
                تماس با سپیده مصری پور
              </Button>
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

      {/* ۴ کارت ویژگی شناور (Floating Trust Bar) */}
      <div className="relative z-10 px-4 sm:px-6 -mt-6 sm:-mt-10 lg:-mt-14">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-2 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#f5ece3]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="
                    /* موبایل: چیدمان افقی و بسیار شیک به جای عمودی طولانی */
                    flex flex-row items-center gap-4 px-4 py-5 text-right
                    border-b border-[#f5ece3] last:border-b-0
                    
                    /* تبلت (sm): دو ستونه با جداکننده‌های کاملاً تراز شده */
                    sm:flex-row sm:items-start sm:text-right
                    sm:border-b sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(4)]:border-b-0
                    sm:border-l sm:[&:nth-child(even)]:border-l-0
                    
                    /* دسکتاپ (lg): چهار ستونه در یک ردیف */
                    lg:flex-row lg:items-start lg:text-right
                    lg:border-b-0 lg:border-l lg:last:border-l-0
                  "
                >
                  {/* بخش آیکون‌ها با رنگ‌های متناوب */}
                  {idx % 2 === 0 ? (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#faede8] text-[#d59a8f]">
                      <Icon className="h-6 w-6" />
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eff0ec] text-[#8b9472]">
                      <Icon className="h-6 w-6" />
                    </div>
                  )}

                  {/* بخش متون کارت */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-sm font-bold text-[#495144]">
                      {feat.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#8c857b] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
