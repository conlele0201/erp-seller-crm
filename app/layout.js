import "./globals.css";

export const metadata = {
  title: "ERP SELLER",
  description: "ERP Seller System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <div className="layout-container">
          <aside className="sidebar">
            {/* SIDEBAR ĐANG HOẠT ĐỘNG */}
          </aside>

          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
