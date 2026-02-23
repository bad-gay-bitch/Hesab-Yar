import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "رایگان",
    price: "۰",
    desc: "برای فریلنسرها و شروع کسب‌وکار",
    features: [
      { text: "ثبت تا ۵۰ تراکنش در ماه", included: true },
      { text: "صدور تا ۱۰ فاکتور در ماه", included: true },
      { text: "گزارش‌های پایه", included: true },
      { text: "دستیار هوشمند (محدود)", included: false },
      { text: "پشتیبانی تلفنی", included: false },
    ],
    cta: "شروع رایگان",
    popular: false,
  },
  {
    name: "حرفه‌ای",
    price: "۱۹۹,۰۰۰",
    period: "ماهانه",
    desc: "برای کسب‌وکارهای در حال رشد",
    features: [
      { text: "ثبت نامحدود تراکنش", included: true },
      { text: "صدور نامحدود فاکتور", included: true },
      { text: "گزارش‌های پیشرفته و تحلیلی", included: true },
      { text: "دستیار هوشمند (نامحدود)", included: true },
      { text: "پشتیبانی اولویت‌دار", included: true },
    ],
    cta: "خرید اشتراک حرفه‌ای",
    popular: true,
  },
  {
    name: "سازمانی",
    price: "تماس بگیرید",
    desc: "برای شرکت‌های متوسط و بزرگ",
    features: [
      { text: "همه امکانات حرفه‌ای", included: true },
      { text: "مدیریت چند کاربره (نقش‌ها)", included: true },
      { text: "یکپارچه‌سازی با API", included: true },
      { text: "آموزش اختصاصی", included: true },
      { text: "مدیر حساب اختصاصی", included: true },
    ],
    cta: "تماس با فروش",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            تعرفه‌ها
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            پلن‌های قیمت‌گذاری شفاف
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            متناسب با نیاز کسب‌وکار خود، بهترین پلن را انتخاب کنید. امکان ارتقا
            در هر زمان وجود دارد.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-3xl p-8 relative ${
                plan.popular
                  ? "border-2 border-primary shadow-xl shadow-primary/10 scale-105 z-10"
                  : "border border-gray-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  محبوب‌ترین
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500">/ {plan.period}</span>
                  )}
                  {plan.price !== "تماس بگیرید" && plan.price !== "۰" && (
                    <span className="text-gray-500 text-sm mr-1">تومان</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 shrink-0">
                        <X className="w-3 h-3" />
                      </div>
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-gray-700"
                          : "text-gray-400 line-through"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                className={`w-full h-12 rounded-xl text-base ${plan.popular ? "shadow-lg shadow-primary/20" : ""}`}
                asChild
              >
                <Link to="/register">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
