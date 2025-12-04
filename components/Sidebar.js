export default function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        backgroundColor: "#f3f4f6",
        height: "100vh",
        padding: "20px",
        borderRight: "1px solid #e5e7eb",
        position: "fixed",
        top: 0,
        left: 0,
        overflowY: "auto"
      }}
    >
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
        ERP SELLER
      </h2>

      <div style={{ fontSize: 14, lineHeight: 1.6 }}>
        <div style={{ marginBottom: 12, fontWeight: 600 }}>Tổng quan</div>
        <div>• Dashboard</div>

        <div style={{ marginTop: 16, marginBottom: 8, fontWeight: 600 }}>
          Cấu hình shop
        </div>
        <div>• Cửa hàng &amp; Thương hiệu</div>
        <div>• Sản phẩm / Dịch vụ</div>
        <div>• Tệp khách hàng</div>
        <div>• Kênh bán hàng</div>

        <div style={{ marginTop: 16, marginBottom: 8, fontWeight: 600 }}>
          Nội dung &amp; AI
        </div>
        <div>• Nội dung AI</div>
        <div>• Tin nhắn CSKH</div>
        <div>• Livestream &amp; Video script</div>
        <div>• Lịch đăng bài 30 ngày</div>
        <div>• Chiến dịch Marketing</div>

        <div style={{ marginTop: 16, marginBottom: 8, fontWeight: 600 }}>
          Thiết kế
        </div>
        <div>• Mẫu thiết kế</div>
        <div>• Logo AI</div>

        <div style={{ marginTop: 16, marginBottom: 8, fontWeight: 600 }}>
          Hệ thống
        </div>
        <div>• Gói dịch vụ</div>
        <div>• Quản trị hệ thống</div>
        <div>• Đăng xuất</div>
      </div>
    </div>
  );
}
