export default function ResultView({
  answers,
}: {
  answers: number[]
}) {
  const score = answers.reduce((a, b) => a + b, 0)

  return (
    <div className="max-w-xl mx-auto py-16 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">
        نتیجه ارزیابی
      </h2>

      <p className="text-lg mb-6">
        امتیاز شما: <span className="font-bold">{score}</span>
      </p>

      <p className="text-gray-600">
        برای تفسیر دقیق‌تر با کلینیک مشورت کنید.
      </p>
    </div>
  )
}
