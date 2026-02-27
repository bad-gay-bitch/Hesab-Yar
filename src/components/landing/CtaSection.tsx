import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background patterns */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            آماده‌اید تا مدیریت مالی خود را متحول کنید؟
          </h2>
          <p className="text-primary-light text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            همین حالا به هزاران کسب‌وکار ایرانی بپیوندید که با حساب یار، زمان و
            هزینه خود را بهینه‌سازی کرده‌اند.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base h-14 px-10 rounded-xl bg-white text-primary hover:bg-gray-50 shadow-xl shadow-black/10"
              asChild
            >
              <Link
                to="/register"
                className="flex items-center gap-2 font-bold"
              >
                شروع رایگان
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base h-14 px-8 rounded-xl border-white/20 text-white hover:bg-white/10"
            >
              تماس با مشاوره
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-6">
            بدون نیاز به کارت بانکی • ۱۴ روز تست رایگان نسخه حرفه‌ای
          </p>
        </motion.div>
      </div>
    </section>
  );
}
