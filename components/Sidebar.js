"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuGroups = [
    {
      title: "Tổng quan",
      items: [
        { label: "Dashboard", path: "/dashboard" },
      ],
    },
    {
      title: "Cấu hình shop",
      items: [
        { label: "Cửa hàng & Thương hiệu", path: "/store" },
        { label: "Sản phẩm / Dịch vụ", path: "/products" },
        { label: "Tệp khách hàng", path: "/customers" },
        { label: "Kênh bán hàng", path: "/channels" },
      ],
    },
    {
      title: "Nội dung & AI",
      items: [
        { label: "Nội dung AI", path: "/ai-content" },
        { label: "Tin nhắn CSKH", path: "/cskh" },
        { label: "Livestream & Video script", path: "/livestream" },
        { label: "Lịch đăng bài 30 ngày", path: "/scheduler" },
      ],
    },
    {
      title: "Thiết kế",
      items: [
        { label: "Mẫu thiết kế", path: "/designs" },
      ],
    },
    {
      title: "Hệ thống",
      items: [
        { label: "Gói dịch vụ", path: "/plans" },
      ],
    },
  ];

  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>ERP SELLER</div>

      {menuGroups.map((group, index) => (
        <div key={index} style={{ marginBottom: "22px" }}>
          <div style={styles.groupTitle}>{group.title}</div>

          <ul style={styles.menuList}>
            {group.items.map((item, idx) => {
              const isActive = pathname === item.path;

              return (
                <li key={idx}>
                  <Link
                    href={item.path}
                    style={{
                      ...styles.menuItem,
                      background: isActive ? "#e63946" : "transparent",
                      color: isActive ? "#fff" : "#333",
                      borderRadius: "6px",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: "260px",
    background: "#f5f6f8",
    height: "100vh",
    padding: "24px 18px",
    borderRight: "1px solid #ddd",
    overflowY: "auto",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#d62828",
    marginBottom: "30px",
  },
  groupTitle: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#666",
    marginBottom: "8px",
    textTransform: "uppercase",
  },
  menuList: {
    listStyle: "none",
    paddingLeft: 0,
  },
  menuItem: {
    display: "block",
    padding: "10px 14px",
    marginBottom: "6px",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "15px",
    transition: "0.2s",
  },
};
