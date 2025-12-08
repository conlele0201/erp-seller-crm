"use client";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabaseclient";

export default function ProductsPage() {
  // -------------------- STATE --------------------
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [channel, setChannel] = useState("");

  // -------------------- LOAD DATA --------------------
  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      const { data, error } = await supabase.from("products").select("*");

      if (!error) {
        setProducts(data);
      }

      setLoading(false);
    }

    loadProducts();
  }, []);

  // -------------------- FILTER --------------------
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.sku.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category ? p.category === category : true;
      const matchStatus = status ? p.status === status : true;
      const matchChannel = channel
        ? (p.channel || "").toLowerCase().includes(channel.toLowerCase())
        : true;

      return matchSearch && matchCategory && matchStatus && matchChannel;
    });
  }, [search, category, status, channel, products]);

  // -------------------- STYLES (Y NGUYÊN UI CỦA ANH) --------------------
  const pageStyle = { padding: "32px 40px", fontFamily: "system-ui" };
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
  const tableStyle = { width: "100%", borderCollapse: "collapse", fontSize: 14 };
  const thStyle = {
    textAlign: "left",
    padding: "12px 16px",
    backgroundColor: "#f9fafb",
    borderBottom: "1px solid #e5e7eb",
    fontWeight: 600,
    color: "#4b5563",
    whiteSpace: "nowrap",
  };
  const tdStyle = {
    padding: "12px 16px",
    borderBottom: "1px solid #f3f4f6",
  };

  return (
    <div style={pageStyle}>
      {/* HEADER */}
      <header style={headerStyle}>
        <h1 style={titleStyle}>Sản phẩm / Dịch vụ</h1>
        <p style={subtitleStyle}>
          Quản lý toàn bộ sản phẩm đang bán trên các kênh.
        </p>
      </header>

      {/* TOOLBAR */}
      <div style={toolbarStyle}>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={btnSecondary}>Xuất file</button>
          <button style={btnPrimary}>+ Thêm sản phẩm</button>
        </div>
        <div style={{ fontSize: 13, color: "#6b7280" }}>
          Tổng cộng <strong>{products.length}</strong> sản phẩm đang quản lý
        </div>
      </div>

      {/* STATS */}
      <section style={statsGridStyle}>
        <div style={statCardStyle}>
          <div style={statLabelStyle}>Tổng số sản phẩm</div>
          <div style={statValueStyle}>{products.length}</div>
          <div style={statSubStyle}>+5 so với hôm qua</div>
        </div>

        <div style={statCardStyle}>
          <div style={statLabelStyle}>Đang bán</div>
          <div style={statValueStyle}>
            {products.filter((p) => p.status === "Đang bán").length}
          </div>
          <div style={statSubStyle}>+3 sản phẩm mới</div>
        </div>

        <div style={statCardStyle}>
          <div style={statLabelStyle}>Sắp hết hàng (≤10)</div>
          <div style={statValueStyle}>
            {products.filter((p) => p.stock <= 10).length}
          </div>
          <div style={statSubStyle}>Cần nhập thêm</div>
        </div>

        <div style={statCardStyle}>
          <div style={statLabelStyle}>Đang ẩn trên kênh bán</div>
          <div style={statValueStyle}>
            {products.filter((p) => p.hidden === true).length}
          </div>
          <div style={statSubStyle}>Chưa lên kênh</div>
        </div>
      </section>

      {/* FILTER */}
      <section style={filtersCardStyle}>
        <div style={filtersRowStyle}>
          <div style={filterItemStyle}>
            <input
              placeholder="Tìm theo tên, SKU..."
              style={inputStyle}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div style={filterItemStyle}>
            <select
              style={inputStyle}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Tất cả danh mục</option>
              <option value="Thời trang nam">Thời trang nam</option>
              <option value="Thời trang nữ">Thời trang nữ</option>
              <option value="Mỹ phẩm">Mỹ phẩm</option>
            </select>
          </div>

          <div style={filterItemStyle}>
            <select
              style={inputStyle}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Tất cả trạng thái</option>
              <option value="Đang bán">Đang bán</option>
              <option value="Sắp hết hàng">Sắp hết hàng</option>
              <option value="Hết hàng">Hết hàng</option>
            </select>
          </div>

          <div style={filterItemStyle}>
            <select
              style={inputStyle}
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
            >
              <option value="">Tất cả kênh bán</option>
              <option value="Shopee">Shopee</option>
              <option value="TikTok">TikTok</option>
              <option value="Website">Website</option>
            </select>
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section style={tableCardStyle}>
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
            {filteredProducts.map((p) => (
              <tr key={p.id}>
                <td style={tdStyle}>{p.name}</td>
                <td style={tdStyle}>{p.sku}</td>
                <td style={tdStyle}>{p.category}</td>
                <td style={tdStyle}>{p.price}</td>
                <td style={tdStyle}>{p.stock}</td>
                <td style={tdStyle}>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 999,
                      backgroundColor:
                        p.status === "Đang bán"
                          ? "#dcfce7"
                          : p.status === "Sắp hết hàng"
                          ? "#fef3c7"
                          : "#fee2e2",
                      color:
                        p.status === "Đang bán"
                          ? "#166534"
                          : p.status === "Sắp hết hàng"
                          ? "#92400e"
                          : "#b91c1c",
                      fontWeight: 600,
                      fontSize: 12,
                    }}
                  >
                    {p.status}
                  </span>
                </td>
                <td style={tdStyle}>{p.channel}</td>
                <td style={tdStyle}>{p.updated_at || "-"}</td>
                <td style={tdStyle}>
                  <button
                    style={{
                      padding: "4px 10px",
                      borderRadius: 999,
                      border: "1px solid #e5e7eb",
                      backgroundColor: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
