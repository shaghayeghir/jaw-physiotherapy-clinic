import { NumberInput } from "./NumberInput";
import { RadioInput } from "./RadioInput";
import { ScaleInput } from "./ScaleInput";

export function QuestionCard({
  index,
  totalQuestions,
  question,
  value,
  onChange,
}: any) {
  return (
    <article className="w-full rounded-[36px] border border-white/60 bg-white/50 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d59a8f] text-sm font-black text-white">
            {index + 1}
          </div>

          <p className="text-xs font-bold text-[#8b9472]">
            سؤال {index + 1} از {totalQuestions}
          </p>
        </div>

        {value !== undefined && (
          <span className="rounded-full bg-[#e7dccf] px-3 py-1 text-xs font-bold text-[#6e6f5b]">
            پاسخ داده شد
          </span>
        )}
      </div>

      <h2 className="text-lg font-black leading-8 text-[#302922] sm:text-xl">
        {question.text}
      </h2>

      <div className="mt-5">
        {question.type === "radio" && (
          <RadioInput
            options={question.options}
            value={value}
            onChange={onChange}
          />
        )}

        {question.type === "scale" && (
          <ScaleInput
            min={question.min}
            max={question.max}
            step={question.step}
            value={value}
            onChange={onChange}
          />
        )}

        {question.type === "number" && (
          <NumberInput
            min={question.min}
            max={question.max}
            placeholder={question.placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    </article>
  );
}
