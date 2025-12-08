"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect, useMemo } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ProductsPage() {
  // ====================== STATES ======================
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [channel, setChannel] = useState("");

  // ====================== FETCH DATA ======================
  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await supabase.from("products").select("*");
      if (!error) setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  // ====================== FILTER LOGIC ======================
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.sku.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category ? p.category === category : true;
      const matchStatus = status ? p.status === status : true;
      const matchChannel = channel
        ? (p.channel || "")
            .toLowerCase()
            .includes(channel.toLowerCase())
        : true;

      return matchSearch && matchCategory && matchStatus && matchChannel;
    });
  }, [products, search, category, status, channel]);

  // ====================== UI RENDER ======================
  if (loading) {
    return (
      <div style={{ padding: 40, fontSize: 18 }}>
        Đang tải dữ liệu sản phẩm...
      </div>
    );
  }

  return (
    <div style={{ padding: "32px 40px", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        Sản phẩm / Dịch vụ
      </h1>

      <p style={{ fontSize: 16, color: "#4b5563" }}>
        Quản lý toàn bộ sản phẩm đang bán trên các kênh.
      </p>

      {/* Bộ lọc */}
      <div style={{ marginTop: 24 }}>
        <input
          placeholder="Tìm tên, SKU..."
          style={{
            padding: 8,
            border: "1px solid #ddd",
            borderRadius: 6,
            width: 250,
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Bảng */}
      <table style={{ width: "100%", marginTop: 24 }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: 12 }}>Tên sản phẩm</th>
            <th style={{ textAlign: "left", padding: 12 }}>SKU</th>
            <th style={{ textAlign: "left", padding: 12 }}>Danh mục</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((p) => (
            <tr key={p.id}>
              <td style={{ padding: 12 }}>{p.name}</td>
              <td style={{ padding: 12 }}>{p.sku}</td>
              <td style={{ padding: 12 }}>{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
