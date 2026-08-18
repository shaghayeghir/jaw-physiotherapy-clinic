"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  HeartPulse,
  MapPin,
  MessageCircle,
  ClipboardCheck,
  Sparkles,
  X,
} from "lucide-react";

const MODAL_DATA = {
  knowledge: {
    title: "آموزش؛ بخش جدایی‌ناپذیر درمان",
    icon: <Award className="h-7 w-7 sm:h-8 sm:w-8 text-[#d59a8f]" />,
    content: (
      <div
        className="space-y-4 text-right text-sm leading-7 text-[#6b665f] sm:text-base sm:leading-8"
        dir="rtl"
      >
        <p>
          یکی از مهم‌ترین اهداف من این است که مراجع، تنها دریافت‌کننده درمان
          نباشد، بلکه نقش فعالی در روند بهبودی خود داشته باشد.
        </p>
        <p>
          به همین دلیل، آموزش درباره وضعیت بدنی، نحوه انجام صحیح تمرینات، اصلاح
          عادات روزمره و شناخت عوامل مؤثر بر علائم، بخش مهمی از فرآیند درمان
          است. هدف من این است که مراجع به مرور زمان با شناخت بهتر بدن خود،
          بتواند علائمش را مدیریت کند و با اطمینان بیشتری به فعالیت‌های روزمره
          بازگردد؛ هم‌چنین تا حد امکان از عود مجدد بیماری جلوگیری شود.
        </p>
        <p className="font-medium text-[#d59a8f]">
          برای من، مهم این نیست که مراجع با چه تشخیصی وارد اتاق درمان می‌شود؛
          مهم این است که هنگام خروج، نه‌تنها احساس بهتری داشته باشد، بلکه بدن و
          مشکل خود را بهتر بشناسد، دلیل انتخاب برنامه درمانی را بداند و با آگاهی
          و اطمینان بیشتری مسیر بهبودی را ادامه دهد.
        </p>
      </div>
    ),
  },
  treatment: {
    title: "رسالت من در درمان",
    icon: <HeartPulse className="h-7 w-7 sm:h-8 sm:w-8 text-[#495144]" />,
    content: (
      <div
        className="space-y-4 text-right text-sm leading-7 text-[#6b665f] sm:text-base sm:leading-8"
        dir="rtl"
      >
        <p>
          آنچه بیش از هر چیز برای من ارزشمند است، لحظه‌ای است که مراجع دوباره
          بتواند بدون درد، ترس و محدودیت زندگی روزمره‌اش را ادامه دهد.
        </p>
        <p>
          اینکه بعد از مدت‌ها بتواند با خیال راحت خمیازه بکشد، با خیال راحت یک
          سیب یا ساندویچ بزرگ را گاز بزند، هنگام صحبت کردن و جویدن غذا خستگی یا
          درد کمتری احساس کند، گردنش را آزادانه بچرخاند یا برای بیماری که ماه‌ها
          یا سال‌ها با وزوز گوش زندگی کرده است، دوباره سکوت را تجربه کند.
        </p>
        <p className="font-medium text-[#8b9472]">
          این لحظه‌ها فقط نشانه موفقیت درمان نیستند؛ بلکه انگیزه‌ای هستند که
          باعث می‌شوند همواره نگاهم را دقیق‌تر کنم، دانشم را به‌روز نگه دارم و
          برای یافتن راهکارهای مؤثرتر، از جست‌وجو و بازاندیشی دست نکشم. باور
          دارم درمان مؤثر و دقیق، حاصل کنجکاوی علمی، تجربه بالینی و تعهد به بهتر
          شدن است؛ مسیری که برای من پایانی ندارد.
        </p>
      </div>
    ),
  },
  assessment: {
    title: "ارزیابی تخصصی؛ اندازه‌گیری، تحلیل و پیگیری",
    icon: <ClipboardCheck className="h-7 w-7 sm:h-8 sm:w-8 text-[#8b9472]" />,
    content: (
      <div
        className="space-y-4 text-right text-sm leading-7 text-[#6b665f] sm:text-base sm:leading-8"
        dir="rtl"
      >
        <p>پیشرفت درمان علاوه بر گزارش بهبودی توسط مراجع، باید تا حد امکان قابل اندازه‌گیری باشد.</p>
        <p>
          به همین دلیل، در طول درمان، دامنه باز شدن دهان، دامنه بدون درد، حرکات
          جانبی، شدت و محل درد، حساسیت عضلات و سایر شاخص‌های عملکردی به‌صورت
          منظم ارزیابی و ثبت می‌شوند تا روند درمان به‌صورت عینی قابل پیگیری
          باشد.
        </p>
        <p>
          در مواردی که ارزیابی دقیق‌تر حرکت فک ضروری باشد، مسیر حرکت فک با
          استفاده از تحلیل ویدئویی و نرم‌افزارهای تخصصی بررسی و دامنه حرکتی با
          ابزارهای استاندارد اندازه‌گیری ثبت می‌شود. این اطلاعات کمک می‌کنند
          تغییرات، حتی در حد چند میلی‌متر، به‌صورت عینی قابل مشاهده باشند و روند
          درمان بر اساس داده‌های واقعی، علاوه بر احساس مراجع، پیگیری شود.
          یافته‌های این ارزیابی‌ها به من کمک می‌کنند تا از میان روش‌های درمانی
          مختلف مناسب‌ترین ترکیب را برای هر فرد انتخاب کنم.
        </p>
      </div>
    ),
  },
  customPlan: {
    title: "طرح درمان شخصی؛ متناسب با زندگی هر بیمار",
    icon: <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 text-[#d59a8f]" />,
    content: (
      <div
        className="max-h-[45vh] overflow-y-auto pr-1 space-y-4 text-right text-sm leading-7 text-[#6b665f] sm:max-h-[350px] sm:text-base sm:leading-8"
        dir="rtl"
      >
        <p>
          درمان تنها به اختلال مفصل یا عضله محدود نمی‌شود. باور دارم بهترین
          درمان، درمانی است که بر پایه شنیدن دقیق، ارزیابی علمی، تصمیم‌گیری
          مبتنی بر شواهد و احترام به تفاوت‌ها شکل بگیرد؛ زیرا هر فرد مسیر درمانی
          منحصربه‌فرد خود را دارد.
        </p>
        <p>
          هر بیمار برای من مجموعه‌ای از علائم نیست؛ بلکه یک مسئله بالینی است که
          باید با دقت شنیده، تحلیل و برای آن راه‌حلی متناسب طراحی شود. همین
          فرآیند تحلیل و یافتن بهترین مسیر درمان، چیزی است که بیش از هر چیز به
          کارم معنا می‌دهد.
        </p>
        <p>
          مراجعه‌کنندگان من تنها یک تشخیص یا یک تصویر MRI نیستند؛ هر کدام انسانی
          با دغدغه‌ها، اهداف و سبک زندگی متفاوت هستند و تلاش می‌کنم این
          تفاوت‌ها در تمام مراحل درمان دیده شوند. اینکه مراجع، معلم یا روانشناس
          است و ساعت‌ها صحبت می‌کند، کارمند است و زمان زیادی پشت میز می‌نشیند
          یا شغل دیگری دارد، در طراحی برنامه درمانی اهمیت دارد. همچنین به عواملی
          مانند کیفیت خواب، وضعیت بدنی، استرس و اضطراب توجه می‌کنم؛ زیرا این
          عوامل می‌توانند بر تجربه درد و بهبود تأثیر بگذارند.
        </p>
        <p className="font-medium text-[#d59a8f]">
          در ارزیابی درد، تنها شدت آن برای من مهم نیست. اینکه درد چه تأثیری بر
          کیفیت زندگی مراجع گذاشته است، آیا فعالیت‌های روزمره، شغل یا روابط
          اجتماعی او را محدود کرده و آیا عواملی مانند استرس، اضطراب یا الگوهای
          رفتاری در تداوم علائم نقش دارند، همگی بخشی از فرآیند ارزیابی هستند. به
          همین دلیل، درمان برای هر مراجع متناسب با شرایط، اهداف و نیازهای
          عملکردی او طراحی می‌شود.
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
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModal]);

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#fbf8f4] py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
        {/* سمت چپ: تصویر */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:w-[42%]">
          <div className="absolute -right-2 -top-2 h-full w-full rounded-[1.8rem] bg-[#dfe2d8] sm:-right-4 sm:-top-4 sm:rounded-[2.2rem]" />

          <div className="relative overflow-hidden rounded-[1.8rem] border-[6px] border-white shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:rounded-[2.2rem] sm:border-8">
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
          <div className="absolute left-2 top-3 rounded-2xl bg-white px-3 py-2 shadow-lg sm:-left-3 sm:top-8 sm:px-4 sm:py-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d59a8f]/15 text-[#d59a8f] sm:h-9 sm:w-9">
                <GraduationCap size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#495144] sm:text-sm">
                  کارشناسی ارشد
                </p>
                <p className="text-[10px] text-[#8c857b] sm:text-xs">
                  دانشگاه علوم پزشکی ایران
                </p>
              </div>
            </div>
          </div>

          {/* کارت شناور ۲ */}
          <div className="absolute bottom-3 right-2 rounded-2xl bg-white px-3 py-2 shadow-lg sm:-bottom-5 sm:right-4 sm:px-4 sm:py-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dfe2d8] text-[#495144] sm:h-9 sm:w-9">
                <HeartPulse size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#495144] sm:text-sm">
                  تخصص درمان TMD
                </p>
                <p className="text-[10px] text-[#8c857b] sm:text-xs">
                  فک، گردن و اختلالات مفصل
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* سمت راست: محتوا */}
        <div className="w-full lg:w-[58%]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#d59a8f]/10 px-4 py-2 text-xs font-medium text-[#d59a8f] sm:mb-5 sm:text-sm">
            <MapPin size={16} />
            درباره من
          </div>

          <h2 className="text-center text-2xl font-bold leading-9 text-[#495144] sm:text-3xl sm:leading-[1.8] lg:text-right lg:text-2xl lg:leading-tight">
            همراه شما در مسیر کاهش درد و بازگشت به عملکرد طبیعی
          </h2>

          <p className="mt-5 text-center text-sm leading-7 text-[#8c857b] sm:mt-6 sm:text-base sm:leading-8 lg:max-w-xl lg:text-right lg:text-lg">
            من سپیده مصری‌پور هستم؛ فیزیوتراپیست با تمرکز بر اختلالات مفصل
            فکی–گیجگاهی (TMJ) و دردهای ناحیه سر و گردن. در دوره کارشناسی ارشد،
            تمرکز پژوهشی من بر بیماران با اختلالات مفصل فکی–گیجگاهی  بوده
            و بخش عمده فعالیت بالینی و مطالعاتم را نیز به ارزیابی و درمان این
            گروه از بیماران اختصاص داده‌ام. این مسیر به من آموخته است که درمان
            مؤثر، تنها به کاهش علائم محدود نمی‌شود؛ بلکه با شناخت دقیق علت
            اختلال، درک شرایط هر مراجع و طراحی برنامه درمانی متناسب با نیازهای
            او آغاز می‌شود.
          </p>

          {/* کارت‌ها */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div
              onClick={() => openModal("knowledge")}
              className="group cursor-pointer rounded-2xl border border-[#eee3d7] bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:border-[#d59a8f]/40 hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#d59a8f]/10 text-[#d59a8f] transition-transform group-hover:scale-105 sm:h-11 sm:w-11">
                <Award size={20} />
              </div>
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#495144] transition-colors group-hover:text-[#d59a8f]">
                <span>دانش تخصصی</span>
                <span className="rounded-full bg-[#d59a8f]/10 px-2 py-0.5 text-[10px] font-normal text-[#d59a8f]">
                  بیشتر
                </span>
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#8c857b]">
                آموزش؛ بخش جدایی‌ناپذیر درمان
              </p>
            </div>

            <div
              onClick={() => openModal("treatment")}
              className="group cursor-pointer rounded-2xl border border-[#eee3d7] bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:border-[#8b9472]/40 hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#dfe2d8] text-[#495144] transition-transform group-hover:scale-105 sm:h-11 sm:w-11">
                <HeartPulse size={20} />
              </div>
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#495144] transition-colors group-hover:text-[#8b9472]">
                <span> رسالت من</span>
                <span className="rounded-full bg-[#dfe2d8] px-2 py-0.5 text-[10px] font-normal text-[#495144]">
                  بیشتر
                </span>
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#8c857b]">
                رسالت من در بهبود عملکرد واقعی شما
              </p>
            </div>

            <div
              onClick={() => openModal("assessment")}
              className="group cursor-pointer rounded-2xl border border-[#eee3d7] bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:border-[#8b9472]/40 hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#dfe2d8] text-[#495144] transition-transform group-hover:scale-105 sm:h-11 sm:w-11">
                <ClipboardCheck size={20} />
              </div>
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#495144] transition-colors group-hover:text-[#8b9472]">
                <span>ارزیابی تخصصی</span>
                <span className="rounded-full bg-[#dfe2d8] px-2 py-0.5 text-[10px] font-normal text-[#495144]">
                  بیشتر
                </span>
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#8c857b]">
                اندازه‌گیری، تحلیل بیومکانیکال و پیگیری عینی روند
              </p>
            </div>

            <div
              onClick={() => openModal("customPlan")}
              className="group cursor-pointer rounded-2xl border border-[#eee3d7] bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:border-[#d59a8f]/40 hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#d59a8f]/10 text-[#d59a8f] transition-transform group-hover:scale-105 sm:h-11 sm:w-11">
                <Sparkles size={20} />
              </div>
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#495144] transition-colors group-hover:text-[#d59a8f]">
                <span>طرح درمان شخصی‌سازی شده</span>
                <span className="rounded-full bg-[#d59a8f]/10 px-2 py-0.5 text-[10px] font-normal text-[#d59a8f]">
                  بیشتر
                </span>
              </h3>
              <p className="mt-1 text-xs leading-6 text-[#8c857b]">
                درمان اختصاصی متناسب با نیازها و سبک زندگی شما
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="https://wa.me/989132702137"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#d59a8f] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#854f45]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>مشاوره در واتساپ</span>
            </a>
          </div>
        </div>
      </div>

      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-[#f5ece3] bg-white p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-3 border-b border-[#f5ece3] pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#fbf8f4] shrink-0">
                  {MODAL_DATA[activeModal].icon}
                </div>
                <h3 className="text-sm sm:text-lg font-bold leading-7 text-[#495144]">
                  {MODAL_DATA[activeModal].title}
                </h3>
              </div>

              <button
                onClick={closeModal}
                className="rounded-full p-2 text-[#8c857b] transition-all hover:bg-[#f7ece7] hover:text-[#d59a8f]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto py-1 pr-1">
              {MODAL_DATA[activeModal].content}
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={closeModal}
                className="rounded-xl bg-[#495144] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#393f35]"
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
