import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight, TrendingUp, Wallet, CreditCard, Activity } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from "motion/react";
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

export default function DashboardPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
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
          <Card className="bg-gradient-to-br from-primary to-primary-light text-white border-none h-full relative overflow-hidden">
            <motion.div 
              className="absolute bottom-0 left-0 right-0 bg-white/10"
              initial={{ height: "0%" }}
              animate={{ height: "85%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white/80">امتیاز سلامت مالی (AI)</p>
                  <h3 className="text-3xl font-bold mt-2 flex items-baseline gap-1">
                    <NumberTicker value={85} format={(v) => formatNumber(Math.round(v))} delay={0.5} />
                    <span className="text-sm font-normal text-white/80">/ ۱۰۰</span>
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
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
              <div className="h-[300px] w-full" dir="ltr">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} tickFormatter={(value) => `${value / 1000000}M`} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      formatter={(value: number) => [formatCurrency(value, 'IRT'), '']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="income" 
                      name="درآمد" 
                      stroke="#10B981" 
                      strokeWidth={2} 
                      fillOpacity={1} 
                      fill="url(#colorIncome)" 
                      isAnimationActive={true}
                      animationDuration={1500}
                      animationBegin={600}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="expense" 
                      name="هزینه" 
                      stroke="#EF4444" 
                      strokeWidth={2} 
                      fillOpacity={1} 
                      fill="url(#colorExpense)" 
                      isAnimationActive={true}
                      animationDuration={1500}
                      animationBegin={800}
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
              <div className="space-y-4 mt-4">
                {recentTransactions.map((tx, idx) => (
                  <motion.div 
                    key={tx.id} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {tx.type === 'income' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{tx.title}</p>
                        <p className="text-xs text-gray-500">{tx.category} • {tx.date}</p>
                      </div>
                    </div>
                    <div className={`text-sm font-bold ${tx.type === 'income' ? 'text-green-600' : 'text-gray-900'}`}>
                      {tx.type === 'income' ? '+' : ''}{formatCurrency(Math.abs(tx.amount), 'IRT')}
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
