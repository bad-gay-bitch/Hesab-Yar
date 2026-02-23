import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Plus, Search, Filter, FileText, Download, Send, MoreHorizontal } from "lucide-react";

const invoices = [
  { id: "INV-1402-001", customer: "شرکت توسعه نرم‌افزار الف", amount: 150000000, date: "۱۴۰۲/۰۷/۱۵", dueDate: "۱۴۰۲/۰۷/۳۰", status: "پرداخت شده" },
  { id: "INV-1402-002", customer: "فروشگاه اینترنتی ب", amount: 45000000, date: "۱۴۰۲/۰۷/۱۰", dueDate: "۱۴۰۲/۰۷/۲۵", status: "معوق" },
  { id: "INV-1402-003", customer: "شرکت بازرگانی ج", amount: 85000000, date: "۱۴۰۲/۰۷/۰۵", dueDate: "۱۴۰۲/۰۷/۲۰", status: "ارسال شده" },
  { id: "INV-1402-004", customer: "موسسه آموزشی د", amount: 12000000, date: "۱۴۰۲/۰۶/۲۵", dueDate: "۱۴۰۲/۰۷/۱۰", status: "پرداخت شده" },
];

export default function InvoicesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">فاکتورها</h1>
          <p className="text-gray-500 mt-1">مدیریت فاکتورهای فروش و پیش‌فاکتورها</p>
        </div>
        <Button className="gap-2 w-full sm:w-auto">
          <Plus className="w-4 h-4" />
          صدور فاکتور جدید
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">کل فاکتورها (ماه جاری)</p>
              <p className="text-xl font-bold text-gray-900">۲۴ عدد</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">پرداخت شده</p>
              <p className="text-xl font-bold text-gray-900">{formatCurrency(162000000, 'IRT')}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">معوق (دریافت نشده)</p>
              <p className="text-xl font-bold text-gray-900">{formatCurrency(45000000, 'IRT')}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50 rounded-t-xl">
            <div className="relative w-full sm:w-96">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="جستجو بر اساس شماره فاکتور، نام مشتری..."
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
                  <th className="px-6 py-4 font-medium">شماره فاکتور</th>
                  <th className="px-6 py-4 font-medium">مشتری</th>
                  <th className="px-6 py-4 font-medium">تاریخ صدور</th>
                  <th className="px-6 py-4 font-medium">سررسید</th>
                  <th className="px-6 py-4 font-medium">مبلغ کل (تومان)</th>
                  <th className="px-6 py-4 font-medium">وضعیت</th>
                  <th className="px-6 py-4 font-medium">عملیات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900" dir="ltr">{inv.id}</td>
                    <td className="px-6 py-4 text-gray-700">{inv.customer}</td>
                    <td className="px-6 py-4 text-gray-500">{inv.date}</td>
                    <td className="px-6 py-4 text-gray-500">{inv.dueDate}</td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      {formatCurrency(inv.amount, 'IRT').replace(' تومان', '')}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
                        inv.status === 'پرداخت شده' ? 'bg-green-50 text-green-700 border border-green-200' : 
                        inv.status === 'معوق' ? 'bg-red-50 text-red-700 border border-red-200' :
                        'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="text-gray-400 hover:text-primary p-1.5 rounded-md hover:bg-blue-50 transition-colors" title="دانلود PDF">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-primary p-1.5 rounded-md hover:bg-blue-50 transition-colors" title="ارسال به مشتری">
                          <Send className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600 p-1.5 rounded-md hover:bg-gray-100 transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 bg-gray-50 rounded-b-xl">
            <span>نمایش ۱ تا ۴ از ۲۴ فاکتور</span>
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
