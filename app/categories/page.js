"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("product_categories")
        .select("*")
        .order("id", { ascending: true });

      if (!error && data) setCategories(data);
      setLoading(false);
    };

    loadData();
  }, []);

  // STYLE GIỮ NGUYÊN CHUẨN ERP ĐANG DÙNG
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

  const tableCardStyle = {
    marginTop: 8,
    borderRadius: 12,
    border: "1px solid #f3f4f6",
    backgroundColor: "#fff",
    boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
    overflow: "hidden",
  };

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
    fontWeight: 600,
    color: "#4b5563",
  };

  const tdStyle = {
    padding: "12px 16px",
    borderBottom: "1px solid #f3f4f6",
    verticalAlign: "middle",
  };

  const statusBadge = (s) => ({
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600,
    backgroundColor: s ? "#dcfce7" : "#fee2e2",
    color: s ? "#166534" : "#b91c1c",
  });

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
      {/* Header */}
      <header style={headerStyle}>
        <h1 style={titleStyle}>Danh mục sản phẩm</h1>
        <p style={subtitleStyle}>Quản lý nhóm danh mục sản phẩm.</p>
      </header>

      {/* Toolbar */}
      <div style={toolbarStyle}>
        <div></div>
        <button
          type="button"
          style={btnPrimary}
          onClick={() => (window.location.href = "/categories/add")}
        >
          + Thêm danh mục
        </button>
      </div>

      {/* Table */}
      <section style={tableCardStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Tên danh mục</th>
              <th style={thStyle}>Mô tả</th>
              <th style={thStyle}>Trạng thái</th>
              <th style={thStyle}>Thao tác</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td style={tdStyle} colSpan={5}>
                  Đang tải dữ liệu…
                </td>
              </tr>
            ) : categories.length === 0 ? (
              <tr>
                <td style={tdStyle} colSpan={5}>
                  Chưa có danh mục nào.
                </td>
              </tr>
            ) : (
              categories.map((c) => (
                <tr key={c.id}>
                  <td style={tdStyle}>{c.id}</td>
                  <td style={tdStyle}>{c.name}</td>
                  <td style={tdStyle}>{c.description || "—"}</td>
                  <td style={tdStyle}>
                    <span style={statusBadge(c.is_active)}>
                      {c.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    <button
                      type="button"
                      style={actionBtnStyle}
                      onClick={() =>
                        (window.location.href = `/categories/edit/${c.id}`)
                      }
                    >
                      Sửa
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

