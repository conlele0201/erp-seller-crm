export default function HomePage() {
  return (
    <>
      <header className="page-header">
        <h1>ERP SELLER</h1>
      </header>

      <section>
        <h2 className="page-title">
          Chào mừng bạn đến hệ thống ERP SELLER
        </h2>
        <p className="page-intro">
          Đây là trang tổng quan của ứng dụng. Bạn có thể bắt đầu bằng cách
          chọn các chức năng ở menu bên trái.
        </p>

        <h3 className="page-subtitle">Các nhóm chức năng chính:</h3>
        <ul className="feature-list">
          <li>
            Cấu hình shop: Cửa hàng &amp; Thương hiệu, Sản phẩm / Dịch vụ, Tệp
            khách hàng.
          </li>
          <li>
            Nội dung &amp; AI: Nội dung AI, Tin nhắn CSKH, Livestream &amp;
            Video script.
          </li>
          <li>
            Lịch &amp; Chiến dịch: Lịch đăng bài 30 ngày, Chiến dịch Marketing.
          </li>
          <li>Thiết kế: Mẫu thiết kế, Logo AI.</li>
          <li>Hệ thống: Gói dịch vụ, Quản trị hệ thống.</li>
        </ul>
      </section>
    </>
  );
}
