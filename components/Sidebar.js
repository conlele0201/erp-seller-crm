export default function Sidebar() {
  const menu = [
    { group: "Tổng quan", items: ["Dashboard"] },

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

    { group: "Thiết kế", items: ["Mẫu thiết kế"] },

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
        height: "100vh",
        padding: "0",
        borderRight: "1px solid #e5e7eb",
        overflowY: "auto",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "700",
          color: "#b91c1c",
          padding: "20px",
          paddingBottom: "10px",
        }}
      >
        ERP SELLER
      </h2>

      {menu.map((section, index) => (
        <div key={index} style={{ padding: "0 20px", marginBottom: "20px" }}>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "10px",
            }}
          >
            {section.group}
          </h3>

          {section.items.map((item, i) => (
            <div
              key={i}
              style={{
                fontSize: "14px",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                color: "#374151",
                marginBottom: "4px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e5e7eb")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
