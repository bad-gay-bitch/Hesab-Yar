import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Plus, Search, Filter, ArrowDownRight, ArrowUpRight, MoreVertical, Bot } from "lucide-react";

const transactions = [
  { id: 1, title: "فروش نرم‌افزار به شرکت الف", amount: 15000000, type: "income", date: "۱۴۰۲/۰۷/۱۵", category: "فروش محصول", status: "تکمیل شده", aiConfidence: 95 },
  { id: 2, title: "پرداخت حقوق شهریور", amount: -45000000, type: "expense", date: "۱۴۰۲/۰۷/۰۱", category: "حقوق و دستمزد", status: "تکمیل شده", aiConfidence: 98 },
  { id: 3, title: "خرید تجهیزات اداری", amount: -8500000, type: "expense", date: "۱۴۰۲/۰۶/۲۸", category: "تجهیزات", status: "در انتظار", aiConfidence: 85 },
  { id: 4, title: "خدمات مشاوره", amount: 12000000, type: "income", date: "۱۴۰۲/۰۶/۲۵", category: "خدمات", status: "تکمیل شده", aiConfidence: 92 },
  { id: 5, title: "پرداخت قبض برق", amount: -1200000, type: "expense", date: "۱۴۰۲/۰۶/۲۰", category: "قبوض", status: "تکمیل شده", aiConfidence: 99 },
];

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">تراکنش‌ها</h1>
          <p className="text-gray-500 mt-1">مدیریت درآمدها و هزینه‌های کسب‌وکار</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="gap-2">
            <Bot className="w-4 h-4 text-primary" />
            دسته‌بندی خودکار
          </Button>
          <Button className="gap-2 w-full sm:w-auto">
            <Plus className="w-4 h-4" />
            ثبت تراکنش جدید
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50 rounded-t-xl">
            <div className="relative w-full sm:w-96">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="جستجو در عنوان، دسته‌بندی..."
                className="pl-3 pr-10 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2 w-full sm:w-auto bg-white">
              <Filter className="w-4 h-4" />
              فیلترها
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right">
              <thead className="text-xs text-gray-500 bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-medium">عنوان تراکنش</th>
                  <th className="px-6 py-4 font-medium">دسته‌بندی (AI)</th>
                  <th className="px-6 py-4 font-medium">تاریخ</th>
                  <th className="px-6 py-4 font-medium">مبلغ (تومان)</th>
                  <th className="px-6 py-4 font-medium">وضعیت</th>
                  <th className="px-6 py-4 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${tx.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                          {tx.type === 'income' ? <ArrowDownRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                        </div>
                        <span className="font-medium text-gray-900">{tx.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {tx.category}
                        </span>
                        {tx.aiConfidence > 90 && (
                          <span className="text-[10px] text-primary flex items-center gap-0.5" title="دسته‌بندی شده توسط هوش مصنوعی">
                            <Bot className="w-3 h-3" />
                            {tx.aiConfidence}٪
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{tx.date}</td>
                    <td className="px-6 py-4">
                      <span className={`font-bold ${tx.type === 'income' ? 'text-green-600' : 'text-gray-900'}`}>
                        {tx.type === 'income' ? '+' : ''}{formatCurrency(Math.abs(tx.amount), 'IRT').replace(' تومان', '')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                        tx.status === 'تکمیل شده' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-left">
                      <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 bg-gray-50 rounded-b-xl">
            <span>نمایش ۱ تا ۵ از ۵۰ تراکنش</span>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" disabled>قبلی</Button>
              <Button variant="outline" size="sm">بعدی</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
