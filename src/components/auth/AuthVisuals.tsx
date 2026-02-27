import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ShieldCheck, Sparkles, PieChart, Activity, Lock, BarChart3 } from "lucide-react";

const SmartManagementAnimation = () => (
  <div className="w-full h-full relative flex items-center justify-center">
    <motion.div
      animate={{ 
        rotate: 360,
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-32 h-32 rounded-full border border-white/20 border-dashed" />
    </motion.div>
    
    <motion.div
      animate={{ 
        rotate: -360,
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-48 h-48 rounded-full border border-white/10" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-0 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 w-3 h-3 bg-white/50 rounded-full" 
      />
    </motion.div>

    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", bounce: 0.5 }}
      className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl"
    >
      <Sparkles className="w-10 h-10 text-white" />
    </motion.div>
  </div>
);

const SecurityAnimation = () => (
  <div className="w-full h-full relative flex items-center justify-center">
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-40 h-40 bg-white/5 rounded-full blur-xl" />
    </motion.div>

    <div className="relative z-10 w-24 h-24 flex items-center justify-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center"
      >
        <ShieldCheck className="w-12 h-12 text-white" />
      </motion.div>
      
      <motion.div
        animate={{ y: [-40, 40, -40] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-32 h-1 bg-white/40 blur-[1px] shadow-[0_0_15px_rgba(255,255,255,0.8)]"
      />
    </div>
  </div>
);

const AnalyticsAnimation = () => (
  <div className="w-full h-full relative flex items-end justify-center pb-8 gap-4">
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "40%" }}
      transition={{ duration: 0.8, type: "spring" }}
      className="w-12 bg-white/20 rounded-t-lg backdrop-blur-sm border-t border-x border-white/30 relative overflow-hidden"
    >
      <motion.div 
        animate={{ y: ["100%", "0%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
      />
    </motion.div>
    
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "70%" }}
      transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      className="w-12 bg-white/40 rounded-t-lg backdrop-blur-sm border-t border-x border-white/50 relative overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)]"
    >
      <motion.div 
        animate={{ y: ["100%", "0%"] }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent"
      />
    </motion.div>
    
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "55%" }}
      transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
      className="w-12 bg-white/30 rounded-t-lg backdrop-blur-sm border-t border-x border-white/40 relative overflow-hidden"
    >
      <motion.div 
        animate={{ y: ["100%", "0%"] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
      />
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="absolute top-4 right-4 bg-white/10 p-3 rounded-xl backdrop-blur-md border border-white/20"
    >
      <Activity className="w-8 h-8 text-white" />
    </motion.div>
  </div>
);

const slides = [
  {
    Animation: SmartManagementAnimation,
    title: "مدیریت هوشمند مالی",
    description: "با حساب یار، تمام امور مالی کسب‌وکار خود را به صورت خودکار و با دقت بالا مدیریت کنید.",
  },
  {
    Animation: SecurityAnimation,
    title: "امنیت در بالاترین سطح",
    description: "اطلاعات مالی شما با پیشرفته‌ترین الگوریتم‌های رمزنگاری محافظت می‌شوند و همیشه امن هستند.",
  },
  {
    Animation: AnalyticsAnimation,
    title: "گزارش‌های تحلیلی دقیق",
    description: "با گزارش‌های لحظه‌ای و کاربردی، تصمیمات بهتری برای آینده و رشد کسب‌وکار خود بگیرید.",
  }
];

const AnimatedText = ({ text, className, delayOffset = 0 }: { text: string, className?: string, delayOffset?: number }) => {
  const lines = text.split("\n");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delayOffset },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.02, staggerDirection: -1 },
    }
  };

  const child = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 15,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(12px)",
      y: -15,
      scale: 0.95,
      transition: {
        ease: "easeInOut",
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={className}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex flex-wrap justify-center gap-x-2 mb-2 last:mb-0">
          {line.split(" ").map((word, wordIndex) => (
            <motion.span variants={child} key={wordIndex} className="inline-block">
              {word}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export function AuthVisuals() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden lg:flex w-1/2 bg-primary relative overflow-hidden flex-col justify-between p-12">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] -z-10 mix-blend-overlay"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/20 rounded-full blur-[100px] -z-10 mix-blend-overlay"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom_right,white,transparent)] z-0"></div>

      {/* Top: App Name */}
      <div className="relative z-20 flex items-center gap-3 text-white">
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/30 shadow-xl overflow-hidden">
          <img 
            src="https://2oyypouvtv.ufs.sh/f/wnJq8zLM1RQqv65CXlj7uHvF6EQl9RhMxLqdXbArkej48PzC" 
            alt="حساب یار" 
            className="w-full h-full object-contain p-1"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="text-2xl font-bold tracking-tight">حساب یار</span>
      </div>

      {/* Middle: Slideshow */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center mt-12">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            className="absolute inset-0 flex flex-col justify-center items-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)", y: -20 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8 
              }}
              className="w-64 h-64 relative mb-12"
            >
              {(() => {
                const AnimationComponent = slides[currentSlide].Animation;
                return <AnimationComponent />;
              })()}
            </motion.div>
            
            <AnimatedText 
              text={slides[currentSlide].title} 
              className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-center" 
            />
            
            <AnimatedText 
              text={slides[currentSlide].description} 
              className="text-white/80 leading-relaxed text-xl lg:text-2xl font-light max-w-lg text-center" 
              delayOffset={0.2}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom: Progress Indicators */}
      <div className="relative z-20 flex justify-center gap-3 mt-auto pt-12 w-full">
        {slides.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentSlide ? "w-12 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
