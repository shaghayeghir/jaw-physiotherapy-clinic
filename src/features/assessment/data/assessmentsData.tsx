import React from "react";
import {
  Brain,
  Activity,
  HeartPulse,
  ScanHeart,
  ClipboardPlus,
  Stethoscope,
  HeartMinus,
} from "lucide-react";

export interface AssessmentItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export const assessments: AssessmentItem[] = [
  {
    title: "بررسی درد",
    description: "غربالگری اولیه درد ناحیه فک، صورت و شقیقه",
    icon: <Activity className="w-5 h-5" />,
    href: "/assessment/Pain-assessment",
  },
  {
    title: "مقیاس درجه بندی درد مزمن",
    description:
      "بررسی شدت درد، میزان ناتوانی عملکردی و تأثیر آن بر زندگی روزمره",
    icon: <Brain className="w-5 h-5" />,
    href: "/assessment/Chronic-Pain-Scale",
  },
  {
    title: "مقیاس محدودیت عملکردی فک",
    description:
      "ارزیابی محدودیت در جویدن، صحبت کردن، باز کردن دهان و حرکات فک",
    icon: <HeartPulse className="w-5 h-5" />,
    href: "/assessment/Jaw-Functional-Limitation",
  },
  {
    title: "پرسشنامه سلامت بیمار",
    description: "ارزیابی خلق‌وخو و غربالگری نشانه‌های افسردگی (PHQ-9)",
    icon: <ScanHeart className="w-5 h-5" />,
    href: "/assessment/Patient-health",
  },
  {
    title: "اختلال اضطراب عمومی",
    description: "غربالگری سطح اضطراب، تنش و نگرانی (GAD-7)",
    icon: <Stethoscope className="w-5 h-5" />,
    href: "/assessment/Generalized-anxiety",
  },
  {
    title: "پرسشنامه سلامت بیمار با نشانه‌های فیزیکی",
    description: "بررسی نشانه‌های جسمی، سردرد و دردهای همراه (PHQ-15)",
    icon: <ClipboardPlus className="w-5 h-5" />,
    href: "/assessment/Patient-Health-Physical",
  },
  {
    title: "چک‌ لیست رفتار دهان و دندان",
    description: "بررسی عادات پارافانکشنال، دندان‌قروچه و فشردن دندان‌ها (OBC)",
    icon: <HeartMinus className="w-5 h-5" />,
    href: "/assessment/Oral-Behavior",
  },
];
