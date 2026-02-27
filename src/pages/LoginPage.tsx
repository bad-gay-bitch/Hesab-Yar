import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { AuthVisuals } from "@/components/auth/AuthVisuals";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
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
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-12">
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm font-medium">بازگشت به صفحه اصلی</span>
          </Link>

          <div className="mb-10">
            <div className="flex items-center gap-2 text-primary font-bold text-2xl mb-6">
              <img 
                src="https://2oyypouvtv.ufs.sh/f/wnJq8zLM1RQqv65CXlj7uHvF6EQl9RhMxLqdXbArkej48PzC" 
                alt="حساب یار" 
                className="w-10 h-10 object-contain"
                referrerPolicy="no-referrer"
              />
              حساب یار
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">خوش آمدید!</h1>
            <p className="text-gray-500">برای ورود به داشبورد، اطلاعات خود را وارد کنید.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
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
                <Link to="/forgot-password" className="text-sm text-primary font-medium hover:underline">
                  فراموشی رمز؟
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
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
            
            <Button type="submit" className="w-full h-12 text-base rounded-xl shadow-lg shadow-primary/20 mt-4">
              ورود به حساب کاربری
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            حساب کاربری ندارید؟{" "}
            <Link to="/register" className="text-primary font-bold hover:underline">
              ثبت‌نام رایگان
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Visual Section */}
      <AuthVisuals />
    </div>
  );
}
