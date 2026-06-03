// components/sections/BenefitsSection.tsx
import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  Activity, 
  Dna, 
  Brain, 
  Stethoscope, 
  Volume2, 
  Ear 
} from "lucide-react"; 
const symptoms = [
  {
    title: "درد فک",
    description: "درد یا حساسیت در ناحیه فک و اطراف آن",
    icon: <Activity className="h-10 w-10" />,
  },
  {
    title: "سردرد",
    description: "سردردهای مکرر به‌ویژه در ناحیه شقیقه",
    icon: <Brain className="h-10 w-10" />,
  },
  {
    title: "صدای مفصل",
    description: "کلیک، تق‌تق یا ساییدگی در هنگام حرکت فک",
    icon: <Volume2 className="h-10 w-10" />,
  },
  {
    title: "محدودیت باز شدن دهان",
    description: "مشکل در باز کردن دهان یا احساس گیر کردن",
    icon: <Stethoscope className="h-10 w-10" />,
  },
  {
    title: "سایش دندان",
    description: "فشردن یا ساییدن دندان‌ها به‌ویژه در شب",
    icon: <Dna className="h-10 w-10" />,
  },
  {
    title: "درد گردن و شانه",
    description: "درد یا گرفتگی در ناحیه گردن، شانه و پشت",
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
          {symptoms.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-start rounded-[2.5rem] border border-[#f1e6db] bg-[#f1e6db] p-6 text-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#d59a8f]/5"
            >
           
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-[#5c6358] shadow-sm transition-transform group-hover:scale-110">
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
          ))}
        </div>
      </Container>
    </section>
  );
}
