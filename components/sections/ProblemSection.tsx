import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Brain, BarChart3 } from "lucide-react";

interface ProblemSectionProps {
  locale: "ar" | "en";
}

const content = {
  ar: {
    eyebrow: "التحدي الذي نعالجه",
    headline: {
      first: "ليس كل من يقرأ",
      second: "يفهم.",
    },
    paragraph:
      "كثير من المتعلمين يستطيعون قراءة الكلمات ونطقها بشكل صحيح، لكنهم يواجهون صعوبة في فهم النصوص وتحليلها واستخلاص المعاني منها. هذه الفجوة لا تؤثر على اللغة العربية فقط، بل تمتد إلى جميع المواد الدراسية.",
    icons: [
      {
        title: "حاجة إلى منهج ينمي القرائية",
        icon: GraduationCap,
      },
      {
        title: "محتوى غير مرتبط",
        icon: BookOpen,
      },
      {
        title: "ضعف في الفهم والتحليل",
        icon: Brain,
      },
      {
        title: "تأثير على جميع المواد",
        icon: BarChart3,
      },
    ],
    quote: {
      text: "القراءة شرطٌ لازم، أمّا ",
      highlight: "القرائية",
      end: " فهي الثمرة.",
    },
  },
  en: {
    eyebrow: "The challenge we address",
    headline: {
      first: "Not everyone who reads",
      second: "understands.",
    },
    paragraph:
      "Many learners can read and pronounce words correctly, yet struggle to understand, analyze, and extract meaning from texts. This gap does not affect Arabic language learning only; it extends to every subject taught through Arabic.",
    icons: [
      {
        title: "Need for a literacy-building approach",
        icon: GraduationCap,
      },
      {
        title: "Disconnected content",
        icon: BookOpen,
      },
      {
        title: "Weak comprehension and analysis",
        icon: Brain,
      },
      {
        title: "Impact across all subjects",
        icon: BarChart3,
      },
    ],
    quote: {
      text: "Reading is necessary; ",
      highlight: "literacy",
      end: " is the outcome.",
    },
  },
};

export const ProblemSection: React.FC<ProblemSectionProps> = ({ locale }) => {
  const isRTL = locale === "ar";
  const t = content[locale];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const watermarkVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="problem"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#FAF9F7] py-20 md:py-32 border-b border-[#E5E5E5] select-none"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center"
        >
          {/* Column A: Text Content */}
          <div className={`flex flex-col items-start ${isRTL ? "text-right lg:order-2" : "text-left lg:order-1"} z-10`}>
            <motion.span
              variants={itemVariants}
              className="text-sm font-bold tracking-wider text-[#F71821] uppercase mb-4 font-sans"
            >
              {t.eyebrow}
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className={`font-bold text-[#111111] leading-[1.25] mb-6 tracking-tight font-sans
                ${isRTL ? "text-4xl md:text-6xl lg:text-7xl" : "text-4xl md:text-5xl lg:text-6xl"}
              `}
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
              }}
            >
              {t.headline.first}{" "}
              <span className="text-[#F71821] block lg:inline-block">
                {t.headline.second}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[1.12rem] text-[#555555] leading-[1.85] mb-10 max-w-[720px] font-medium"
            >
              {t.paragraph}
            </motion.p>

            {/* Icon Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full">
              {t.icons.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F2F2F2] text-[#F71821] transition-all duration-300 group-hover:scale-110 group-hover:bg-[rgba(247,24,33,0.08)]">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-base font-bold text-[#111111] leading-snug">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Column B: Decorative Visual */}
          <motion.div
            variants={watermarkVariants}
            aria-hidden="true"
            className={`hidden lg:flex justify-center items-center relative w-full h-full min-h-[300px] ${isRTL ? "lg:order-1" : "lg:order-2"}`}
          >
            {/* Faded Logo Watermark */}
            <div 
              className="w-full max-w-[380px] opacity-[0.07] flex justify-center items-center select-none pointer-events-none"
              style={{
                filter: "grayscale(1) brightness(0.2) sepia(1) hue-rotate(-50deg) saturate(5)",
              }}
            >
              <img src="/products-extra-1.png" alt="" className="w-full h-auto" />
            </div>

            {/* Floating Arabic Letters */}
            <div className="absolute inset-0 pointer-events-none select-none">
              <span className="absolute text-5xl md:text-7xl font-serif text-[#111111] opacity-[0.05] font-bold top-[10%] right-[15%] animate-[floatUpDown_8s_ease-in-out_infinite]">ض</span>
              <span className="absolute text-5xl md:text-7xl font-serif text-[#111111] opacity-[0.05] font-bold top-[35%] left-[10%] animate-[floatUpDown_10s_ease-in-out_infinite_1s]">ق</span>
              <span className="absolute text-5xl md:text-7xl font-serif text-[#111111] opacity-[0.05] font-bold bottom-[15%] right-[25%] animate-[floatUpDown_9s_ease-in-out_infinite_2s]">ش</span>
              <span className="absolute text-5xl md:text-7xl font-serif text-[#111111] opacity-[0.05] font-bold top-[20%] left-[30%] animate-[floatUpDown_11s_ease-in-out_infinite_0.5s]">ف</span>
              <span className="absolute text-5xl md:text-7xl font-serif text-[#111111] opacity-[0.05] font-bold bottom-[30%] left-[20%] animate-[floatUpDown_7s_ease-in-out_infinite_1.5s]">ي</span>
              <span className="absolute text-5xl md:text-7xl font-serif text-[#111111] opacity-[0.05] font-bold bottom-[45%] right-[10%] animate-[floatUpDown_12s_ease-in-out_infinite_3s]">ل</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 border-t border-dashed border-[#E5E5E5] pt-12 flex justify-center w-full"
        >
          <blockquote className="font-serif italic text-2xl md:text-4xl text-[#111111] text-center max-w-[860px] leading-relaxed">
            {isRTL ? (
              <>
                «{t.quote.text}
                <span className="text-[#F71821] font-bold">{t.quote.highlight}</span>
                {t.quote.end}»
              </>
            ) : (
              <>
                “{t.quote.text}
                <span className="text-[#F71821] font-bold">{t.quote.highlight}</span>
                {t.quote.end}”
              </>
            )}
          </blockquote>
        </motion.div>
      </div>

      {/* Global CSS animation styles for floating letters in Tailwind style */}
      <style jsx global>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
};
