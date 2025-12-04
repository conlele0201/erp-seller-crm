import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "ERP SELLER",
  description: "Quản lý hệ thống ERP Seller",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", height: "100vh" }}>
          {/* Sidebar trái */}
          <Sidebar />

          {/* Nội dung bên phải */}
          <div style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ fontWeight: "600", fontSize: "20px" }}>ERP SELLER</h2>
            <hr style={{ margin: "20px 0" }} />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
