import { Question } from "../data/questionnaires"

export default function QuestionStep({
  question,
  onSelect,
}: {
  question: Question
  onSelect: (value: number) => void
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">
        {question.text}
      </h2>

      {question.type === "radio" && (
        <div className="space-y-3">
          {question.options.map((opt, index) => (
            <button
              key={index}
              onClick={() => onSelect(opt.value)}
              className="w-full p-4 rounded-2xl border hover:bg-[#c5a49a]/10 transition text-right"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {question.type === "scale" && (
        <div className="flex gap-2">
          {Array.from(
            { length: question.max - question.min + 1 },
            (_, i) => i + question.min
          ).map((num) => (
            <button
              key={num}
              onClick={() => onSelect(num)}
              className="w-10 h-10 rounded-full border"
            >
              {num}
            </button>
          ))}
        </div>
      )}

      {question.type === "number" && (
        <input
          type="number"
          onBlur={(e) => onSelect(Number(e.target.value))}
          className="border rounded-xl p-3 w-full"
        />
      )}
    </div>
  )
}
