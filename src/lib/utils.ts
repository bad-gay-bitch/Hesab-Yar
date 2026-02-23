import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: 'IRR' | 'IRT' = 'IRR') {
  const value = currency === 'IRT' ? amount / 10 : amount;
  return new Intl.NumberFormat('fa-IR').format(value) + (currency === 'IRT' ? ' تومان' : ' ریال');
}

export function formatNumber(amount: number) {
  return new Intl.NumberFormat('fa-IR').format(amount);
}
