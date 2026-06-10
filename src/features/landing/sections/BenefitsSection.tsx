// components/sections/BenefitsSection.tsx
import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Activity, Dna, Brain, Stethoscope, Volume2, Ear } from "lucide-react";
const symptoms = [
  {
    title: "درد فک",
    description:
      "درد یا احساس سنگینی یا گرفتگی در اطراف مفصل فک، گونه‌ها، اطراف گوش، زیر فک، زاویه فک و گاهی ناحیه گلو",
    icon: <Activity className="h-10 w-10" />,
  },
  {
    title: "سردرد",
    description: "درد در ناحیه شقیقه‌ها، اطراف چشم‌ها، پیشانی یا پس سر",
    icon: <Brain className="h-10 w-10" />,
  },
  {
    title: " درد گردن و کتف",
    description: "گرفتگی، درد یا احساس خستگی در عضلات گردن، کتف و شانه",
    icon: <Volume2 className="h-10 w-10" />,
  },
  {
    title: " درد دندان",
    description: "درد دندان بدون علت دندانی",
    icon: <Stethoscope className="h-10 w-10" />,
  },
  {
    title: "وضعیت بدنی نامناسب",
    description:
      "جلو آمدن سر، گرد شدن شانه‌ها و وضعیت نامناسب گردن که می‌تواند با درد فک، گردن و سردرد همراه باشد",
    icon: <Stethoscope className="h-10 w-10" />,
  },
  {
    title: "صدای مفصل",
    description:
      "شنیدن صدای تق‌تق (کلیک)، خش‌خش یا ساییدگی هنگام باز و بسته کردن دهان، جویدن یا خمیازه کشیدن",
    icon: <Dna className="h-10 w-10" />,
  },
  {
    title: "محدودیت باز شدن دهان",
    description: "ناتوانی در بازکردن دهان به اندازه سه عرض انگشت دست خود فرد",
    icon: <Ear className="h-10 w-10" />,
  },
  {
    title: "قفل شدن فک",
    description: "گیر کردن فک در وضعیت باز یا بسته",
    icon: <Activity className="h-10 w-10" />,
  },
  {
    title: "انحراف فک",
    description:
      "حرکت فک به یک سمت در هنگام باز کردن دهان. عدم قرینگی در بازشدن دهان ",
    icon: <Brain className="h-10 w-10" />,
  },
  {
    title: "خستگی فک ",
    description:
      "خستگی، درد یا احساس سنگینی فک هنگام غذا خوردن یا صحبت کردن طولانی",
    icon: <Volume2 className="h-10 w-10" />,
  },
  {
    title: "مشکل در جویدن",
    description:
      "دشواری در خوردن غذاهای سفت، بزرگ یا چسبنده، کاهش قدرت گاز گرفتن و جویدن غذا",
    icon: <Dna className="h-10 w-10" />,
  },
  {
    title: "دندان‌قروچه",
    description: "12.	دندان‌قروچه و فشردن دندان ها روی هم یا احساس فشار در فک",
    icon: <Ear className="h-10 w-10" />,
  },
  {
    title: "تغییر جفت شدن دندان‌ها ",
    description: "احساس اینکه دندان‌ها مانند گذشته روی هم قرار نمی‌گیرند",
    icon: <Volume2 className="h-10 w-10" />,
  },
  {
    title: "وزوز گوش ",
    description: "شنیدن صداهایی مانند زنگ، سوت، صدای هوا یا وزوز در گوش",
    icon: <Stethoscope className="h-10 w-10" />,
  },
  {
    title: "پری گوش",
    description: "احساس فشار یا کیپ شدن گوش بدون وجود مشکل واضح در معاینه گوش",
    icon: <Dna className="h-10 w-10" />,
  },
  {
    title: "سرگیجه",
    description: "احساس چرخش، سبکی سر یا ناپایدار",
    icon: <Ear className="h-10 w-10" />,
  },
];

export function BenefitsSection() {
  return (
    <section dir="rtl" className=" py-20 px-6">
      <Container>
        {/* هدر بخش - کاملاً وسط چین */}
        <SectionHeading
          align="center"
          title="علائم شایع اختلالات فک و مفصل گیجگاهی - فکی"
          className="mb-12"
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {symptoms.map(
            (
              item,
              idx, //CFF6CF
            ) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-start rounded-[2.5rem] border border-[#f1e6db] bg-[#F5D2D2] p-6 text-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#d59a8f]/5"
              >
            
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-[#94A684] shadow-sm transition-transform group-hover:scale-110">
                  {item.icon}
                </div>

                {/* متون کارت */}
                <h3 className="mb-2 text-sm font-bold text-[#495144] sm:text-base">
                  {item.title}
                </h3>
                <p className="text-xs leading-5 text-[#8c857b]">
                  {item.description}
                </p>
              </div>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
