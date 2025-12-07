"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleClick = (item) => {
    setActiveItem(item);

    if (item === "Dashboard") router.push("/dashboard");
    if (item === "Sản phẩm / Dịch vụ") router.push("/products");
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
                const isActive = activeItem === item;

                return (
                  <li key={item}>
                    <button
                      type="button"
                      className={
                        "sidebar-item" + (isActive ? " sidebar-item-active" : "")
                      }
                      onClick={() => handleClick(item)}
                    >
                      {item}
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

const MENU = [
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
    items: ["Nội dung AI", "Tin nhắn CSKH", "Livestream & Video script", "Lịch đăng bài 30 ngày"],
  },
  {
    group: "Thiết kế",
    items: ["Mẫu thiết kế"],
  },
  {
    group: "Hệ thống",
    items: ["Gói dịch vụ"],
  },
];
