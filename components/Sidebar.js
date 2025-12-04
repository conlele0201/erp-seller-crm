// components/Sidebar.js

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
    {
      group: "Thiết kế",
      items: ["Mẫu thiết kế", "Logo AI"],
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
        height: "100vh",
        padding: "24px",
        borderRight: "1px solid #e5e7eb",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <h2
        style={{
          fontSize: "22px",
          fontWeight: 700,
          marginBottom: "32px",
          color: "#b91c1c",
        }}
      >
        ERP SELLER
      </h2>

      {/* Menu */}
      {menu.map((section, index) => (
        <div key={index} style={{ marginBottom: "24px" }}>
          <p
            style={{
              fontWeight: 600,
              marginBottom: "10px",
              color: "#374151",
            }}
          >
            {section.group}
          </p>

          {section.items.map((item, idx) => (
            <p
              key={idx}
              style={{
                padding: "8px 10px",
                borderRadius: "6px",
                marginBottom: "6px",
                fontSize: "14px",
              }}
            >
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
