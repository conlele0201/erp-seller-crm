import "./globals.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export const metadata = {
  title: "ERP SELLER – Base",
  description: "Base project running on Next.js 14"
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Sidebar />

        <div style={{ marginLeft: "260px" }}>
          <Header />
          <main style={{ padding: "20px" }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
