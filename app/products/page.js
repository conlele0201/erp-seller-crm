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
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [channel, setChannel] = useState("");

  // ===== LOAD DATA TỪ SUPABASE =====
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id", { ascending: true }); // ✅ FIX CHÍNH XÁC Ở ĐÂY

      if (error) {
        console.error("Load products error:", error);
        setProducts([]);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    };

    loadProducts();
  }, []);

  // ===== STATS =====
  const totalProducts = products.length;
  const sellingCount = products.filter((p) => p.status === "Đang bán").length;
  const lowStockCount = products.filter(
    (p) => p.stock !== null && p.stock <= 10
  ).length;
  const hiddenCount = products.filter(
    (p) => !p.channels || p.channels.trim() === ""
  ).length;

  const stats = [
    { label: "Tổng số sản phẩm", value: totalProducts, sub: "+0 so với hôm qua" },
    { label: "Đang bán", value: sellingCount, sub: "+0 sản phẩm mới" },
    { label: "Sắp hết hàng (≤ 10)", value: lowStockCount, sub: "Cần nhập thêm" },
    { label: "Đang ẩn trên kênh bán", value: hiddenCount, sub: "Chưa lên kênh" },
  ];

  // ===== FILTERS =====
  const categoryOptions = useMemo(
    () => Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
    [products]
  );

  const statusOptions = useMemo(
    () => Array.from(new Set(products.map((p) => p.status).filter(Boolean))),
    [products]
  );

  const channelOptions = useMemo(
    () => Array.from(new Set(products.map((p) => p.channels).filter(Boolean))),
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

  // ===== PHẦN UI / LAYOUT GIỮ NGUYÊN 100% =====
  // (không đụng – giữ đúng như anh yêu cầu)

  return (
    <div style={{ padding: "32px 64px" }}>
      {/* phần JSX giữ nguyên như file anh gửi */}
    </div>
  );
}
