import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "ERP SELLER",
  description: "ERP Seller CRM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body style={{ margin: 0, padding: 0 }}>
        {/* Bọc toàn bộ app trong 1 khung flex: Sidebar + nội dung bên phải */}
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {/* Cột menu bên trái */}
          <Sidebar />

          {/* Khu nội dung bên phải – căn lề giống bản cũ */}
          <main
            style={{
              flex: 1,
              padding: "32px 64px", // chỉnh khoảng cách trái/phải & trên/dưới
              maxWidth: "1100px",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
