export default function Sidebar() {
  const menuItems = [
    { label: "Dashboard" },
    { label: "Cửa hàng & Thương hiệu" },
    { label: "Sản phẩm / Dịch vụ" },
    { label: "Tệp khách hàng" },
    { label: "Kênh bán hàng" },
    { label: "Nội dung AI" },
    { label: "Tin nhắn CSKH" },
    { label: "Livestream & Video script" },
    { label: "Lịch đăng bài 30 ngày" },
    { label: "Chiến dịch Marketing" },
    { label: "Mẫu thiết kế" },
    { label: "Logo AI" },
    { label: "Gói dịch vụ" },
    { label: "Quản trị hệ thống" }
  ];

  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        overflowY: "auto",
        borderRight: "1px solid #e5e7eb",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#c70039", fontWeight: "700" }}>
        ERP SELLER
      </h2>

      {menuItems.map((item, index) => (
        <div
          key={index}
          className="sidebar-item"
          style={{
            padding: "10px 12px",
            cursor: "pointer",
            borderRadius: "6px",
            marginBottom: "4px",
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}
