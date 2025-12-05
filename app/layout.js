// app/layout.js
import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "ERP SELLER",
  description: "ERP Seller CRM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        {/* Bố cục 2 cột: Sidebar bên trái, nội dung bên phải */}
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
          }}
        >
          {/* Menu bên trái */}
          <Sidebar />

          {/* Nội dung bên phải */}
          <main
            style={{
              flex: 1,
              padding: "32px 48px",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
