export default function Sidebar() {
  const menu = [
    { group: "Tổng quan", items: ["Dashboard"] },
    { group: "Cấu hình shop", items: ["Cửa hàng & Thương hiệu", "Sản phẩm / Dịch vụ", "Tệp khách hàng", "Kênh bán hàng"] },
    { group: "Nội dung & AI", items: ["Nội dung AI", "Tin nhắn CSKH", "Livestream & Video script", "Lịch đăng bài 30 ngày"] },
    { group: "Thiết kế", items: ["Mẫu thiết kế", "Logo AI"] },
    { group: "Hệ thống", items: ["Gói dịch vụ", "Quản trị hệ thống"] }
  ];

  return (
    <div
      style={{
        width: "260px",
        backgroundColor: "#f3f4f6",
        height: "100vh",
        padding: "20px",
        borderRight: "1px solid #e5e7eb",
        overflowY: "auto",
        position: "fixed",
        top: 0,
        left: 0
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "700", marginBottom: "20px", color: "#b91c1c" }}>
        ERP SELLER
      </div>

      {menu.map((section, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "8px", color: "#374151" }}>
            {section.group}
          </h3>

          {section.items.map((item, j) => (
            <div
              key={j}
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                marginBottom: "4px",
                fontSize: "14px",
                color: "#1f2937"
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
