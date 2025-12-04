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

      <div className="sidebar-section">
        <p className="sidebar-title">Tổng quan</p>
        <a className="sidebar-item active">Dashboard</a>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-title">Cấu hình shop</p>
        <a className="sidebar-item">Cửa hàng & Thương hiệu</a>
        <a className="sidebar-item">Sản phẩm / Dịch vụ</a>
        <a className="sidebar-item">Tệp khách hàng</a>
        <a className="sidebar-item">Kênh bán hàng</a>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-title">Nội dung & AI</p>
        <a className="sidebar-item">Nội dung AI</a>
        <a className="sidebar-item">Tin nhắn CSKH</a>
        <a className="sidebar-item">Livestream & Video script</a>
        <a className="sidebar-item">Lịch đăng bài 30 ngày</a>
        <a className="sidebar-item">Chiến dịch Marketing</a>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-title">Thiết kế</p>
        <a className="sidebar-item">Mẫu thiết kế</a>
        <a className="sidebar-item">Logo AI</a>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-title">Hệ thống</p>
        <a className="sidebar-item">Gói dịch vụ</a>
        <a className="sidebar-item">Quản trị hệ thống</a>
      </div>
    </div>
  );
}
