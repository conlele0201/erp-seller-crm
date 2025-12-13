"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

const formatPrice = (value) => {
  if (value == null) return "—";
  return Number(value).toLocaleString("vi-VN");
};

export default function ProductsPage() {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  // ================= LOAD DATA =================
  useEffect(() => {
    const load = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("products")
        .select(`
          id,
          name,
          sku,
          price,
          stock,
          image_url,
          updated_at,
          product_categories ( id, name ),
          product_statuses ( id, name )
        `)
        .order("updated_at", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    };

    load();
  }, []);

  // ================= FILTER =================
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search ||
        p.name?.toLowerCase().includes(search.toLowerCase()) ||
        p.sku?.toLowerCase().includes(search.toLowerCase());

      const matchStatus = status
        ? p.product_statuses?.name === status
        : true;

      return matchSearch && matchStatus;
    });
  }, [products, search, status]);

  const statusOptions = useMemo(
    () =>
      Array.from(
        new Set(
          products
            .map((p) => p.product_statuses?.name)
            .filter(Boolean)
        )
      ),
    [products]
  );

  // ================= UI (GIỮ NGUYÊN) =================
  return (
    <div style={{ padding: "32px 64px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>Sản phẩm / Dịch vụ</h1>

      <div style={{ margin: "24px 0", display: "flex", gap: 12 }}>
        <input
          placeholder="Tìm theo tên, SKU..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Tất cả trạng thái</option>
          {statusOptions.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <button onClick={() => router.push("/products/add")}>
          + Thêm sản phẩm
        </button>
      </div>

      <table width="100%" cellPadding={10}>
        <thead>
          <tr>
            <th>Hình</th>
            <th>Tên</th>
            <th>SKU</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Tồn</th>
            <th>Trạng thái</th>
            <th>Cập nhật</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={8}>Đang tải...</td>
            </tr>
          ) : filteredProducts.length === 0 ? (
            <tr>
              <td colSpan={8}>Không có sản phẩm</td>
            </tr>
          ) : (
            filteredProducts.map((p) => (
              <tr key={p.id}>
                <td>
                  {p.image_url ? (
                    <img
                      src={p.image_url}
                      width={48}
                      height={48}
                      style={{ borderRadius: 8 }}
                    />
                  ) : (
                    "—"
                  )}
                </td>
                <td>{p.name}</td>
                <td>{p.sku}</td>
                <td>{p.product_categories?.name}</td>
                <td>{formatPrice(p.price)}</td>
                <td>{p.stock}</td>
                <td>{p.product_statuses?.name}</td>
                <td>
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
