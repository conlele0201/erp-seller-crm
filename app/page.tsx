export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}
    >
      <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>
        ERP SELLER – Base running
      </h1>
      <p style={{ fontSize: 13, opacity: 0.7 }}>
        Next.js 14 + TypeScript – Step 1 OK
      </p>
    </main>
  );
}
