export function HeaderCard({
  title,
  subtitle,
  description,
  progress,
  currentIndex,
  answeredQuestions,
  totalQuestions,
}: any) {
  return (
    <header className="rounded-[42px] border border-white/60 bg-white/45 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          {subtitle && (
            <p
              dir="ltr"
              className="mb-2 inline-flex rounded-full border border-white/70 bg-white/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b9472]"
            >
              {subtitle}
            </p>
          )}

          <h1 className="text-xl font-black leading-tight text-[#2e2823] sm:text-xl">
            {title}
          </h1>

          {description && (
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[#665b51]">
              {description}
            </p>
          )}
        </div>

        <div className="min-w-[170px] rounded-[24px] border border-white/60 bg-[#fbf8f3]/65 p-2 text-center shadow-inner">
          <p className="text-xs font-bold text-[#8b9472]">سؤال فعلی</p>

          <p className="mt-1 text-3xl font-black text-[#d59a8f]">
            {currentIndex + 1}
            <span className="text-lg text-[#9b8068]">/{totalQuestions}</span>
          </p>

          <p className="text-xs text-[#74685f]">{answeredQuestions} پاسخ</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-1 flex items-center justify-between text-xs font-bold text-[#7d6f63]">
          <span>پیشرفت</span>
          <span>{progress}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[#ded4c8]">
          <div
            className=" rounded-full bg-gradient-to-l from-[#8b9472] via-[#b7bda0] to-[#d59a8f] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </header>
  );
}
