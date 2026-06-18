// components/sections/BenefitsSection.tsx
import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Activity, Dna, Brain, Stethoscope, Volume2, Ear } from "lucide-react";
import Image from "next/image";
const symptoms = [
  {
    title: "درد فک",
    description:
      "درد یا احساس سنگینی یا گرفتگی در اطراف مفصل فک، گونه‌ها، اطراف گوش، زیر فک، زاویه فک و گاهی ناحیه گلو",
    image: "/icons/benefit/Jaw_Pain.png",
  },
  {
    title: "سردرد",
    description: "درد در ناحیه شقیقه‌ها، اطراف چشم‌ها، پیشانی یا پس سر",
    image: "/icons/benefit/Headache.png",
  },
  {
    title: " درد گردن و کتف",
    description: "گرفتگی، درد یا احساس خستگی در عضلات گردن، کتف و شانه",
    image: "/icons/benefit/Shoulder_Pain-icon.png",
  },
  {
    title: " درد دندان",
    description: "درد دندان بدون علت دندانی",
    image: "/icons/benefit/Toothache.png",
  },
  {
    title: "وضعیت بدنی نامناسب",
    description:
      "جلو آمدن سر، گرد شدن شانه‌ها و وضعیت نامناسب گردن که می‌تواند با درد فک، گردن و سردرد همراه باشد",
    image: "/icons/benefit/poor-posture-icon.png",
  },
  {
    title: "صدای مفصل",
    description:
      "شنیدن صدای تق‌تق (کلیک)، خش‌خش یا ساییدگی هنگام باز و بسته کردن دهان، جویدن یا خمیازه کشیدن",
    image: "/icons/benefit/Clicking_Sounds.png",
  },
  {
    title: "محدودیت باز شدن دهان",
    description: "ناتوانی در بازکردن دهان به اندازه سه عرض انگشت دست خود فرد",
    image: "/icons/benefit/Jaw_deviation-icon.png",
  },
  {
    title: "قفل شدن فک",
    description: "گیر کردن فک در وضعیت باز یا بسته",
    image: "/icons/benefit/LockedـJaw-icon.png",
  },
  {
    title: "انحراف فک",
    description:
      "حرکت فک به یک سمت در هنگام باز کردن دهان. عدم قرینگی در بازشدن دهان ",
    image: "/icons/benefit/Deviation-the-jaw.png",
  },

  {
    title: "مشکل در جویدن",
    description:
      "دشواری در خوردن غذاهای سفت، بزرگ یا چسبنده، کاهش قدرت گاز گرفتن و خستگی فک حین جویدن غذا",
    image: "/icons/benefit/Difficulty-Chewing.png",
  },
  {
    title: "دندان‌قروچه",
    description: "12.	دندان‌قروچه و فشردن دندان ها روی هم یا احساس فشار در فک",
    image: "/icons/benefit/Teeth_grinding.png",
  },
  {
    title: "تغییر جفت شدن دندان‌ها ",
    description: "احساس اینکه دندان‌ها مانند گذشته روی هم قرار نمی‌گیرند",
    image: "/icons/benefit/Altered_tooth.png",
  },
  {
    title: "وزوز گوش ",
    description: "شنیدن صداهایی مانند زنگ، سوت، صدای هوا یا وزوز در گوش",
    image: "/icons/benefit/Tinnitus-icon.png",
  },
  {
    title: "پری گوش",
    description: "احساس فشار یا کیپ شدن گوش بدون وجود مشکل واضح در معاینه گوش",
    image: "/icons/benefit/Ear_Fullness_icon.png",
  },
  {
    title: "سرگیجه",
    description: "احساس چرخش، سبکی سر یا ناپایدار",
    image: "/icons/benefit/dizziness.png",
  },
];

export function BenefitsSection() {
  return (
    <section dir="rtl" className=" py-10 px-6">
      <Container>
        {/* هدر بخش - کاملاً وسط چین */}
        <SectionHeading
          align="center"
          title="علائم شایع اختلالات فک و مفصل گیجگاهی - فکی"
          className="mb-12 "
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {symptoms.map(
            (
              item,
              idx, //CFF6CF
            ) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-start rounded-[2.5rem] border border-[#f1e6db] bg-[#dfe2d8] p-6 text-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#d59a8f]/5"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
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
