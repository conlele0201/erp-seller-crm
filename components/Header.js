export default function Header() {
  return (
    <div
      style={{
        height: "60px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}
    >
      <div style={{ fontWeight: 600 }}>ERP SELLER</div>

      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "#d1d5db"
        }}
      ></div>
    </div>
  );
}
