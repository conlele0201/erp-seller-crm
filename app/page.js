"use client";
import Sidebar from "../components/Sidebar";

export default function Page() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "40px" }}>
        <h1>Chào mừng bạn đến hệ thống ERP SELLER</h1>
        <p>Đây là trang tổng quan của ứng dụng. Bạn có thể bắt đầu bằng cách chọn các chức năng ở menu bên trái.</p>

        <h3>Các nhóm chức năng chính:</h3>
        <ul>
          <li>Cấu hình shop: Cửa hàng & Thương hiệu, Sản phẩm / Dịch vụ, Tệp khách hàng.</li>
          <li>Nội dung & AI: Nội dung AI, Tin nhắn CSKH, Livestream & Video script.</li>
          <li>Lịch & Chiến dịch: Lịch đăng bài 30 ngày, Chiến dịch Marketing.</li>
          <li>Thiết kế: Mẫu thiết kế, Logo AI.</li>
          <li>Hệ thống: Gói dịch vụ, Quản trị hệ thống.</li>
        </ul>
      </div>
    </div>
  );
}
