export default function Sidebar() {
  const menu = [
    {
      group: "Tổng quan",
      items: ["Dashboard"],
    },
    {
      group: "Cấu hình shop",
      items: [
        "Cửa hàng & Thương hiệu",
        "Sản phẩm / Dịch vụ",
        "Tệp khách hàng",
        "Kênh bán hàng",
      ],
    },
    {
      group: "Nội dung & AI",
      items: [
        "Nội dung AI",
        "Tin nhắn CSKH",
        "Livestream & Video script",
        "Lịch đăng bài 30 ngày",
      ],
    },
    {
      group: "Thiết kế",
      items: ["Mẫu thiết kế"],
    },
    {
      group: "Hệ thống",
      items: ["Gói dịch vụ", "Quản trị hệ thống"],
    },
  ];

  return (
    <div
      style={{
        width: "260px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        padding: "20px",
        borderRight: "1px solid #e5e7eb",
        overflowY: "auto",
      }}
    >
      <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "20px", color: "#b91c1c" }}>
        ERP SELLER
      </h2>

      {menu.map((section, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px" }}>
            {section.group}
          </div>

          {section.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: "6px 0",
                fontSize: "14px",
                cursor: "pointer",
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
