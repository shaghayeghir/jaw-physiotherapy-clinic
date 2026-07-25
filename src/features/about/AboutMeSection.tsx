"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, Award, HeartPulse, MapPin, MessageCircle, ClipboardCheck, Sparkles, X } from "lucide-react";

// ساختار محتوایی برای هر ۴ پاپ‌آپ (Modal)
const MODAL_DATA = {
  knowledge: {
    title: "آموزش؛ بخش جدایی‌ناپذیر درمان",
    icon: <Award className="w-8 h-8 text-[#d59a8f]" />,
    content: (
      <div className="space-y-4 text-right text-sm sm:text-base leading-8 text-[#6b665f]" dir="rtl">
        <p>
          یکی از مهم‌ترین اهداف من این است که مراجع، تنها دریافت‌کننده درمان نباشد، بلکه نقش فعالی در روند بهبودی خود داشته باشد.
        </p>
        <p>
          به همین دلیل، آموزش درباره وضعیت بدنی، نحوه انجام صحیح تمرینات، اصلاح عادات روزمره و شناخت عوامل مؤثر بر علائم، بخش مهمی از فرآیند درمان است. هدف من این است که مراجع به مرور زمان با شناخت بهتر بدن خود، بتواند علائمش را مدیریت کند و با اطمینان بیشتری به فعالیت‌های روزمره بازگردد؛ هم‌چنین تا حد امکان از عود مجدد بیماری جلوگیری شود.
        </p>
        <p className="font-medium text-[#d59a8f]">
          برای من، مهم این نیست که مراجع با چه تشخیصی وارد اتاق درمان می‌شود؛ مهم این است که هنگام خروج، نه‌تنها احساس بهتری داشته باشد، بلکه بدن و مشکل خود را بهتر بشناسد، دلیل انتخاب برنامه درمانی را بداند و با آگاهی و اطمینان بیشتری مسیر بهبودی را ادامه دهد.
        </p>
      </div>
    ),
  },
  treatment: {
    title: "رسالت من در درمان",
    icon: <HeartPulse className="w-8 h-8 text-[#495144]" />,
    content: (
      <div className="space-y-4 text-right text-sm sm:text-base leading-8 text-[#6b665f]" dir="rtl">
        <p>
          آنچه بیش از هر چیز برای من ارزشمند است، لحظه‌ای است که مراجع دوباره بتواند بدون درد، ترس و محدودیت زندگی روزمره‌اش را ادامه دهد.
        </p>
        <p>
          اینکه بعد از مدت‌ها بتواند با خیال راحت خمیازه بکشد، با خیال راحت یک سیب یا ساندویچ بزرگ را گاز بزند، هنگام صحبت کردن و جویدن غذا خستگی یا درد کمتری احساس کند، گردنش را آزادانه بچرخاند یا برای بیماری که ماه‌ها یا سال‌ها با وزوز گوش زندگی کرده است، دوباره سکوت را تجربه کند.
        </p>
        <p className="font-medium text-[#8b9472]">
          این لحظه‌ها فقط نشانه موفقیت درمان نیستند؛ بلکه انگیزه‌ای هستند که باعث می‌شوند همواره نگاهم را دقیق‌تر کنم، دانشم را به‌روز نگه دارم و برای یافتن راهکارهای مؤثرتر، از جست‌وجو و بازاندیشی دست نکشم. باور دارم درمان مؤثر و دقیق، حاصل کنجکاوی علمی، تجربه بالینی و تعهد به بهتر شدن است؛ مسیری که برای من پایانی ندارد.
        </p>
      </div>
    ),
  },
  assessment: {
    title: "ارزیابی تخصصی؛ اندازه‌گیری، تحلیل و پیگیری",
    icon: <ClipboardCheck className="w-8 h-8 text-[#8b9472]" />,
    content: (
      <div className="space-y-4 text-right text-sm sm:text-base leading-8 text-[#6b665f]" dir="rtl">
        <p>
          پیشرفت درمان علاوه بر گزارش بهبودی توسط مراجع، باید تا حد امکان قابل اندازه‌گیری باشد.
        </p>
        <p>
          به همین دلیل، در طول درمان، دامنه باز شدن دهان، دامنه بدون درد، حرکات جانبی، شدت و محل درد، حساسیت عضلات و سایر شاخص‌های عملکردی به‌صورت منظم ارزیابی و ثبت می‌شوند تا روند درمان به‌صورت عینی قابل پیگیری باشد.
        </p>
        <p>
          در مواردی که ارزیابی دقیق‌تر حرکت فک ضروری باشد، مسیر حرکت فک با استفاده از تحلیل ویدئویی و نرم‌افزارهای تخصصی بررسی و دامنه حرکتی با ابزارهای استاندارد اندازه‌گیری ثبت می‌شود. این اطلاعات کمک می‌کنند تغییرات، حتی در حد چند میلی‌متر، به‌صورت عینی قابل مشاهده باشند و روند درمان بر اساس داده‌های واقعی، علاوه بر احساس مراجع، پیگیری شود. یافته‌های این ارزیابی‌ها به من کمک می‌کنند تا از میان روش‌های درمانی مختلف مناسب‌ترین ترکیب را برای هر فرد انتخاب کنم.
        </p>
      </div>
    ),
  },
  customPlan: {
    title: "طرح درمان شخصی؛ متناسب با زندگی هر بیمار",
    icon: <Sparkles className="w-8 h-8 text-[#d59a8f]" />,
    content: (
      <div className="max-h-[350px] overflow-y-auto pr-1 space-y-4 text-right text-sm sm:text-base leading-8 text-[#6b665f]" dir="rtl">
        <p>
          درمان تنها به اختلال مفصل یا عضله محدود نمی‌شود. باور دارم بهترین درمان، درمانی است که بر پایه شنیدن دقیق، ارزیابی علمی، تصمیم‌گیری مبتنی بر شواهد و احترام به تفاوت‌ها شکل بگیرد؛ زیرا هر فرد مسیر درمانی منحصربه‌فرد خود را دارد.
        </p>
        <p>
          هر بیمار برای من مجموعه‌ای از علائم نیست؛ بلکه یک مسئله بالینی است که باید با دقت شنیده، تحلیل و برای آن راه‌حلی متناسب طراحی شود. همین فرآیند تحلیل و یافتن بهترین مسیر درمان، چیزی است که بیش از هر چیز به کارم معنا می‌دهد.
        </p>
        <p>
          مراجعه‌کنندگان من تنها یک تشخیص یا یک تصویر MRI نیستند؛ هر کدام انسانی با دغدغه‌ها، اهداف و سبک زندگی متفاوت هستند و تلاش می‌کنم این تفاوت‌ها در تمام مراحل درمان دیده شوند. اینکه مراجع، معلم یا روانشناس است و ساعت‌ها صحبت می‌کند، کارمند است و زمان زیادی پشت میز می‌نشیند یا شغل دیگری دارد، در طراحی برنامه درمانی اهمیت دارد. همچنین به عواملی مانند کیفیت خواب، وضعیت بدنی، استرس و اضطراب توجه می‌کنم؛ زیرا این عوامل می‌توانند بر تجربه درد و بهبود تأثیر بگذارند.
        </p>
        <p className="font-medium text-[#d59a8f]">
          در ارزیابی درد، تنها شدت آن برای من مهم نیست. اینکه درد چه تأثیری بر کیفیت زندگی مراجع گذاشته است، آیا فعالیت‌های روزمره، شغل یا روابط اجتماعی او را محدود کرده و آیا عواملی مانند استرس، اضطراب یا الگوهای رفتاری در تداوم علائم نقش دارند، همگی بخشی از فرآیند ارزیابی هستند. به همین دلیل، درمان برای هر مراجع متناسب با شرایط، اهداف و نیازهای عملکردی او طراحی می‌شود.
        </p>
      </div>
    ),
  },
};

type ModalType = keyof typeof MODAL_DATA;

export function AboutMeSection() {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  const openModal = (type: ModalType) => {
    setActiveModal(type);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#fbf8f4] py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:gap-16">
        
        {/* سمت چپ: تصویر فیزیوتراپیست و کارت‌های شناور تزیینی */}
        <div className="relative w-full max-w-[420px] lg:w-[42%]">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2.2rem] bg-[#dfe2d8]" />

          <div className="relative overflow-hidden rounded-[2.2rem] border-8 border-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
            <Image
              src="/image/about/about.jpeg"
              alt="فیزیوتراپیست سپیده مصری‌پور"
              width={600}
              height={760}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* کارت شناور ۱ */}
          <div className="absolute -left-3 top-8 rounded-2xl bg-white px-4 py-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d59a8f]/15 text-[#d59a8f]">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#495144]">
                  کارشناسی ارشد
                </p>
                <p className="text-xs text-[#8c857b]">
                  دانشگاه علوم پزشکی ایران
                </p>
              </div>
            </div>
          </div>

          {/* کارت شناور ۲ */}
          <div className="absolute -bottom-5 right-4 rounded-2xl bg-white px-4 py-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe2d8] text-[#495144]">
                <HeartPulse size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#495144]">
                  تخصص درمان TMD
                </p>
                <p className="text-xs text-[#8c857b]">
                  فک، گردن و اختلالات مفصل
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* سمت راست: معرفی و ۴ کارت ویژگی تعاملی */}
        <div className="w-full lg:w-[58%]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#d59a8f]/10 px-4 py-2 text-sm font-medium text-[#d59a8f]">
            <MapPin size={16} />
            درباره من
          </div>

          <h2 className="text-xl font-bold leading-tight text-[#495144] sm:text-4xl lg:text-2xl">
            همراه شما در مسیر کاهش درد و بازگشت به عملکرد طبیعی
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#8c857b] sm:text-lg">
            من سپیده مصری‌پور هستم؛ فیزیوتراپیست با تمرکز بر اختلالات مفصل
            فکی–گیجگاهی (TMJ) و دردهای ناحیه سر و گردن. در دوره کارشناسی ارشد،
            تمرکز پژوهشی من بر بیماران با اختلالات مفصل فکی–گیجگاهی متمرکز بوده
            و بخش عمده فعالیت بالینی و مطالعاتم را نیز به ارزیابی و درمان این
            گروه از بیماران اختصاص داده‌ام. این مسیر به من آموخته است که درمان
            مؤثر، تنها به کاهش علائم محدود نمی‌شود؛ بلکه با شناخت دقیق علت
            اختلال، درک شرایط هر مراجع و طراحی برنامه درمانی متناسب با نیازهای
            او آغاز می‌شود.
          </p>

          {/* شبکه ۴ عددی کارت‌ها */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            {/* ۱. کارت دانش تخصصی */}
            <div 
              onClick={() => openModal("knowledge")}
              className="group cursor-pointer rounded-2xl border border-[#eee3d7] bg-white p-5 shadow-sm hover:shadow-md hover:border-[#d59a8f]/40 transition-all duration-300"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#d59a8f]/10 text-[#d59a8f] group-hover:scale-105 transition-transform">
                <Award size={20} />
              </div>
              <h3 className="text-sm font-bold text-[#495144] group-hover:text-[#d59a8f] transition-colors flex items-center gap-2">
                <span>دانش تخصصی</span>
                <span className="text-[10px] bg-[#d59a8f]/10 text-[#d59a8f] px-2 py-0.5 rounded-full font-normal">بیشتر</span>
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#8c857b]">
                آموزش؛ بخش جدایی‌ناپذیر درمان
              </p>
            </div>

            {/* ۲. کارت درمان هدفمند */}
            <div 
              onClick={() => openModal("treatment")}
              className="group cursor-pointer rounded-2xl border border-[#eee3d7] bg-white p-5 shadow-sm hover:shadow-md hover:border-[#8b9472]/40 transition-all duration-300"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#dfe2d8] text-[#495144] group-hover:scale-105 transition-transform">
                <HeartPulse size={20} />
              </div>
              <h3 className="text-sm font-bold text-[#495144] group-hover:text-[#8b9472] transition-colors flex items-center gap-2">
                <span>درمان هدفمند</span>
                <span className="text-[10px] bg-[#dfe2d8] text-[#495144] px-2 py-0.5 rounded-full font-normal">بیشتر</span>
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#8c857b]">
                رسالت من در بهبود عملکرد واقعی شما
              </p>
            </div>

            {/* ۳. کارت ارزیابی تخصصی */}
            <div 
              onClick={() => openModal("assessment")}
              className="group cursor-pointer rounded-2xl border border-[#eee3d7] bg-white p-5 shadow-sm hover:shadow-md hover:border-[#8b9472]/40 transition-all duration-300"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#dfe2d8] text-[#495144] group-hover:scale-105 transition-transform">
                <ClipboardCheck size={20} />
              </div>
              <h3 className="text-sm font-bold text-[#495144] group-hover:text-[#8b9472] transition-colors flex items-center gap-2">
                <span>ارزیابی تخصصی</span>
                <span className="text-[10px] bg-[#dfe2d8] text-[#495144] px-2 py-0.5 rounded-full font-normal">بیشتر</span>
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#8c857b]">
                اندازه‌گیری، تحلیل بیومکانیکال و پیگیری عینی روند
              </p>
            </div>

            {/* ۴. کارت طرح درمان شخصی */}
            <div 
              onClick={() => openModal("customPlan")}
              className="group cursor-pointer rounded-2xl border border-[#eee3d7] bg-white p-5 shadow-sm hover:shadow-md hover:border-[#d59a8f]/40 transition-all duration-300"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#d59a8f]/10 text-[#d59a8f] group-hover:scale-105 transition-transform">
                <Sparkles size={20} />
              </div>
              <h3 className="text-sm font-bold text-[#495144] group-hover:text-[#d59a8f] transition-colors flex items-center gap-2">
                <span>طرح درمان شخصی</span>
                <span className="text-[10px] bg-[#d59a8f]/10 text-[#d59a8f] px-2 py-0.5 rounded-full font-normal">بیشتر</span>
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#8c857b]">
                درمان اختصاصی متناسب با نیازها و سبک زندگی شما
              </p>
            </div>

          </div>

          {/* دکمه مشاوره */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
            <a
              href="https://wa.me/989132702137"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#d59a8f] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#854f45] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>مشاوره در واتساپ</span>
            </a>
          </div>
        </div>
      </div>

      {/* کامپوننت پاپ‌آپ (Modal) */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-lg transform rounded-[2rem] bg-white p-6 shadow-2xl transition-all duration-300 border border-[#f5ece3] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* هدر پاپ‌آپ */}
            <div className="flex items-center justify-between border-b border-[#f5ece3] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbf8f4]">
                  {MODAL_DATA[activeModal].icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#495144]">
                  {MODAL_DATA[activeModal].title}
                </h3>
              </div>
              <button 
                onClick={closeModal}
                className="rounded-full p-2 text-[#8c857b] hover:bg-[#f7ece7] hover:text-[#d59a8f] transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* بدنه محتوای پاپ‌آپ */}
            <div className="py-2">
              {MODAL_DATA[activeModal].content}
            </div>

            {/* فوتر پاپ‌آپ */}
            <div className="mt-6 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-6 py-2 bg-[#495144] text-white hover:bg-[#393f35] rounded-xl text-sm font-medium transition-colors"
              >
                متوجه شدم
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
