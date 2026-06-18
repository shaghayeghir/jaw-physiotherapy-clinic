import { Brain, Activity, HeartPulse,ScanHeart,ClipboardPlus,Stethoscope,HeartMinus } from "lucide-react";
export const assessments = [
  {
    title: "بررسی درد",
    description:
      "",
    icon: <Activity className="w-5 h-5" />,
    href: "/assessment/Pain-assessment",
  },
  {
    title: "مقیاس درجه بندی درد مزمن",
    description:
      "",
    icon: <Brain className="w-5 h-5" />,
    href: "/assessment/Chronic-Pain-Scale",
  },
  {
    title: "مقیاس محدودیت عملکردی فک",
    description:
      "",
    icon: <HeartPulse className="w-5 h-5" />,
    href: "/assessment/Jaw-Functional-Limitation",
  },
    {
    title: " پرسشنامه سلامت بیمار",
    description:
      "",
    icon: <ScanHeart className="w-5 h-5" />,
    href: "/assessment/Patient-health",
  },
  {
    title: "اختلال اضطراب عمومی",
    description:
      "",
    icon: <Stethoscope className="w-5 h-5" />,
    href: "/assessment/Generalized-anxiety",
  },
  {
    title: "پرسشنامه سلامت بیمار با نشانه‌های فیزیکی",
    description:
      "",
    icon: <ClipboardPlus className="w-5 h-5" />,
    href: "/assessment/Patient-Health-Physical",
  },
  {
    title: "چک‌ لیست رفتار دهان و دندان",
    description:
      "",
    icon: <HeartMinus className="w-5 h-5" />,
    href: "/assessment/Oral-Behavior",
  },
  // بقیه دیتای ...
];
