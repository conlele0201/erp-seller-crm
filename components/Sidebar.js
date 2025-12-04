export default function Sidebar() {
  const menu = [
    { group: "Tổng quan", items: ["Dashboard"] },
    { group: "Cấu hình shop", items: ["Cửa hàng & Thương hiệu", "Sản phẩm / Dịch vụ", "Tệp khách hàng", "Kênh bán hàng"] },
    { group: "Nội dung & AI", items: ["Nội dung AI", "Tin nhắn CSKH", "Livestream & Video script", "Lịch đăng bài 30 ngày", "Chiến dịch Marketing"] },
    { group: "Thiết kế", items: ["Mẫu thiết kế", "Logo AI"] },
    { group: "Hệ thống", items: ["Gói dịch vụ", "Quản trị hệ thống"] }
  ];

  return (
    <div
      style={{
        width: "260px",
        backgroundColor: "#f3f4f6",
        height: "100vh",
        padding: "0",
        borderRight: "1px solid #e5e7eb",
        position: "fixed",
        top: 0,
        left: 0,
        overflowY: "auto",
      }}
    >
      <h2
        style={{
          padding: "20px",
          fontSize: "22px",
          fontWeight: "700",
          color: "#b91c1c",
          margin: 0,
        }}
      >
        ERP SELLER
      </h2>

      {menu.map((group, idx) => (
        <div key={idx} style={{ marginBottom: "25px" }}>
          <p
            style={{
              padding: "0 20px",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "10px",
            }}
          >
            {group.group}
          </p>

          {group.items.map((item, i) => (
            <div
              key={i}
              className="sidebar-item"
              style={{
                padding: "12px 20px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ))}

      <style jsx>{`
        .sidebar-item:hover {
          background-color: #fee2e2;
        }
        .sidebar-item.active {
          background-color: #fecaca !important;
        }
      `}</style>
    </div>
  );
}
