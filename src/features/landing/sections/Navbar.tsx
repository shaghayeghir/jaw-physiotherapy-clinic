"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { title: "خانه", href: "/" },
  { title: "درباره من", href: "/about" },
  { title: "خدمات", href: "/services" },
  { title: "مقالات", href: "/blog" },
  { title: "ارزیابی شدت علائم", href: "/assessment" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav dir="rtl" className="w-full px-1 pt-4 sm:px-6 lg:px-1">
      {/* Container اصلی نوبار */}
      <div className="mx-auto max-w-8xl rounded-[2rem] bg-white/80 backdrop-blur-md px-8 py-3 shadow-sm border border-white/20">
        <div className="flex items-center justify-between">
          
          {/* بخش راست: لوگو */}
          <div className="flex items-center gap-3">
            <div className="relative h-15 w-15 bg-[#8b9472] rounded-full flex items-center justify-center overflow-hidden shrink-0">
              <Image
                src="/icons/Logo/sepide_sefid.png"
                alt="logo"
                fill
                priority
                className="object-contain p-1 z-10"
              />
            </div>
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
          <div className="hidden lg:flex items-center gap-12">
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

          {/* بخش چپ: دکمه واتساپ (فقط دسکتاپ) و همبرگری (فقط موبایل) */}
          <div className="flex items-center gap-3">
            {/* 
               این دکمه با کلاس hidden در موبایل مخفی است 
               و با lg:flex فقط در نمایشگرهای بزرگ ظاهر می‌شود 
            */}
            <a
              href="https://wa.me/989132702137"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-[#d59a8f] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#854f45] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>مشاوره در واتساپ</span>
            </a>

            {/* دکمه همبرگری موبایل */}
            <button
              className="lg:hidden p-2 text-[#495144] hover:bg-[#f7ece7] rounded-full transition-colors"
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

      {/* منوی موبایل (Overlay) */}
      {isOpen && (
        <div className="lg:hidden mt-2 mx-4 rounded-2xl bg-white border border-[#f5ece3] p-5 shadow-2xl absolute left-0 right-0 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-right px-4 py-3 text-[#495144] font-medium hover:bg-[#fdf8f2] hover:text-[#d59a8f] rounded-xl transition-all"
              >
                {link.title}
              </Link>
            ))}
            
            <hr className="border-[#f5ece3] my-1" />
            
            {/* دکمه واتساپ مخصوص داخل منوی موبایل */}
            <a
              href="https://wa.me/989132702137"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 bg-[#d59a8f] text-white px-5 py-3.5 rounded-xl text-sm font-bold shadow-md hover:bg-[#854f45] transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>مشاوره در واتساپ</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
