// app/layout.js

import './globals.css';

export const metadata = {
  title: 'ERP SELLER – Base',
  description: 'ERP SELLER CRM base layout',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
