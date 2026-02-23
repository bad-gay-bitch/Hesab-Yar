import { motion } from "motion/react";
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

export function AiCapabilitiesSection() {
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
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-6 border border-primary/30">
              <Bot className="w-4 h-4" />
              هوش مصنوعی پیشرفته
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              حسابدار شخصی شما، <br />
              همیشه بیدار و هوشیار
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              با استفاده از آخرین تکنولوژی‌های هوش مصنوعی، حساب‌یار نه تنها
              داده‌های شما را ثبت می‌کند، بلکه آن‌ها را تحلیل کرده و به شما
              مشاوره‌های ارزشمند مالی می‌دهد.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
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
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-md relative z-10">
              <div className="rounded-xl overflow-hidden bg-gray-950 p-6">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
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

                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-2xl rounded-tr-sm text-sm text-gray-200 w-[85%] ml-auto">
                    سلام! من گزارش فروش ماه گذشته رو بررسی کردم. فروش محصول الف
                    ۲۵٪ رشد داشته، اما هزینه‌های تبلیغات هم ۳۰٪ بیشتر شده.
                  </div>
                  <div className="bg-primary/20 border border-primary/30 p-4 rounded-2xl rounded-tl-sm text-sm text-white w-[85%] mr-auto">
                    چه پیشنهادی برای کاهش هزینه‌ها داری؟
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl rounded-tr-sm text-sm text-gray-200 w-[85%] ml-auto">
                    پیشنهاد می‌کنم بودجه تبلیغات رو روی کانال‌های با بازدهی
                    بالاتر متمرکز کنیم. همچنین می‌تونیم با تامین‌کننده ب برای
                    تخفیف خرید عمده مذاکره کنیم.
                  </div>
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
