import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "ERP SELLER",
  description: "Hệ thống ERP Seller",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body style={{ margin: 0, padding: 0 }}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {/* Sidebar cố định bên trái */}
          <Sidebar />

          {/* Nội dung bên phải */}
          <div
            style={{
              flex: 1,
              padding: "32px",
              backgroundColor: "#ffffff",
              overflowY: "auto",
            }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
