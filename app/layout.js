import './globals.css';

export const metadata = {
  title: "ERP SELLER – Base",
  description: "Base project running on Next.js 14"
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
