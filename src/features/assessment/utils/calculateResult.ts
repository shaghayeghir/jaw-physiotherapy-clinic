export type AssessmentResult = {
  score: number
  maxScore: number
  interpretation: string
  message: string
}

function sumAnswers(answers: Record<string, number>) {
  return Object.values(answers).reduce((total, value) => total + value, 0)
}

export function calculateAssessmentResult(
  slug: string,
  answers: Record<string, number>
): AssessmentResult {
  const score = sumAnswers(answers)

  if (slug === "phq-9") {
    if (score >= 20) {
      return {
        score,
        maxScore: 27,
        interpretation: "شدید",
        message:
          "امتیاز شما در محدوده شدید قرار می‌گیرد. پیشنهاد می‌شود برای بررسی دقیق‌تر با متخصص سلامت روان مشورت کنید.",
      }
    }

    if (score >= 15) {
      return {
        score,
        maxScore: 27,
        interpretation: "نسبتاً شدید",
        message:
          "علائم قابل توجه هستند. بهتر است برای ارزیابی دقیق‌تر با متخصص مشورت شود.",
      }
    }

    if (score >= 10) {
      return {
        score,
        maxScore: 27,
        interpretation: "متوسط",
        message:
          "امتیاز شما در محدوده متوسط است. پیگیری علائم و بررسی تخصصی می‌تواند کمک‌کننده باشد.",
      }
    }

    if (score >= 5) {
      return {
        score,
        maxScore: 27,
        interpretation: "خفیف",
        message:
          "علائم خفیف گزارش شده‌اند. در صورت تداوم یا بدتر شدن، مشاوره تخصصی پیشنهاد می‌شود.",
      }
    }

    return {
      score,
      maxScore: 27,
      interpretation: "حداقل",
      message:
        "امتیاز شما در محدوده حداقل قرار دارد. این نتیجه جایگزین تشخیص پزشکی نیست.",
    }
  }

  if (slug === "gad-7") {
    if (score >= 15) {
      return {
        score,
        maxScore: 21,
        interpretation: "شدید",
        message:
          "امتیاز اضطراب شما در محدوده شدید قرار می‌گیرد. ارزیابی تخصصی پیشنهاد می‌شود.",
      }
    }

    if (score >= 10) {
      return {
        score,
        maxScore: 21,
        interpretation: "متوسط",
        message:
          "امتیاز شما در محدوده متوسط است. بررسی بیشتر توسط متخصص می‌تواند مفید باشد.",
      }
    }

    if (score >= 5) {
      return {
        score,
        maxScore: 21,
        interpretation: "خفیف",
        message:
          "علائم اضطراب خفیف گزارش شده‌اند. در صورت تداوم، پیگیری توصیه می‌شود.",
      }
    }

    return {
      score,
      maxScore: 21,
      interpretation: "حداقل",
      message:
        "امتیاز شما در محدوده حداقل قرار دارد. این نتیجه صرفاً غربالگری اولیه است.",
    }
  }

  if (slug === "pain") {
    if (score >= 13) {
      return {
        score,
        maxScore: 19,
        interpretation: "شدید",
        message:
          "شدت درد و محدودیت گزارش‌شده قابل توجه است. بهتر است برای ارزیابی TMD مراجعه تخصصی داشته باشید.",
      }
    }

    if (score >= 7) {
      return {
        score,
        maxScore: 19,
        interpretation: "متوسط",
        message:
          "شدت درد در محدوده متوسط است. پیگیری علائم و بررسی علت درد پیشنهاد می‌شود.",
      }
    }

    if (score >= 3) {
      return {
        score,
        maxScore: 19,
        interpretation: "خفیف",
        message:
          "علائم خفیف گزارش شده‌اند. در صورت تکرار یا افزایش درد، بررسی تخصصی مفید است.",
      }
    }

    return {
      score,
      maxScore: 19,
      interpretation: "حداقل",
      message:
        "در حال حاضر شدت درد گزارش‌شده پایین است. این نتیجه جایگزین معاینه نیست.",
    }
  }

  return {
    score,
    maxScore: score,
    interpretation: "نامشخص",
    message: "برای این ارزیابی تفسیر تعریف نشده است.",
  }
}
