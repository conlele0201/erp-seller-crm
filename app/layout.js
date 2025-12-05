import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "ERP SELLER",
  description: "ERP Seller System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <div className="layout-container">

          {/* SIDEBAR BÊN TRÁI */}
          <aside className="sidebar">
            <Sidebar />
          </aside>

          {/* NỘI DUNG BÊN PHẢI */}
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
