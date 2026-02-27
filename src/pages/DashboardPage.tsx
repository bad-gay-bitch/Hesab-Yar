import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight, TrendingUp, Wallet, CreditCard, Activity } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion, Variants } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

const data = [
  { name: 'فروردین', income: 40000000, expense: 24000000 },
  { name: 'اردیبهشت', income: 30000000, expense: 13980000 },
  { name: 'خرداد', income: 20000000, expense: 9800000 },
  { name: 'تیر', income: 27800000, expense: 39080000 },
  { name: 'مرداد', income: 18900000, expense: 4800000 },
  { name: 'شهریور', income: 23900000, expense: 3800000 },
  { name: 'مهر', income: 34900000, expense: 4300000 },
];

const recentTransactions = [
  { id: 1, title: "فروش نرم‌افزار به شرکت الف", amount: 15000000, type: "income", date: "۱۴۰۲/۰۷/۱۵", category: "فروش محصول" },
  { id: 2, title: "پرداخت حقوق شهریور", amount: -45000000, type: "expense", date: "۱۴۰۲/۰۷/۰۱", category: "حقوق و دستمزد" },
  { id: 3, title: "خرید تجهیزات اداری", amount: -8500000, type: "expense", date: "۱۴۰۲/۰۶/۲۸", category: "تجهیزات" },
  { id: 4, title: "خدمات مشاوره", amount: 12000000, type: "income", date: "۱۴۰۲/۰۶/۲۵", category: "خدمات" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-gray-100 p-4 rounded-2xl shadow-xl">
        <p className="text-gray-500 text-sm mb-3 font-medium text-right">{label}</p>
        <div className="space-y-2" dir="rtl">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-sm font-medium text-gray-700">
                  {entry.name}
                </span>
              </div>
              <span className="text-sm font-bold" style={{ color: entry.color }}>
                {formatCurrency(entry.value, 'IRT')}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function DashboardPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-bold text-gray-900">خلاصه وضعیت مالی</h1>
        <p className="text-gray-500 mt-1">نمای کلی از عملکرد کسب‌وکار شما در ماه جاری</p>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">درآمد ماه جاری</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">
                    <NumberTicker value={125000000} format={(v) => formatCurrency(v, 'IRT')} delay={0.2} />
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium mr-1">۱۲٪</span>
                <span className="text-gray-500">نسبت به ماه قبل</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">هزینه‌ها</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">
                    <NumberTicker value={45000000} format={(v) => formatCurrency(v, 'IRT')} delay={0.3} />
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <CreditCard className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                <span className="text-red-500 font-medium mr-1">۵٪</span>
                <span className="text-gray-500">نسبت به ماه قبل</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">سود خالص</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">
                    <NumberTicker value={80000000} format={(v) => formatCurrency(v, 'IRT')} delay={0.4} />
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Wallet className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium mr-1">۱۸٪</span>
                <span className="text-gray-500">نسبت به ماه قبل</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-primary to-primary-light text-white border-none h-full relative overflow-hidden shadow-md">
            <CardContent className="p-6 relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-white/80">امتیاز سلامت مالی (AI)</p>
                  <div className="mt-3">
                    {/* Circular Progress */}
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
                        <motion.circle 
                          cx="50" cy="50" r="40" 
                          fill="transparent" 
                          stroke="#ffffff" 
                          strokeWidth="8" 
                          strokeLinecap="round" 
                          strokeDasharray="251.2" 
                          initial={{ strokeDashoffset: 251.2 }} 
                          animate={{ strokeDashoffset: 251.2 - (251.2 * 0.85) }} 
                          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }} 
                          className="drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <span className="text-lg font-bold text-white">
                          <NumberTicker value={85} format={(v) => formatNumber(Math.round(v))} delay={0.5} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 text-sm text-white/90">
                وضعیت مطلوب. پیشنهاد: کاهش هزینه‌های جاری.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>روند درآمد و هزینه (۶ ماه اخیر)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full mt-4" dir="ltr">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#EF4444" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#F3F4F6" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }} 
                      dy={10} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }} 
                      tickFormatter={(value) => `${value / 1000000}M`} 
                      dx={-10}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E5E7EB', strokeWidth: 1, strokeDasharray: '4 4' }} />
                    <Legend 
                      verticalAlign="top" 
                      height={36} 
                      iconType="circle"
                      wrapperStyle={{ fontSize: '13px', fontWeight: 500, color: '#4B5563' }}
                    />
                    <Area 
                      type="natural" 
                      dataKey="income" 
                      name="درآمد" 
                      stroke="#10B981" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorIncome)" 
                      isAnimationActive={true}
                      animationDuration={1500}
                      animationBegin={600}
                      activeDot={{ r: 6, strokeWidth: 0, fill: '#10B981' }}
                    />
                    <Area 
                      type="natural" 
                      dataKey="expense" 
                      name="هزینه" 
                      stroke="#EF4444" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorExpense)" 
                      isAnimationActive={true}
                      animationDuration={1500}
                      animationBegin={800}
                      activeDot={{ r: 6, strokeWidth: 0, fill: '#EF4444' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>آخرین تراکنش‌ها</CardTitle>
              <button className="text-sm text-primary hover:underline">مشاهده همه</button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mt-4">
                {recentTransactions.map((tx, idx) => (
                  <motion.div 
                    key={tx.id} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                    className={`flex items-center justify-between p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-0.5 cursor-pointer border border-transparent hover:border-gray-100 gap-2 sm:gap-4 ${idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-transparent'}`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-2xl flex items-center justify-center shadow-sm ${tx.type === 'income' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
                        {tx.type === 'income' ? <ArrowDownRight className="w-5 h-5 sm:w-6 sm:h-6" /> : <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />}
                      </div>
                      <div className="flex flex-col gap-1.5 min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">{tx.title}</p>
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-gray-500">
                          <span className="bg-gray-100/80 px-2 py-0.5 rounded-md font-medium whitespace-nowrap">{tx.category}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></span>
                          <span className="font-medium whitespace-nowrap" dir="ltr">{tx.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className={`text-sm sm:text-base font-bold tracking-tight ${tx.type === 'income' ? 'text-green-600' : 'text-gray-900'}`} dir="ltr">
                        {tx.type === 'income' ? '+' : ''}{formatCurrency(Math.abs(tx.amount), 'IRT').replace(' تومان', '')}
                      </div>
                      <div className="text-[10px] text-gray-400 font-medium">تومان</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
