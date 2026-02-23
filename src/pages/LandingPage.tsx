import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, CheckCircle2, BarChart3, Shield, Zap, FileText } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              ح
            </div>
            حساب‌یار هوشمند
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-primary transition-colors">ویژگی‌ها</a>
            <a href="#pricing" className="hover:text-primary transition-colors">تعرفه‌ها</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">نظرات مشتریان</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              ورود
            </Link>
            <Button asChild>
              <Link to="/register">ثبت‌نام رایگان</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <Bot className="w-4 h-4" />
          اولین نرم‌افزار حسابداری مبتنی بر هوش مصنوعی در ایران
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
          حسابداری کسب‌وکار خود را <br className="hidden md:block" />
          به <span className="text-primary">هوش مصنوعی</span> بسپارید
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          حساب‌یار یک پلتفرم هوشمند و کاملاً فارسی است که تمام نیازهای مالی و مالیاتی شما را بر اساس قوانین ایران پوشش می‌دهد.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8" asChild>
            <Link to="/register">شروع رایگان</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8">
            مشاهده دمو
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">امکانات بی‌نظیر حساب‌یار</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              هر آنچه برای مدیریت مالی کسب‌وکار خود نیاز دارید، در یک پلتفرم یکپارچه و هوشمند.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "دستیار هوشمند مالی",
                desc: "دسته‌بندی خودکار تراکنش‌ها، پیش‌بینی جریان نقدی و پاسخ به سوالات مالی شما با هوش مصنوعی."
              },
              {
                icon: FileText,
                title: "صدور فاکتور رسمی",
                desc: "صدور فاکتورهای استاندارد مورد تایید سازمان امور مالیاتی با محاسبه خودکار ارزش افزوده."
              },
              {
                icon: BarChart3,
                title: "گزارش‌های جامع",
                desc: "ترازنامه، سود و زیان، و گزارش‌های تحلیلی دقیق برای تصمیم‌گیری بهتر."
              },
              {
                icon: Shield,
                title: "منطبق با قوانین ایران",
                desc: "رعایت کامل استانداردهای حسابداری و قوانین مالیاتی جمهوری اسلامی ایران."
              },
              {
                icon: Zap,
                title: "سرعت و سادگی",
                desc: "رابط کاربری مدرن و سریع که نیاز به دانش تخصصی حسابداری را به حداقل می‌رساند."
              },
              {
                icon: CheckCircle2,
                title: "امنیت بالا",
                desc: "رمزنگاری پیشرفته داده‌ها و تهیه نسخه پشتیبان خودکار و روزانه."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
