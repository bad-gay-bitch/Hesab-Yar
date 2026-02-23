import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import InvoicesPage from "./pages/InvoicesPage";
import AiChatbotPage from "./pages/AiChatbotPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="invoices" element={<InvoicesPage />} />
          <Route path="ai" element={<AiChatbotPage />} />
          {/* Placeholder routes for other sidebar items */}
          <Route path="reports" element={<div className="p-6">گزارش‌ها (در حال توسعه)</div>} />
          <Route path="settings" element={<div className="p-6">تنظیمات (در حال توسعه)</div>} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
