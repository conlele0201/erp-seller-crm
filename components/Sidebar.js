"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const MENU = [
  {
    group: "Tổng quan",
    items: [
      { label: "Dashboard", path: "/dashboard" }  // chỉ trang này có path
    ],
  },
  {
    group: "Cấu hình shop",
    items: [
      { label: "Cửa hàng & Thương hiệu" },
      { label: "Sản phẩm / Dịch vụ" },
      { label: "Tệp khách hàng" },
      { label: "Kênh bán hàng" },
    ],
  },
  {
    group: "Nội dung & AI",
    items: [
      { label: "Nội dung AI" },
      { label: "Tin nhắn CSKH" },
      { label: "Livestream & Video script" },
      { label: "Lịch đăng bài 30 ngày" },
    ],
  },
  {
    group: "Thiết kế",
    items: [{ label: "Mẫu thiết kế" }],
  },
  {
    group: "Hệ thống",
    items: [{ label: "Gói dịch vụ" }],
  },
];

export default function Sidebar() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleClick = (item) => {
    setActiveItem(item.label);

    // Chỉ điều hướng cho Dashboard
    if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">ERP SELLER</div>

      <nav className="sidebar-nav">
        {MENU.map((section) => (
          <div key={section.group} className="sidebar-section">
            <div className="sidebar-section-title">{section.group}</div>
            <ul className="sidebar-list">
              {section.items.map((item) => {
                const isActive = activeItem === item.label;

                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      className={
                        "sidebar-item" + (isActive ? " sidebar-item-active" : "")
                      }
                      onClick={() => handleClick(item)}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
