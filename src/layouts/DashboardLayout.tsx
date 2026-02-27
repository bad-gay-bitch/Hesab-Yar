import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import {
  LayoutDashboard,
  Receipt,
  FileText,
  PieChart,
  Settings,
  LogOut,
  Bell,
  Search,
  Bot
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sidebarLinks = [
  { name: "داشبورد", href: "/dashboard", icon: LayoutDashboard },
  { name: "تراکنش‌ها", href: "/dashboard/transactions", icon: Receipt },
  { name: "فاکتورها", href: "/dashboard/invoices", icon: FileText },
  { name: "گزارش‌ها", href: "/dashboard/reports", icon: PieChart },
  { name: "دستیار هوشمند", href: "/dashboard/ai", icon: Bot },
  { name: "تنظیمات", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-64 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col hidden md:flex z-20"
      >
        <div className="h-16 flex items-center px-6">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <img 
              src="https://2oyypouvtv.ufs.sh/f/wnJq8zLM1RQqv65CXlj7uHvF6EQl9RhMxLqdXbArkej48PzC" 
              alt="حساب یار" 
              className="w-8 h-8 object-contain"
              referrerPolicy="no-referrer"
            />
            حساب یار
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5">
          {sidebarLinks.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05, ease: "easeOut" }}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors group",
                    isActive
                      ? "text-primary font-bold"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/80"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-sidebar-bg"
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <link.icon className={cn("w-5 h-5 relative z-10 transition-colors", isActive ? "text-primary" : "text-gray-400 group-hover:text-gray-600")} />
                  <span className="relative z-10">{link.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="p-4 border-t border-gray-100"
        >
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-300 w-full group">
            <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
            خروج از حساب
          </button>
        </motion.div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative z-10">
        {/* Header */}
        <motion.header 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 shrink-0 relative z-10"
        >
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96 max-w-full hidden sm:block group">
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 transition-colors group-focus-within:text-primary" />
              <Input
                placeholder="جستجو در تراکنش‌ها، فاکتورها و..."
                className="pl-4 pr-10 bg-gray-50/50 border-transparent hover:bg-gray-100/50 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all duration-300 rounded-xl h-11 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <button className="relative p-2.5 text-gray-400 hover:text-primary transition-all duration-300 rounded-xl hover:bg-primary/5 group">
              <Bell className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
            </button>
            <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
            <button className="flex items-center gap-3 p-1.5 pr-3 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">محمد کریمی</span>
                <span className="text-xs font-medium text-gray-500">مدیر سیستم</span>
              </div>
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-sm shadow-md shadow-primary/20 ring-2 ring-white group-hover:scale-105 transition-transform duration-300">
                م‌ک
              </div>
            </button>
          </div>
        </motion.header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
