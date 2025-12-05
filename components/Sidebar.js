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
  // Mặc định đang chọn "Cửa hàng & Thương hiệu"
  const [active, setActive] = useState("Cửa hàng & Thương hiệu");

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">ERP SELLER</h2>

      {MENU.map((group) => (
        <div key={group.group}>
          <div className="sidebar-group-title">{group.group}</div>

          {group.items.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActive(item)}
              className={
                "sidebar-item" +
                (active === item ? " sidebar-item-active" : "")
              }
            >
              {item}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
