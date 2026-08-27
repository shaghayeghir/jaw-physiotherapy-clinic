export type AssessmentResult = {
  score: number;
  maxScore: number;
  interpretation: string;
  message: string;
  grade?: number;
  recommendation?: string;
  painIntensity?: {
    value: number;
    level: string;
    interpretation: string;
  };
  disability?: {
    points: number;
    rawScore: number;
    interpretation: string;
  };
  totalDisabilityPoints?: number;
  details?: Record<string, unknown>;
};

function sumAnswers(answers: Record<string, number>) {
  return Object.values(answers).reduce((total, value) => total + (Number(value) || 0), 0);
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
          "امتیاز علائم درد شما در محدوده شدید قرار می‌گیرد. ارزیابی تخصصی پیشنهاد می‌شود.",
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
    const q2 = Number(answers["pain_intensity"] ?? 0);
    const q3 = Number(answers["2"] ?? 0);
    const q4 = Number(answers["3"] ?? 0);
    const q5_score = Number(answers["4"] ?? 0);
    const q6 = Number(answers["5"] ?? 0);
    const q7 = Number(answers["6"] ?? 0);
    const q8 = Number(answers["7"] ?? 0);

    // ۱. محاسبه شدت درد: میانگین سوالات ۲، ۳ و ۴ ضربدر ۱۰
    const painIntensityValue = Math.round(((q2 + q3 + q4) / 3) * 10);

    let painIntensityLevel = "";
    let painIntensityInterpretation = "";
    if (painIntensityValue >= 70) {
      painIntensityLevel = "بسیار شدید";
      painIntensityInterpretation =
        "شدت درد شما بسیار زیاد است. اگر این وضعیت چند هفته ادامه داشته باشد یا فعالیت‌های روزانه شما را مختل کرده باشد، بهتر است توسط فیزیوتراپیست یا دندانپزشک آشنا با اختلالات مفصل فکی‌گیجگاهی معاینه شوید.";
    } else if (painIntensityValue >= 30) {
      painIntensityLevel = "متوسط - شدید";
      painIntensityInterpretation =
        "شدت درد شما متوسط است. بهتر است علت درد بررسی شود تا از مزمن شدن یا پیشرفت علائم جلوگیری شود.";
    } else {
      painIntensityLevel = "کم - متوسط";
      painIntensityInterpretation =
        "شدت درد شما در محدوده خفیف قرار دارد. این میزان درد معمولاً با آموزش، اصلاح عادات روزانه و تمرینات مناسب قابل کنترل است.";
    }

    // ۲. محاسبه شدت ناتوانی: میانگین سوالات ۶، ۷ و ۸ ضربدر ۱۰
    const disabilityScoreRaw = Math.round(((q6 + q7 + q8) / 3) * 10);
    let disabilityScorePoints = 0;
    let disabilityInterpretation = "";

    if (disabilityScoreRaw >= 70) {
      disabilityScorePoints = 3;
      disabilityInterpretation =
        "درد در بخش قابل توجهی از فعالیت‌های روزانه شما اختلال ایجاد کرده است و احتمالاً کیفیت زندگی، کار، خواب یا روابط اجتماعی شما را تحت تأثیر قرار داده است. در این شرایط ارزیابی تخصصی می‌تواند به شناسایی علت مشکل و انتخاب درمان مناسب به شما کمک کند.";
    } else if (disabilityScoreRaw >= 50) {
      disabilityScorePoints = 2;
      disabilityInterpretation =
        "درد در بخشی از فعالیت‌های روزانه شما اختلال ایجاد کرده است و کیفیت زندگی شما تحت تأثیر قرار گرفته است.";
    } else if (disabilityScoreRaw >= 30) {
      disabilityScorePoints = 1;
      disabilityInterpretation =
        "ممکن است برخی فعالیت‌ها مانند غذا خوردن، صحبت کردن یا کارهای روزانه گاهی برایتان دشوار شده باشد، اما هنوز بیشتر فعالیت‌های خود را انجام می‌دهید.";
    } else {
      disabilityScorePoints = 0;
      disabilityInterpretation =
        "درد تأثیر قابل توجهی بر زندگی روزمره شما نگذاشته است.";
    }

    // ۳. نمره کلی ناتوانی = امتیاز روزهای ناتوانی (سوال ۵) + امتیاز ناتوانی (۰ تا ۶)
    const totalDisabilityPoints = q5_score + disabilityScorePoints;

    // ۴. تعیین گرید نهایی
    let grade = 0;
    let gradeTitle = "";
    let description = "";
    let recommendation = "";

    if (painIntensityValue === 0 && totalDisabilityPoints === 0) {
      grade = 0;
      gradeTitle = "گرید ۰: نرمال";
      description = "شما نرمال هستید.";
      recommendation = "حفظ عادات صحیح و سبک زندگی سالم.";
    } else if (totalDisabilityPoints >= 5) {
      grade = 4;
      gradeTitle = "گرید ۴: ناتوانی عملکردی بسیار شدید";
      description =
        "درد شما هم شدت بسیار بالایی دارد و هم زندگی روزمره شما را به صورت قابل توجهی تحت تأثیر قرار داده است.";
      recommendation =
        "توصیه می‌شود در اسرع وقت جهت کنترل علائم و پیشگیری از آسیب‌های بیشتر مفصل فکی به فیزیوتراپیست متخصص مراجعه کنید.";
    } else if (totalDisabilityPoints >= 3) {
      grade = 3;
      gradeTitle = "گرید ۳: ناتوانی عملکردی متوسط";
      description =
        "درد شما هم شدت بالایی دارد و هم زندگی روزمره شما را تحت تأثیر قرار داده است. این وضعیت معمولاً نشان می‌دهد که اختلال دیگر فقط به احساس درد محدود نیست و عملکرد طبیعی مفصل و عضلات نیز تحت تأثیر قرار گرفته است.";
      recommendation =
        "توصیه می‌شود در اولین فرصت برای ارزیابی تخصصی مراجعه کنید تا علت مشکل مشخص شده و درمان مناسب آغاز شود. مراجعه زودتر می‌تواند از طولانی شدن علائم و کاهش بیشتر کیفیت زندگی جلوگیری کند.";
    } else if (painIntensityValue >= 50 && totalDisabilityPoints < 3) {
      grade = 2;
      gradeTitle = "گرید ۲: شدت درد زیاد بدون وجود ناتوانی عملکردی";
      description =
        "شدت درد شما زیاد است، اما خوشبختانه هنوز توانایی انجام فعالیت‌های روزانه خود را تا حد زیادی حفظ کرده‌اید. این یعنی بدن شما هنوز عملکرد مناسبی دارد، اما درد می‌تواند در صورت ادامه یافتن، به مرور بر کیفیت زندگی شما اثر بگذارد.";
      recommendation =
        "اگر درد بیش از چند هفته ادامه داشته یا مرتب تکرار می‌شود، بهتر است برای ارزیابی مراجعه کنید؛ هرچند وضعیت شما اورژانسی محسوب نمی‌شود.";
    } else {
      grade = 1;
      gradeTitle = "گرید ۱: شدت درد کم بدون وجود ناتوانی عملکردی";
      description =
        "در حال حاضر درد شما تأثیر زیادی بر عملکرد روزانه ندارد. نیاز فوری به مراجعه وجود ندارد، مگر اینکه درد در حال افزایش باشد.";
      recommendation =
        "آموزش صحیح / اصلاح عادات دهانی / انجام تمرینات خانگی / پیگیری در صورت بدتر شدن علائم.";
    }

    return {
      score: grade,
      maxScore: 4,
      grade,
      interpretation: gradeTitle,
      message: description,
      recommendation,
      painIntensity: {
        value: painIntensityValue,
        level: painIntensityLevel,
        interpretation: painIntensityInterpretation,
      },
      disability: {
        points: disabilityScorePoints,
        rawScore: disabilityScoreRaw,
        interpretation: disabilityInterpretation,
      },
      totalDisabilityPoints,
    };
  }

  if (slug === "Jaw-Functional-Limitation") {
    const values = Object.values(answers);
    const average = values.length > 0 ? values.reduce((sum, v) => sum + v, 0) / values.length : 0;
    const finalScore = Number(average.toFixed(1));

    if (finalScore >= 8) {
      return {
        score: finalScore,
        maxScore: 10,
        interpretation: "محدودیت بسیار شدید",
        message:
          "میزان محدودیت عملکرد فک بسیار بالا گزارش شده است. توصیه می‌شود برای ارزیابی تخصصی اختلالات مفصل فکی‑گیجگاهی (TMD) به متخصص مراجعه کنید.",
      };
    }

    if (finalScore >= 6) {
      return {
        score: finalScore,
        maxScore: 10,
        interpretation: "محدودیت شدید",
        message:
          "محدودیت قابل توجهی در عملکرد فک مشاهده می‌شود. بررسی تخصصی برای تشخیص دقیق‌تر پیشنهاد می‌شود.",
      };
    }

    if (finalScore >= 3) {
      return {
        score: finalScore,
        maxScore: 10,
        interpretation: "محدودیت متوسط",
        message:
          "میزان محدودی از اختلال در عملکرد فک گزارش شده است. در صورت ادامه علائم، ارزیابی تخصصی می‌تواند مفید باشد.",
      };
    }

    if (finalScore >= 1) {
      return {
        score: finalScore,
        maxScore: 10,
        interpretation: "محدودیت خفیف",
        message:
          "محدودیت خفیفی در عملکرد فک گزارش شده است. معمولاً با مراقبت و پیگیری علائم قابل مدیریت است.",
      };
    }

    return {
      score: finalScore,
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
