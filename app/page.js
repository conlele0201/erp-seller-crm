export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: "20px",
        gap: "12px"
      }}
    >
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>
        Chào mừng bạn đến hệ thống ERP SELLER
      </h1>

      <p style={{ fontSize: 14, opacity: 0.8 }}>
        Đây là trang tổng quan của ứng dụng. Bạn có thể bắt đầu bằng cách chọn
        các chức năng ở menu bên trái.
      </p>

      <div style={{ fontSize: 14, marginTop: "8px" }}>
        <p style={{ fontWeight: 600, marginBottom: 4 }}>Các nhóm chức năng chính:</p>
        <ul style={{ marginLeft: "20px", lineHeight: 1.7 }}>
          <li>Cấu hình shop: Cửa hàng &amp; Thương hiệu, Sản phẩm / Dịch vụ, Tệp khách hàng.</li>
          <li>Nội dung &amp; AI: Nội dung AI, Tin nhắn CSKH, Livestream &amp; Video script.</li>
          <li>Lịch &amp; Chiến dịch: Lịch đăng bài 30 ngày, Chiến dịch Marketing.</li>
          <li>Thiết kế: Mẫu thiết kế, Logo AI.</li>
          <li>Hệ thống: Gói dịch vụ, Quản trị hệ thống.</li>
        </ul>
      </div>
    </main>
  );
}
