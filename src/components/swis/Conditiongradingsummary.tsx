const grades = [
  {
    letter: "A",
    bg: "#70AD47",
    color: "#fff",
    desc: "Excellent — no defects, as-new condition",
    pct: "<10%",
    pctBg: "#e2efda",
    pctColor: "#375623",
  },
  {
    letter: "B",
    bg: "#92D050",
    color: "#2a4017",
    desc: "Good — minor superficial defects only",
    pct: "10–29%",
    pctBg: "#ebf5d9",
    pctColor: "#375623",
  },
  {
    letter: "C",
    bg: "#FFC000",
    color: "#7f4f00",
    desc: "Fair — monitoring required (≥30%)",
    pct: "30–39%",
    pctBg: "#fff2cc",
    pctColor: "#7f4f00",
  },
  {
    letter: "D",
    bg: "#FF6600",
    color: "#fff",
    desc: "Poor — immediate planning required (≥40%)",
    pct: "40–59%",
    pctBg: "#ffe0cc",
    pctColor: "#7f2600",
  },
  {
    letter: "E",
    bg: "#C00000",
    color: "#fff",
    desc: "Critical — stop use, emergency replacement",
    pct: "≥60%",
    pctBg: "#ffe7e7",
    pctColor: "#7b0000",
  },
];

export default function ConditionGradingSummary() {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        borderRadius: "6px",
        overflow: "hidden",
        width: "100%",
        maxWidth: "1200px",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#FFC600",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "13px",
            color: "#1a1a1a",
            letterSpacing: "0.3px",
          }}
        >
          ✅ Condition Grading Summary
        </span>
      </div>

      {/* Rows */}
      <div style={{ padding: "4px 12px" }}>
        {grades.map((g, i) => (
          <div
            key={g.letter}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 0",
              borderBottom:
                i < grades.length - 1 ? "1px solid #2e2e2e" : "none",
            }}
          >
            {/* Grade badge */}
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "4px",
                backgroundColor: g.bg,
                color: g.color,
                fontWeight: 700,
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {g.letter}
            </div>

            {/* Description */}
            <span
              style={{
                flex: 1,
                fontSize: "13px",
                color: "#cccccc",
                lineHeight: 1.4,
              }}
            >
              {g.desc}
            </span>

            {/* Percentage badge */}
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: "3px",
                backgroundColor: g.pctBg,
                color: g.pctColor,
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}
            >
              {g.pct}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}