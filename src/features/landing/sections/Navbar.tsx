"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { Menu, X, CalendarDays } from "lucide-react";
import Image from "next/image";
const NAV_LINKS = [
  { title: "خانه", href: "/" },
  { title: "درباره من", href: "/about" },
  { title: "خدمات", href: "/services" },
  { title: "مقالات", href: "/blog" },
  { title: "  ارزیابی شدت علائم", href: "/assessment" },
  // { title: "تماس با ما", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav dir="rtl" className="w-full px-1 pt-4 sm:px-6 lg:px-1">
      {/* Container اصلی نوبار با لبه‌های گرد مطابق طرح */}
      <div className="mx-auto max-w-8xl rounded-[2rem] bg-white/80 backdrop-blur-md   px-8 py-3 ">
        <div className="flex items-center justify-between">
          {/* بخش راست: لوگو */}
          <div className="flex items-center gap-3">
            {/* آیکون لوگو */}
            <div className="relative h-15 w-15 bg-[#8b9472] rounded-full flex items-center justify-center overflow-hidden shrink-0">
              <Image
                src="/icons/Logo/sepide_sefid.png"
                alt="logo"
                fill
                priority
                className="object-contain p-1 z-10" // اضافه کردن کمی padding برای اینکه لوگو به لبه‌ها نچسبد
              />
            </div>

            {/* متون لوگو */}
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xl font-black tracking-tighter text-[#495144]">
                TMD<span className="font-medium"> CLINIC</span>
              </span>
              <span className="text-[10px] font-medium text-[#8b9472] tracking-[0.1em] -mt-1">
                سپیده مصری پور
              </span>
            </div>
          </div>

          {/* بخش وسط: منوهای دسکتاپ */}
          <div className="hidden lg:flex items-center gap-18">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm font-medium text-[#6b665f] hover:text-[#d59a8f] transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* بخش چپ: دکمه نوبت‌دهی (دسکتاپ) و منو همبرگری (موبایل) */}
          <div className="flex items-center gap-3">
            <Button className="hidden sm:flex items-center gap-2 bg-[#d59a8f] hover:bg-[#76805d] text-white rounded-xl px-5">
              <CalendarDays className="h-4 w-4" />
              نوبت‌دهی آنلاین
            </Button>

            {/* دکمه همبرگری موبایل */}
            <button
              className="lg:hidden p-2 text-[#495144]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* منوی موبایل (حالت بازشو) */}
      {isOpen && (
        <div className="lg:hidden mt-2 rounded-2xl bg-white border border-[#f5ece3] p-4 shadow-xl absolute left-4 right-4 z-50">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-right px-4 py-2 text-[#495144] hover:bg-[#fdf8f2] rounded-lg transition-colors"
              >
                {link.title}
              </Link>
            ))}
            <hr className="border-[#f5ece3]" />
            <Button className="w-full bg-[#8b9472] text-white flex items-center justify-center gap-2">
              <CalendarDays className="h-4 w-4" />
              نوبت‌دهی آنلاین
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
