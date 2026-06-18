"use client"

import { useMemo, useState } from "react"
import type {
  Question,
  Questionnaire,
} from "@/features/assessment/data/questionnaires"
import {
  calculateAssessmentResult,
  type AssessmentResult,
} from "@/features/assessment/utils/calculateResult"

type QuestionnaireEngineProps = {
  slug: string
  questionnaire: Questionnaire
}

export default function QuestionnaireEngine({
  slug,
  questionnaire,
}: QuestionnaireEngineProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [result, setResult] = useState<AssessmentResult | null>(null)

  const questions = useMemo(
    () => questionnaire.questions,
    [questionnaire.questions]
  )

  const totalQuestions = questions.length
  const currentQuestion = questions[currentIndex]

  const currentAnswer = answers[currentQuestion.id]
  const hasCurrentAnswer = currentAnswer !== undefined

  const answeredQuestions = Object.keys(answers).length
  const isFirstQuestion = currentIndex === 0
  const isLastQuestion = currentIndex === totalQuestions - 1

  const progress = Math.round(((currentIndex + 1) / totalQuestions) * 100)

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))

    if (result) setResult(null)
  }

  const goNext = () => {
 
    if (isLastQuestion) {
      const nextResult = calculateAssessmentResult(slug, answers)
      setResult(nextResult)
      return
    }

    setCurrentIndex((prev) => prev + 1)
  }

  const goPrevious = () => {
    if (isFirstQuestion) return
    setCurrentIndex((prev) => prev - 1)
    setResult(null)
  }

  const restartAssessment = () => {
    setAnswers({})
    setCurrentIndex(0)
    setResult(null)
  }

  return (
    <section
      dir="rtl"
      className="relative h-screen overflow-hidden px-4 py-4 text-[#2d2722] sm:px-6"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto flex  max-w-4xl flex-col">
        <HeaderCard
          title={questionnaire.title}
          subtitle={questionnaire.subtitle}
          description={questionnaire.description}
          progress={progress}
          currentIndex={currentIndex}
          answeredQuestions={answeredQuestions}
          totalQuestions={totalQuestions}
        />

        {!result && (
          <>
            <div className="mt-4 flex flex-1 items-center">
              <QuestionCard
                key={currentQuestion.id}
                index={currentIndex}
                totalQuestions={totalQuestions}
                question={currentQuestion}
                value={currentAnswer}
                onChange={(value:any) =>
                  handleAnswer(currentQuestion.id, value)
                }
              />
            </div>

            <NavigationButtons
              isFirstQuestion={isFirstQuestion}
              isLastQuestion={isLastQuestion}
              hasCurrentAnswer={hasCurrentAnswer}
              onPrevious={goPrevious}
              onNext={goNext}
            />
          </>
        )}

        {result && (
          <ResultCard result={result} onRestart={restartAssessment} />
        )}
      </div>
    </section>
  )
}

function HeaderCard({
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

          <p className="text-xs text-[#74685f]">
            {answeredQuestions} پاسخ
          </p>
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
  )
}

function QuestionCard({
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
  )
}

function RadioInput({ options, value, onChange }: any) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option: any) => {
        const selected = value === option.value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`min-h-[60px] rounded-2xl border px-4 py-3 text-right text-sm font-bold transition ${
              selected
                ? "border-[#d59a8f] bg-[#d59a8f] text-white"
                : "border-white/70 bg-white/60 text-[#574b42] hover:border-[#8b9472]"
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

function ScaleInput({ min, max, step = 1, value, onChange }: any) {
  const currentValue = value ?? min

  return (
    <div className="rounded-[24px] border border-white/70 bg-white/55 p-5">
      <div className="mb-4 flex items-center justify-between text-sm font-bold text-[#66584d]">
        <span>{min}</span>

        <span className="rounded-full bg-[#d59a8f] px-5 py-2 text-white font-black">
          {currentValue}
        </span>

        <span>{max}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#8b9472]"
      />
    </div>
  )
}

function NumberInput({ min, max, placeholder, value, onChange }: any) {
  return (
    <input
      type="number"
      min={min}
      max={max}
      placeholder={placeholder}
      value={value ?? ""}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full rounded-2xl border border-white/70 bg-white/65 px-4 py-4 text-right text-base font-bold text-[#302922] outline-none focus:border-[#d59a8f]"
    />
  )
}

function NavigationButtons({
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
  )
}

function ResultCard({ result, onRestart }: any) {
  return (
    <section className="mt-6 rounded-[36px] border border-white/70 bg-white/55 p-6 text-center">
      <h2 className="text-2xl font-black text-[#2e2823]">
        {result.interpretation}
      </h2>

      <p className="mt-3 text-sm text-[#65594f]">{result.message}</p>

      <button
        onClick={()=>{}}
        className="mt-5 rounded-full bg-[#8b9472] px-6 py-3 text-white font-bold"
      >
      تماس با سپیده مصری پور
      </button>
    </section>
  )
}

function BackgroundDecor() {
  return (
    <>
      <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-[#d59a8f]/35 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-72 h-96 w-96 rounded-full bg-[#8b9472]/35 blur-3xl" />
    </>
  )
}
