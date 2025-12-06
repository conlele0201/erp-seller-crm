// components/Sidebar.js
"use client";

import { useState } from "react";

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
    items: ["Gói dịch vụ"],
  },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

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
                        "sidebar-item" +
                        (isActive ? " sidebar-item-active" : "")
                      }
                      onClick={() => setActiveItem(item)}
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
