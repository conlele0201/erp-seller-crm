import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "ERP SELLER – Base",
  description: "Base project running on Next.js 14"
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
