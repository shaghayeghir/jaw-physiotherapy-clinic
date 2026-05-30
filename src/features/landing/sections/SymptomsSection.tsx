import * as React from "react";
import { FeatureCard } from "../components/FeatureCard";
import {
  JawIcon,
  ToothIcon,
  EarIcon,
  HeadacheIcon,
  NeckPainIcon,
} from "@/components/icons";

const symptoms = [
  {
    title: "درد یا صدا در مفصل فک",
    description:
      "کلیک/تق‌تق فک، درد هنگام باز و بسته کردن دهان یا گیر کردن فک.",
    icon: <JawIcon className="h-6 w-6" />,
  },
  {
    title: "دندان‌قروچه و فشار فکی",
    description: "سایش دندان‌ها، درد صبحگاهی فک یا خستگی عضلات جونده.",
    icon: <ToothIcon className="h-6 w-6" />,
  },
  {
    title: "درد یا احساس پری گوش",
    description:
      "گاهی مشکلات TMJ با گوش‌درد/وزوز یا احساس گرفتگی همراه می‌شود.",
    icon: <EarIcon className="h-6 w-6" />,
  },
  {
    title: "سردردهای مرتبط با فک",
    description:
      "سردردهای گیجگاهی/پیشانی که با تنش عضلات فک تشدید می‌شوند.",
    icon: <HeadacheIcon className="h-6 w-6" />,
  },
  {
    title: "درد گردن و شانه",
    description:
      "اختلال عملکرد فک می‌تواند با تنش گردن و وضعیت بدنی مرتبط باشد.",
    icon: <NeckPainIcon className="h-6 w-6" />,
  },
];

export function SymptomsSection() {
  return (
    <section className="bg-zinc-50/70 py-14 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            اگر این علائم را دارید، احتمالاً TMD مطرح است
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            تشخیص قطعی نیاز به معاینه دارد، اما علائم زیر می‌تواند نشانه اختلالات
            مفصل گیجگاهی‌فکی باشد.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {symptoms.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
