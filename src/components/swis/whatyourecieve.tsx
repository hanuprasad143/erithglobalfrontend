// // import Image from "next/image";
// import category_data from "@/data/category-data";
// import Link from "next/link";

// export default function Whatwerecieve() {
//   return (
//     <section
//       className="category-area mb-80 mt-40 wow fadeInLeft"
//       data-wow-delay=".3s"
//     >
//       <style>{`
//         .tp-category-item:hover {
//           border-color: #fecb00 !important;
//           cursor: pointer !important;
//         }
//       `}</style>
//       <div className="container">
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             textAlign: "center",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "10px",
//               marginBottom: "10px",
//             }}
//           >
//             <div
//               style={{
//                 width: "32px",
//                 height: "2px",
//                 backgroundColor: "#FFC600",
//               }}
//             />
//             <span
//               style={{
//                 fontSize: "11px",
//                 fontWeight: 700,
//                 letterSpacing: "2px",
//                 color: "#888",
//                 textTransform: "uppercase",
//               }}
//             >
//               What you receive
//             </span>
//             <div
//               style={{
//                 width: "32px",
//                 height: "2px",
//                 backgroundColor: "#FFC600",
//               }}
//             />
//           </div>

//           <h2
//             style={{
//               color: "#292929",
//               fontSize: "clamp(22px, 3.5vw, 36px)",
//               fontWeight: 700,
//               marginBottom: "10px",
//             }}
//           >
//             Everything in one report
//           </h2>

//           {/* <p
//     style={{
//       color: "#888",
//       fontSize: "clamp(12px, 1.4vw, 15px)",
//       maxWidth: "600px",
//       margin: "0 auto",
//     }}
//   >
//     Every SWIS delivers a structured, professionally bound report covering all 12
//     sections — ready to share, act on, and archive.
//   </p> */}
//           <p
//             style={{
//               color: "#888",
//               fontSize: "clamp(10px, 1.2vw, 15px)",
//               whiteSpace: "nowrap",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//             }}
//           >
//             Every SWIS delivers a structured, professionally bound report
//             covering all 12 sections — ready to share, act on, and archive.
//           </p>
//         </div>

//         <div className="row">
//           {category_data.map((item) => (
//             <div key={item.id} className="col-lg-4 col-md-4 col-sm-6">
//               <Link
//                 href="/course-categories"
//                 className="tp-category-item mb-10"
//                 data-wow-delay={`.${item.id}s`}
//               >
//                 <div className="tp-category-icon mb-0 pb-0">
//                   <span className={item.color}>
//                     {/* <Image
//                       src={item.icon}
//                       alt={item.title}
//                       width={25}
//                       height={25}
//                     /> */}
//                   </span>
//                 </div>
//                 <div className="tp-category-content">
//                   <h4 className="tp-category-title">{item.title}</h4>
//                   <span>{item.description}</span>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import category_data from "@/data/category-data";

// export default function Whatwerecieve() {
//   return (
//     <section
//       className="category-area pb-20 pt-20 mt-40 wow fadeInLeft"
//       data-wow-delay=".3s"
//       style={{ backgroundColor: "#F8F7F4" }}
//     >
//       <style>{`
//   div.tp-category-item {
//     cursor: default !important;
//   }
//   div.tp-category-item:hover {
//     border-color: #fecb00 !important;
//     cursor: pointer !important;
//   }
// `}</style>
//       <div className="container">
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             textAlign: "center",
//             padding: "0 16px",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "10px",
//               marginBottom: "10px",
//             }}
//           >
//             <div
//               style={{
//                 width: "32px",
//                 height: "2px",
//                 backgroundColor: "#FFC600",
//               }}
//             />
//             <span
//               style={{
//                 fontSize: "11px",
//                 fontWeight: 700,
//                 letterSpacing: "2px",
//                 color: "#888",
//                 textTransform: "uppercase",
//               }}
//             >
//               What you receive
//             </span>
//             <div
//               style={{
//                 width: "32px",
//                 height: "2px",
//                 backgroundColor: "#FFC600",
//               }}
//             />
//           </div>

//           <h2
//             style={{
//               color: "#292929",
//               fontSize: "clamp(22px, 3.5vw, 36px)",
//               fontWeight: 700,
//               marginBottom: "10px",
//             }}
//           >
//             Everything in one report
//           </h2>

//           <p
//             style={{
//               color: "#888",
//               fontSize: "clamp(12px, 1.4vw, 15px)",
//               maxWidth: "900px",
//               width: "100%",
//               whiteSpace: "normal",
//               wordBreak: "break-word",
//               lineHeight: "1.6",
//             }}
//           >
//             Every SWIS delivers a structured, professionally bound report
//             covering all 12 sections — ready to share, act on, and archive.
//           </p>
//         </div>

//         <div className="row">
//           {category_data.map((item) => (
//             <div key={item.id} className="col-lg-4 col-md-4 col-sm-6">
//               <div
//                 className="tp-category-item mb-10"
//                 data-wow-delay={`.${item.id}s`}
//               >
//                 <div className="tp-category-icon mb-0 pb-0">
//                   <span className={item.color}></span>
//                 </div>
//                 <div className="tp-category-content">
//                   <h4
//                     className="tp-category-title"
//                     style={{ color: "#292929" }}
//                   >
//                     {item.title}
//                   </h4>
//                   <span>{item.description}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import category_data from "@/data/category-data";

// export default function Whatwerecieve() {
//   return (
//     <section
//       className="category-area pb-20 pt-20 mt-40 wow fadeInLeft"
//       data-wow-delay=".3s"
//       style={{ backgroundColor: "#F8F7F4" }}
//     >
//       <style>{`
//         div.tp-category-item {
//             border-top: 3px solid #fecb00 !important;
//     border-left: 1px solid #e0e0e0 !important;
//     border-right: 1px solid #e0e0e0 !important;
//     border-bottom: 1px solid #e0e0e0 !important;
//         }
//       `}</style>
//       <div className="container">
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             textAlign: "center",
//             padding: "0 16px",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "10px",
//               marginBottom: "10px",
//             }}
//           >
//             <div
//               style={{
//                 width: "32px",
//                 height: "2px",
//                 backgroundColor: "#FFC600",
//               }}
//             />
//             <span
//               style={{
//                 fontSize: "11px",
//                 fontWeight: 700,
//                 letterSpacing: "2px",
//                 color: "#888",
//                 textTransform: "uppercase",
//               }}
//             >
//               What you receive
//             </span>
//             <div
//               style={{
//                 width: "32px",
//                 height: "2px",
//                 backgroundColor: "#FFC600",
//               }}
//             />
//           </div>

//           <h2
//             style={{
//               color: "#292929",
//               fontSize: "clamp(22px, 3.5vw, 36px)",
//               fontWeight: 700,
//               marginBottom: "10px",
//             }}
//           >
//             Everything in one report
//           </h2>

//           <p
//             style={{
//               color: "#888",
//               fontSize: "clamp(12px, 1.4vw, 15px)",
//               maxWidth: "900px",
//               width: "100%",
//               whiteSpace: "normal",
//               wordBreak: "break-word",
//               lineHeight: "1.6",
//             }}
//           >
//             Every SWIS delivers a structured, professionally bound report
//             covering all 12 sections — ready to share, act on, and archive.
//           </p>
//         </div>

//         <div className="row">
//           {category_data.map((item) => (
//             <div key={item.id} className="col-lg-4 col-md-4 col-sm-6">
//               <div
//                 className="tp-category-item mb-10"
//                 data-wow-delay={`.${item.id}s`}
//               >
//                 {/* <div className="tp-category-icon mb-0 pb-0">
//                   <span className={item.color}></span>
//                 </div> */}
//                 <div className="tp-category-icon mb-0 pb-0">
//                   <img
//                     src={item.icon}
//                     alt={item.title}
//                     style={{
//                       width: "35px",
//                       height: "35px",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </div>
//                 <div className="tp-category-content" style={{fontSize:"15px"}}>
//                   <h4
//                     className="tp-category-title"
//                     style={{ color: "#292929" }}
//                   >
//                     {item.title}
//                   </h4>
//                   <span>{item.description}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import category_data from "@/data/category-data";

export default function Whatwerecieve() {
  return (
    <section
      className="category-area pb-20 pt-20 mt-40 wow fadeInLeft"
      data-wow-delay=".3s"
      style={{ backgroundColor: "#F8F7F4" }}
    >
      <style>{`
        div.tp-category-item {
          border-top: 3px solid #fecb00 !important;
          border-left: 1px solid #e0e0e0 !important;
          border-right: 1px solid #e0e0e0 !important;
          border-bottom: 1px solid #e0e0e0 !important;
          height: 100% !important;
          display: flex !important;
          flex-direction: column !important;
        }
        .category-col {
          display: flex;
          margin-bottom: 10px;
        }
      `}</style>
      <div className="container">
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
              style={{
                width: "32px",
                height: "2px",
                backgroundColor: "#FFC600",
              }}
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
              What you receive
            </span>
            <div
              style={{
                width: "32px",
                height: "2px",
                backgroundColor: "#FFC600",
              }}
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
            Everything in one report
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
            Every SWIS delivers a structured, professionally bound report
            covering all 12 sections — ready to share, act on, and archive.
          </p>
        </div>

        <div className="row align-items-stretch">
          {category_data.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-4 col-sm-6 category-col"
            >
              <div
                className="tp-category-item mb-10"
                data-wow-delay={`.${item.id}s`}
                style={{ borderRadius: "8px" }}
              >
                <div className="tp-category-icon mb-0 pb-10">
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{
                      width: "35px",
                      height: "35px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div
                  className="tp-category-content"
                  style={{ fontSize: "15px" }}
                >
                  <p className="tp-category-title" style={{ color: "#292929" }}>
                    {item.title}
                  </p>
                  <p style={{ color: "#888" }}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
