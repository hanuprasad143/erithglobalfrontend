const stats = [
  { num: "SS / CS", label: "Stainless & Carbon Steel" },
  { num: "DN25–2000", label: "Diameter Range" },
  { num: "ISO 9001", label: "Quality Certified" },
  { num: "BS EN 14917", label: "Design Standard" },
];

export default function ChennaiUnitStats() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        border: "1px solid #333",
        borderRadius: "6px",
        overflow: "hidden",
        backgroundColor: "#333",
        gap: "1px",
        maxWidth: "600px",
        marginTop: "5px",
      }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            backgroundColor: "#222",
            padding: "6px 4px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "clamp(11px, 1.5vw, 18px)",
              fontWeight: "700",
              color: "#FFC600",
              lineHeight: 1,
              marginBottom: "3px",
              paddingTop: "8px",
            }}
          >
            {s.num}
          </div>
          <div
            style={{
              fontSize: "clamp(12px, 0.6vw, 8px)",
              color: "#888",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              paddingBottom: "8px",
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
