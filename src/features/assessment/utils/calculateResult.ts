export type AssessmentResult = {
  score: number;
  maxScore: number;
  interpretation: string;
  message: string;
};

function sumAnswers(answers: Record<string, number>) {
  return Object.values(answers).reduce((total, value) => total + value, 0);
}

export function calculateAssessmentResult(
  slug: string,
  answers: Record<string, number>,
): AssessmentResult {
  const score = sumAnswers(answers);

  if (slug === "Pain-assessment") {
    if (score >= 15) {
      return {
        score,
        maxScore: 21,
        interpretation: "شدید",
        message:
          "امتیاز اضطراب شما در محدوده شدید قرار می‌گیرد. ارزیابی تخصصی پیشنهاد می‌شود.",
      };
    }

    if (score >= 10) {
      return {
        score,
        maxScore: 21,
        interpretation: "متوسط",
        message:
          "امتیاز شما در محدوده متوسط است. بررسی بیشتر توسط متخصص می‌تواند مفید باشد.",
      };
    }

    if (score >= 5) {
      return {
        score,
        maxScore: 21,
        interpretation: "خفیف",
        message:
          "علائم درد خفیف گزارش شده‌اند. در صورت تداوم، پیگیری توصیه می‌شود.",
      };
    }

    return {
      score,
      maxScore: 21,
      interpretation: "حداقل",
      message:
        "امتیاز شما در محدوده حداقل قرار دارد. این نتیجه صرفاً غربالگری اولیه است.",
    };
  }
  if (slug === "Chronic-Pain-Scale") {
    if (score >= 20) {
      return {
        score,
        maxScore: 27,
        interpretation: "شدید",
        message:
          "امتیاز شما در محدوده شدید قرار می‌گیرد. پیشنهاد می‌شود برای بررسی دقیق‌تر با متخصص مشورت کنید.",
      };
    }

    if (score >= 15) {
      return {
        score,
        maxScore: 27,
        interpretation: "نسبتاً شدید",
        message:
          "علائم قابل توجه هستند. بهتر است برای ارزیابی دقیق‌تر با متخصص مشورت شود.",
      };
    }

    if (score >= 10) {
      return {
        score,
        maxScore: 27,
        interpretation: "متوسط",
        message:
          "امتیاز شما در محدوده متوسط است. پیگیری علائم و بررسی تخصصی می‌تواند کمک‌کننده باشد.",
      };
    }

    if (score >= 5) {
      return {
        score,
        maxScore: 27,
        interpretation: "خفیف",
        message:
          "علائم خفیف گزارش شده‌اند. در صورت تداوم یا بدتر شدن، مشاوره تخصصی پیشنهاد می‌شود.",
      };
    }

    return {
      score,
      maxScore: 27,
      interpretation: "حداقل",
      message:
        "امتیاز شما در محدوده حداقل قرار دارد. این نتیجه جایگزین تشخیص پزشکی نیست.",
    };
  }
  if (slug === "Jaw-Functional-Limitation") {
    const values = Object.values(answers);

    const average = values.reduce((sum, v) => sum + v, 0) / values.length;

    const score = Number(average.toFixed(1));

    if (score >= 8) {
      return {
        score,
        maxScore: 10,
        interpretation: "محدودیت بسیار شدید",
        message:
          "میزان محدودیت عملکرد فک بسیار بالا گزارش شده است. توصیه می‌شود برای ارزیابی تخصصی اختلالات مفصل فکی‑گیجگاهی (TMD) به متخصص مراجعه کنید.",
      };
    }

    if (score >= 6) {
      return {
        score,
        maxScore: 10,
        interpretation: "محدودیت شدید",
        message:
          "محدودیت قابل توجهی در عملکرد فک مشاهده می‌شود. بررسی تخصصی برای تشخیص دقیق‌تر پیشنهاد می‌شود.",
      };
    }

    if (score >= 3) {
      return {
        score,
        maxScore: 10,
        interpretation: "محدودیت متوسط",
        message:
          "میزان محدودی از اختلال در عملکرد فک گزارش شده است. در صورت ادامه علائم، ارزیابی تخصصی می‌تواند مفید باشد.",
      };
    }

    if (score >= 1) {
      return {
        score,
        maxScore: 10,
        interpretation: "محدودیت خفیف",
        message:
          "محدودیت خفیفی در عملکرد فک گزارش شده است. معمولاً با مراقبت و پیگیری علائم قابل مدیریت است.",
      };
    }

    return {
      score,
      maxScore: 10,
      interpretation: "بدون محدودیت قابل توجه",
      message: "محدودیت قابل توجهی در عملکرد فک گزارش نشده است.",
    };
  }
  if (slug === "Patient-health") {
    if (score >= 20) {
      return {
        score,
        maxScore: 27,
        interpretation: "شدید",
        message:
          "امتیاز شما در محدوده شدید قرار می‌گیرد. پیشنهاد می‌شود برای بررسی دقیق‌تر با متخصص مشورت کنید.",
      };
    }

    if (score >= 15) {
      return {
        score,
        maxScore: 27,
        interpretation: "نسبتاً شدید",
        message:
          "علائم قابل توجه هستند. بهتر است برای ارزیابی دقیق‌تر با متخصص مشورت شود.",
      };
    }

    if (score >= 10) {
      return {
        score,
        maxScore: 27,
        interpretation: "متوسط",
        message:
          "امتیاز شما در محدوده متوسط است. پیگیری علائم و بررسی تخصصی می‌تواند کمک‌کننده باشد.",
      };
    }

    if (score >= 5) {
      return {
        score,
        maxScore: 27,
        interpretation: "خفیف",
        message:
          "علائم خفیف گزارش شده‌اند. در صورت تداوم یا بدتر شدن، مشاوره تخصصی پیشنهاد می‌شود.",
      };
    }

    return {
      score,
      maxScore: 27,
      interpretation: "حداقل",
      message:
        "امتیاز شما در محدوده حداقل قرار دارد. این نتیجه جایگزین تشخیص پزشکی نیست.",
    };
  }
  if (slug === "Generalized-anxiety") {
    if (score >= 15) {
      return {
        score,
        maxScore: 21,
        interpretation: "شدید",
        message:
          "امتیاز اضطراب شما در محدوده شدید قرار می‌گیرد. ارزیابی تخصصی توسط روانشناس یا روانپزشک پیشنهاد می‌شود.",
      };
    }

    if (score >= 10) {
      return {
        score,
        maxScore: 21,
        interpretation: "متوسط",
        message:
          "امتیاز شما در محدوده اضطراب متوسط است. بررسی بیشتر توسط متخصص می‌تواند مفید باشد.",
      };
    }

    if (score >= 5) {
      return {
        score,
        maxScore: 21,
        interpretation: "خفیف",
        message:
          "علائم اضطراب خفیف گزارش شده‌اند. در صورت تداوم یا تأثیر بر زندگی روزمره، پیگیری توصیه می‌شود.",
      };
    }

    return {
      score,
      maxScore: 21,
      interpretation: "حداقل",
      message:
        "امتیاز شما در محدوده حداقل قرار دارد. این نتیجه صرفاً غربالگری اولیه است و جایگزین تشخیص تخصصی نیست.",
    };
  }
  if (slug === "Patient-Health-Physical") {
    if (score >= 15) {
      return {
        score,
        maxScore: 30,
        interpretation: "شدید",
        message:
          "میزان ناراحتی ناشی از نشانه‌های جسمی در محدوده شدید قرار می‌گیرد. پیشنهاد می‌شود برای بررسی دقیق‌تر و رد علل پزشکی احتمالی با پزشک یا متخصص مشورت کنید.",
      };
    }

    if (score >= 10) {
      return {
        score,
        maxScore: 30,
        interpretation: "متوسط",
        message:
          "نشانه‌های جسمی در محدوده متوسط گزارش شده‌اند. اگر این علائم ادامه‌دار هستند یا عملکرد روزانه شما را مختل کرده‌اند، ارزیابی تخصصی توصیه می‌شود.",
      };
    }

    if (score >= 5) {
      return {
        score,
        maxScore: 30,
        interpretation: "خفیف",
        message:
          "نشانه‌های جسمی خفیف گزارش شده‌اند. در صورت تداوم، افزایش شدت یا ایجاد نگرانی، پیگیری پزشکی می‌تواند مفید باشد.",
      };
    }

    return {
      score,
      maxScore: 30,
      interpretation: "حداقل",
      message:
        "میزان نشانه‌های جسمی گزارش‌شده در محدوده حداقل قرار دارد. این نتیجه صرفاً غربالگری اولیه است و جایگزین تشخیص پزشکی نیست.",
    };
  }
  if (slug === "Oral-Behavior") {
    const maxScore = Object.keys(answers).length * 4;
    const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;

    if (percentage >= 75) {
      return {
        score,
        maxScore,
        interpretation: "بسیار زیاد",
        message:
          "تکرار رفتارهای دهانی و فکی در محدوده بسیار زیاد گزارش شده است. این رفتارها می‌توانند با فشار بیشتر بر عضلات فک و مفصل فکی‌گیجگاهی همراه باشند. ارزیابی تخصصی و آموزش کنترل عادت‌ها پیشنهاد می‌شود.",
      };
    }

    if (percentage >= 50) {
      return {
        score,
        maxScore,
        interpretation: "زیاد",
        message:
          "رفتارهای دهانی و فکی با فراوانی زیاد گزارش شده‌اند. کاهش این عادت‌ها و بررسی تخصصی می‌تواند به کاهش فشار روی فک کمک کند.",
      };
    }

    if (percentage >= 25) {
      return {
        score,
        maxScore,
        interpretation: "متوسط",
        message:
          "رفتارهای دهانی و فکی در محدوده متوسط گزارش شده‌اند. آگاهی از این عادت‌ها و اصلاح تدریجی آن‌ها می‌تواند مفید باشد.",
      };
    }

    if (score > 0) {
      return {
        score,
        maxScore,
        interpretation: "کم",
        message:
          "رفتارهای دهانی و فکی با فراوانی کم گزارش شده‌اند. در صورت وجود درد فک، صدا دادن مفصل یا محدودیت حرکت، پیگیری توصیه می‌شود.",
      };
    }

    return {
      score,
      maxScore,
      interpretation: "گزارش نشده",
      message:
        "رفتار دهانی یا فکی قابل توجهی گزارش نشده است. این نتیجه صرفاً برای غربالگری اولیه است و جایگزین ارزیابی تخصصی نیست.",
    };
  }

  return {
    score,
    maxScore: score,
    interpretation: "نامشخص",
    message: "برای این ارزیابی تفسیر تعریف نشده است.",
  };
}
