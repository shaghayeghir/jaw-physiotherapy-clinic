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
        className="w-full bg-[#fdf8f2] overflow-hidden px-6 lg:px-16 py-6 lg:py-10"
      >
        {/* ردیف اصلی باید full-width باشد */}
        <div className="flex w-full flex-col lg:flex-row items-center gap-8">
          {/* تصویر */}
          <div className="w-full lg:ml-auto flex justify-center ">
            <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[580px]">
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
          {/* متن */}
          <div className="w-full lg:max-w-[640px]">
            <p className="inline-flex items-center gap-3 rounded-full bg-[#d59a8f] px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
              درمان تخصصی، بدون جراحی
              <ShieldCheckIcon
                className="h-4 w-4 shrink-0 text-white"
                aria-hidden="true"
              />
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#495144] sm:text-5xl">
              فیزیوتراپی تخصصی فک و دهان
            </h1>

            <p className="mt-3 max-w-xl text-base leading-7 text-[#6b665f] sm:text-lg">
              درمان اخلال مفصل گیج گاهی-فکی (TMJ) با رویکردی علمی  و
              شخصی سازی شده
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button
                size="lg"
                className="bg-[#8b9472] text-white hover:bg-[#76805d]"
              >
                شروع ارزیابی آنلاین
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#caa497] bg-transparent text-[#9d6257] hover:bg-[#f7ece7]"
              >
                تماس با کلینیک
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* ۴ کارت ویژگی شناور (Floating Trust Bar) */}
      <div dir="rtl" className="relative z-10 px-6 -mt-10 lg:-mt-14">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#f5ece3]">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 divide-y-0 divide-x-0 md:divide-x md:divide-x-reverse md:divide-[#f5ece3]">
            {FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-center text-center sm:text-right gap-3 px-4 py-3"
                >
                  {/* دایره آیکون با رنگ پس‌زمینه ملایم هماهنگ با طرح */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#faede8] text-[#d59a8f]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#495144]">
                      {feat.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#8c857b]">
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
