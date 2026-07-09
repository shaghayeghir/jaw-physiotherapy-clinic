export function NavigationButtons({
  isFirstQuestion,
  isLastQuestion,
  hasCurrentAnswer,
  onPrevious,
  onNext,
}: any) {
  return (
    <div className="mt-4 flex items-center justify-between">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="rounded-full border border-white/70 bg-white/60 px-6 py-3 text-sm font-bold text-[#6b5848]"
      >
        سؤال قبلی
      </button>

      <button
        type="button"
        onClick={onNext}
        className="rounded-full bg-[#d59a8f] px-7 py-3 text-sm font-black text-white"
      >
        {isLastQuestion ? "مشاهده نتیجه" : "سؤال بعدی"}
      </button>
    </div>
  );
}
