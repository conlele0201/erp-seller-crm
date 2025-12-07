// app/products/page.js

export default function ProductsPage() {
  const stats = [
    { label: "Tổng số sản phẩm", value: "120", sub: "+5 so với hôm qua" },
    { label: "Đang bán", value: "98", sub: "+3 sản phẩm mới" },
    { label: "Sắp hết hàng (≤ 10)", value: "7", sub: "Cần nhập thêm" },
    { label: "Đang ẩn trên kênh bán", value: "15", sub: "Chưa lên kênh" },
  ];

  const products = [
    {
      name: "Áo thun nam basic",
      sku: "ATN-001",
      category: "Thời trang nam",
      price: "199.000đ",
      stock: 23,
      status: "Đang bán",
      channel: "Shopee, TikTok",
      updatedAt: "Hôm nay, 10:21",
    },
    {
      name: "Váy body nữ dạ hội",
      sku: "VBN-014",
      category: "Thời trang nữ",
      price: "459.000đ",
      stock: 8,
      status: "Sắp hết hàng",
      channel: "Shopee",
      updatedAt: "Hôm qua, 21:03",
    },
    {
      name: "Combo chăm sóc da 7 ngày",
      sku: "CSD-007",
      category: "Mỹ phẩm",
      price: "379.000đ",
      stock: 0,
      status: "Hết hàng",
      channel: "Website",
      updatedAt: "02/12/2025",
    },
    {
      name: "Serum phục hồi da",
      sku: "SER-022",
      category: "Mỹ phẩm",
      price: "289.000đ",
      stock: 41,
      status: "Đang bán",
      channel: "TikTok",
      updatedAt: "Hôm nay, 08:45",
    },
  ];

  // 👉 FIX DUY NHẤT: canh sát sidebar, không đẩy ra xa
  const pageStyle = {
    padding: "32px 64px",
    paddingLeft: "24px", // sát sidebar nhưng vẫn đẹp như Dashboard
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const headerStyle = { marginBottom: 24 };
  const titleStyle = { fontSize: 32, fontWeight: 700, marginBottom: 8 };
  const subtitleStyle = { fontSize: 16, color: "#4b5563" };

  const toolbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
    gap: 12,
    flexWrap: "wrap",
  };

  const btnPrimary = {
    padding: "8px 16px",
    borderRadius: 6,
    border: "none",
    backgroundColor: "#ef4444",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 14,
  };

  const btnSecondary = {
    padding: "8px 16px",
    borderRadius: 6,
    border: "1px solid #e5e7eb",
    backgroundColor: "#fff",
    color: "#111827",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: 14,
  };

  const statsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 16,
    marginBottom: 24,
  };

  const statCardStyle = {
    padding: 16,
    borderRadius: 12,
    border: "1px solid #f3f4f6",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(15,23,42,0.03)",
  };

  const statLabelStyle = { fontSize: 13, color: "#6b7280", marginBottom: 4 };
  const statValueStyle = { fontSize: 24, fontWeight: 700, marginBottom: 4 };
  const statSubStyle = { fontSize: 12, color: "#16a34a" };

  const filtersCardStyle = {
    marginTop: 8,
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
    border: "1px solid #f3f4f6",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(15,23,42,0.02)",
  };

  const filtersRowStyle = { display: "flex", flexWrap: "wrap", gap: 12 };
  const filterItemStyle = { flex: "1 1 200px", minWidth: 200 };

  const inputStyle = {
    width: "100%",
    padding: "8px 10px",
    borderRadius: 6,
    border: "1px solid #e5e7eb",
    fontSize: 14,
  };

  const tableCardStyle = {
    marginTop: 8,
    borderRadius: 12,
    border: "1px solid #f3f4f6",
    backgroundColor: "#fff",
    boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
    overflow: "hidden",
  };

  const tableWrapperStyle = { width: "100%", overflowX: "auto" };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 14,
  };

  const thStyle = {
    textAlign: "left",
    padding: "12px 16px",
    backgroundColor: "#f9fafb",
    borderBottom: "1px solid #e5e7eb",
    whiteSpace: "nowrap",
    fontWeight: 600,
    color: "#4b5563",
  };

  const tdStyle = {
    padding: "12px 16px",
    borderBottom: "1px solid #f3f4f6",
    verticalAlign: "middle",
  };

  const statusBadge = (status) => {
    let bg = "#dcfce7",
      color = "#166534";

    if (status === "Sắp hết hàng") {
      bg = "#fef3c7";
      color = "#92400e";
    } else if (status === "Hết hàng") {
      bg = "#fee2e2";
      color = "#b91c1c";
    }

    return {
      display: "inline-block",
      padding: "4px 10px",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      backgroundColor: bg,
      color,
    };
  };

  const actionBtnStyle = {
    padding: "4px 10px",
    borderRadius: 999,
    border: "1px solid #e5e7eb",
    backgroundColor: "#fff",
    fontSize: 13,
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Sản phẩm / Dịch vụ</h1>
        <p style={subtitleStyle}>
          Quản lý toàn bộ sản phẩm đang bán trên các kênh.
        </p>
      </header>

      <div style={toolbarStyle}>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={btnSecondary}>Xuất file</button>
          <button style={btnPrimary}>+ Thêm sản phẩm</button>
        </div>
        <div style={{ fontSize: 13, color: "#6b7280" }}>
          Tổng cộng <strong>120</strong> sản phẩm đang quản lý
        </div>
      </div>

      <section style={statsGridStyle}>
        {stats.map((s) => (
          <div key={s.label} style={statCardStyle}>
            <div style={statLabelStyle}>{s.label}</div>
            <div style={statValueStyle}>{s.value}</div>
            <div style={statSubStyle}>{s.sub}</div>
          </div>
        ))}
      </section>

      <section style={filtersCardStyle}>
        <div style={filtersRowStyle}>
          <div style={filterItemStyle}>
            <input style={inputStyle} placeholder="Tìm theo tên, SKU..." />
          </div>
          <div style={filterItemStyle}>
            <select style={inputStyle}>
              <option>Tất cả danh mục</option>
            </select>
          </div>
          <div style={filterItemStyle}>
            <select style={inputStyle}>
              <option>Tất cả trạng thái</option>
            </select>
          </div>
          <div style={filterItemStyle}>
            <select style={inputStyle}>
              <option>Tất cả kênh bán</option>
            </select>
          </div>
        </div>
      </section>

      <section style={tableCardStyle}>
        <div style={tableWrapperStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Tên sản phẩm</th>
                <th style={thStyle}>SKU</th>
                <th style={thStyle}>Danh mục</th>
                <th style={thStyle}>Giá bán</th>
                <th style={thStyle}>Tồn kho</th>
                <th style={thStyle}>Trạng thái</th>
                <th style={thStyle}>Kênh bán</th>
                <th style={thStyle}>Cập nhật</th>
                <th style={thStyle}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.sku}>
                  <td style={tdStyle}>{p.name}</td>
                  <td style={tdStyle}>{p.sku}</td>
                  <td style={tdStyle}>{p.category}</td>
                  <td style={tdStyle}>{p.price}</td>
                  <td style={tdStyle}>{p.stock}</td>
                  <td style={tdStyle}>
                    <span style={statusBadge(p.status)}>{p.status}</span>
                  </td>
                  <td style={tdStyle}>{p.channel}</td>
                  <td style={tdStyle}>{p.updatedAt}</td>
                  <td style={tdStyle}>
                    <button style={actionBtnStyle}>Sửa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
