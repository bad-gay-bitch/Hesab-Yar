import {
  Bot,
  CheckCircle2,
  BarChart3,
  Shield,
  Zap,
  FileText,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Bot,
    title: "دستیار هوشمند مالی",
    desc: "دسته‌بندی خودکار تراکنش‌ها، پیش‌بینی جریان نقدی و پاسخ به سوالات مالی شما با هوش مصنوعی.",
  },
  {
    icon: FileText,
    title: "صدور فاکتور رسمی",
    desc: "صدور فاکتورهای استاندارد مورد تایید سازمان امور مالیاتی با محاسبه خودکار ارزش افزوده.",
  },
  {
    icon: BarChart3,
    title: "گزارش‌های جامع",
    desc: "ترازنامه، سود و زیان، و گزارش‌های تحلیلی دقیق برای تصمیم‌گیری بهتر.",
  },
  {
    icon: Shield,
    title: "منطبق با قوانین ایران",
    desc: "رعایت کامل استانداردهای حسابداری و قوانین مالیاتی جمهوری اسلامی ایران.",
  },
  {
    icon: Zap,
    title: "سرعت و سادگی",
    desc: "رابط کاربری مدرن و سریع که نیاز به دانش تخصصی حسابداری را به حداقل می‌رساند.",
  },
  {
    icon: CheckCircle2,
    title: "امنیت بالا",
    desc: "رمزنگاری پیشرفته داده‌ها و تهیه نسخه پشتیبان خودکار و روزانه.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            امکانات پلتفرم
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            امکانات بی‌نظیر حساب‌یار
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            هر آنچه برای مدیریت مالی کسب‌وکار خود نیاز دارید، در یک پلتفرم
            یکپارچه و هوشمند.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center text-primary mb-6 transition-colors">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
