import { BlogCard } from "@/features/blog/BlogCard";


const DUMMY_POSTS = [
  {
    title: "درمان‌های نوین اختلالات مفصل فک (TMJ)",
    excerpt: "در این مقاله به بررسی آخرین متدهای فیزیوتراپی و تمرینات اصلاحی برای کاهش درد مفصل فک می‌پردازیم...",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800",
    date: "۱۵ خرداد ۱۴۰۳",
    readTime: "۵ دقیقه مطالعه"
  },
  {
    title: "تاثیر استرس بر دندان‌قروچه شبانه",
    excerpt: "چگونه فشارهای عصبی روزانه باعث سایش دندان‌ها در خواب می‌شود و راهکار پیشگیری از آن چیست؟",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
    date: "۱۲ خرداد ۱۴۰۳",
    readTime: "۸ دقیقه مطالعه"
  },
  {
    title: "فیزیوتراپی تخصصی پس از جراحی فک",
    excerpt: "دوره نقاهت پس از جراحی فک و صورت با کمک متدهای تخصصی فیزیوتراپی چگونه سریع‌تر طی می‌شود؟",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
    date: "۱۰ خرداد ۱۴۰۳",
    readTime: "۶ دقیقه مطالعه"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fcf9f6] pt-32 pb-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* هدر صفحه */}
        <header className="mb-20 text-center relative">
          <div className="inline-block px-5 py-2 bg-[#8b9472]/10 text-[#8b9472] rounded-full text-[10px] font-black tracking-widest mb-6">
            MAGAZINE & ARTICLES
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#495144] tracking-tighter mb-6">
            مجله تخصصی <span className="text-[#8b9472]">TMD Clinic</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-loose text-sm md:text-base italic">
            "مرجعی برای آموزش، پیشگیری و درمان دردهای فک و صورت با متدهای فیزیوتراپی مدرن"
          </p>
          
          {/* المان دکوراتیو پشت متن */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-64 h-64 bg-[#8b9472]/5 rounded-full blur-3xl"></div>
        </header>

        {/* گرید مقالات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_POSTS.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        {/* دکمه بارگذاری بیشتر (اختیاری) */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-[#495144] text-white rounded-full font-bold text-sm hover:bg-[#8b9472] transition-all shadow-lg shadow-[#495144]/20">
            مشاهده مقالات قدیمی‌تر
          </button>
        </div>
      </div>
    </main>
  );
}
