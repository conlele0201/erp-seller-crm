// components/Sidebar.js
"use client";

import { useState } from "react";

const menuGroups = [
  {
    title: "Tổng quan",
    items: ["Dashboard"],
  },
  {
    title: "Cấu hình shop",
    items: [
      "Cửa hàng & Thương hiệu",
      "Sản phẩm / Dịch vụ",
      "Tệp khách hàng",
      "Kênh bán hàng",
    ],
  },
  {
    title: "Nội dung & AI",
    items: [
      "Nội dung AI",
      "Tin nhắn CSKH",
      "Livestream & Video script",
      "Lịch đăng bài 30 ngày",
    ],
  },
  {
    title: "Thiết kế",
    items: ["Mẫu thiết kế"],
  },
  {
    title: "Hệ thống",
    items: ["Gói dịch vụ"],
  },
];

export default function Sidebar() {
  // Mặc định chọn "Cửa hàng & Thương hiệu" giống hình anh gửi
  const [activeItem, setActiveItem] = useState("Cửa hàng & Thương hiệu");

  return (
    <div className="sidebar-inner">
      <div className="sidebar-logo">ERP SELLER</div>

      {menuGroups.map((group) => (
        <div key={group.title} className="sidebar-group">
          <div className="sidebar-group-title">{group.title}</div>

          <ul className="sidebar-list">
            {group.items.map((item) => {
              const isActive = item === activeItem;

              return (
                <li key={item}>
                  <button
                    type="button"
                    className={`sidebar-item ${isActive ? "active" : ""}`}
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
    </div>
  );
}
