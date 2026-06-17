import { Brain, Activity, HeartPulse,ScanHeart,ClipboardPlus,Stethoscope,HeartMinus } from "lucide-react";
export const assessments = [
  {
    title: "بررسی درد",
    description:
      "",
    icon: <Activity className="w-5 h-5" />,
    href: "/assessment/gad-7",
  },
  {
    title: "مقیاس درجه بندی درد مزمن",
    description:
      "",
    icon: <Brain className="w-5 h-5" />,
    href: "/assessment/phq-9",
  },
  {
    title: "مقیاس محدودیت عملکردی فک",
    description:
      "",
    icon: <HeartPulse className="w-5 h-5" />,
    href: "/assessment/pain-assessment",
  },
    {
    title: " پرسشنامه سلامت بیمار",
    description:
      "",
    icon: <ScanHeart className="w-5 h-5" />,
    href: "/assessment/gad-8",
  },
  {
    title: "اختلال اضطراب عمومی",
    description:
      "",
    icon: <Stethoscope className="w-5 h-5" />,
    href: "/assessment/phq-10",
  },
  {
    title: "پرسشنامه سلامت بیمار با نشانه‌های فیزیکی",
    description:
      "",
    icon: <ClipboardPlus className="w-5 h-5" />,
    href: "/assessment/pain",
  },
  {
    title: "چک‌ لیست رفتار دهان و دندان",
    description:
      "",
    icon: <HeartMinus className="w-5 h-5" />,
    href: "/assessment/phq-11",
  },
  // بقیه دیتای ...
];
