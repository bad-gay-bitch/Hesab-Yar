import { motion } from "motion/react";
import { UserPlus, FileEdit, TrendingUp, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "ثبت‌نام و تنظیمات اولیه",
    desc: "در کمتر از ۲ دقیقه ثبت‌نام کنید و اطلاعات پایه کسب‌وکار خود را وارد نمایید.",
  },
  {
    icon: FileEdit,
    title: "ثبت تراکنش‌ها و فاکتورها",
    desc: "درآمدها، هزینه‌ها و فاکتورهای خود را به سادگی ثبت کنید یا از فایل اکسل وارد کنید.",
  },
  {
    icon: TrendingUp,
    title: "تحلیل و گزارش‌گیری",
    desc: "گزارش‌های دقیق مالی و مالیاتی را با یک کلیک دریافت کنید و وضعیت کسب‌وکار را بسنجید.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            سادگی در استفاده
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            چگونه با حساب یار کار کنیم؟
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            شروع کار با حساب یار بسیار ساده است. نیازی به دانش تخصصی حسابداری
            ندارید.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-50 shadow-xl flex items-center justify-center text-primary mb-6 relative group-hover:border-primary/20 transition-colors">
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
