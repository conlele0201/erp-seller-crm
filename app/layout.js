// app/layout.js
import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "ERP SELLER",
  description: "Quản lý hệ thống ERP Seller",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {/* Cột trái: Sidebar */}
          <Sidebar />

          {/* Cột phải: nội dung */}
          <div style={{ flex: 1, padding: "20px 32px" }}>
            <h2 style={{ fontWeight: 600, fontSize: "20px", marginBottom: "12px" }}>
              ERP SELLER
            </h2>
            <hr style={{ marginBottom: "24px" }} />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
