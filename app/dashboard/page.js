export default function DashboardPage() {
  // KPI mock data
  const kpis = [
    {
      title: "Doanh thu hôm nay",
      value: "12,540,000₫",
      change: "+12%",
      icon: "💰",
    },
    {
      title: "Đơn hàng hôm nay",
      value: "128",
      change: "+8%",
      icon: "🛒",
    },
    {
      title: "Khách hàng mới",
      value: "34",
      change: "+4%",
      icon: "👤",
    },
    {
      title: "Tin nhắn AI xử lý",
      value: "256",
      change: "+21%",
      icon: "🤖",
    },
  ];

  // Top sản phẩm mock
  const topProducts = [
    { name: "Áo thun nam", sold: 54, revenue: "6,480,000₫" },
    { name: "Váy body nữ", sold: 32, revenue: "5,120,000₫" },
    { name: "Combo chăm sóc da", sold: 21, revenue: "2,730,000₫" },
  ];

  return (
    <div style={{ padding: "24px" }}>
      {/* HEADER */}
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "700",
          marginBottom: "8px",
        }}
      >
        Dashboard
      </h1>
      <p
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "28px",
        }}
      >
        Tổng quan hoạt động hôm nay của shop
      </p>

      {/* KPI GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {kpis.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "28px" }}>{item.icon}</div>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
                marginTop: "10px",
              }}
            >
              {item.title}
            </p>

            <p
              style={{
                fontSize: "24px",
                fontWeight: "700",
                margin: "4px 0 6px",
              }}
            >
              {item.value}
            </p>

            <p
              style={{
                fontSize: "14px",
                color: item.change.indexOf("+") !== -1 ? "green" : "red",
              }}
            >
              {item.change} so với hôm qua
            </p>
          </div>
        ))}
      </div>

      {/* BIỂU ĐỒ (PLACEHOLDER) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            height: "280px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Doanh thu 7 ngày gần nhất</h3>
          <div
            style={{
              height: "200px",
              background: "#f3f4f6",
              borderRadius: "10px",
              marginTop: "12px",
            }}
          />
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            height: "280px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Đơn hàng theo kênh</h3>
          <div
            style={{
              height: "200px",
              background: "#f3f4f6",
              borderRadius: "10px",
              marginTop: "12px",
            }}
          />
        </div>
      </div>

      {/* TOP SẢN PHẨM */}
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginBottom: "40px",
        }}
      >
        <h3 style={{ marginBottom: "12px" }}>Sản phẩm bán chạy</h3>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr style={{ textAlign: "left", color: "#666" }}>
              <th style={{ padding: "8px 0" }}>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Doanh thu</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((p, i) => (
              <tr key={i} style={{ borderTop: "1px solid #eee" }}>
                <td style={{ padding: "10px 0" }}>{p.name}</td>
                <td>{p.sold}</td>
                <td>{p.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* GỢI Ý TỪ AI */}
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          marginBottom: "60px",
        }}
      >
        <h3 style={{ marginBottom: "12px" }}>Gợi ý từ AI</h3>
        <ul style={{ paddingLeft: "20px", lineHeight: 1.6 }}>
          <li>Nên livestream lúc 19:00 để tăng tỉ lệ chốt đơn.</li>
          <li>Áo thun nam đang có xu hướng tăng, nên đẩy quảng cáo.</li>
          <li>Thời gian phản hồi khách &lt; 2 phút đang rất tốt, cần duy trì.</li>
        </ul>
      </div>
    </div>
  );
}
