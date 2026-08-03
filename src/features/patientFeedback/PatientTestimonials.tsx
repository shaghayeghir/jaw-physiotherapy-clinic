import { Quote, User, Leaf } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'

type Feedback = {
  id: string
  user_name: string | null
  feedback_text: string
  created_at: string
}

function formatPersianDate(dateString: string) {
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(dateString))
}

export default async function PatientTestimonials() {
  const supabase = await createClient()

  // فقط نظرهای تأییدشده نمایش داده می‌شوند
  const { data: testimonials, error } = await supabase
    .from('feedbacks')
    .select('id, user_name, feedback_text, created_at')
    .eq('status', 'approved')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error loading approved testimonials:', error)
    return null
  }

  // تا وقتی هیچ نظر تأییدشده‌ای ندارید، بخش نمایش داده نمی‌شود.
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="mx-auto my-12 w-full max-w-lg px-4" dir="rtl">
      <div className="mb-8 flex items-center gap-3">
        <h2 className="text-2xl font-bold text-[#9d6257]">
          تجربه بیماران ما
        </h2>

        <div className="h-px flex-1 bg-[#caa497]/30" />

        <Leaf className="h-5 w-5 text-[#caa497]" />
      </div>

      <div className="space-y-6">
        {(testimonials as Feedback[]).map((item) => (
          <article
            key={item.id}
            className="relative rounded-l-lg rounded-r-2xl border border-[#caa497]/20 border-r-4 border-r-[#caa497] bg-white p-6 shadow-sm"
          >
            <Quote className="absolute left-4 top-4 h-6 w-6 rotate-180 text-[#caa497]/20" />

            <p className="mb-4 leading-relaxed text-gray-700 italic">
              « {item.feedback_text} »
            </p>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7ece7]">
                <User className="h-4 w-4 text-[#9d6257]" />
              </div>

              <span className="text-sm font-semibold text-[#9d6257]">
                {item.user_name || 'بیمار محترم'}
              </span>

              <span className="text-xs text-gray-400">
                | {formatPersianDate(item.created_at)}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
