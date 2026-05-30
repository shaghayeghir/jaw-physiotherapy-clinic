import * as React from "react";
import { FeatureCard } from "../components/FeatureCard";
import {
  ShieldCheckIcon,
  LeafIcon,
  HandsHeartIcon,
  UserCheckIcon,
} from "@/components/icons";

const benefits = [
  {
    title: "درمان هدفمند و علمی",
    description:
      "برنامه درمانی بر اساس ارزیابی دقیق مفصل فک (TMJ) و الگوی درد شما تنظیم می‌شود.",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
  },
  {
    title: "رویکرد کم‌تهاجمی",
    description:
      "هدف ما کاهش درد و بهبود عملکرد با تکنیک‌های دستی، تمرین درمانی و آموزش است.",
    icon: <LeafIcon className="h-6 w-6" />,
  },
  {
    title: "تمرکز بر کیفیت زندگی",
    description:
      "کمک به بهتر شدن خواب، تمرکز، جویدن و کاهش سردردهای مرتبط با فک.",
    icon: <HandsHeartIcon className="h-6 w-6" />,
  },
  {
    title: "همراهی و پیگیری",
    description:
      "جلسات درمانی با پیگیری روند بهبود و به‌روزرسانی تمرین‌ها ادامه پیدا می‌کند.",
    icon: <UserCheckIcon className="h-6 w-6" />,
  },
];

export function BenefitsSection() {
  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            چرا کلینیک فیزیوتراپی فک و دهان؟
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            درمان اختلالات فک (TMD) نیاز به ارزیابی تخصصی، برنامه تمرینی دقیق و
            تکنیک‌های دستی دارد.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
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
