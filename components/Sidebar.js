export default function Sidebar() {
  // Style item mặc định
  const itemStyle = {
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "4px"
  };

  // Style khi hover
  const hoverStyle = {
    backgroundColor: "#ffebee", // đỏ nhạt
    color: "#b71c1c"
  };

  // Style khi active (click vào)
  const activeStyle = {
    backgroundColor: "#b71c1c",
    color: "#fff",
    fontWeight: 600
  };

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
        overflowY: "auto"
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 800,
          marginBottom: 20,
          color: "#b71c1c"
        }}
      >
        ERP SELLER
      </h2>

      {/* —— TỔNG QUAN —— */}
      <div style={{ marginBottom: 10, fontWeight: 700, color: "#333" }}>
        Tổng quan
      </div>

      <div
        className="sidebar-item"
        style={itemStyle}
        onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
        onMouseLeave={(e) => Object.assign(e.target.style, itemStyle)}
      >
        Dashboard
      </div>

      {/* —— CẤU HÌNH SHOP —— */}
      <div style={{ marginTop: 18, marginBottom: 10, fontWeight: 700, color: "#333" }}>
        Cấu hình shop
      </div>

      {["Cửa hàng & Thương hiệu", "Sản phẩm / Dịch vụ", "Tệp khách hàng", "Kênh bán hàng"].map(
        (item) => (
          <div
            key={item}
            className="sidebar-item"
            style={itemStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, itemStyle)}
          >
            {item}
          </div>
        )
      )}

      {/* —— NỘI DUNG & AI —— */}
      <div style={{ marginTop: 18, marginBottom: 10, fontWeight: 700, color: "#333" }}>
        Nội dung & AI
      </div>

      {[
        "Nội dung AI",
        "Tin nhắn CSKH",
        "Livestream & Video script",
        "Lịch đăng bài 30 ngày",
        "Chiến dịch Marketing"
      ].map((item) => (
        <div
          key={item}
          className="sidebar-item"
          style={itemStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, itemStyle)}
        >
          {item}
        </div>
      ))}

      {/* —— THIẾT KẾ —— */}
      <div style={{ marginTop: 18, marginBottom: 10, fontWeight: 700, color: "#333" }}>
        Thiết kế
      </div>

      {["Mẫu thiết kế", "Logo AI"].map((item) => (
        <div
          key={item}
          className="sidebar-item"
          style={itemStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, itemStyle)}
        >
          {item}
        </div>
      ))}

      {/* —— HỆ THỐNG —— */}
      <div style={{ marginTop: 18, marginBottom: 10, fontWeight: 700, color: "#333" }}>
        Hệ thống
      </div>

      {["Gói dịch vụ", "Quản trị hệ thống", "Đăng xuất"].map((item) => (
        <div
          key={item}
          className="sidebar-item"
          style={itemStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, itemStyle)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
