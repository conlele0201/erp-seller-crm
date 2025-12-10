// app/products/page.js
"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

// format số tiền
const formatPrice = (value) => {
  if (value === null || value === undefined) return "—";
  try {
    return value.toLocaleString("vi-VN");
  } catch {
    return value;
  }
};

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [channel, setChannel] = useState("");

  // ====== STATE CHO MODAL THÊM SẢN PHẨM ======
  const [showAdd, setShowAdd] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "",
    sku: "",
    category: "",
    price: "",
    stock: "",
    status: "Đang bán",
    channels: "",
    image_url: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  // ===== LOAD DATA TỪ SUPABASE =====
  const loadProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("product_id", { ascending: true });

    if (!error && data) {
      setProducts(data);
    } else {
      console.error("Load products error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // ===== STATS TỪ DATA THẬT =====
  const totalProducts = products.length;
  const sellingCount = products.filter((p) => p.status === "Đang bán").length;
  const lowStockCount = products.filter(
    (p) => p.stock !== null && p.stock <= 10
  ).length;
  const hiddenCount = products.filter(
    (p) => !p.channels || p.channels.trim() === ""
  ).length;

  const stats = [
    {
      label: "Tổng số sản phẩm",
      value: totalProducts,
      sub: "+0 so với hôm qua",
    },
    {
      label: "Đang bán",
      value: sellingCount,
      sub: "+0 sản phẩm mới",
    },
    {
      label: "Sắp hết hàng (≤ 10)",
      value: lowStockCount,
      sub: "Cần nhập thêm",
    },
    {
      label: "Đang ẩn trên kênh bán",
      value: hiddenCount,
      sub: "Chưa lên kênh",
    },
  ];

  // ===== FILTER UI =====
  const categoryOptions = useMemo(
    () =>
      Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
    [products]
  );

  const statusOptions = useMemo(
    () =>
      Array.from(new Set(products.map((p) => p.status).filter(Boolean))),
    [products]
  );

  const channelOptions = useMemo(
    () =>
      Array.from(new Set(products.map((p) => p.channels).filter(Boolean))),
    [products]
  );

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search ||
        p.name?.toLowerCase().includes(search.toLowerCase()) ||
        p.sku?.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category ? p.category === category : true;
      const matchStatus = status ? p.status === status : true;
      const matchChannel = channel
        ? (p.channels || "").toLowerCase().includes(channel.toLowerCase())
        : true;

      return matchSearch && matchCategory && matchStatus && matchChannel;
    });
  }, [products, search, category, status, channel]);

  // ===== STYLE (giữ giống layout cũ) =====
  const pageStyle = {
    padding: "32px 64px",
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
  const tableStyle = { width: "100%", borderCollapse: "collapse", fontSize: 14 };
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

  const statusBadge = (s) => {
    let bg = "#dcfce7";
    let color = "#166534";

    if (s === "Sắp hết hàng") {
      bg = "#fef3c7";
      color = "#92400e";
    } else if (s === "Hết hàng") {
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

  // ===== STYLE MODAL THÊM SẢN PHẨM =====
  const modalOverlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
  };

  const modalStyle = {
    width: "480px",
    maxWidth: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 20px 60px rgba(15,23,42,0.25)",
  };

  const modalTitleStyle = {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 16,
  };

  const modalFieldStyle = {
    marginBottom: 12,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  };

  const modalLabelStyle = {
    fontSize: 13,
    fontWeight: 600,
    color: "#374151",
  };

  const modalInputStyle = {
    width: "100%",
    padding: "8px 10px",
    borderRadius: 6,
    border: "1px solid #e5e7eb",
    fontSize: 14,
  };

  const modalFooterStyle = {
    marginTop: 16,
    display: "flex",
    justifyContent: "flex-end",
    gap: 8,
  };

  // ===== HANDLER THÊM SẢN PHẨM =====
  const openAddModal = () => {
    setForm({
      name: "",
      sku: "",
      category: "",
      price: "",
      stock: "",
      status: "Đang bán",
      channels: "",
      image_url: "",
    });
    setErrorMsg("");
    setShowAdd(true);
  };

  const handleFormChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!form.name.trim() || !form.sku.trim()) {
      setErrorMsg("Tên sản phẩm và SKU là bắt buộc.");
      return;
    }

    const priceNumber =
      form.price === "" ? null : Number.parseInt(form.price, 10);
    const stockNumber =
      form.stock === "" ? null : Number.parseInt(form.stock, 10);

    if (Number.isNaN(priceNumber) || Number.isNaN(stockNumber)) {
      setErrorMsg("Giá bán và Tồn kho phải là số.");
      return;
    }

    // tạo product_id tăng dần
    const maxProductId =
      products.reduce(
        (max, p) =>
          p.product_id && p.product_id > max ? p.product_id : max,
        0
      ) || 0;
    const nextProductId = maxProductId + 1;

    setSaving(true);

    const { error } = await supabase.from("products").insert([
      {
        product_id: nextProductId,
        name: form.name.trim(),
        sku: form.sku.trim(),
        category: form.category.trim() || null,
        price: priceNumber,
        stock: stockNumber,
        status: form.status.trim() || null,
        channels: form.channels.trim() || null,
        image_url: form.image_url.trim() || null,
      },
    ]);

    setSaving(false);

    if (error) {
      console.error("Insert product error:", error);
      setErrorMsg("Lưu sản phẩm thất bại. Vui lòng thử lại.");
      return;
    }

    // reload list
    await loadProducts();
    setShowAdd(false);
  };

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
          <button type="button" style={btnPrimary} onClick={openAddModal}>
            + Thêm sản phẩm
          </button>
        </div>
        <div style={{ fontSize: 13, color: "#6b7280" }}>
          Tổng cộng <strong>{totalProducts}</strong> sản phẩm đang quản lý
        </div>
      </div>

      {/* Stats */}
      <section style={statsGridStyle}>
        {stats.map((s) => (
          <div key={s.label} style={statCardStyle}>
            <div style={statLabelStyle}>{s.label}</div>
            <div style={statValueStyle}>{s.value}</div>
            <div style={statSubStyle}>{s.sub}</div>
          </div>
        ))}
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Tất cả danh mục</option>
              {categoryOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div style={filterItemStyle}>
            <select
              style={inputStyle}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Tất cả trạng thái</option>
              {statusOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div style={filterItemStyle}>
            <select
              style={inputStyle}
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
            >
              <option value="">Tất cả kênh bán</option>
              {channelOptions.map((ch) => (
                <option key={ch} value={ch}>
                  {ch}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Table */}
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
              {loading ? (
                <tr>
                  <td style={tdStyle} colSpan={9}>
                    Đang tải dữ liệu…
                  </td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td style={tdStyle} colSpan={9}>
                    Không có sản phẩm nào.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((p) => (
                  <tr key={p.id}>
                    <td style={tdStyle}>{p.name}</td>
                    <td style={tdStyle}>{p.sku}</td>
                    <td style={tdStyle}>{p.category}</td>
                    <td style={tdStyle}>{formatPrice(p.price)}</td>
                    <td style={tdStyle}>{p.stock}</td>
                    <td style={tdStyle}>
                      <span style={statusBadge(p.status)}>{p.status}</span>
                    </td>
                    <td style={tdStyle}>{p.channels || "—"}</td>
                    <td style={tdStyle}>
                      {p.updated_at
                        ? new Date(p.updated_at).toLocaleString("vi-VN")
                        : "—"}
                    </td>
                    <td style={tdStyle}>
                      <button type="button" style={actionBtnStyle}>
                        Sửa
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* MODAL THÊM SẢN PHẨM */}
      {showAdd && (
        <div style={modalOverlayStyle}>
          <form style={modalStyle} onSubmit={handleSaveProduct}>
            <div style={modalTitleStyle}>Thêm sản phẩm</div>

            <div style={modalFieldStyle}>
              <label style={modalLabelStyle}>Tên sản phẩm *</label>
              <input
                style={modalInputStyle}
                value={form.name}
                onChange={(e) => handleFormChange("name", e.target.value)}
                placeholder="Ví dụ: Áo thun nam basic"
              />
            </div>

            <div style={modalFieldStyle}>
              <label style={modalLabelStyle}>SKU *</label>
              <input
                style={modalInputStyle}
                value={form.sku}
                onChange={(e) => handleFormChange("sku", e.target.value)}
                placeholder="Ví dụ: ATN-001"
              />
            </div>

            <div style={modalFieldStyle}>
              <label style={modalLabelStyle}>Danh mục</label>
              <input
                style={modalInputStyle}
                value={form.category}
                onChange={(e) => handleFormChange("category", e.target.value)}
                placeholder="Ví dụ: Thời trang nam"
              />
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ ...modalFieldStyle, flex: 1 }}>
                <label style={modalLabelStyle}>Giá bán</label>
                <input
                  style={modalInputStyle}
                  value={form.price}
                  onChange={(e) => handleFormChange("price", e.target.value)}
                  placeholder="Ví dụ: 199000"
                />
              </div>
              <div style={{ ...modalFieldStyle, flex: 1 }}>
                <label style={modalLabelStyle}>Tồn kho</label>
                <input
                  style={modalInputStyle}
                  value={form.stock}
                  onChange={(e) => handleFormChange("stock", e.target.value)}
                  placeholder="Ví dụ: 23"
                />
              </div>
            </div>

            <div style={modalFieldStyle}>
              <label style={modalLabelStyle}>Trạng thái</label>
              <select
                style={modalInputStyle}
                value={form.status}
                onChange={(e) => handleFormChange("status", e.target.value)}
              >
                <option value="Đang bán">Đang bán</option>
                <option value="Sắp hết hàng">Sắp hết hàng</option>
                <option value="Hết hàng">Hết hàng</option>
              </select>
            </div>

            <div style={modalFieldStyle}>
              <label style={modalLabelStyle}>Kênh bán</label>
              <input
                style={modalInputStyle}
                value={form.channels}
                onChange={(e) => handleFormChange("channels", e.target.value)}
                placeholder="Ví dụ: Shopee, TikTok"
              />
            </div>

            <div style={modalFieldStyle}>
              <label style={modalLabelStyle}>Đường dẫn hình (image_url)</label>
              <input
                style={modalInputStyle}
                value={form.image_url}
                onChange={(e) => handleFormChange("image_url", e.target.value)}
                placeholder="/images/products/product-atn-001.jpg"
              />
            </div>

            {errorMsg && (
              <div
                style={{
                  color: "#b91c1c",
                  fontSize: 13,
                  marginTop: 4,
                  marginBottom: 4,
                }}
              >
                {errorMsg}
              </div>
            )}

            <div style={modalFooterStyle}>
              <button
                type="button"
                style={btnSecondary}
                onClick={() => !saving && setShowAdd(false)}
              >
                Đóng
              </button>
              <button type="submit" style={btnPrimary} disabled={saving}>
                {saving ? "Đang lưu..." : "Lưu sản phẩm"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
