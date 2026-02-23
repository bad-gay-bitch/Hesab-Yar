import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary font-bold text-xl">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
            ح
          </div>
          حساب‌یار هوشمند
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-primary transition-colors">
            ویژگی‌ها
          </a>
          <a
            href="#how-it-works"
            className="hover:text-primary transition-colors"
          >
            نحوه کار
          </a>
          <a href="#ai" className="hover:text-primary transition-colors">
            هوش مصنوعی
          </a>
          <a href="#pricing" className="hover:text-primary transition-colors">
            تعرفه‌ها
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            ورود
          </Link>
          <Button asChild>
            <Link to="/register">ثبت‌نام رایگان</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
