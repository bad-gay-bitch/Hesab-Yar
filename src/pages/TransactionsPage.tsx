import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Plus, Search, Filter, ArrowDownRight, ArrowUpRight, MoreVertical, Bot, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, Variants } from "motion/react";

const transactions = [
  { id: 1, title: "فروش نرم‌افزار به شرکت الف", amount: 15000000, type: "income", date: "۱۴۰۲/۰۷/۱۵", category: "فروش محصول", status: "تکمیل شده", aiConfidence: 95 },
  { id: 2, title: "پرداخت حقوق شهریور", amount: -45000000, type: "expense", date: "۱۴۰۲/۰۷/۰۱", category: "حقوق و دستمزد", status: "تکمیل شده", aiConfidence: 98 },
  { id: 3, title: "خرید تجهیزات اداری", amount: -8500000, type: "expense", date: "۱۴۰۲/۰۶/۲۸", category: "تجهیزات", status: "در انتظار", aiConfidence: 85 },
  { id: 4, title: "خدمات مشاوره", amount: 12000000, type: "income", date: "۱۴۰۲/۰۶/۲۵", category: "خدمات", status: "تکمیل شده", aiConfidence: 92 },
  { id: 5, title: "پرداخت قبض برق", amount: -1200000, type: "expense", date: "۱۴۰۲/۰۶/۲۰", category: "قبوض", status: "تکمیل شده", aiConfidence: 99 },
];

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const tableRowVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex-1 flex flex-col gap-6 min-h-0"
    >
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0 pb-6 border-b border-gray-200/60">
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl font-bold text-gray-900">تراکنش‌ها</h1>
          <p className="text-gray-500 mt-1">مدیریت درآمدها و هزینه‌های کسب‌وکار</p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-3 w-full sm:w-auto">
          <Button variant="outline" className="gap-2 w-full sm:w-auto border-indigo-200 bg-indigo-50/50 text-indigo-700 hover:bg-indigo-100/50 hover:text-indigo-800 transition-colors shadow-sm">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            دسته‌بندی خودکار (AI)
          </Button>
          <Button className="gap-2 w-full sm:w-auto bg-gradient-to-r from-primary to-primary-light hover:opacity-90 transition-opacity shadow-md">
            <Plus className="w-4 h-4" />
            ثبت تراکنش جدید
          </Button>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex-1 min-h-0 flex flex-col">
        <Card className="flex-1 flex flex-col overflow-hidden">
          <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
            <motion.div variants={itemVariants} className="p-5 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white border-b border-gray-100 shrink-0">
            <div className="relative w-full sm:w-96 group">
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 transition-colors group-focus-within:text-primary" />
              <Input
                placeholder="جستجو در عنوان، دسته‌بندی..."
                className="pl-4 pr-10 bg-gray-50/50 border-gray-200 hover:bg-gray-100/50 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all duration-300 rounded-xl h-11"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2 w-full sm:w-auto bg-white rounded-xl h-11 border-gray-200 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              فیلترها
            </Button>
          </motion.div>

          <div className="flex-1 overflow-auto">
            <table className="w-full text-sm text-right">
              <motion.thead variants={itemVariants} className="text-xs text-gray-400 bg-white border-b border-gray-100 block w-full">
                <tr className="table w-full table-fixed">
                  <th className="px-6 py-5 font-medium w-1/4">عنوان تراکنش</th>
                  <th className="px-6 py-5 font-medium w-1/5">دسته‌بندی (AI)</th>
                  <th className="px-6 py-5 font-medium w-1/6">تاریخ</th>
                  <th className="px-6 py-5 font-medium w-1/6">مبلغ (تومان)</th>
                  <th className="px-6 py-5 font-medium w-1/6">وضعیت</th>
                  <th className="px-6 py-5 font-medium w-16"></th>
                </tr>
              </motion.thead>
              <motion.tbody 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="block w-full"
              >
                {transactions.map((tx, idx) => (
                  <motion.tr 
                    key={tx.id} 
                    variants={tableRowVariants}
                    className={`group transition-colors duration-300 table w-full table-fixed border-b border-gray-100/50 last:border-none ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'} hover:bg-gray-50/80`}
                  >
                    <td className="px-6 py-5 w-1/4">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${tx.type === 'income' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                          {tx.type === 'income' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                        </div>
                        <span className="font-medium text-gray-900 truncate">{tx.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 w-1/5">
                      <div className="flex items-center gap-2">
                        {tx.aiConfidence > 90 ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50/80 text-indigo-700 border border-indigo-100/50 whitespace-nowrap shadow-sm shadow-indigo-100/20">
                            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                            {tx.category}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100/80 text-gray-700 whitespace-nowrap">
                            {tx.category}
                          </span>
                        )}
                        {tx.aiConfidence > 90 && (
                          <motion.span variants={badgeVariants} className="text-[10px] font-medium text-indigo-600 bg-indigo-50/50 px-2 py-1 rounded-full flex items-center gap-1 whitespace-nowrap" title="اطمینان هوش مصنوعی">
                            {tx.aiConfidence}٪
                          </motion.span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-gray-500 w-1/6 whitespace-nowrap">{tx.date}</td>
                    <td className="px-6 py-5 w-1/6">
                      <span className={`font-bold whitespace-nowrap ${tx.type === 'income' ? 'text-green-600' : 'text-gray-900'}`} dir="ltr">
                        {tx.type === 'income' ? '+' : ''}{formatCurrency(Math.abs(tx.amount), 'IRT').replace(' تومان', '')}
                      </span>
                    </td>
                    <td className="px-6 py-5 w-1/6">
                      <motion.span variants={badgeVariants} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap border ${
                        tx.status === 'تکمیل شده' ? 'bg-emerald-50/80 text-emerald-700 border-emerald-100/50' : 'bg-amber-50/80 text-amber-700 border-amber-100/50'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${tx.status === 'تکمیل شده' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                        {tx.status}
                      </motion.span>
                    </td>
                    <td className="px-6 py-5 text-left w-16">
                      <button className="text-gray-400 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-200/50 opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
          
          <motion.div variants={itemVariants} className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-b-2xl shrink-0 border-t border-gray-100">
            <div className="text-sm text-gray-500 font-medium">
              نمایش <span className="text-gray-900 font-bold mx-1">۱</span> تا <span className="text-gray-900 font-bold mx-1">۵</span> از <span className="text-gray-900 font-bold mx-1">۵۰</span> تراکنش
            </div>
            <div className="flex items-center gap-1.5" dir="ltr">
              <Button variant="outline" size="icon" className="w-9 h-9 rounded-xl border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" disabled>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-1 px-2">
                <Button variant="ghost" size="sm" className="w-9 h-9 rounded-xl font-medium bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-colors">1</Button>
                <Button variant="ghost" size="sm" className="w-9 h-9 rounded-xl font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">2</Button>
                <Button variant="ghost" size="sm" className="w-9 h-9 rounded-xl font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">3</Button>
                <span className="text-gray-400 px-1">...</span>
                <Button variant="ghost" size="sm" className="w-9 h-9 rounded-xl font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">10</Button>
              </div>
              <Button variant="outline" size="icon" className="w-9 h-9 rounded-xl border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
      </motion.div>
    </motion.div>
  );
}
