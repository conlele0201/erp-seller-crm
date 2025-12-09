// app/products/page.js
"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ProductsPage() {
  // ========== STATE ==========
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [channelFilter, setChannelFilter] = useState("");

  // ========== FETCH DATA ==========
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("product_id", { ascending: true });

      if (error) {
        console.error("Lỗi load products:", error);
        setError("Không tải được danh sách sản phẩm.");
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  // ========== FILTER + STATS ==========
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search ||
        p.name?.toLowerCase().includes(search.toLowerCase()) ||
        p.sku?.toLowerCase().includes(search.toLowerCase());

      const matchCategory = categoryFilter ? p.category === categoryFilter : true;
      const matchStatus = statusFilter ? p.status === statusFilter : true;
      const matchChannel = channelFilter
        ? (p.channels || "")
            .toLowerCase()
            .includes(channelFilter.toLowerCase())
        : true;

      return matchSearch && matchCategory && matchStatus && matchChannel;
    });
  }, [products, search, categoryFilter, statusFilter, channelFilter]);

  const totalProducts = products.length;
  const activeProducts = products.filter((p) => p.status === "Đang bán").length;
  const lowStockProducts = products.filter((p) => p.stock <= 10).length;
  const hiddenOnChannels = products.filter((p) => !p.channels).length;

  // ========== STYLE ==========
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

  const productImageStyle = {
    width: 48,
    height: 48,
    objectFit: "cover",
    borderRadius: 8,
    border: "1px solid #e5e7eb",
  };

  const statusBadge = (status) => {
    let s = { bg: "#dcfce7", color: "#166534" };

    if (status === "Sắp hết hàng") s = { bg: "#fef3c7", color: "#92400e" };
    if (status === "Hết hàng") s = { bg: "#fee2e2", color: "#b91c1c" };

    return {
      display: "inline-block",
      padding: "4px 10px",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      backgroundColor: s.bg,
      color: s.color,
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

  const formatDateTime = (value) => {
    if (!value) return "—";
    try {
      return new Date(value).toLocaleString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } catch {
      return "—";
    }
  };

  const formatPrice = (value) => {
    if (value === null || value === undefined) return "—";
    const num = Number(value);
    if (Number.isNaN(num)) return value;
    return num.toLocaleString("vi-VN");
  };

  // Lấy đường dẫn ảnh: nếu chưa có thì dùng placeholder trong project
  const getImageSrc = (p) => {
    if (p.image_url && typeof p.image_url === "string") {
      return p.image_url; // ví dụ: /images/products/atn-001.jpg
    }
    return "/images/products/atn-001.jpg"; // tạm dùng cùng 1 ảnh nếu chưa set
  };

  // ========== UI ==========
  return (
    <div style={pageStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <h1 style={titleStyle}>Sản phẩm / Dịch vụ</h1>
        <p style={subtitleStyle}>
          Quản lý toàn bộ sản phẩm đang bán trên các kênh.
        </p>
      </header>

      {/* Toolbar */}
      <div style={toolbarStyle}>
        <div style={{ display: "flex", gap: 8 }}>
          <button type="button" style={btnSecondary}>
            Xuất file
          </button>
          <button type="button" style={btnPrimary}>
            + Thêm sản phẩm
          </button>
        </div>
        <div style={{ fontSize: 13, color: "#6b7280" }}>
          Tổng cộng <strong>{totalProducts}</strong> sản phẩm đang quản lý
        </div>
      </div>

      {/* Stats */}
      <section style={statsGridStyle}>
        <div style={statCardStyle}>
          <div style={statLabelStyle}>Tổng số sản phẩm</div>
          <div style={statValueStyle}>{totalProducts}</div>
          <div style={statSubStyle}>+0 so với hôm qua</div>
        </div>
        <div style={statCardStyle}>
          <div style={statLabelStyle}>Đang bán</div>
          <div style={statValueStyle}>{activeProducts}</div>
          <div style={statSubStyle}>+0 sản phẩm mới</div>
        </div>
        <div style={statCardStyle}>
          <div style={statLabelStyle}>Sắp hết hàng (≤ 10)</div>
          <div style={statValueStyle}>{lowStockProducts}</div>
          <div style={statSubStyle}>Cần nhập thêm</div>
        </div>
        <div style={statCardStyle}>
          <div style={statLabelStyle}>Đang ẩn trên kênh bán</div>
          <div style={statValueStyle}>{hiddenOnChannels}</div>
          <div style={statSubStyle}>Chưa lên kênh</div>
        </div>
      </section>

      {/* Filters */}
      <section style={filtersCardStyle}>
        <div style={filtersRowStyle}>
          <div style={filterItemStyle}>
            <input
              style={inputStyle}
              placeholder="Tìm theo tên, SKU..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div style={filterItemStyle}>
            <select
              style={inputStyle}
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
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
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
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
              value={channelFilter}
              onChange={(e) => setChannelFilter(e.target.value)}
            >
              <option value="">Tất cả kênh bán</option>
              <option value="Shopee">Shopee</option>
              <option value="TikTok">TikTok</option>
              <option value="Website">Website</option>
            </select>
          </div>
        </div>
      </section>

      {/* Table */}
      <section style={tableCardStyle}>
        {loading ? (
          <div style={{ padding: 16, fontSize: 14 }}>Đang tải dữ liệu...</div>
        ) : error ? (
          <div style={{ padding: 16, fontSize: 14, color: "#b91c1c" }}>
            {error}
          </div>
        ) : (
          <div style={tableWrapperStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Ảnh</th>
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
                    <td style={tdStyle}>
                      <img
                        src={getImageSrc(p)}
                        alt={p.name || "Ảnh sản phẩm"}
                        style={productImageStyle}
                      />
                    </td>
                    <td style={tdStyle}>{p.name}</td>
                    <td style={tdStyle}>{p.sku}</td>
                    <td style={tdStyle}>{p.category}</td>
                    <td style={tdStyle}>{formatPrice(p.price)}</td>
                    <td style={tdStyle}>{p.stock}</td>
                    <td style={tdStyle}>
                      <span style={statusBadge(p.status)}>{p.status}</span>
                    </td>
                    <td style={tdStyle}>{p.channels || "—"}</td>
                    <td style={tdStyle}>{formatDateTime(p.updated_at)}</td>
                    <td style={tdStyle}>
                      <button type="button" style={actionBtnStyle}>
                        Sửa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredProducts.length === 0 && (
              <div
                style={{
                  padding: 16,
                  fontSize: 14,
                  color: "#6b7280",
                  textAlign: "center",
                }}
              >
                Không có sản phẩm nào phù hợp bộ lọc.
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
