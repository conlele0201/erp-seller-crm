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
