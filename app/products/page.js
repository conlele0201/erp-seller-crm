// app/products/page.js

const PRODUCTS = [
  {
    id: 1,
    name: "Áo thun nam basic",
    sku: "TSN-001",
    category: "Thời trang nam",
    price: 199000,
    stock: 54,
    status: "Đang bán",
    channels: "Shopee, TikTok",
    updatedAt: "Hôm nay",
  },
  {
    id: 2,
    name: "Áo khoác nữ chống nắng",
    sku: "AKN-002",
    category: "Thời trang nữ",
    price: 259000,
    stock: 32,
    status: "Đang bán",
    channels: "Shopee, Lazada",
    updatedAt: "Hôm nay",
  },
  {
    id: 3,
    name: "Váy body nữ dự tiệc",
    sku: "VBD-003",
    category: "Thời trang nữ",
    price: 349000,
    stock: 18,
    status: "Đang bán",
    channels: "Facebook, TikTok",
    updatedAt: "Hôm qua",
  },
  {
    id: 4,
    name: "Quần jean nam slim fit",
    sku: "QJN-004",
    category: "Thời trang nam",
    price: 299000,
    stock: 0,
    status: "Hết hàng",
    channels: "Shopee",
    updatedAt: "2 ngày trước",
  },
  {
    id: 5,
    name: "Đầm maxi đi biển",
    sku: "DMX-005",
    category: "Thời trang nữ",
    price: 329000,
    stock: 12,
    status: "Đang bán",
    channels: "Shopee, TikTok",
    updatedAt: "Hôm nay",
  },
  {
    id: 6,
    name: "Áo sơ mi nam công sở",
    sku: "ASM-006",
    category: "Thời trang nam",
    price: 279000,
    stock: 41,
    status: "Đang bán",
    channels: "Shopee, Website",
    updatedAt: "Hôm qua",
  },
  {
    id: 7,
    name: "Set đồ ngủ nữ cotton",
    sku: "SDN-007",
    category: "Thời trang nữ",
    price: 239000,
    stock: 27,
    status: "Đang bán",
    channels: "Shopee, TikTok",
    updatedAt: "3 ngày trước",
  },
  {
    id: 8,
    name: "Áo polo nam cao cấp",
    sku: "APO-008",
    category: "Thời trang nam",
    price: 319000,
    stock: 9,
    status: "Sắp hết hàng",
    channels: "Shopee",
    updatedAt: "Hôm nay",
  },
  {
    id: 9,
    name: "Chân váy chữ A",
    sku: "CVK-009",
    category: "Thời trang nữ",
    price: 259000,
    stock: 36,
    status: "Đang bán",
    channels: "Shopee, Lazada",
    updatedAt: "Hôm qua",
  },
  {
    id: 10,
    name: "Áo thun đồng phục nhóm",
    sku: "TDN-010",
    category: "Đặt may",
    price: 189000,
    stock: 120,
    status: "Đang bán",
    channels: "Facebook, Zalo",
    updatedAt: "Hôm nay",
  },
];

function formatCurrency(value) {
  return value.toLocaleString("vi-VN") + "₫";
}

export default function ProductsPage() {
  const totalProducts = PRODUCTS.length;
  const outOfStock = PRODUCTS.filter((p) => p.stock === 0).length;
  const lowStock = PRODUCTS.filter((p) => p.stock > 0 && p.stock <= 10).length;
  const activeProducts = PRODUCTS.filter((p) => p.status === "Đang bán").length;

  return (
    <div className="page-container">
      {/* Tiêu đề trang */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Sản phẩm / Dịch vụ</h1>
          <p className="page-subtitle">
            Quản lý toàn bộ sản phẩm đang bán trên các kênh.
          </p>
        </div>

        <div className="page-header-actions">
          <button type="button" className="btn-secondary">
            Xuất file
          </button>
          <button type="button" className="btn-primary">
            + Thêm sản phẩm
          </button>
        </div>
      </div>

      {/* Thống kê nhanh */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Tổng số sản phẩm</div>
          <div className="stat-value">{totalProducts}</div>
          <div className="stat-note">Tất cả trạng thái</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Đang bán</div>
          <div className="stat-value">{activeProducts}</div>
          <div className="stat-note">Sản phẩm đang hiển thị trên kênh</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Sắp hết hàng (&lt;= 10)</div>
          <div className="stat-value">{lowStock}</div>
          <div className="stat-note">Cần nhập thêm</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Hết hàng</div>
          <div className="stat-value">{outOfStock}</div>
          <div className="stat-note">Đang ẩn trên kênh bán</div>
        </div>
      </div>

      {/* Thanh tìm kiếm + lọc */}
      <div className="products-toolbar">
        <div className="products-search">
          <input
            type="text"
            placeholder="Tìm theo tên, SKU..."
            className="input-text"
          />
        </div>

        <div className="products-filters">
          <select className="select-input">
            <option>Tất cả danh mục</option>
            <option>Thời trang nam</option>
            <option>Thời trang nữ</option>
            <option>Đặt may</option>
          </select>

          <select className="select-input">
            <option>Tất cả trạng thái</option>
            <option>Đang bán</option>
            <option>Sắp hết hàng</option>
            <option>Hết hàng</option>
          </select>
        </div>
      </div>

      {/* Bảng sản phẩm */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Danh sách sản phẩm</div>
          <div className="card-subtitle">
            Tổng cộng {totalProducts} sản phẩm
          </div>
        </div>

        <div className="table-wrapper">
          <table className="table">
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
              {PRODUCTS.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="product-name-cell">
                      {/* Ảnh demo tạm, sau này mình gắn real image */}
                      <div className="product-avatar">
                        {product.name.charAt(0)}
                      </div>
                      <div>
                        <div className="product-name">{product.name}</div>
                        <div className="product-category">
                          {product.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product.sku}</td>
                  <td>{product.category}</td>
                  <td>{formatCurrency(product.price)}</td>
                  <td>{product.stock}</td>
                  <td>
                    <span className={`badge status-${statusToClass(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td>{product.channels}</td>
                  <td>{product.updatedAt}</td>
                  <td>
                    <button type="button" className="link-button">
                      Sửa
                    </button>
                    <span className="table-action-separator">·</span>
                    <button type="button" className="link-button danger">
                      Ẩn
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/**
 * Chuyển trạng thái sang class để CSS dễ style:
 * - Đang bán -> status-active
 * - Sắp hết hàng -> status-warning
 * - Hết hàng -> status-danger
 */
function statusToClass(status) {
  if (status === "Đang bán") return "active";
  if (status === "Sắp hết hàng") return "warning";
  if (status === "Hết hàng") return "danger";
  return "default";
}
