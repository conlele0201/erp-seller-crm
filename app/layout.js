import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "ERP SELLER",
  description: "ERP Seller CRM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          minHeight: "100vh",
        }}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div
          style={{
            flex: 1,
            padding: "32px 48px",
            backgroundColor: "#ffffff",
            overflowY: "auto",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
