import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const BlogCard = ({ title, excerpt, image, date }: any) => {
  return (
    <div className="group bg-white rounded-[2.5rem] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#f5ece3] hover:border-[#8b9472]/30 transition-all duration-500">
      
      {/* بخش تصویر با لبه‌های خیلی گرد */}
      <div className="relative h-60 w-full overflow-hidden rounded-[2rem] mb-6">
        <Image 
          src={image || "/api/placeholder/400/320"} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
      </div>

      {/* محتوا */}
      <div className="px-2">
        <div className="flex items-center gap-3 mb-4">
           <span className="text-[11px] font-bold text-[#8b9472] bg-[#8b9472]/10 px-3 py-1 rounded-full uppercase tracking-wider">
             {date || "۱۴۰۳"}
           </span>
           <div className="h-[1px] flex-1 bg-[#f5ece3]"></div>
        </div>

        <h3 className="text-xl font-bold text-[#495144] leading-[1.4] mb-3 group-hover:text-[#8b9472] transition-colors">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-[1.8] mb-8 line-clamp-3">
          {excerpt}
        </p>

        {/* دکمه مشابه دکمه‌های صفحه اصلی (سبز زیتونی) */}
        <button className="w-full flex items-center justify-between bg-[#fcf9f6] group-hover:bg-[#8b9472] p-2 pr-5 rounded-full transition-all duration-300">
          <span className="text-sm font-bold text-[#495144] group-hover:text-white transition-colors">
            مطالعه کامل مقاله
          </span>
          <div className="bg-white p-2 rounded-full shadow-sm text-[#8b9472]">
            <ArrowLeft size={18} />
          </div>
        </button>
      </div>
    </div>
  );
};
