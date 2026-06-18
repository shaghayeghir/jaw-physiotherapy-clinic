import Image from "next/image";
import Link from "next/link";
import { assessments } from "../data/assessmentsData";

export default function AssessmentPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <div className="fixed inset-0 -z-20">
        <Image
          src="/image/assessment/assessment_bg.png"
          alt="Clinic Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="fixed inset-0 -z-10 bg-[#f8f5f0]/20 backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-4">
        <div className="mb-20 text-center">
          <h5 className="mt-8 text-xl font-bold tracking-tight text-[#2f3a2f] md:text-4xl">
            ارزیابی شدت علائم
          </h5>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600/90">
            لطفاً یکی از پرسشنامه‌های زیر را انتخاب کنید. پاسخ‌های دقیق شما به
            تشخیص بهتر متخصص کمک خواهد کرد.
          </p>
        </div>

        {/* گرید کارت‌ها با استایل شیشه‌ای (Glassmorphism) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {assessments.map((item, index) => (
    <Link
      key={index}
      href={item.href}
      aria-label={`شروع ارزیابی ${item.title}`}
      className="
        group relative flex min-h-[320px] flex-col overflow-hidden
        rounded-[36px] border border-white/60 bg-white/65 p-7
        text-right shadow-[0_18px_45px_rgba(95,111,82,0.08)]
        backdrop-blur-md transition-all duration-300 ease-out
        hover:-translate-y-2 hover:border-[#d8e3cf] hover:bg-white/85
        hover:shadow-[0_24px_60px_rgba(95,111,82,0.16)]
        focus:outline-none focus:ring-4 focus:ring-[#edf2e6]
      "
    >
      {/* تزئین نرم پس‌زمینه */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#edf2e6]/70 blur-2xl transition-transform duration-500 group-hover:scale-125" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-[#f4eadf]/70 blur-2xl transition-transform duration-500 group-hover:scale-125" />

      {/* بالای کارت */}
      <div className="relative z-10 mb-7 flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf2e6] text-[#5f6f52] shadow-inner ring-8 ring-[#edf2e6]/35 transition-transform duration-300 group-hover:scale-105">
          {item.icon}
        </div>

        <span className="rounded-full bg-[#f8f5ef] px-3 py-1 text-xs font-medium text-[#7c6f5f]">
          آنلاین
        </span>
      </div>

      {/* متن کارت */}
      <div className="relative z-10 flex flex-1 flex-col">
        <h2 className="mb-3 text-lg font-bold leading-8 text-[#2f3a2f]">
          {item.title}
        </h2>

        <p className="line-clamp-3 text-sm leading-7 text-gray-500">
          {item.description}
        </p>

        {/* اطلاعات سریع */}
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-gray-500 ring-1 ring-gray-100">
            حدود ۲ دقیقه
          </span>
          <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-gray-500 ring-1 ring-gray-100">
            نتیجه فوری
          </span>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-8 flex items-center justify-between rounded-2xl bg-[#5f6f52] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-[#4f6044]">
        <span>شروع ارزیابی</span>
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>
      </div>
    </Link>
  ))}
</div>

      </div>
    </main>
  );
}
