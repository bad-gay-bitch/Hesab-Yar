import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedDashboard } from "./AnimatedDashboard";
import { InteractiveGrid } from "./InteractiveGrid";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <InteractiveGrid />
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
        >
        <Bot className="w-4 h-4" />
        اولین نرم‌افزار حسابداری مبتنی بر هوش مصنوعی در ایران
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight"
      >
        حسابداری کسب‌وکار خود را <br className="hidden md:block" />
        به{" "}
        <span className="text-primary relative inline-block">
          هوش مصنوعی
          <svg
            className="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0 5 Q 50 10 100 5"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
            />
          </svg>
        </span>{" "}
        بسپارید
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        حساب‌یار یک پلتفرم هوشمند و کاملاً فارسی است که تمام نیازهای مالی و
        مالیاتی شما را بر اساس قوانین ایران پوشش می‌دهد. بدون نیاز به دانش
        حسابداری، امور مالی خود را مدیریت کنید.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button
          size="lg"
          className="w-full sm:w-auto text-base h-14 px-8 rounded-xl shadow-lg shadow-primary/20"
          asChild
        >
          <Link to="/register" className="flex items-center gap-2">
            شروع رایگان
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full sm:w-auto text-base h-14 px-8 rounded-xl border-gray-200 hover:bg-gray-50"
        >
          مشاهده دمو
        </Button>
      </motion.div>

      {/* Animated Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-16 relative mx-auto max-w-5xl"
      >
        <div className="rounded-2xl border border-gray-200/60 bg-white/50 p-2 shadow-2xl backdrop-blur-xl">
          <AnimatedDashboard />
        </div>
      </motion.div>
      </div>
    </section>
  );
}
