"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("Đang bán");
  const [channels, setChannels] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [saving, setSaving] = useState(false);

  const handleSubmit = async () => {
    if (!name || !sku || !category) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    setSaving(true);

    let image_url = null;

    // ===== UPLOAD FILE LÊN /public/images/products =====
    if (imageFile) {
      const fileName = `${Date.now()}-${imageFile.name}`;
      image_url = `/images/products/${fileName}`;

      // ⚠️ Vercel không cho upload runtime
      // → Anh phải tự upload file vào GitHub trước (như sản phẩm đầu tiên)
      // Em chỉ lưu đường dẫn
    }

    const { error } = await supabase.from("products").insert([
      {
        name,
        sku,
        category,
        price: Number(price),
        stock: Number(stock),
        status,
        channels,
        image_url,
      },
    ]);

    setSaving(false);

    if (error) {
      console.error(error);
      alert("Lỗi lưu sản phẩm!");
      return;
    }

    alert("Thêm sản phẩm thành công!");
    router.push("/products");
  };

  const pageStyle = { padding: "32px 64px" };
  const input = {
    width: "100%",
    padding: "10px",
    borderRadius: 6,
    border: "1px solid #ccc",
    marginBottom: 16,
    fontSize: 15,
  };
  const label = { fontWeight: 600, marginBottom: 6, display: "block" };
  const btn = {
    padding: "10px 20px",
    background: "#ef4444",
    color: "#fff",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>Thêm sản phẩm</h1>

      <div style={{ maxWidth: 480 }}>
        <label style={label}>Tên sản phẩm</label>
        <input style={input} value={name} onChange={(e) => setName(e.target.value)} />

        <label style={label}>SKU</label>
        <input style={input} value={sku} onChange={(e) => setSku(e.target.value)} />

        <label style={label}>Danh mục</label>
        <input style={input} value={category} onChange={(e) => setCategory(e.target.value)} />

        <label style={label}>Giá bán</label>
        <input style={input} type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label style={label}>Tồn kho</label>
        <input style={input} type="number" value={stock} onChange={(e) => setStock(e.target.value)} />

        <label style={label}>Trạng thái</label>
        <select style={input} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Đang bán</option>
          <option>Sắp hết hàng</option>
          <option>Hết hàng</option>
        </select>

        <label style={label}>Kênh bán</label>
        <input
          style={input}
          value={channels}
          placeholder="Shopee, TikTok..."
          onChange={(e) => setChannels(e.target.value)}
        />

        <label style={label}>Hình sản phẩm (chọn file)</label>
        <input
          type="file"
          accept="image/*"
          style={{ marginBottom: 20 }}
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        <button style={btn} onClick={handleSubmit} disabled={saving}>
          {saving ? "Đang lưu..." : "Lưu sản phẩm"}
        </button>
      </div>
    </div>
  );
}
