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
          <Sidebar />

          <div style={{ flex: 1, padding: "20px 32px" }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
