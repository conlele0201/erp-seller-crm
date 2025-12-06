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
        <div className="app-shell">
          <aside className="sidebar">
            <Sidebar />
          </aside>

          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
