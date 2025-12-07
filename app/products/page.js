"use client";
import { useState, useMemo } from "react";

export default function ProductsPage() {
  // ====================== MOCK DATA ======================
  const stats = [
    { label: "Tổng số sản phẩm", value: "120", sub: "+5 so với hôm qua" },
    { label: "Đang bán", value: "98", sub: "+3 sản phẩm mới" },
    { label: "Sắp hết hàng (≤ 10)", value: "7", sub: "Cần nhập thêm" },
    { label: "Đang ẩn trên kênh bán", value: "15", sub: "Chưa lên kênh" },
  ];

  const initialData = [
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
  ];

  const [products, setProducts] = useState(initialData);

  // ====================== FILTER STATES ======================
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [channel, setChannel] = useState("");

  // ====================== MODAL STATES ======================
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    sku: "",
    category: "",
    price: "",
    stock: "",
    status: "Đang bán",
    channel: "",
  });

  const updateForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const saveProduct = () => {
    const newItem = {
      name: form.name,
      sku: form.sku,
      category: form.category,
      price: form.price + "đ",
      stock: form.stock,
      status: form.status,
      channel: form.channel,
      updatedAt: "Vừa xong",
    };

    setProducts([...products, newItem]);
    setShowModal(false);

    // reset form
    setForm({
      name: "",
      sku: "",
      category: "",
      price: "",
      stock: "",
      status: "Đang bán",
      channel: "",
    });
  };

  // ====================== FILTER LOGIC ======================
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const s = search.toLowerCase();
      const matchSearch = p.name.toLowerCase().includes(s) || p.sku.toLowerCase().includes(s);

      const matchCategory = category ? p.category === category : true;
      const matchStatus = status ? p.status === status : true;
      const matchChannel = channel ? p.channel.toLowerCase().includes(channel.toLowerCase()) : true;

      return matchSearch && matchCategory && matchStatus && matchChannel;
    });
  }, [search, category, status, channel, products]);

  // ====================== UI STYLES (GIỮ NGUYÊN) ======================
  const pageStyle = { padding: "32px 40px", fontFamily: "system-ui" };

  const modalOverlay = {
    position: "fixed",
    top: 0, left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  const modalBox = {
    width: "480px",
    background: "#fff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  };

  const input = {
    width: "100%",
    padding: "10px",
    borderRadius: 6,
    border: "1px solid #e5e7eb",
    fontSize: 14,
  };

  const label = { fontSize: 14, fontWeight: 600, marginTop: 12, marginBottom: 6 };

  const btnRed = {
    padding: "10px 16px",
    borderRadius: 6,
    border: "none",
    background: "#ef4444",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    marginRight: 8,
  };

  const btnGray = {
    padding: "10px 16px",
    borderRadius: 6,
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
  };

  // ====================== RENDER ======================
  return (
    <div style={pageStyle}>
      {/* Header */}
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>Sản phẩm / Dịch vụ</h1>

      {/* Toolbar */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
        <button style={{ padding: "8px 16px", borderRadius: 6, border: "1px solid #ddd" }}>
          Xuất file
        </button>

        <button
          style={{
            padding: "8px 16px",
            borderRadius: 6,
            border: "none",
            background: "#ef4444",
            color: "#fff",
            fontWeight: 600,
          }}
          onClick={() => setShowModal(true)}
        >
          + Thêm sản phẩm
        </button>
      </div>

      {/* Filters */}
      <div style={{ marginTop: 20 }}>
        <input
          style={input}
          placeholder="Tìm theo tên hoặc SKU..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <table style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>SKU</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Tồn kho</th>
            <th>Trạng thái</th>
            <th>Kênh bán</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p) => (
            <tr key={p.sku}>
              <td>{p.name}</td>
              <td>{p.sku}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
              <td>{p.status}</td>
              <td>{p.channel}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ====================== MODAL ====================== */}
      {showModal && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <h2 style={{ marginBottom: 12 }}>Thêm sản phẩm mới</h2>

            <label style={label}>Tên sản phẩm</label>
            <input style={input} value={form.name} onChange={(e) => updateForm("name", e.target.value)} />

            <label style={label}>SKU</label>
            <input style={input} value={form.sku} onChange={(e) => updateForm("sku", e.target.value)} />

            <label style={label}>Danh mục</label>
            <input style={input} value={form.category} onChange={(e) => updateForm("category", e.target.value)} />

            <label style={label}>Giá bán</label>
            <input style={input} value={form.price} onChange={(e) => updateForm("price", e.target.value)} />

            <label style={label}>Tồn kho</label>
            <input style={input} value={form.stock} onChange={(e) => updateForm("stock", e.target.value)} />

            <label style={label}>Trạng thái</label>
            <select style={input} value={form.status} onChange={(e) => updateForm("status", e.target.value)}>
              <option value="Đang bán">Đang bán</option>
              <option value="Sắp hết hàng">Sắp hết hàng</option>
              <option value="Hết hàng">Hết hàng</option>
            </select>

            <label style={label}>Kênh bán</label>
            <input style={input} value={form.channel} onChange={(e) => updateForm("channel", e.target.value)} />

            {/* Buttons */}
            <div style={{ marginTop: 20, textAlign: "right" }}>
              <button style={btnGray} onClick={() => setShowModal(false)}>Hủy</button>
              <button style={btnRed} onClick={saveProduct}>Lưu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
