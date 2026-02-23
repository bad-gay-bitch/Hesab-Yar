import { Link } from "react-router-dom";
import {
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                ح
              </div>
              حساب‌یار هوشمند
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              اولین پلتفرم حسابداری هوشمند ایرانی که با استفاده از هوش مصنوعی،
              مدیریت مالی کسب‌وکارها را ساده، سریع و دقیق کرده است.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">امکانات</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  دستیار هوشمند مالی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  صدور فاکتور رسمی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  گزارش‌های تحلیلی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  مدیریت هزینه‌ها
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  پیش‌بینی جریان نقدی
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">منابع</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  وبلاگ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  راهنمای استفاده
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  سوالات متداول
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  قوانین مالیاتی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  وبینارها
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">تماس با ما</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span dir="ltr">۰۲۱ - ۸۸۸۸ ۸۸۸۸</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span>info@hesabyar.ai</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  تهران، خیابان ولیعصر، تقاطع میرداماد، مجتمع فناوری، طبقه ۵
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>
            © {new Date().toLocaleDateString("fa-IR", { year: "numeric" })}{" "}
            حساب‌یار هوشمند. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              قوانین و مقررات
            </a>
            <a href="#" className="hover:text-white transition-colors">
              حریم خصوصی
            </a>
            <a href="#" className="hover:text-white transition-colors">
              امنیت اطلاعات
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
