export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">ERP SELLER</div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Tổng quan</div>
        <div className="sidebar-item">Dashboard</div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Cấu hình shop</div>
        <div className="sidebar-item sidebar-item-active">
          Cửa hàng &amp; Thương hiệu
        </div>
        <div className="sidebar-item">Sản phẩm / Dịch vụ</div>
        <div className="sidebar-item">Tệp khách hàng</div>
        <div className="sidebar-item">Kênh bán hàng</div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Nội dung &amp; AI</div>
        <div className="sidebar-item">Nội dung AI</div>
        <div className="sidebar-item">Tin nhắn CSKH</div>
        <div className="sidebar-item">Livestream &amp; Video script</div>
        <div className="sidebar-item">Lịch đăng bài 30 ngày</div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Thiết kế</div>
        <div className="sidebar-item">Mẫu thiết kế</div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Hệ thống</div>
        <div className="sidebar-item">Gói dịch vụ</div>
        <div className="sidebar-item">Quản trị hệ thống</div>
      </div>
    </aside>
  );
}
