import React from "react";

interface KnowledgeAxesSectionProps {
  locale: "ar" | "en";
}

// Custom SVG Icons matching the mockup designs
const IslamicIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-9 h-9">
    <path d="M32 8 C30 14, 22 18, 22 26 C22 34, 42 34, 42 26 C42 18, 34 14, 32 8 Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 4 v4" strokeLinecap="round" />
    <path d="M30 4 a2 2 0 1 1 4 0" strokeLinecap="round" />
    <path d="M16 34 h32 v14 h-32 Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 48 v-6 a3 3 0 0 1 6 0 v6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 48 v-6 a3 3 0 0 1 6 0 v6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 54 c6 0, 16 -3, 20 0 c4 -3, 14 0, 20 0 v-4 c-6 0, -16 -3, -20 0 c-4 -3, -14 0, -20 0 Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 50 v4" strokeLinecap="round" />
  </svg>
);

const CulturalIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-9 h-9">
    <path d="M8 20 L32 8 L56 20 Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 20 h42 v3 h-42 Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 23 v20 M24 23 v20 M32 23 v20 M40 23 v20 M48 23 v20" strokeLinecap="round" strokeWidth="2" />
    <path d="M12 43 h40 v3 h-40 Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 46 h48 v4 h-48 Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SubjectIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-9 h-9">
    <circle cx="38" cy="24" r="16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 24 h32" strokeLinecap="round" />
    <path d="M38 8 a24 24 0 0 1 0 32 a24 24 0 0 1 0 -32 Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 26 h8 L28 44 a4 4 0 0 1 -2 6 H10 a4 4 0 0 1 -2 -6 Z" fill="white" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M12 34 h8" strokeLinecap="round" />
    <path d="M20 54 h28 a2 2 0 0 0 2 -2 v-4 a2 2 0 0 0 -2 -2 h-28 Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LocalIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-9 h-9">
    <path d="M16 48 V24 h8 v24 Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 24 h12" strokeLinecap="round" />
    <path d="M17 24 l3 -8 l3 8 Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 16 v-4" strokeLinecap="round" />
    <path d="M20 20 h.01 M20 28 h.01 M20 36 h.01" strokeLinecap="round" strokeWidth="2" />
    <path d="M24 48 v-12 a4 4 0 0 1 8 0 v12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 48 h10 v-16 l-6 -6 l-4 4 Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M48 48 C48 38, 44 32, 44 26" strokeLinecap="round" strokeWidth="2" />
    <path d="M44 26 C40 22, 34 22, 34 22 C34 22, 40 25, 42 27" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 26 C46 20, 52 18, 52 18 C52 18, 47 22, 45 25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 26 C41 20, 43 14, 43 14 C43 14, 43 20, 44 23" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 26 C48 24, 52 26, 52 26 C52 26, 47 26, 45 26" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const translations = {
  ar: {
    eyebrow: "المحتوى والمعايير",
    headline: {
      text1: "أربعة محاور... ",
      highlight: "نافذةٌ",
      text2: " على المعرفة والهوية",
    },
    lead: "تُعالَجُ كلُّ موضوعٍ من خلال أربعة محاور متكاملة، فلا يكون النص مادة للقراءة فحسب، بل نافذة على المعرفة والهوية.",
    cta: "المحتوى والمعايير بالتفصيل ←",
    centerTitle: "بيان",
    centerSub: "منهجية متكاملة",
    centerDesc: "لفهم أعمق وأثر أبقى",
    axes: [
      {
        title: "الإسلامي",
        color: "text-green-700",
        border: "border-green-200",
        bg: "bg-green-50/20",
        icon: IslamicIcon,
        text: "يصل المتعلم بمرجعيته الإسلامية عبر نصوصها الأصيلة: القرآن، الحديث، الفقه، السيرة، وفق ضوابط دقيقة.",
      },
      {
        title: "الحضاري",
        color: "text-amber-800",
        border: "border-amber-200",
        bg: "bg-amber-50/20",
        icon: CulturalIcon,
        text: "نوافذ على الحضارات الكبرى: العربية الإسلامية، والرومانية، واليونانية، والهندية، والصينية.",
      },
      {
        title: "الموضوعي",
        color: "text-sky-800",
        border: "border-sky-200",
        bg: "bg-sky-50/20",
        icon: SubjectIcon,
        text: "معرفة منظمة عبر فرعين: العلوم والتقنية STEM، والإنسانيات والفنون HASS.",
      },
      {
        title: "المحلي",
        color: "text-orange-700",
        border: "border-orange-200",
        bg: "bg-orange-50/20",
        icon: LocalIcon,
        text: "يربط المتعلم بهويته القطرية والعربية: الحضارة، العادات، المعالم، الفنون، والآداب المحلية.",
      },
    ],
  },
  en: {
    eyebrow: "Content & Standards",
    headline: {
      text1: "Four Axes... ",
      highlight: "Windows",
      text2: " to Knowledge and Identity",
    },
    lead: "Every topic is explored through four integrated axes, transforming reading from a skill into a window onto knowledge and cultural identity.",
    cta: "Detailed Content & Standards →",
    centerTitle: "Bayan",
    centerSub: "Integrated Methodology",
    centerDesc: "For deeper understanding and lasting impact",
    axes: [
      {
        title: "Islamic",
        color: "text-green-700",
        border: "border-green-200",
        bg: "bg-green-50/20",
        icon: IslamicIcon,
        text: "Connects learners to authentic Islamic references (Quran, Hadith, Jurisprudence, Biography) under strict standards.",
      },
      {
        title: "Cultural",
        color: "text-amber-800",
        border: "border-amber-200",
        bg: "bg-amber-50/20",
        icon: CulturalIcon,
        text: "A window into great civilizations: Arab-Islamic, Roman, Greek, Indian, and Chinese.",
      },
      {
        title: "Subject",
        color: "text-sky-800",
        border: "border-sky-200",
        bg: "bg-sky-50/20",
        icon: SubjectIcon,
        text: "Organized knowledge across two fields: Science & Technology (STEM) and Humanities & Arts (HASS).",
      },
      {
        title: "Local",
        color: "text-orange-700",
        border: "border-orange-200",
        bg: "bg-orange-50/20",
        icon: LocalIcon,
        text: "Connects learners to their local and regional heritage, customs, landmarks, arts, and literature.",
      },
    ],
  },
};

export default function KnowledgeAxesSection({ locale = "ar" }: KnowledgeAxesSectionProps) {
  const isRTL = locale === "ar";
  const t = translations[locale];
  const axes = t.axes;

  return (
    <section
      id="axes"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#FAF9F7] py-24 text-[#111111]"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#111111] uppercase tracking-wider">
            {!isRTL && <span className="h-2 w-2 rotate-45 bg-[#F71821]" />}
            <span>{t.eyebrow}</span>
            {isRTL && <span className="h-2 w-2 rotate-45 bg-[#F71821]" />}
          </div>

          <h2 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl font-sans text-[#111111]">
            {t.headline.text1}
            <span className="text-[#F71821]">{t.headline.highlight}</span>
            {t.headline.text2}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#555] font-medium max-w-2xl mx-auto">
            {t.lead}
          </p>
        </div>

        {/* Axes Interactive Layout */}
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_280px_1fr]">
          
          {/* SVG Connection Lines for Desktop (lg) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 1 }}>
            {/* Left-Top Connection */}
            <path d="M 380 120 L 480 200" stroke="#E5D8C8" strokeWidth="1.2" strokeDasharray="4 4" fill="none" />
            <circle cx="480" cy="200" r="3" fill="#D8C6B6" />
            
            {/* Left-Bottom Connection */}
            <path d="M 380 380 L 480 300" stroke="#E5D8C8" strokeWidth="1.2" strokeDasharray="4 4" fill="none" />
            <circle cx="480" cy="300" r="3" fill="#D8C6B6" />
            
            {/* Right-Top Connection */}
            <path d="M 772 120 L 672 200" stroke="#E5D8C8" strokeWidth="1.2" strokeDasharray="4 4" fill="none" />
            <circle cx="672" cy="200" r="3" fill="#D8C6B6" />
            
            {/* Right-Bottom Connection */}
            <path d="M 772 380 L 672 300" stroke="#E5D8C8" strokeWidth="1.2" strokeDasharray="4 4" fill="none" />
            <circle cx="672" cy="300" r="3" fill="#D8C6B6" />
          </svg>

          {/* Column 1 (Left Column) - Islamic & Subject */}
          <div className="space-y-12 lg:space-y-16" style={{ zIndex: 2 }}>
            <AxisCard cardIndex={0} isLeft={true} locale={locale} {...axes[0]} />
            <AxisCard cardIndex={2} isLeft={true} locale={locale} {...axes[2]} />
          </div>

          {/* Center Circle */}
          <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full border border-[#E5D8C8] bg-white/70 shadow-sm backdrop-blur-sm" style={{ zIndex: 2 }}>
            {/* Inner decorative rings */}
            <div className="absolute inset-4 rounded-full border border-[#E5D8C8]/60 border-dashed" />
            <div className="absolute inset-8 rounded-full border border-[#E5D8C8]/40" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,#ffffff_10%,#FAF9F7_80%)] opacity-50" />

            {/* Inner Content */}
            <div className="relative z-10 text-center flex flex-col items-center px-4">
              {/* Calligraphy logo / Image styled as red */}
              <div className="h-24 w-24 mb-2 flex items-center justify-center">
                <img 
                  src="/images/bayan-logo-visual.png" 
                  alt="Bayan Calligraphy" 
                  className="h-full w-auto object-contain select-none pointer-events-none"
                  style={{
                    filter: "invert(19%) sepia(87%) saturate(6444%) hue-rotate(352deg) brightness(97%) contrast(98%)"
                  }}
                />
              </div>
              <p className="text-lg font-bold text-[#111111] font-sans">{t.centerSub}</p>
              <p className="mt-1 text-xs leading-5 text-[#777] font-medium whitespace-pre-line">
                {t.centerDesc}
              </p>
            </div>

            {/* Micro decorative nodes on the center circle */}
            <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-[#D8C6B6] bg-white shadow-sm" />
            <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-[#D8C6B6] bg-white shadow-sm" />
            <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rotate-45 bg-[#D8C6B6]" />
            <span className="absolute bottom-0 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 bg-[#D8C6B6]" />
          </div>

          {/* Column 2 (Right Column) - Cultural & Local */}
          <div className="space-y-12 lg:space-y-16" style={{ zIndex: 2 }}>
            <AxisCard cardIndex={1} isLeft={false} locale={locale} {...axes[1]} />
            <AxisCard cardIndex={3} isLeft={false} locale={locale} {...axes[3]} />
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <a
            href={locale === "ar" ? "/axes.html" : "/en/axes.html"}
            className="inline-flex items-center rounded-full border border-[#F71821] bg-white px-8 py-4 text-base font-bold text-[#111] transition-all duration-300 hover:bg-[#F71821] hover:text-white hover:shadow-md"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

interface AxisCardProps {
  title: string;
  text: string;
  color: string;
  border: string;
  bg: string;
  icon: React.ComponentType;
  isLeft: boolean;
  locale: "ar" | "en";
  cardIndex: number;
}

function AxisCard({
  title,
  text,
  color,
  border,
  bg,
  icon: Icon,
  isLeft,
  locale,
}: AxisCardProps) {
  const isRTL = locale === "ar";
  
  // Custom class logic to position the icon badge overlapping the inward border on desktop
  // Left cards: icon is on the right side on desktop
  // Right cards: icon is on the left side on desktop
  const paddingClass = isLeft
    ? "lg:pr-24 lg:pl-8 text-right"
    : "lg:pl-24 lg:pr-8 text-right"; // RTL text flow within card

  const badgePositionClass = isLeft
    ? "lg:left-auto lg:right-[-2.25rem] lg:top-1/2 lg:-translate-y-1/2"
    : "lg:right-auto lg:left-[-2.25rem] lg:top-1/2 lg:-translate-y-1/2";

  return (
    <div
      className={`relative rounded-2xl border ${border} bg-white/95 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md pt-16 lg:pt-7 ${paddingClass}`}
    >
      {/* Icon Badge overlapping the borders */}
      <div
        className={`absolute top-[-2.25rem] left-6 lg:top-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#E5D8C8] bg-[#FAF9F7] shadow-sm transition-all duration-300 group-hover:scale-105 ${badgePositionClass}`}
        style={{
          right: isRTL && !isLeft ? "auto" : undefined,
          left: isRTL && isLeft ? "auto" : undefined,
        }}
      >
        <div className={`flex items-center justify-center ${color}`}>
          <Icon />
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col items-start lg:items-stretch">
        <h3 className={`text-2xl font-extrabold tracking-tight ${color} mb-1 w-full text-right`}>
          {title}
        </h3>
        
        {/* Tiny diamond separator matching mockup */}
        <div className="w-full text-right mb-4">
          <span className={`inline-block text-xs ${color} opacity-60`}>◇</span>
        </div>

        <p className="text-[0.95rem] leading-8 text-[#555555] font-medium w-full text-right leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

export { KnowledgeAxesSection };
