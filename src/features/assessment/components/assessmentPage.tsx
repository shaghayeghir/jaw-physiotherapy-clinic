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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {assessments.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative flex flex-col items-center justify-between overflow-hidden rounded-[45px] border border-white/50 bg-white/60 p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/80 hover:shadow-xl"
            >
              {/* آیکون دایره‌ای کوچک */}
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#edf2e6] text-[#5f6f52] ring-8 ring-[#edf2e6]/30">
                {item.icon}
              </div>

              <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold text-[#2f3a2f] mb-4">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-500 max-w-[220px]">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 flex items-center text-sm font-semibold text-gray-400 transition-colors group-hover:text-[#5f6f52]">
                <span className="mr-1">→</span> شروع ارزیابی
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
