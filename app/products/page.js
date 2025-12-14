"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [channel, setChannel] = useState("");

  // ===== LOAD DATA TỪ DATABASE =====
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      // 1. Load danh mục
      const { data: categoryData } = await supabase
        .from("product_categories")
        .select("id, name")
        .order("name");

      // 2. Load trạng thái
      const { data: statusData } = await supabase
        .from("product_statuses")
        .select("id, name")
        .order("id");

      // 3. Load sản phẩm + JOIN
      const { data: productData, error } = await supabase
        .from("products")
        .select(`
          id,
          name,
          sku,
          price,
          stock,
          channels,
          image_url,
          updated_at,
          product_categories ( id, name ),
          product_statuses ( id, name )
        `)
        .order("id");

      if (error) {
        console.error("Load products error:", error);
      } else {
        setProducts(productData || []);
      }

      setCategories(categoryData || []);
      setStatuses(statusData || []);
      setLoading(false);
    };

    loadData();
  }, []);

  // ===== STATS =====
  const totalProducts = products.length;
  const sellingCount = products.filter(
    (p) => p.product_statuses?.name === "Đang bán"
  ).length;
  const lowStockCount = products.filter(
    (p) => p.stock !== null && p.stock <= 10
  ).length;
  const hiddenCount = products.filter(
    (p) => !p.channels || p.channels.trim() === ""
  ).length;

  // ===== FILTER =====
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search ||
        p.name?.toLowerCase().includes(search.toLowerCase()) ||
        p.sku?.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category
        ? String(p.product_categories?.id) === category
        : true;

      const matchStatus = status
        ? String(p.product_statuses?.id) === status
        : true;

      const matchChannel = channel
        ? (p.channels || "").toLowerCase().includes(channel.toLowerCase())
        : true;

      return matchSearch && matchCategory && matchStatus && matchChannel;
    });
  }, [products, search, category, status, channel]);

  // ===== STYLE (GIỮ NGUYÊN 100%) =====
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
  const filtersCardStyle = {
    marginTop: 8,
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
    border: "1px solid #f3f4f6",
    backgroundColor: "#fff",
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
          <button
            style={btnPrimary}
            onClick={() => router.push("/products/add")}
          >
            + Thêm sản phẩm
          </button>
        </div>
        <div style={{ fontSize: 13, color: "#6b7280" }}>
          Tổng cộng <strong>{totalProducts}</strong> sản phẩm đang quản lý
        </div>
      </div>

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
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
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
              {statuses.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
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
              <option value="shopee">Shopee</option>
              <option value="tiktok">TikTok</option>
              <option value="website">Website</option>
            </select>
          </div>
        </div>
      </section>

      {!loading && filteredProducts.length === 0 && (
        <div>Không có sản phẩm nào.</div>
      )}
    </div>
  );
}
