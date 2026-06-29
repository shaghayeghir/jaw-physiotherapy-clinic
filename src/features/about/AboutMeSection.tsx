// components/sections/AboutMeSection.tsx
import Image from "next/image";
import { GraduationCap, Award, HeartPulse, MapPin } from "lucide-react";

export function AboutMeSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#fbf8f4] py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:gap-16">
        {/* سمت چپ: تصویر کوچکتر */}
        <div className="relative w-full max-w-[420px] lg:w-[42%]">
          {/* بک‌گراند پشت عکس */}
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2.2rem] bg-[#dfe2d8]" />

          <div className="relative overflow-hidden rounded-[2.2rem] border-8 border-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
            <Image
              src="/image/about/about.jpeg"
              alt="فیزیوتراپیست"
              width={600}
              height={760}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* کارت شناور ۱ */}
          <div className="absolute -left-3 top-8 rounded-2xl bg-white px-4 py-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d59a8f]/15 text-[#d59a8f]">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#495144]">
                  کارشناسی ارشد
                </p>
                <p className="text-xs text-[#8c857b]">
                  دانشگاه علوم پزشکی ایران
                </p>
              </div>
            </div>
          </div>

          {/* کارت شناور ۲ */}
          <div className="absolute -bottom-5 right-4 rounded-2xl bg-white px-4 py-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe2d8] text-[#495144]">
                <HeartPulse size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#495144]">
                  تخصص درمان TMD
                </p>
                <p className="text-xs text-[#8c857b]">
                  فک، گردن و اختلالات مفصل
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* سمت راست: متن */}
        <div className="w-full lg:w-[58%]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#d59a8f]/10 px-4 py-2 text-sm font-medium text-[#d59a8f]">
            <MapPin size={16} />
            درباره من
          </div>

          <h2 className="text-xl font-bold leading-tight text-[#495144] sm:text-4xl lg:text-2xl">
            همراه شما در مسیر کاهش درد و بهبود عملکرد فک
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#8c857b] sm:text-lg">
            من فیزیوتراپیست هستم و با تمرکز بر درمان اختلالات مفصل گیجگاهی-فکی
            (TMD)، دردهای ناحیه فک، گردن، صورت و علائم همراه مانند وزوز گوش را
            با رویکردی علمی و دقیق ارزیابی و درمان می‌کنم.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-[#8c857b] sm:text-lg">
            هدف من این است که با ترکیب دانش تخصصی، تجربه بالینی و برنامه درمانی
            شخصی‌سازی‌شده، به شما کمک کنم تا دوباره بدون درد غذا بجوید، صحبت
            کنید و کیفیت زندگی بهتری داشته باشید.
          </p>

          {/* ویژگی‌ها */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#eee3d7] bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#d59a8f]/10 text-[#d59a8f]">
                <Award size={20} />
              </div>
              <h3 className="text-sm font-bold text-[#495144]">دانش تخصصی</h3>
              <p className="mt-1 text-sm leading-7 text-[#8c857b]">
                آموزش آکادمیک و رویکرد مبتنی بر شواهد
              </p>
            </div>

            <div className="rounded-2xl border border-[#eee3d7] bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#dfe2d8] text-[#495144]">
                <HeartPulse size={20} />
              </div>
              <h3 className="text-sm font-bold text-[#495144]">درمان هدفمند</h3>
              <p className="mt-1 text-sm leading-7 text-[#8c857b]">
                تمرکز بر علت درد و بهبود عملکرد واقعی
              </p>
            </div>
          </div>

          {/* دکمه */}
          <div className="mt-10">
            <button className="rounded-full bg-[#d59a8f] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#c8897e] hover:shadow-[#d59a8f]/30">
              دریافت مشاوره
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
