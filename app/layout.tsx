import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "ERP SELLER – Base",
  description: "Base project running on Next.js 14"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
