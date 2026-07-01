// const stats = [
//   { num: "100%", label: "SITE COVERAGE" },
//   { num: "A–E", label: "GRADE SYSTEM" },
//   { num: "30 d", label: "CRITICAL ACTION" },
//   { num: "ISO", label: "9001 : 2015" },
// ];

// export default function SwisStats() {
//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(4, 1fr)",
//         border: "1px solid #333",
//         borderRadius: "8px",
//         overflow: "hidden",
//         backgroundColor: "#333",
//         gap: "1px",
//         maxWidth: "600px",
//         marginTop: "15px",
//       }}
//     >
//       {stats.map((s) => (
//         <div
//           key={s.label}
//           style={{
//             backgroundColor: "#222",
//             padding: "8px 6px",
//             textAlign: "center",
//           }}
//         >
//           <div
//             style={{
//               fontSize: "clamp(13px, 2vw, 25px)",
//               fontWeight: "700",
//               color: "#FFC600",
//               lineHeight: 1,
//               marginBottom: "4px",
//               paddingTop: "15px",
//             }}
//           >
//             {s.num}
//           </div>
//           <div
//             style={{
//               fontSize: "clamp(7px, 0.7vw, 9px)",
//               color: "#888",
//               letterSpacing: "0.5px",
//               textTransform: "uppercase",
//             }}
//           >
//             {s.label}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

const stats = [
  { num: "100%", label: "SITE COVERAGE" },
  { num: "A–E", label: "GRADE SYSTEM" },
  { num: "30 d", label: "CRITICAL ACTION" },
  { num: "ISO", label: "9001 : 2015" },
];

export default function SwisStats() {
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
        marginTop: "15px",
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
