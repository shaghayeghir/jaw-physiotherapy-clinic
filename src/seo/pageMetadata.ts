// src/seo/pageMetadata.ts
import type { Metadata } from 'next';

export const pageMetadata: Record<string, Metadata> = {
  home: {
    title: "فیزیوتراپی فک و TMJ",
    description: "ارزیابی و درمان تخصصی اختلالات مفصل گیجگاهی‌فکی (TMJ)، دردهای صورت و گردن توسط سپیده مصری پور.",
  },
  about: {
    title: "درباره من",
    description: "آشنایی با سپیده سپید، فیزیوتراپیست و متخصص درمان اختلالات مفصل فک و گردن.",
  },
  services: {
    title: "خدمات ما",
    description: "خدمات تخصصی فیزیوتراپی شامل درمان TMJ، دردهای مزمن صورت، گردن و ارزیابی‌های تخصصی.",
  },
  blog: {
    title: "مقالات آموزشی",
    description: "مجموعه مقالات تخصصی درباره سلامت فک، علائم TMJ و راهکارهای درمانی.",
  },
  assessment: {
    title: "ارزیابی شدت علائم",
    description: "با انجام این ارزیابی آنلاین، شدت علائم مفصل فک خود را بسنجید و برای مشاوره اقدام کنید.",
  }
};
