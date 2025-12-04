"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#fff",
        borderRight: "1px solid #e5e5e5",
        padding: "0",
      }}
    >
      <h2
        style={{
          padding: "20px 20px 10px 20px",
          fontWeight: "bold",
          color: "#b71c1c",
        }}
      >
        ERP SELLER
      </h2>

      {/* --- Tổng quan --- */}
      <div className="sidebar-section">
        <p className="sidebar-title">Tổng quan</p>
        <Link href="/" className="sidebar-item active">
          Dashboard
        </Link>
      </div>

      {/* --- Cấu hình shop --- */}
      <div className="sidebar-section">
        <p className="sidebar-title">Cấu hình shop</p>

        <Link href="/shop" className="sidebar-item">
          Cửa hàng & Thương hiệu
        </Link>

        <Link href="/products" className="sidebar-item">
          Sản phẩm / Dịch vụ
        </Link>

        <Link href="/customers" className="sidebar-item">
          Tệp khách hàng
        </Link>

        <Link href="/channels" className="sidebar-item">
          Kênh bán hàng
        </Link>
      </div>

      {/* --- Nội dung & AI --- */}
      <div className="sidebar-section">
        <p className="sidebar-title">Nội dung & AI</p>

        <Link href="/ai-content" className="sidebar-item">
          Nội dung AI
        </Link>

        <Link href="/message" className="sidebar-item">
          Tin nhắn CSKH
        </Link>

        <Link href="/script" className="sidebar-item">
          Livestream & Video script
        </Link>

        <Link href="/calendar" className="sidebar-item">
          Lịch đăng bài 30 ngày
        </Link>

        <Link href="/campaign" className="sidebar-item">
          Chiến dịch Marketing
        </Link>
      </div>

      {/* --- Thiết kế --- */}
      <div className="sidebar-section">
        <p className="sidebar-title">Thiết kế</p>

        <Link href="/design" className="sidebar-item">
          Mẫu thiết kế
        </Link>

        <Link href="/logo-ai" className="sidebar-item">
          Logo AI
        </Link>
      </div>

      {/* --- Hệ thống --- */}
      <div className="sidebar-section">
        <p className="sidebar-title">Hệ thống</p>

        <Link href="/plans" className="sidebar-item">
          Gói dịch vụ
        </Link>

        <Link href="/system" className="sidebar-item">
          Quản trị hệ thống
        </Link>
      </div>
    </div>
  );
}
