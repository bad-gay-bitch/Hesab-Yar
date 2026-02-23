import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  LayoutDashboard, 
  Receipt, 
  FileText, 
  Bot, 
  TrendingUp, 
  ArrowDownRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock,
  Sparkles,
  User
} from "lucide-react";

const STAGE_DURATION = 4000; // 4 seconds per stage

export function AnimatedDashboard() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 5);
    }, STAGE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const sidebarItems = [
    { id: 0, icon: LayoutDashboard, label: "داشبورد", activeStages: [0] },
    { id: 1, icon: Receipt, label: "تراکنش‌ها", activeStages: [1, 2] },
    { id: 2, icon: FileText, label: "فاکتورها", activeStages: [3] },
    { id: 3, icon: Bot, label: "دستیار هوشمند", activeStages: [4] },
  ];

  const contentVariants = {
    enter: { opacity: 0, y: 10, filter: "blur(4px)" },
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -10, filter: "blur(4px)" },
  };

  return (
    <div className="w-full aspect-[16/10] sm:aspect-[16/9] bg-white rounded-2xl overflow-hidden flex border border-gray-200 shadow-2xl shadow-primary/30 relative text-right" dir="rtl">
      {/* Mac-style window controls */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2 z-20">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <div className="mx-auto text-xs font-medium text-gray-400">hesabyar.ai/dashboard</div>
      </div>

      {/* Sidebar */}
      <div className="w-16 sm:w-48 bg-gray-50 border-l border-gray-200 pt-14 pb-4 px-2 sm:px-3 flex flex-col gap-2 z-10 shrink-0">
        <div className="hidden sm:flex items-center gap-2 px-2 mb-6 text-primary font-bold">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white text-xs">ح</div>
          حساب‌یار
        </div>
        {sidebarItems.map((item) => {
          const isActive = item.activeStages.includes(stage);
          return (
            <div
              key={item.id}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive ? "bg-primary/10 text-primary" : "text-gray-500"
              }`}
            >
              <item.icon className={`w-5 h-5 shrink-0 ${isActive ? "text-primary" : "text-gray-400"}`} />
              <span className="hidden sm:block">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white relative overflow-hidden flex flex-col">
        <div className="h-10 shrink-0"></div> {/* Spacer for header */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            {/* STAGE 0: Dashboard Overview */}
            {stage === 0 && (
              <motion.div
                key="stage-0"
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-4 sm:p-6 flex flex-col gap-4 sm:gap-6"
              >
              <h3 className="text-lg font-bold text-gray-900">خلاصه وضعیت مالی</h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { label: "درآمد", value: "۱۲.۵M", color: "text-green-600", bg: "bg-green-50" },
                  { label: "هزینه", value: "۴.۲M", color: "text-red-600", bg: "bg-red-50" },
                  { label: "سود خالص", value: "۸.۳M", color: "text-primary", bg: "bg-primary/10" },
                ].map((stat, i) => (
                  <div key={i} className="p-3 sm:p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                    <div className="text-xs sm:text-sm text-gray-500 mb-1">{stat.label}</div>
                    <div className={`text-sm sm:text-xl font-bold ${stat.color}`} dir="ltr">{stat.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex-1 rounded-xl border border-gray-100 bg-gray-50/50 p-4 flex items-end gap-2 sm:gap-4">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex-1 bg-primary/20 rounded-t-md relative group"
                  >
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/40 rounded-t-md" style={{ height: `${h * 0.6}%` }}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

            {/* STAGE 1: Transactions */}
            {stage === 1 && (
              <motion.div
                key="stage-1"
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-4 sm:p-6 flex flex-col gap-4"
              >
                <h3 className="text-lg font-bold text-gray-900">آخرین تراکنش‌ها</h3>
                <div className="flex-1 flex flex-col gap-2 sm:gap-3">
                  {[
                    { title: "فروش محصول الف", amount: "+۵,۰۰۰,۰۰۰", type: "income", date: "امروز" },
                    { title: "خرید تجهیزات", amount: "-۱,۲۰۰,۰۰۰", type: "expense", date: "دیروز" },
                    { title: "پرداخت قبض برق", amount: "-۱۵۰,۰۰۰", type: "expense", date: "۲ روز پیش" },
                  ].map((tx, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-white shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${tx.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                          {tx.type === 'income' ? <ArrowDownRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{tx.title}</div>
                          <div className="text-xs text-gray-500">{tx.date}</div>
                        </div>
                      </div>
                      <div className={`text-sm font-bold ${tx.type === 'income' ? 'text-green-600' : 'text-gray-900'}`} dir="ltr">
                        {tx.amount}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STAGE 2: AI Categorization Magic */}
            {stage === 2 && (
              <motion.div
                key="stage-2"
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-4 sm:p-6 flex flex-col gap-4 relative"
              >
                <h3 className="text-lg font-bold text-gray-900">آخرین تراکنش‌ها</h3>
                <div className="flex-1 flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-white opacity-50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><ArrowDownRight className="w-4 h-4" /></div>
                      <div><div className="text-sm font-medium text-gray-900">فروش محصول الف</div><div className="text-xs text-gray-500">امروز</div></div>
                    </div>
                    <div className="text-sm font-bold text-green-600" dir="ltr">+۵,۰۰۰,۰۰۰</div>
                  </div>
                  
                  {/* Highlighted Row */}
                  <motion.div
                    className="flex items-center justify-between p-3 rounded-lg border-2 border-primary/50 bg-primary/5 relative z-10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center"><ArrowUpRight className="w-4 h-4" /></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">پرداخت قبض برق</div>
                        <div className="text-xs text-gray-500">۲ روز پیش</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-gray-900" dir="ltr">-۱۵۰,۰۰۰</div>
                    
                    {/* AI Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="absolute -top-12 right-4 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-xl flex items-center gap-2 whitespace-nowrap"
                    >
                      <Sparkles className="w-3 h-3 text-yellow-400" />
                      دسته‌بندی خودکار: <span className="font-bold text-primary-light">قبوض و خدمات</span>
                      <div className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </motion.div>
                  </motion.div>

                  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-white opacity-50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center"><ArrowUpRight className="w-4 h-4" /></div>
                      <div><div className="text-sm font-medium text-gray-900">خرید تجهیزات</div><div className="text-xs text-gray-500">دیروز</div></div>
                    </div>
                    <div className="text-sm font-bold text-gray-900" dir="ltr">-۱,۲۰۰,۰۰۰</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STAGE 3: Invoices */}
            {stage === 3 && (
              <motion.div
                key="stage-3"
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-4 sm:p-6 flex flex-col gap-4"
              >
                <h3 className="text-lg font-bold text-gray-900">فاکتورهای اخیر</h3>
                <div className="flex-1 flex flex-col gap-2 sm:gap-3">
                  {[
                    { id: "INV-001", customer: "شرکت توسعه الف", status: "پرداخت شده", color: "text-green-700 bg-green-50 border-green-200", icon: CheckCircle2 },
                    { id: "INV-002", customer: "فروشگاه آنلاین ب", status: "در انتظار پرداخت", color: "text-yellow-700 bg-yellow-50 border-yellow-200", icon: Clock },
                  ].map((inv, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-xl border border-gray-100 bg-white shadow-sm gap-2 sm:gap-0"
                    >
                      <div>
                        <div className="text-sm font-bold text-gray-900" dir="ltr">{inv.id}</div>
                        <div className="text-xs text-gray-500">{inv.customer}</div>
                      </div>
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border w-fit ${inv.color}`}>
                        <inv.icon className="w-3.5 h-3.5" />
                        {inv.status}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STAGE 4: AI Chat */}
            {stage === 4 && (
              <motion.div
                key="stage-4"
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-4 sm:p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">دستیار هوشمند</div>
                    <div className="text-xs text-green-500">آنلاین</div>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col gap-3 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2 max-w-[85%] mr-auto flex-row-reverse"
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                      <User className="w-3 h-3 text-gray-600" />
                    </div>
                    <div className="bg-white border border-gray-200 p-2.5 rounded-2xl rounded-tr-sm text-xs sm:text-sm text-gray-800 shadow-sm">
                      وضعیت سود این ماه چطور بوده؟
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-2 max-w-[90%] ml-auto"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-primary/10 border border-primary/20 p-2.5 rounded-2xl rounded-tl-sm text-xs sm:text-sm text-gray-900 shadow-sm">
                      سود خالص شما در این ماه <span className="font-bold text-primary">۸,۳۰۰,۰۰۰ تومان</span> بوده است. این مقدار نسبت به ماه گذشته <span className="font-bold text-green-600">۱۲٪ رشد</span> داشته است. 📈
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
