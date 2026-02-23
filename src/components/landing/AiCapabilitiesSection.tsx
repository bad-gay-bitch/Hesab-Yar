import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  Bot,
  Sparkles,
  TrendingUp,
  ShieldAlert,
  FileSearch,
} from "lucide-react";

const capabilities = [
  {
    icon: Sparkles,
    title: "دسته‌بندی خودکار",
    desc: "تحلیل توضیحات تراکنش و پیشنهاد دسته‌بندی با دقت بالا.",
  },
  {
    icon: TrendingUp,
    title: "پیش‌بینی مالی",
    desc: "پیش‌بینی درآمد ماه آینده بر اساس داده‌های تاریخی و روندها.",
  },
  {
    icon: ShieldAlert,
    title: "تشخیص تقلب",
    desc: "تحلیل الگوی تراکنش‌ها و هشدار فوری برای موارد مشکوک.",
  },
  {
    icon: FileSearch,
    title: "بینش‌های کسب‌وکار",
    desc: "شناسایی محصولات و مشتریان با بیشترین سودآوری.",
  },
];

const stages = [
  {
    title: "حسابدار شخصی شما،\nهمیشه بیدار و هوشیار",
    description: "با استفاده از آخرین تکنولوژی‌های هوش مصنوعی، حساب‌یار نه تنها داده‌های شما را ثبت می‌کند، بلکه آن‌ها را تحلیل کرده و به شما مشاوره‌های ارزشمند مالی می‌دهد.",
    chat: [
      { sender: "ai", text: "سلام! من گزارش فروش ماه گذشته رو بررسی کردم. فروش محصول الف ۲۵٪ رشد داشته، اما هزینه‌های تبلیغات هم ۳۰٪ بیشتر شده." },
      { sender: "user", text: "چه پیشنهادی برای کاهش هزینه‌ها داری؟" },
      { sender: "ai", text: "پیشنهاد می‌کنم بودجه تبلیغات رو روی کانال‌های با بازدهی بالاتر متمرکز کنیم. همچنین می‌تونیم با تامین‌کننده ب برای تخفیف خرید عمده مذاکره کنیم." }
    ]
  },
  {
    title: "پیش‌بینی دقیق،\nتصمیم‌گیری مطمئن",
    description: "هوش مصنوعی حساب‌یار با تحلیل داده‌های گذشته، جریان نقدی آینده شما را پیش‌بینی می‌کند تا همیشه یک قدم جلوتر از هزینه‌ها باشید.",
    chat: [
      { sender: "ai", text: "بر اساس روند فعلی، پیش‌بینی می‌کنم در هفته سوم ماه آینده با کمبود نقدینگی ۵۰ میلیون تومانی مواجه شویم." },
      { sender: "user", text: "چطور می‌تونیم این کسری رو جبران کنیم؟" },
      { sender: "ai", text: "می‌توانیم پرداخت فاکتور شماره ۱۰۴۲ را یک هفته به تعویق بیندازیم و برای وصول مطالبات معوق از مشتری ج پیگیری جدی‌تری داشته باشیم." }
    ]
  },
  {
    title: "نگهبان مالی شما،\nامنیت بی‌نظیر",
    description: "سیستم تشخیص تقلب ما به صورت ۲۴ ساعته تراکنش‌های شما را زیر نظر دارد و هرگونه فعالیت مشکوک یا مغایرت را فورا به شما اطلاع می‌دهد.",
    chat: [
      { sender: "ai", text: "هشدار: یک تراکنش خروجی غیرمعمول به مبلغ ۱۰۰ میلیون تومان در ساعت ۲ بامداد ثبت شده است." },
      { sender: "user", text: "این تراکنش رو من انجام ندادم! متوقفش کن." },
      { sender: "ai", text: "تراکنش بلافاصله مسدود شد. دسترسی‌های حساب کاربری موقتا محدود شد. لطفا برای تایید هویت و بررسی بیشتر با پشتیبانی تماس بگیرید." }
    ]
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
        <div key={lineIndex} className="flex flex-wrap gap-x-2 mb-2 last:mb-0">
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

export function AiCapabilitiesSection() {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 8000); // Change stage every 8 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="ai"
      className="py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] -z-10 mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-6 border border-primary/30 w-fit">
              <Bot className="w-4 h-4" />
              هوش مصنوعی پیشرفته
            </div>
            
            <div className="relative h-[300px] sm:h-[240px] mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage}
                  className="absolute inset-0"
                >
                  <AnimatedText 
                    text={stages[currentStage].title} 
                    className="text-3xl md:text-5xl font-bold mb-6 leading-tight" 
                  />
                  <AnimatedText 
                    text={stages[currentStage].description} 
                    className="text-gray-400 text-lg leading-relaxed mt-4" 
                    delayOffset={0.3}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              {capabilities.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <item.icon className="w-6 h-6 text-primary-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-md relative z-10 h-[450px]">
              <div className="rounded-xl overflow-hidden bg-gray-950 p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">دستیار هوشمند</div>
                    <div className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      آنلاین
                    </div>
                  </div>
                </div>

                <div className="relative flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 0.4, ease: "easeInOut" } }}
                      className="absolute inset-0 flex flex-col space-y-4"
                    >
                      {stages[currentStage].chat.map((msg, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                          transition={{ 
                            duration: 0.7, 
                            delay: 0.2 + (idx * 0.6),
                            ease: [0.21, 0.47, 0.32, 0.98] // custom smooth ease
                          }}
                          className={`p-4 rounded-2xl text-sm w-[85%] leading-relaxed ${
                            msg.sender === 'ai' 
                              ? 'bg-white/10 rounded-tr-sm text-gray-200 ml-auto' 
                              : 'bg-primary/20 border border-primary/30 rounded-tl-sm text-white mr-auto'
                          }`}
                        >
                          {msg.text}
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-2xl shadow-xl shadow-primary/20 rotate-12 -z-10"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-gray-800 to-gray-700 rounded-full shadow-xl shadow-black/50 -z-10 border border-white/5"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
