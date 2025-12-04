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

        {/* Khung nội dung dịch sang phải 260px */}
        <div style={{ marginLeft: "260px", padding: "20px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
