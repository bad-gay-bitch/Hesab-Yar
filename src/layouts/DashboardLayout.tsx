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

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
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
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <link.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-gray-400")} />
                  {link.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="p-4"
        >
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors w-full">
            <LogOut className="w-5 h-5 text-gray-400" />
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
          className="h-16 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-between px-6 shrink-0 relative z-10"
        >
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96 max-w-full hidden sm:block">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="جستجو در تراکنش‌ها، فاکتورها و..."
                className="pl-3 pr-10"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium text-sm">
              م‌ک
            </div>
          </div>
        </motion.header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
