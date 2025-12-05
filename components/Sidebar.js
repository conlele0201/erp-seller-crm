export default function Sidebar() {
  const menu = [
    {
      group: "Tổng quan",
      items: ["Dashboard"]
    },
    {
      group: "Cấu hình shop",
      items: [
        "Cửa hàng & Thương hiệu",
        "Sản phẩm / Dịch vụ",
        "Tệp khách hàng",
        "Kênh bán hàng"
      ]
    },
    {
      group: "Nội dung & AI",
      items: [
        "Nội dung AI",
        "Tin nhắn CSKH",
        "Livestream & Video script",
        "Lịch đăng bài 30 ngày"
      ]
    },
    {
      group: "Thiết kế",
      items: ["Mẫu thiết kế"]
    },
    {
      group: "Hệ thống",
      items: ["Gói dịch vụ"]
    }
  ];

  const searchParams = typeof window !== "undefined" ? window.location.pathname : "";
  const activeItem = decodeURI(searchParams.replace("/", ""));

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">ERP SELLER</h2>

      {menu.map((group, idx) => (
        <div key={idx}>
          <div className="sidebar-group-title">{group.group}</div>

          {group.items.map((item) => {
            const slug = item.toLowerCase().replace(/ /g, "-");
            const isActive = activeItem.includes(slug);

            return (
              <a
                key={item}
                href={`/${slug}`}
                className={`sidebar-item ${isActive ? "sidebar-item-active" : ""}`}
              >
                {item}
              </a>
            );
          })}
        </div>
      ))}
    </div>
  );
}
