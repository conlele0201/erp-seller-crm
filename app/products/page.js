"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

// format tiền
const formatPrice = (v) => {
  if (v === null || v === undefined) return "—";
  try {
    return v.toLocaleString("vi-VN");
  } catch {
    return v;
  }
};

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // ===== LOAD PRODUCTS + STATUS (JOIN) =====
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("products")
        .select(`
          product_id,
          name,
          sku,
          category,
          price,
          stock,
          channels,
          updated_at,
          product_statuses (
            status_id,
            status_name
          )
        `)
        .order("product_id", { ascending: true });

      if (!error && data) {
        setProducts(data);
      } else {
        console.error(error);
      }

      const { data: statusData } = await supabase
        .from("product_statuses")
        .select("status_id, status_name")
        .order("status_id");

      setStatuses(statusData || []);
      setLoading(false);
    };

    loadData();
  }, []);

  // ===== FILTER =====
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search ||
        p.name?.toLowerCase().includes(search.toLowerCase()) ||
        p.sku?.toLowerCase().includes(search.toLowerCase());

      const matchStatus = statusFilter
        ? p.product_statuses?.status_id === Number(statusFilter)
        : true;

      return matchSearch && matchStatus;
    });
  }, [products, search, statusFilter]);

  // ===== STYLES (GIỮ NGUYÊN) =====
  const pageStyle = { padding: "32px 64px", fontFamily: "system-ui" };
  const headerStyle = { marginBottom: 24 };
  const titleStyle = { fontSize: 32, fontWeight: 700, marginBottom: 8 };
  const subtitleStyle = { fontSize: 16, color: "#4b5563" };
  const toolbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  };
  const inputStyle = {
    padding: "8px 10px",
    borderRadius: 6,
    border: "1px solid #e5e7eb",
  };
  const tableStyle = { width: "100%", borderCollapse: "collapse" };
  const thStyle = {
    padding: 12,
    textAlign: "left",
    background: "#f9fafb",
    borderBottom: "1px solid #e5e7eb",
  };
  const tdStyle = { padding: 12, borderBottom: "1px solid #f3f4f6" };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Sản phẩm / Dịch vụ</h1>
        <p style={subtitleStyle}>
          Quản lý toàn bộ sản phẩm đang bán trên các kênh
        </p>
      </header>

      {/* FILTER */}
      <div style={toolbarStyle}>
        <input
          style={inputStyle}
          placeholder="Tìm theo tên, SKU..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          style={inputStyle}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Tất cả trạng thái</option>
          {statuses.map((s) => (
            <option key={s.status_id} value={s.status_id}>
              {s.status_name}
            </option>
          ))}
        </select>
      </div>

      {/* TABLE */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Tên</th>
            <th style={thStyle}>SKU</th>
            <th style={thStyle}>Giá</th>
            <th style={thStyle}>Tồn</th>
            <th style={thStyle}>Trạng thái</th>
            <th style={thStyle}>Cập nhật</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6} style={tdStyle}>
                Đang tải…
              </td>
            </tr>
          ) : filteredProducts.length === 0 ? (
            <tr>
              <td colSpan={6} style={tdStyle}>
                Không có dữ liệu
              </td>
            </tr>
          ) : (
            filteredProducts.map((p) => (
              <tr key={p.product_id}>
                <td style={tdStyle}>{p.name}</td>
                <td style={tdStyle}>{p.sku}</td>
                <td style={tdStyle}>{formatPrice(p.price)}</td>
                <td style={tdStyle}>{p.stock}</td>
                <td style={tdStyle}>
                  {p.product_statuses?.status_name || "—"}
                </td>
                <td style={tdStyle}>
                  {p.updated_at
                    ? new Date(p.updated_at).toLocaleString("vi-VN")
                    : "—"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
