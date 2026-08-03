'use client'

import { useState, useTransition } from 'react'
import { Heart, Send, CheckCircle2, Leaf } from 'lucide-react'
import { submitFeedback } from '@/actions/submitFeedback'

type Status = {
  success: boolean
  message: string
}

export default function PatientFeedback() {
  const [isPending, startTransition] = useTransition()
  const [feedbackText, setFeedbackText] = useState('')
  const [patientName, setPatientName] = useState('')
  const [status, setStatus] = useState<Status | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus(null)

    if (!feedbackText.trim()) {
      setStatus({
        success: false,
        message: 'لطفاً تجربه درمان خود را بنویسید.',
      })
      return
    }

    startTransition(async () => {
      const formData = new FormData()
      formData.append('name', patientName)
      formData.append('feedback', feedbackText)

      const result = await submitFeedback(formData)

      if (result.success) {
        setStatus({
          success: true,
          message: result.message,
        })

        setFeedbackText('')
        setPatientName('')
        return
      }

      setStatus({
        success: false,
        message: result.message,
      })
    })
  }

  return (
    <section
      dir="rtl"
      className="mx-auto my-10 w-full max-w-lg px-4 sm:my-12"
    >
      {/* عنوان کوچک و هماهنگ با فرم */}
      <div className="mb-5 text-center">
        <div className="mb-2 flex items-center justify-center gap-2">
          <div className="h-px w-9 bg-[#caa497]/50" />
          <Leaf className="h-4 w-4 text-[#caa497]" />
          <div className="h-px w-9 bg-[#caa497]/50" />
        </div>

        <h2 className="text-2xl font-bold text-[#4f563f]">
          بازخورد شما برای ما ارزشمند است
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#78736b]">
          تجربه شما به ما کمک می‌کند خدمات بهتری ارائه دهیم.
        </p>
      </div>

      <div className="rounded-3xl border border-[#ead8cf] bg-[#fffdfb] p-5 shadow-[0_10px_30px_rgba(180,140,120,0.12)] sm:p-6">
        {status?.success ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-emerald-600" />

            <h3 className="text-lg font-bold text-[#4f563f]">
              بازخورد شما ثبت شد
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6f6a61]">
              {status.message}
            </p>

            <button
              type="button"
              onClick={() => setStatus(null)}
              className="mt-5 rounded-xl border border-[#caa497] px-4 py-2 text-sm font-medium text-[#9d6257] transition hover:bg-[#f7ece7]"
            >
              ثبت بازخورد جدید
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7ece7]">
                <Heart className="h-4 w-4 fill-[#9d6257] text-[#9d6257]" />
              </div>

              <p className="text-sm font-semibold text-[#8d6a58]">
                لطفاً تجربه خود را بنویسید...
              </p>
            </div>

            <textarea
              required
              rows={5}
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="تجربه شما از روند درمان..."
              disabled={isPending}
              className="min-h-36 w-full resize-none rounded-2xl border border-[#e8cfc4] bg-[#fffaf7] px-4 py-3 text-sm leading-7 text-[#5f5a52] outline-none transition focus:border-[#caa497] focus:ring-2 focus:ring-[#f1dfd8] disabled:cursor-not-allowed disabled:opacity-60"
            />

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#8c857b]">
                نام یا حروف اختصاری{' '}
                <span className="font-normal">(اختیاری)</span>
              </label>

              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="مثلاً: م. رضایی"
                disabled={isPending}
                className="h-10 w-full rounded-xl border border-[#e8cfc4] bg-[#fffaf7] px-3 text-sm text-[#5f5a52] outline-none transition focus:border-[#caa497] focus:ring-2 focus:ring-[#f1dfd8] disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>

            {status && !status.success ? (
              <p className="text-xs font-medium text-red-500">
                {status.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isPending}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[#d7a191] bg-gradient-to-r from-[#d9998d] via-[#d89084] to-[#cf877c] text-base font-bold text-white shadow-[0_7px_18px_rgba(208,144,132,0.25)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isPending ? (
                'در حال ارسال...'
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  ارسال بازخورد
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
