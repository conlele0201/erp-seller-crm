export default function ProductsPage() {
  return (
    <div className="page-content">
      <h1 className="page-title">Sản phẩm / Dịch vụ</h1>
      <p className="page-description">
        Quản lý toàn bộ sản phẩm đang bán trên các kênh.
      </p>

      <div className="actions">
        <button className="btn-secondary">Xuất file</button>
        <button className="btn-primary">+ Thêm sản phẩm</button>
      </div>

      {/* --- Tổng quan nhanh --- */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-title">Tổng số sản phẩm</div>
          <div className="stat-value">120</div>
          <div className="stat-change">+5 so với hôm qua</div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Đang bán</div>
          <div className="stat-value">98</div>
          <div className="stat-change">+3 sản phẩm mới</div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Sắp hết hàng (≤ 10)</div>
          <div className="stat-value">7</div>
          <div className="stat-link">Cần nhập thêm</div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Đang ẩn trên kênh bán</div>
          <div className="stat-value">15</div>
          <div className="stat-link">Chưa lên kênh</div>
        </div>
      </div>

      {/* --- Bộ lọc --- */}
      <div className="filter-row">
        <input className="filter-input" placeholder="Tìm theo tên, SKU..." />

        <select className="filter-select">
          <option>Tất cả danh mục</option>
        </select>

        <select className="filter-select">
          <option>Tất cả trạng thái</option>
        </select>

        <select className="filter-select">
          <option>Tất cả kênh bán</option>
        </select>
      </div>

      {/* --- Bảng sản phẩm --- */}
      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>SKU</th>
              <th>Danh mục</th>
              <th>Giá bán</th>
              <th>Tồn kho</th>
              <th>Trạng thái</th>
              <th>Kênh bán</th>
              <th>Cập nhật</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Áo thun nam basic</td>
              <td>ATN-001</td>
              <td>Thời trang nam</td>
              <td>199.000đ</td>
              <td>23</td>
              <td>Đang bán</td>
              <td>Shopee, TikTok</td>
              <td>Hôm nay, 10:21</td>
              <td><button className="btn-small">Sửa</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
