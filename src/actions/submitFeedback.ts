'use server'

import { createClient } from '@/utils/supabase/server'

export type SubmitFeedbackResult = {
  success: boolean
  message: string
}

export async function submitFeedback(
  formData: FormData
): Promise<SubmitFeedbackResult> {
  try {
    const supabase = await createClient()

    // نام اختیاری
    const name = formData.get('name')?.toString().trim() || null

    // متن بازخورد الزامی
    const feedback = formData.get('feedback')?.toString().trim() || ''

    if (!feedback) {
      return {
        success: false,
        message: 'لطفاً تجربه درمان خود را بنویسید.',
      }
    }

    const { error } = await supabase.from('feedbacks').insert({
      user_name: name,
      feedback_text: feedback,
      status: 'pending',
    })

    if (error) {
      console.error('Supabase insert error:', error)

      return {
        success: false,
        message: 'ثبت بازخورد انجام نشد. لطفاً دوباره تلاش کنید.',
      }
    }

    return {
      success: true,
      message:
        'سپاسگزاریم! پیام شما دریافت شد و پس از بررسی منتشر خواهد شد.',
    }
  } catch (error) {
    console.error('submitFeedback error:', error)

    return {
      success: false,
      message: 'خطای سرور رخ داد. لطفاً دوباره تلاش کنید.',
    }
  }
}
