import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { ArrowRight, Eye, EyeOff, ShieldAlert, ShieldCheck, Shield } from "lucide-react";
import { AuthVisuals } from "@/components/auth/AuthVisuals";
import { useState } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, color: "text-gray-300", icon: <Shield className="w-4 h-4" />, text: "رمز عبور را وارد کنید" };
    if (pass.length < 6) return { score: 1, color: "text-red-500", icon: <ShieldAlert className="w-4 h-4" />, text: "ضعیف" };
    if (pass.length < 10 || !/\d/.test(pass) || !/[a-zA-Z]/.test(pass)) return { score: 2, color: "text-yellow-500", icon: <Shield className="w-4 h-4" />, text: "متوسط" };
    return { score: 3, color: "text-green-500", icon: <ShieldCheck className="w-4 h-4" />, text: "قوی" };
  };

  const strength = getPasswordStrength(password);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate register
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 py-8 justify-center relative">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8">
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm font-medium">بازگشت به صفحه اصلی</span>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-2 text-primary font-bold text-2xl mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                ح
              </div>
              حساب‌یار هوشمند
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">ایجاد حساب کاربری</h1>
            <p className="text-gray-500">به هزاران کسب‌وکار ایرانی بپیوندید.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-medium text-gray-700" htmlFor="name">
                نام و نام خانوادگی
              </label>
              <Input
                id="name"
                type="text"
                placeholder="علی رضایی"
                required
                className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-medium text-gray-700" htmlFor="email">
                ایمیل
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                dir="ltr"
                className="text-left h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700" htmlFor="password">
                  رمز عبور
                </label>
                <div className={`flex items-center gap-1.5 text-xs font-medium ${strength.color}`}>
                  {strength.icon}
                  <span>{strength.text}</span>
                </div>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  dir="ltr"
                  className="text-left h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <Button type="submit" className="w-full h-12 text-base rounded-xl shadow-lg shadow-primary/20 mt-6">
              ثبت‌نام و شروع رایگان
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              با ثبت‌نام در حساب‌یار، <Link to="#" className="text-primary hover:underline">قوانین و مقررات</Link> را می‌پذیرم.
            </p>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            قبلاً ثبت‌نام کرده‌اید؟{" "}
            <Link to="/login" className="text-primary font-bold hover:underline">
              ورود به حساب
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Visual Section */}
      <AuthVisuals />
    </div>
  );
}
