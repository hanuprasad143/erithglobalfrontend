//original file only in left side //

// import Link from "next/link";
// import SwisStats from "../swis/swis";

// type IProps = {
//   subtitle: string;
//   title: React.ReactNode;
//   color?: string;
//   pages?: boolean;
//   description?: React.ReactNode;
// };

// export default function BreadcrumbThree({
//   subtitle,
//   title,
//   description,
//   color = "",
//   pages,
// }: IProps) {
//   return (
//     <section
//       className="tp-breadcrumb__area p-relative z-index-1 fix"
//       style={{
//         overflow: "hidden",
//         display: "flex",
//         alignItems: "center",
//         backgroundColor: "#1a1a1a",
//         position: "relative",
//         maxHeight: "400px",
//         height: "auto",
//         paddingTop: "40px",
//         paddingBottom: "40px",
//       }}
//     >
//       <style>{`
//   .breadcrumb-watermark {
//     display: none !important;
//   }
//   @media (min-width: 1280px) {
//     .breadcrumb-watermark {
//       display: block !important;
//     }
//   }
//   @media (max-width: 768px) {
//     .breadcrumb-subtitle-box {
//       max-width: 100% !important;
//     }
//   }
//   @media (max-width: 480px) {
//     .breadcrumb-buttons {
//       flex-direction: column !important;
//       align-items: flex-start !important;
//     }
//     .breadcrumb-buttons a {
//       width: 100% !important;
//       text-align: center !important;
//     }
//   }
// `}</style>

//       {/* Watermark */}
//       <span
//         className="breadcrumb-watermark wow fadeInLeft"
//         style={{
//           position: "absolute",
//           bottom: "-20px",
//           right: "-10px",
//           fontSize: "clamp(80px, 15vw, 180px)",
//           fontWeight: 900,
//           color: "rgba(255,255,255,0.05)",
//           lineHeight: 1,
//           userSelect: "none",
//           pointerEvents: "none",
//           letterSpacing: "-2px",
//         }}
//       >
//         SWIS
//       </span>

//       <div
//         className="tp-breadcrumb__bg overlay"
//         style={{
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           //  backgroundImage: "url(/assets/img/banner/Petrochemical_banner.png)",
//         }}
//       />

//       <div
//         className="container wow fadeInLeft"
//         data-wow-delay=".3s"
//         style={{ width: "100%", position: "relative", zIndex: 2 }}
//       >
//         <div className="row align-items-center">
//           <div className="col-12 col-md-10 col-lg-8">
//             <div className="tp-breadcrumb__content">
//               {/* Subtitle */}
//               <div
//                 className="tp-breadcrumb__list"
//                 style={{ marginBottom: "4px" }}
//               >
//                 {pages && (
//                   <span style={{ color: "#fff", fontSize: "10px" }}>Pages</span>
//                 )}
//                 <div
//                   className="breadcrumb-subtitle-box"
//                   style={{
//                     backgroundColor: "#1a1a1a",
//                     border: "1px solid #fecb00",
//                     padding: "2px 10px",
//                     textAlign: "start",
//                     maxWidth: "400px",
//                     borderRadius: "8px",
//                     display: "inline-block",
//                   }}
//                 >
//                   <span
//                     style={{
//                       color: "#fecb00",
//                       fontSize: "10px",
//                       fontWeight: 500,
//                       letterSpacing: "4px",
//                       textTransform: "uppercase",
//                     }}
//                   >
//                     {subtitle}
//                   </span>
//                 </div>
//               </div>

//               {/* Title */}
//               <h3
//                 className="tp-breadcrumb__title white"
//                 style={{
//                   color: "#fff",
//                   fontSize: "clamp(18px, 3.5vw, 30px)",
//                   fontWeight: "600",
//                   lineHeight: "1.2",
//                   whiteSpace: "pre-line",
//                   marginBottom: "clamp(4px, 1vw, 10px)",
//                   marginTop: "10px",
//                 }}
//               >
//                 {title}
//               </h3>

//               {/* Description */}
//               <p
//                 style={{
//                   color: "#F3F4F8",
//                   fontSize: "clamp(10px, 1.2vw, 13px)",
//                   lineHeight: "1.6",
//                   marginBottom: "clamp(6px, 1.2vw, 12px)",
//                   maxWidth: "580px",
//                   wordBreak: "break-word",
//                 }}
//                 className={color}
//               >
//                 {description}
//               </p>

//               {/* CTA Buttons */}
//               <div
//                 className="breadcrumb-buttons"
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: "8px",
//                   alignItems: "center",
//                   marginBottom: "clamp(6px, 1.2vw, 12px)",
//                 }}
//               >
//                 <Link
//                   href="/contact"
//                   style={{
//                     backgroundColor: "#FFC600",
//                     color: "#1A1A1A",
//                     padding: "7px 16px",
//                     borderRadius: "8px",
//                     textDecoration: "none",
//                     fontWeight: "700",
//                     display: "inline-block",
//                     fontSize: "clamp(10px, 1.1vw, 12px)",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   Request a SWIS Survey
//                 </Link>

//                 <a
//                   href="/assets/img/resources/Silicone_seal.pdf"
//                   download="SWIS-Sample-Report.pdf"
//                   style={{
//                     backgroundColor: "#2a2a2a",
//                     color: "#fff",
//                     padding: "7px 16px",
//                     borderRadius: "8px",
//                     textDecoration: "none",
//                     fontWeight: "700",
//                     display: "inline-block",
//                     fontSize: "clamp(10px, 1.1vw, 12px)",
//                     whiteSpace: "nowrap",
//                     border: "1px solid #444",
//                   }}
//                 >
//                   Download Sample Report
//                 </a>
//               </div>

//               {/* Stats */}
//               <SwisStats />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//original file only in left side //

import Link from "next/link";
import SwisStats from "../swis/swis";

type IProps = {
  subtitle: string;
  title: React.ReactNode;
  color?: string;
  pages?: boolean;
  description?: React.ReactNode;
};

export default function BreadcrumbThree({
  subtitle,
  title,
  description,
  color = "",
  pages,
}: IProps) {
  return (
    <section
      className="tp-breadcrumb__area p-relative z-index-1 fix"
      style={{
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        position: "relative",
        height: "400px",
      }}
    >
      <style>{`
  .breadcrumb-watermark {
    display: none !important;
  }
  @media (min-width: 1280px) {
    .breadcrumb-watermark {
      display: block !important;
    }
  }
  @media (max-width: 768px) {
    .breadcrumb-subtitle-box {
      max-width: 100% !important;
    }
  }
  .breadcrumb-buttons {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    gap: 8px;
    align-items: center;
    width: fit-content !important;
  }
  .breadcrumb-buttons a {
    width: auto !important;
    text-align: left !important;
  }
  .breadcrumb-inner-grid {
    display: grid;
    grid-template-columns: 7fr 5fr;
    gap: 24px;
    align-items: start;
  }
  .breadcrumb-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: clamp(16px, 3vw, 32px);
    padding-bottom: clamp(16px, 3vw, 32px);
  }
  .breadcrumb-stats-col {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding-top: clamp(10px, 3vw, 10px);
    padding-bottom: clamp(10px, 3vw, 10px);
    height: 100%;
  }

  /* Small screens: stack stats below */
  @media (max-width: 600px) {
    .breadcrumb-inner-grid {
      grid-template-columns: 1fr;
      gap: 8px;
    }
    .breadcrumb-left {
      padding-top: 12px;
      padding-bottom: 0;
    }
    .breadcrumb-stats-col {
      justify-content: flex-start;
      padding-top: 0;
      padding-bottom: 12px;
    }
  }
`}</style>

      {/* Watermark */}
      <span
        className="breadcrumb-watermark wow fadeInLeft"
        style={{
          position: "absolute",
          bottom: "-20px",
          right: "-10px",
          fontSize: "clamp(80px, 15vw, 180px)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.05)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-2px",
        }}
      >
        SWIS
      </span>

      <div
        className="tp-breadcrumb__bg overlay"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="container wow fadeInLeft"
        data-wow-delay=".3s"
        style={{ width: "100%", position: "relative", zIndex: 2 }}
      >
        <div className="breadcrumb-inner-grid">
          {/* LEFT: 7 cols */}
          <div className="tp-breadcrumb__content breadcrumb-left">
            <div>
              <div
                className="tp-breadcrumb__list"
                style={{ marginBottom: "4px" }}
              >
                {pages && (
                  <span style={{ color: "#fff", fontSize: "10px" }}>Pages</span>
                )}
                <div
                  className="breadcrumb-subtitle-box"
                  style={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #fecb00",
                    padding: "2px 10px",
                    textAlign: "start",
                    maxWidth: "400px",
                    borderRadius: "8px",
                    display: "inline-block",
                  }}
                >
                  <span
                    style={{
                      color: "#fecb00",
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                    }}
                  >
                    {subtitle}
                  </span>
                </div>
              </div>

              <h3
                className="tp-breadcrumb__title white"
                style={{
                  color: "#fff",
                  fontSize: "clamp(18px, 3.5vw, 30px)",
                  fontWeight: "600",
                  lineHeight: "1.2",
                  whiteSpace: "pre-line",
                  marginBottom: "clamp(4px, 1vw, 10px)",
                  marginTop: "10px",
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "#F3F4F8",
                  fontSize: "clamp(10px, 1.2vw, 13px)",
                  lineHeight: "1.6",
                  marginBottom: "clamp(6px, 1.2vw, 12px)",
                  maxWidth: "580px",
                  wordBreak: "break-word",
                }}
                className={color}
              >
                {description}
              </p>
            </div>

            <div className="breadcrumb-buttons">
              <Link
                href="/contact"
                style={{
                  backgroundColor: "#FFC600",
                  color: "#1A1A1A",
                  padding: "7px 16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "700",
                  display: "inline-block",
                  fontSize: "clamp(10px, 1.1vw, 12px)",
                  whiteSpace: "nowrap",
                }}
              >
                Request a SWIS Survey
              </Link>

              <a
                href="/assets/img/resources/Silicone_seal.pdf"
                download="SWIS-Sample-Report.pdf"
                style={{
                  backgroundColor: "#2a2a2a",
                  color: "#fff",
                  padding: "7px 16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "700",
                  display: "inline-block",
                  fontSize: "clamp(10px, 1.1vw, 12px)",
                  whiteSpace: "nowrap",
                  border: "1px solid #444",
                }}
              >
                Download Sample Report
              </a>
            </div>
          </div>

          {/* RIGHT: 5 cols */}
          <div className="breadcrumb-stats-col">
            <SwisStats />
          </div>
        </div>
      </div>
    </section>
  );
}
