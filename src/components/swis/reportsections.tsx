// const sections = [
//   {
//     num: "01",
//     title: "Cover Page",
//     desc: "Client, site, dates, report number, revision, and three-level approval signatures.",
//   },
//   {
//     num: "02",
//     title: "Document Control",
//     desc: "Revision history, distribution list, and confidentiality statement.",
//   },
//   {
//     num: "03",
//     title: "Table of Contents",
//     desc: "Auto-generated navigation across all sections and appendices.",
//   },
//   {
//     num: "04",
//     title: "Executive Summary",
//     desc: "KPI banner, critical findings, general condition overview, and management recommendations.",
//   },
//   {
//     num: "05",
//     title: "Inspection Methodology",
//     desc: "How inspections are conducted — 6 core activities and key defect categories.",
//   },
//   {
//     num: "06",
//     title: "Asset Inventory + Assessments",
//     desc: "Master register plus one dedicated page per expansion joint.",
//   },
//   {
//     num: "07",
//     title: "Condition Grading System",
//     desc: "A–E grading table with traffic-light RAG status and complete asset summary.",
//   },
//   {
//     num: "08",
//     title: "Immediate Action Register",
//     desc: "Red-flagged critical assets — action plan and target dates within 30 days.",
//   },
//   {
//     num: "09",
//     title: "Maintenance Action Plan",
//     desc: "12-month planned works table with condition overview and percentage breakdown.",
//   },
//   {
//     num: "10",
//     title: "Conclusions & Recommendations",
//     desc: "Overall plant condition narrative and strategic replacement planning.",
//   },
//   {
//     num: "11",
//     title: "Client Sign-Off",
//     desc: "Formal acceptance and acknowledgement page for both client and Erith.",
//   },
//   {
//     num: "12",
//     title: "Appendices",
//     desc: "Photos, measurements, inspection sheets, drawings, data sheets, and calculations.",
//   },
// ];

// const CardItem = ({ s }: { s: (typeof sections)[0] }) => (
//   <div
//     style={{
//       display: "flex",
//       gap: "14px",
//       padding: "18px",
//       border: "1px solid #ebebeb",
//       borderRadius: "6px",
//       backgroundColor: "#fafafa",
//       marginBottom: "12px",
//     }}
//   >
//     <div
//       style={{
//         width: "30px",
//         height: "30px",
//         minWidth: "30px",
//         borderRadius: "4px",
//         backgroundColor: "#1a1a1a",
//         color: "#FFC600",
//         fontWeight: 700,
//         fontSize: "13px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexShrink: 0,
//         marginTop: "2px",
//       }}
//     >
//       {s.num}
//     </div>
//     <div>
//       <h4
//         style={{
//           fontSize: "15px",
//           fontWeight: 700,
//           color: "#1a1a1a",
//           marginBottom: "4px",
//         }}
//       >
//         {s.title}
//       </h4>
//       <p
//         style={{
//           fontSize: "13px",
//           color: "#777",
//           lineHeight: 1.55,
//           margin: 0,
//           wordBreak: "break-word",
//         }}
//       >
//         {s.desc}
//       </p>
//     </div>
//   </div>
// );

// export default function ReportSections() {
//   const leftSections = sections.filter((_, i) => i % 2 === 0); // 01,03,05,07,09,11
//   const rightSections = sections.filter((_, i) => i % 2 !== 0); // 02,04,06,08,10,12

//   return (
//     <section
//       className="category-area pb-20 pt-60 wow fadeInLeft"
//       data-wow-delay=".3s"
//       style={{ backgroundColor: "#F8F7F4" }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           textAlign: "center",
//           padding: "0 16px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "10px",
//             marginBottom: "10px",
//           }}
//         >
//           <div
//             style={{
//               width: "32px",
//               height: "2px",
//               backgroundColor: "#FFC600",
//             }}
//           />
//           <span
//             style={{
//               fontSize: "11px",
//               fontWeight: 700,
//               letterSpacing: "2px",
//               color: "#888",
//               textTransform: "uppercase",
//             }}
//           >
//             Inside the report
//           </span>
//           <div
//             style={{
//               width: "32px",
//               height: "2px",
//               backgroundColor: "#FFC600",
//             }}
//           />
//         </div>

//         <h2
//           style={{
//             color: "#292929",
//             fontSize: "clamp(22px, 3.5vw, 36px)",
//             fontWeight: 700,
//             marginBottom: "10px",
//           }}
//         >
//           12 sections. Nothing missed.
//         </h2>

//         <p
//           style={{
//             color: "#888",
//             fontSize: "clamp(12px, 1.4vw, 15px)",
//             maxWidth: "900px",
//             width: "100%",
//             whiteSpace: "normal",
//             wordBreak: "break-word",
//             lineHeight: "1.6",
//           }}
//         >
//           The SWIS report template is structured to meet client, HSE, and
//           procurement requirements out of the box.
//         </p>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 col-md-6 col-12">
//             {leftSections.map((s) => (
//               <CardItem key={s.num} s={s} />
//             ))}
//           </div>
//           <div className="col-lg-6 col-md-6 col-12">
//             {rightSections.map((s) => (
//               <CardItem key={s.num} s={s} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// const sections = [
//   { num: "01", title: "Cover Page", desc: "Client, site, dates, report number, revision, and three-level approval signatures." },
//   { num: "02", title: "Document Control", desc: "Revision history, distribution list, and confidentiality statement." },
//   { num: "03", title: "Table of Contents", desc: "Auto-generated navigation across all sections and appendices." },
//   { num: "04", title: "Executive Summary", desc: "KPI banner, critical findings, general condition overview, and management recommendations." },
//   { num: "05", title: "Inspection Methodology", desc: "How inspections are conducted — 6 core activities and key defect categories." },
//   { num: "06", title: "Asset Inventory + Assessments", desc: "Master register plus one dedicated page per expansion joint." },
//   { num: "07", title: "Condition Grading System", desc: "A–E grading table with traffic-light RAG status and complete asset summary." },
//   { num: "08", title: "Immediate Action Register", desc: "Red-flagged critical assets — action plan and target dates within 30 days." },
//   { num: "09", title: "Maintenance Action Plan", desc: "12-month planned works table with condition overview and percentage breakdown." },
//   { num: "10", title: "Conclusions & Recommendations", desc: "Overall plant condition narrative and strategic replacement planning." },
//   { num: "11", title: "Client Sign-Off", desc: "Formal acceptance and acknowledgement page for both client and Erith." },
//   { num: "12", title: "Appendices", desc: "Photos, measurements, inspection sheets, drawings, data sheets, and calculations." },
// ];

// const CardItem = ({ s }: { s: typeof sections[0] }) => (
//   <div
//     style={{
//       display: "flex",
//       gap: "14px",
//       padding: "18px",
//       border: "1px solid #ebebeb",
//       borderRadius: "6px",
//       backgroundColor: "#fafafa",
//     }}
//   >
//     <div
//       style={{
//         width: "30px",
//         height: "30px",
//         minWidth: "30px",
//         borderRadius: "4px",
//         backgroundColor: "#1a1a1a",
//         color: "#FFC600",
//         fontWeight: 700,
//         fontSize: "13px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexShrink: 0,
//         marginTop: "2px",
//       }}
//     >
//       {s.num}
//     </div>
//     <div>
//       <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "4px" }}>
//         {s.title}
//       </h4>
//       <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.55, margin: 0, wordBreak: "break-word" }}>
//         {s.desc}
//       </p>
//     </div>
//   </div>
// );

// export default function ReportSections() {
//   const leftSections = sections.filter((_, i) => i % 2 === 0);
//   const rightSections = sections.filter((_, i) => i % 2 !== 0);

//   return (
//     <section
//       className="category-area pb-20 pt-40  wow fadeInLeft"
//       data-wow-delay=".3s"
//     //   style={{ backgroundColor: "#F8F7F4" }}
//     >
//         <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           textAlign: "center",
//           padding: "0 16px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "10px",
//             marginBottom: "10px",
//           }}
//         >
//           <div
//             style={{
//               width: "32px",
//               height: "2px",
//               backgroundColor: "#FFC600",
//             }}
//           />
//           <span
//             style={{
//               fontSize: "11px",
//               fontWeight: 700,
//               letterSpacing: "2px",
//               color: "#888",
//               textTransform: "uppercase",
//             }}
//           >
//             Inside the report
//           </span>
//           <div
//             style={{
//               width: "32px",
//               height: "2px",
//               backgroundColor: "#FFC600",
//             }}
//           />
//         </div>

//         <h2
//           style={{
//             color: "#292929",
//             fontSize: "clamp(22px, 3.5vw, 36px)",
//             fontWeight: 700,
//             marginBottom: "10px",
//           }}
//         >
//           12 sections. Nothing missed.
//         </h2>

//         <p
//           style={{
//             color: "#888",
//             fontSize: "clamp(12px, 1.4vw, 15px)",
//             maxWidth: "900px",
//             width: "100%",
//             whiteSpace: "normal",
//             wordBreak: "break-word",
//             lineHeight: "1.6",
//           }}
//         >
//           The SWIS report template is structured to meet client, HSE, and
//           procurement requirements out of the box.
//         </p>
//       </div>
//       <div className="container">
//         <div className="row" style={{ alignItems: "stretch" }}>
//           <div className="col-lg-6 col-md-6 col-12">
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateRows: "repeat(6, 1fr)",
//                 gap: "12px",
//                 height: "100%",
//               }}
//             >
//               {leftSections.map((s) => <CardItem key={s.num} s={s} />)}
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-6 col-12">
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateRows: "repeat(6, 1fr)",
//                 gap: "12px",
//                 height: "100%",
//               }}
//             >
//               {rightSections.map((s) => <CardItem key={s.num} s={s} />)}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

const sections = [
  {
    num: "01",
    title: "Cover Page",
    desc: "Client, site, dates, report number, revision, and three-level approval signatures.",
  },
  {
    num: "02",
    title: "Document Control",
    desc: "Revision history, distribution list, and confidentiality statement.",
  },
  {
    num: "03",
    title: "Table of Contents",
    desc: "Auto-generated navigation across all sections and appendices.",
  },
  {
    num: "04",
    title: "Executive Summary",
    desc: "KPI banner, critical findings, general condition overview, and management recommendations.",
  },
  {
    num: "05",
    title: "Inspection Methodology",
    desc: "How inspections are conducted — 6 core activities and key defect categories.",
  },
  {
    num: "06",
    title: "Asset Inventory + Assessments",
    desc: "Master register plus one dedicated page per expansion joint.",
  },
  {
    num: "07",
    title: "Condition Grading System",
    desc: "A–E grading table with traffic-light RAG status and complete asset summary.",
  },
  {
    num: "08",
    title: "Immediate Action Register",
    desc: "Red-flagged critical assets — action plan and target dates within 30 days.",
  },
  {
    num: "09",
    title: "Maintenance Action Plan",
    desc: "12-month planned works table with condition overview and percentage breakdown.",
  },
  {
    num: "10",
    title: "Conclusions & Recommendations",
    desc: "Overall plant condition narrative and strategic replacement planning.",
  },
  {
    num: "11",
    title: "Client Sign-Off",
    desc: "Formal acceptance and acknowledgement page for both client and Erith.",
  },
  {
    num: "12",
    title: "Appendices",
    desc: "Photos, measurements, inspection sheets, drawings, data sheets, and calculations.",
  },
];

const CardItem = ({ s }: { s: (typeof sections)[0] }) => (
  <div
    style={{
      display: "flex",
      gap: "14px",
      padding: "18px",
      border: "1px solid #ebebeb",
      borderRadius: "6px",
      backgroundColor: "#fafafa",
      height: "100%",
    }}
  >
    <div
      style={{
        width: "30px",
        height: "30px",
        minWidth: "30px",
        borderRadius: "4px",
        backgroundColor: "#1a1a1a",
        color: "#FFC600",
        fontWeight: 700,
        fontSize: "13px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: "2px",
      }}
    >
      {s.num}
    </div>
    <div>
      <h4
        style={{
          fontSize: "15px",
          fontWeight: 700,
          color: "#1a1a1a",
          marginBottom: "4px",
        }}
      >
        {s.title}
      </h4>
      <p
        style={{
          fontSize: "13px",
          color: "#777",
          lineHeight: 1.55,
          margin: 0,
          wordBreak: "break-word",
        }}
      >
        {s.desc}
      </p>
    </div>
  </div>
);

export default function ReportSections() {
  return (
    <section
      className="category-area pb-40 pt-40 wow fadeInLeft"
      data-wow-delay=".3s"
    >
      <style>{`
        .report-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (max-width: 767px) {
          .report-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <div
            style={{ width: "32px", height: "2px", backgroundColor: "#FFC600" }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#888",
              textTransform: "uppercase",
            }}
          >
            Inside the report
          </span>
          <div
            style={{ width: "32px", height: "2px", backgroundColor: "#FFC600" }}
          />
        </div>

        <h2
          style={{
            color: "#292929",
            fontSize: "clamp(22px, 3.5vw, 36px)",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          12 sections. Nothing missed.
        </h2>

        <p
          style={{
            color: "#888",
            fontSize: "clamp(12px, 1.4vw, 15px)",
            maxWidth: "900px",
            width: "100%",
            whiteSpace: "normal",
            wordBreak: "break-word",
            lineHeight: "1.6",
          }}
        >
          The SWIS report template is structured to meet client, HSE, and
          procurement requirements out of the box.
        </p>
      </div>

      <div className="container">
        <div className="report-grid">
          {sections.map((s) => (
            <CardItem key={s.num} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
