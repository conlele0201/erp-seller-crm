export default function Sidebar() {
  const itemFull = { margin: "0 -20px 4px" }; // cho nền tràn sát 2 viền

  return (
    <div
      style={{
        width: "260px",
        backgroundColor: "#ffffff",
        height: "100vh",
        padding: "20px",
        borderRight: "1px solid #e5e7eb",
        position: "fixed",
        top: 0,
        left: 0,
        overflowY: "auto",
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 800,
          marginBottom: 20,
          color: "#b71c1c",
        }}
      >
        ERP SELLER
      </h2>

      <div style={{ fontSize: 14, lineHeight: 1.6 }}>
        {/* Tổng quan */}
        <div style={{ marginBottom: 8, fontWeight: 700, color: "#374151" }}>
          Tổng quan
        </div>
        <div className="sidebar-item" style={itemFull}>
          Dashboard
        </div>

        {/* Cấu hình shop */}
        <div
          style={{
            marginTop: 16,
            marginBottom: 8,
            fontWeight: 700,
            color: "#374151",
          }}
        >
          Cấu hình shop
        </div>
        <div className="sidebar-item" style={itemFull}>
          Cửa hàng &amp; Thương hiệu
        </div>
        <div className="sidebar-item" style={itemFull}>
          Sản phẩm / Dịch vụ
        </div>
        <div className="sidebar-item" style={itemFull}>
          Tệp khách hàng
        </div>
        <div className="sidebar-item" style={itemFull}>
          Kênh bán hàng
        </div>

        {/* Nội dung & AI */}
        <div
          style={{
            marginTop: 16,
            marginBottom: 8,
            fontWeight: 700,
            color: "#374151",
          }}
        >
          Nội dung &amp; AI
        </div>
        <div className="sidebar-item" style={itemFull}>
          Nội dung AI
        </div>
        <div className="sidebar-item" style={itemFull}>
          Tin nhắn CSKH
        </div>
        <div className="sidebar-item" style={itemFull}>
          Livestream &amp; Video script
        </div>
        <div className="sidebar-item" style={itemFull}>
          Lịch đăng bài 30 ngày
        </div>
        <div className="sidebar-item" style={itemFull}>
          Chiến dịch Marketing
        </div>

        {/* Thiết kế */}
        <div
          style={{
            marginTop: 16,
            marginBottom: 8,
            fontWeight: 700,
            color: "#374151",
          }}
        >
          Thiết kế
        </div>
        <div className="sidebar-item" style={itemFull}>
          Mẫu thiết kế
        </div>
        <div className="sidebar-item" style={itemFull}>
          Logo AI
        </div>

        {/* Hệ thống */}
        <div
          style={{
            marginTop: 16,
            marginBottom: 8,
            fontWeight: 700,
            color: "#374151",
          }}
        >
          Hệ thống
        </div>
        <div className="sidebar-item" style={itemFull}>
          Gói dịch vụ
        </div>
        <div className="sidebar-item" style={itemFull}>
          Quản trị hệ thống
        </div>
        <div className="sidebar-item" style={itemFull}>
          Đăng xuất
        </div>
      </div>
    </div>
  );
}
