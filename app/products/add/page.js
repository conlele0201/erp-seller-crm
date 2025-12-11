// app/products/add/page.js
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function ProductAddPage() {
  // state form
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("Đang bán");
  const [channels, setChannels] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [note, setNote] = useState("");

  // state danh mục
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  // state submit
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // load danh mục từ bảng product_categories
  useEffect(() => {
    const loadCategories = async () => {
      setLoadingCategories(true);
      const { data, error } = await supabase
        .from("product_categories")
        .select("id, name, is_active")
        .order("name", { ascending: true });

      if (!error && data) {
        // chỉ lấy danh mục active (nếu có cột is_active)
        const active = data.filter((c) =>
          typeof c.is_active === "boolean" ? c.is_active : true
        );
        setCategories(active);
      } else {
        console.error("Load categories error:", error);
      }

      setLoadingCategories(false);
    };

    loadCategories();
  }, []);

  // style giống trang products
  const pageStyle = {
    padding: "32px 64px",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const headerStyle = { marginBottom: 24 };
  const titleStyle = { fontSize: 28, fontWeight: 700, marginBottom: 8 };
  const subtitleStyle = { fontSize: 15, color: "#4b5563" };

  const formCardStyle = {
    marginTop: 16,
    borderRadius: 12,
    border: "1px solid #f3f4f6",
    backgroundColor: "#fff",
    boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
    padding: 24,
    maxWidth: 900,
  };

  const formRowStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 16,
    marginBottom: 16,
  };

  const fullRowStyle = {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr)",
    gap: 16,
    marginBottom: 16,
  };

  const labelStyle = {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 4,
    color: "#374151",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 10px",
    borderRadius: 6,
    border: "1px solid #e5e7eb",
    fontSize: 14,
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: 80,
    resize: "vertical",
  };

  const btnPrimary = {
    padding: "10px 18px",
    borderRadius: 6,
    border: "none",
    backgroundColor: "#ef4444",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 14,
  };

  const btnSecondary = {
    padding: "10px 18px",
    borderRadius: 6,
    border: "1px solid #e5e7eb",
    backgroundColor: "#fff",
    color: "#111827",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: 14,
    marginRight: 8,
  };

  const errorStyle = {
    marginBottom: 12,
    color: "#b91c1c",
    fontSize: 13,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // kiểm tra đơn giản
    if (!name.trim()) {
      setErrorMsg("Vui lòng nhập tên sản phẩm.");
      return;
    }
    if (!categoryId) {
      setErrorMsg("Vui lòng chọn danh mục.");
      return;
    }

    setSaving(true);

    const priceNumber = price ? Number(price) : null;
    const stockNumber = stock ? Number(stock) : null;

    const { error } = await supabase.from("products").insert([
      {
        name: name.trim(),
        sku: sku.trim() || null,
        category_id: Number(categoryId),
        price: priceNumber,
        stock: stockNumber,
        status: status || null,
        channels: channels || null,
        image_url: imageUrl || null,
        note: note || null,
      },
    ]);

    setSaving(false);

    if (error) {
      console.error("Insert product error:", error);
      setErrorMsg("Lưu sản phẩm thất bại. Anh kiểm tra lại giúp em.");
      return;
    }

    // thành công -> quay lại trang danh sách
    window.location.href = "/products";
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Thêm sản phẩm mới</h1>
        <p style={subtitleStyle}>
          Điền thông tin sản phẩm, chọn danh mục, trạng thái và kênh bán.
        </p>
      </header>

      <section style={formCardStyle}>
        {errorMsg && <div style={errorStyle}>{errorMsg}</div>}

        <form onSubmit={handleSubmit}>
          {/* Hàng 1: Tên & SKU */}
          <div style={formRowStyle}>
            <div>
              <div style={labelStyle}>Tên sản phẩm *</div>
              <input
                style={inputStyle}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ví dụ: Serum phục hồi da"
              />
            </div>
            <div>
              <div style={labelStyle}>Mã SKU</div>
              <input
                style={inputStyle}
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                placeholder="Ví dụ: SER-022"
              />
            </div>
          </div>

          {/* Hàng 2: Danh mục & Trạng thái */}
          <div style={formRowStyle}>
            <div>
              <div style={labelStyle}>Danh mục *</div>
              <select
                style={inputStyle}
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                disabled={loadingCategories}
              >
                <option value="">
                  {loadingCategories ? "Đang tải danh mục..." : "Chọn danh mục"}
                </option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div style={labelStyle}>Trạng thái</div>
              <select
                style={inputStyle}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Đang bán">Đang bán</option>
                <option value="Sắp hết hàng">Sắp hết hàng</option>
                <option value="Hết hàng">Hết hàng</option>
                <option value="Ngưng bán">Ngưng bán</option>
              </select>
            </div>
          </div>

          {/* Hàng 3: Giá & Tồn kho */}
          <div style={formRowStyle}>
            <div>
              <div style={labelStyle}>Giá bán (VNĐ)</div>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Ví dụ: 289000"
              />
            </div>
            <div>
              <div style={labelStyle}>Tồn kho</div>
              <input
                style={inputStyle}
                type="number"
                min="0"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="Ví dụ: 50"
              />
            </div>
          </div>

          {/* Hàng 4: Kênh bán & Hình ảnh (URL tạm) */}
          <div style={formRowStyle}>
            <div>
              <div style={labelStyle}>Kênh bán</div>
              <input
                style={inputStyle}
                value={channels}
                onChange={(e) => setChannels(e.target.value)}
                placeholder="Ví dụ: Shopee, TikTok"
              />
            </div>
            <div>
              <div style={labelStyle}>Hình ảnh (URL tạm)</div>
              <input
                style={inputStyle}
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Tạm thời nhập URL, sau mình nâng cấp upload file"
              />
            </div>
          </div>

          {/* Hàng 5: Ghi chú */}
          <div style={fullRowStyle}>
            <div>
              <div style={labelStyle}>Ghi chú nội bộ</div>
              <textarea
                style={textareaStyle}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ví dụ: Sản phẩm bán chạy, nên ưu tiên livestream..."
              />
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ marginTop: 8, display: "flex", justifyContent: "flex-end" }}>
            <button
              type="button"
              style={btnSecondary}
              onClick={() => (window.location.href = "/products")}
              disabled={saving}
            >
              Hủy
            </button>
            <button type="submit" style={btnPrimary} disabled={saving}>
              {saving ? "Đang lưu..." : "Lưu sản phẩm"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
