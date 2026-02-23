import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "علی رضایی",
    role: "مدیرعامل شرکت توسعه نوین",
    content:
      "حساب‌یار دقیقاً همان چیزی بود که دنبالش بودیم. رابط کاربری ساده و هوش مصنوعی آن باعث شده تا زمان زیادی را در پایان ماه صرفه‌جویی کنیم.",
    rating: 5,
    avatar: "ع‌ر",
  },
  {
    name: "سارا محمدی",
    role: "فریلنسر طراح گرافیک",
    content:
      "به عنوان یک فریلنسر، مدیریت فاکتورها و پیگیری پرداخت‌ها همیشه برایم سخت بود. حالا با حساب‌یار همه چیز خودکار و منظم شده است.",
    rating: 5,
    avatar: "س‌م",
  },
  {
    name: "محمد حسینی",
    role: "مدیر مالی فروشگاه آنلاین",
    content:
      "گزارش‌های تحلیلی و پیش‌بینی‌های جریان نقدی حساب‌یار به ما کمک کرد تا تصمیمات بهتری برای خرید موجودی انبار بگیریم.",
    rating: 4,
    avatar: "م‌ح",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            نظرات مشتریان
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            آنچه کاربران درباره ما می‌گویند
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            هزاران کسب‌وکار ایرانی به حساب‌یار اعتماد کرده‌اند تا امور مالی خود
            را مدیریت کنند.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-5 h-5 ${j < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
