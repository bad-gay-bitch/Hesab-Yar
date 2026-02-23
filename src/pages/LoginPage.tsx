import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-2xl">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
              ح
            </div>
            حساب‌یار هوشمند
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">ورود به حساب کاربری</CardTitle>
            <CardDescription>
              برای ورود، ایمیل و رمز عبور خود را وارد کنید
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="email">
                  ایمیل
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  dir="ltr"
                  className="text-left"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700" htmlFor="password">
                    رمز عبور
                  </label>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    فراموشی رمز؟
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  dir="ltr"
                  className="text-left"
                />
              </div>
              <Button type="submit" className="w-full h-11 text-base">
                ورود به داشبورد
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              حساب کاربری ندارید؟{" "}
              <Link to="/register" className="text-primary font-medium hover:underline">
                ثبت‌نام رایگان
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
