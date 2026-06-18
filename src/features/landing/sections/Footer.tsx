import { Globe, Phone, MapPin, WavesVertical } from "lucide-react"; // استفاده از آیکون‌های لوساید یا هر کتابخانه‌ای که دارید

export default function Footer() {
  return (
    <footer className="w-full bg-[#c5a49a] py-3 px-4 sm:px-8 mt-1">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap items-center justify-between gap-4 text-white/90 text-[13px] font-medium">
        {/* بخش وب‌سایت */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 border border-white/30 rounded-full">
            <Globe size={14} className="text-white" />
          </div>
          <span className="ltr tracking-wide">www.tmd_clinic.ir</span>
        </div>

        {/* بخش تلفن */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 border border-white/30 rounded-full">
            <Phone size={14} className="text-white" />
          </div>
          <span className="ltr tracking-wide">09125035402</span>
        </div>
        {/* بخش واتساپ */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 border border-white/30 rounded-full">
            <WavesVertical size={14} className="text-white" />
          </div>
          <span className="ltr tracking-wide"> 09132702137</span>
        </div>
        {/* بخش آدرس - در موبایل مرکزچین و در دسکتاپ سمت چپ */}
        <div className="flex items-center gap-2 text-center md:text-right">
          {/* <div className="p-1.5 border border-white/30 rounded-full shrink-0">
            <MapPin size={14} className="text-white" />
          </div> */}
          {/* <p className="leading-relaxed">
            تجریش، بیمارستان شهدای تجریش، طبقه ۶، بخش طب فیزیکی و توانبخشی،
            کلینیک فیزیوتراپی
          </p> */}
        </div>
      </div>
    </footer>
  );
}
