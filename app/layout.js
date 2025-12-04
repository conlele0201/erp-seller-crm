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
        <div className="layout">
          <Sidebar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
