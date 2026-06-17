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
  const [result, setResult] = useState<AssessmentResult | null>(null)

  const totalQuestions = questionnaire.questions.length
  const answeredQuestions = Object.keys(answers).length
  const progress = Math.round((answeredQuestions / totalQuestions) * 100)
  const isComplete = answeredQuestions === totalQuestions

  const orderedQuestions = useMemo(
    () => questionnaire.questions,
    [questionnaire.questions]
  )

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))

    if (result) {
      setResult(null)
    }
  }

  const handleSubmit = () => {
    if (!isComplete) return

    const nextResult = calculateAssessmentResult(slug, answers)
    setResult(nextResult)

    window.setTimeout(() => {
      document
        .getElementById("assessment-result")
        ?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 80)
  }

  return (
    <section
      dir="rtl"
      className="relative min-h-screen px-4 py-8 text-[#2d2722] sm:px-6 lg:px-8"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto max-w-5xl">
        <HeaderCard
          title={questionnaire.title}
          subtitle={questionnaire.subtitle}
          description={questionnaire.description}
          progress={progress}
          answeredQuestions={answeredQuestions}
          totalQuestions={totalQuestions}
        />

        <div className="mt-8 space-y-5">
          {orderedQuestions.map((question, index) => (
            <QuestionCard
              key={question.id}
              index={index}
              question={question}
              value={answers[question.id]}
              onChange={(value) => handleAnswer(question.id, value)}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#6f6258]">
            {isComplete
              ? "همه سوال‌ها پاسخ داده شده‌اند."
              : `${totalQuestions - answeredQuestions} سوال باقی مانده است.`}
          </p>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isComplete}
            className={[
              "rounded-full px-8 py-4 text-sm font-bold transition-all duration-300",
              "shadow-[0_18px_45px_rgba(91,67,45,0.18)]",
              isComplete
                ? "bg-[#7c5f46] text-white hover:-translate-y-0.5 hover:bg-[#6b513b]"
                : "cursor-not-allowed bg-[#d8cec2] text-[#8a7d70]",
            ].join(" ")}
          >
            مشاهده نتیجه
          </button>
        </div>

        {result && <ResultCard result={result} />}
      </div>
    </section>
  )
}

function HeaderCard({
  title,
  subtitle,
  description,
  progress,
  answeredQuestions,
  totalQuestions,
}: {
  title: string
  subtitle?: string
  description?: string
  progress: number
  answeredQuestions: number
  totalQuestions: number
}) {
  return (
    <header className="rounded-[42px] border border-white/60 bg-white/45 p-6 shadow-[0_24px_80px_rgba(88,68,50,0.14)] backdrop-blur-2xl sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          {subtitle && (
            <p
              dir="ltr"
              className="mb-3 inline-flex rounded-full border border-white/70 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d53]"
            >
              {subtitle}
            </p>
          )}

          <h1 className="text-3xl font-black leading-tight text-[#2e2823] sm:text-4xl">
            {title}
          </h1>

          {description && (
            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#665b51] sm:text-base">
              {description}
            </p>
          )}
        </div>

        <div className="min-w-[190px] rounded-[30px] border border-white/60 bg-[#fbf8f3]/65 p-5 text-center shadow-inner">
          <p className="text-4xl font-black text-[#7c5f46]">{progress}%</p>
          <p className="mt-2 text-xs text-[#74685f]">
            {answeredQuestions} از {totalQuestions} پاسخ
          </p>
        </div>
      </div>

      <div className="mt-7 h-3 overflow-hidden rounded-full bg-[#ded4c8]">
        <div
          className="h-full rounded-full bg-gradient-to-l from-[#7c5f46] via-[#a88a6a] to-[#d7bea1] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  )
}

function QuestionCard({
  index,
  question,
  value,
  onChange,
}: {
  index: number
  question: Question
  value?: number
  onChange: (value: number) => void
}) {
  return (
    <article className="group rounded-[34px] border border-white/60 bg-white/45 p-5 shadow-[0_18px_65px_rgba(88,68,50,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 sm:p-6">
      <div className="flex gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#7c5f46] text-sm font-black text-white shadow-lg">
          {index + 1}
        </div>

        <div className="w-full">
          <h2 className="text-base font-bold leading-8 text-[#302922] sm:text-lg">
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
        </div>
      </div>
    </article>
  )
}

function RadioInput({
  options,
  value,
  onChange,
}: {
  options: {
    label: string
    value: number
  }[]
  value?: number
  onChange: (value: number) => void
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {options.map((option) => {
        const selected = value === option.value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={[
              "rounded-2xl border px-4 py-4 text-sm font-bold transition-all duration-300",
              selected
                ? "border-[#7c5f46] bg-[#7c5f46] text-white shadow-[0_12px_30px_rgba(124,95,70,0.28)]"
                : "border-white/70 bg-white/55 text-[#574b42] hover:border-[#b99d80] hover:bg-white/80",
            ].join(" ")}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

function ScaleInput({
  min,
  max,
  step = 1,
  value,
  onChange,
}: {
  min: number
  max: number
  step?: number
  value?: number
  onChange: (value: number) => void
}) {
  const currentValue = value ?? min

  return (
    <div className="rounded-[28px] border border-white/70 bg-white/45 p-5">
      <div className="mb-4 flex items-center justify-between text-sm font-bold text-[#66584d]">
        <span>{min}</span>
        <span className="rounded-full bg-[#7c5f46] px-5 py-2 text-white">
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
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer accent-[#7c5f46]"
      />
    </div>
  )
}

function NumberInput({
  min,
  max,
  placeholder,
  value,
  onChange,
}: {
  min?: number
  max?: number
  placeholder?: string
  value?: number
  onChange: (value: number) => void
}) {
  return (
    <input
      type="number"
      min={min}
      max={max}
      placeholder={placeholder}
      value={value ?? ""}
      onChange={(event) => onChange(Number(event.target.value))}
      className="w-full rounded-2xl border border-white/70 bg-white/60 px-5 py-4 text-right text-sm font-bold text-[#302922] outline-none transition focus:border-[#7c5f46] focus:bg-white"
    />
  )
}

function ResultCard({ result }: { result: AssessmentResult }) {
  const percent = Math.round((result.score / result.maxScore) * 100)

  return (
    <section
      id="assessment-result"
      className="mt-9 rounded-[42px] border border-white/70 bg-white/55 p-6 shadow-[0_24px_80px_rgba(88,68,50,0.16)] backdrop-blur-2xl sm:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-bold text-[#8a6d53]">نتیجه ارزیابی</p>

          <h2 className="mt-3 text-3xl font-black text-[#2e2823]">
            {result.interpretation}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-[#65594f]">
            {result.message}
          </p>

          <p className="mt-4 text-xs leading-6 text-[#8a7d72]">
            این ابزار فقط برای غربالگری اولیه است و جایگزین تشخیص یا درمان
            تخصصی نیست.
          </p>
        </div>

        <div className="rounded-[32px] bg-[#7c5f46] px-8 py-7 text-center text-white shadow-[0_22px_55px_rgba(124,95,70,0.25)]">
          <p className="text-sm opacity-80">امتیاز شما</p>
          <p className="mt-2 text-5xl font-black">
            {result.score}
            <span className="text-xl opacity-70">/{result.maxScore}</span>
          </p>
          <p className="mt-2 text-sm opacity-80">{percent}%</p>
        </div>
      </div>
    </section>
  )
}

function BackgroundDecor() {
  return (
    <>
      <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-[#dfc7aa]/45 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-72 h-96 w-96 rounded-full bg-[#efe2d2]/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-white/70 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div className="absolute left-8 top-10 h-28 w-28 rounded-[2rem] border border-[#b89b7e]" />
        <div className="absolute bottom-20 right-10 h-20 w-20 rounded-full border border-[#b89b7e]" />
        <div className="absolute left-1/4 top-1/2 h-16 w-16 rotate-12 rounded-3xl border border-[#b89b7e]" />
      </div>
    </>
  )
}
