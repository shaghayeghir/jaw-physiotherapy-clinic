export type RadioQuestion = {
  id: string
  type: "radio"
  text: string
  options: {
    label: string
    value: number
  }[]
}

export type ScaleQuestion = {
  id: string
  type: "scale"
  text: string
  min: number
  max: number
  step?: number
}

export type NumberQuestion = {
  id: string
  type: "number"
  text: string
  min?: number
  max?: number
  placeholder?: string
}

export type Question = RadioQuestion | ScaleQuestion | NumberQuestion

export type Questionnaire = {
  title: string
  subtitle?: string
  description?: string
  questions: Question[]
}

const commonFourOptions = [
  { label: "اصلاً", value: 0 },
  { label: "چند روز", value: 1 },
  { label: "بیش از نصف روزها", value: 2 },
  { label: "تقریباً هر روز", value: 3 },
]

export const questionnaires: Record<string, Questionnaire> = {
  pain: {
    title: "ارزیابی شدت درد فک",
    subtitle: "Jaw Pain Assessment",
    description:
      "این ارزیابی به شما کمک می‌کند شدت و الگوی درد فک خود را بهتر بشناسید.",
    questions: [
      {
        id: "pain_days",
        type: "radio",
        text: "در ۳۰ روز گذشته چند روز درد فک داشته‌اید؟",
        options: [
          { label: "هیچ‌وقت", value: 0 },
          { label: "گاهی", value: 1 },
          { label: "بیشتر روزها", value: 2 },
          { label: "تقریباً هر روز", value: 3 },
        ],
      },
      {
        id: "pain_intensity",
        type: "scale",
        text: "شدت درد فک خود را از ۰ تا ۱۰ مشخص کنید.",
        min: 0,
        max: 10,
        step: 1,
      },
      {
        id: "pain_chewing",
        type: "radio",
        text: "درد فک تا چه حد هنگام جویدن بیشتر می‌شود؟",
        options: [
          { label: "اصلاً", value: 0 },
          { label: "کم", value: 1 },
          { label: "متوسط", value: 2 },
          { label: "زیاد", value: 3 },
        ],
      },
      {
        id: "pain_opening",
        type: "radio",
        text: "باز کردن دهان تا چه حد باعث درد یا محدودیت می‌شود؟",
        options: [
          { label: "اصلاً", value: 0 },
          { label: "کم", value: 1 },
          { label: "متوسط", value: 2 },
          { label: "زیاد", value: 3 },
        ],
      },
    ],
  },

  "phq-9": {
    title: "پرسشنامه افسردگی PHQ‑9",
    subtitle: "Patient Health Questionnaire",
    description:
      "در دو هفته گذشته، هر یک از موارد زیر تا چه حد برای شما مشکل ایجاد کرده است؟",
    questions: [
      "علاقه یا لذت کم در انجام کارها",
      "احساس افسردگی، غمگینی یا ناامیدی",
      "مشکل در به خواب رفتن، خواب ماندن یا خواب زیاد",
      "احساس خستگی یا کمبود انرژی",
      "کاهش اشتها یا پرخوری",
      "احساس بد نسبت به خود، شکست‌خورده بودن یا ناامید کردن خانواده",
      "مشکل در تمرکز روی کارهایی مانند مطالعه یا تماشای تلویزیون",
      "کندی در حرکت یا صحبت کردن، یا برعکس بی‌قراری بیش از حد",
      "افکار مربوط به اینکه بهتر بود نباشید یا به خود آسیب بزنید",
    ].map((text, index) => ({
      id: `phq9_${index + 1}`,
      type: "radio" as const,
      text,
      options: commonFourOptions,
    })),
  },

  "gad-7": {
    title: "پرسشنامه اضطراب GAD‑7",
    subtitle: "Generalized Anxiety Disorder Scale",
    description:
      "در دو هفته گذشته، هر یک از موارد زیر تا چه حد برای شما مشکل ایجاد کرده است؟",
    questions: [
      "احساس عصبی بودن، اضطراب یا تنش",
      "ناتوانی در توقف یا کنترل نگرانی",
      "نگرانی بیش از حد درباره موضوعات مختلف",
      "مشکل در آرام بودن",
      "بی‌قراری به حدی که نشستن دشوار باشد",
      "زود رنجیدن یا تحریک‌پذیری",
      "احساس ترس، انگار اتفاق بدی قرار است بیفتد",
    ].map((text, index) => ({
      id: `gad7_${index + 1}`,
      type: "radio" as const,
      text,
      options: commonFourOptions,
    })),
  },
}
