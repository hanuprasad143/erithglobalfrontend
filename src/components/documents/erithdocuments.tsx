// "use client";

// import CounterOne from "../counter/counter-one";
// import { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import Link from "next/link";

// import JSZip from "jszip";
// import { saveAs } from "file-saver";

// import Pagination from "../ui/pagination";

// const navData = [
//   {
//     id: "home",
//     title: "Positioners Series 6P",
//     ariaControls: "home",
//     isActive: true,
//   },
//   {
//     id: "profile",
//     title: "Retaining Cable Kit For Hand Wheel Chai..",
//     ariaControls: "profile",
//     isActive: true,
//   },
//   {
//     id: "contact",
//     title: "Quarter-Turn Valve Solutions for Reduci..",
//     ariaControls: "contact",
//     isActive: true,
//   },
// ];

// type IProps = {
//   title?: string;
//   subtitle?: string;
// };

// type Document = {
//   id: number;
//   title: string;
//   document_type: string;
//   product_type: string;
//   file_url: string;
//   created_at: string;
// };

// export default function ErithDocuments({
//   title = "Hello, how can we help?",
//   subtitle = "Learn more about how Erith can transform and help your company.",
// }: IProps) {
//   const [filters, setFilters] = useState({
//     category: "",
//     contentType: "",
//     industry: "",
//     sortBy: "",
//   });

//   const [productTypes, setProductTypes] = useState<string[]>([]);
//   const [documentTypes, setDocumentTypes] = useState<string[]>([]);
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [filteredDocs, setFilteredDocs] = useState<Document[]>([]);
//   const [selectedDocs, setSelectedDocs] = useState<number[]>([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const docsPerPage = 10;

//   // ✅ CLEANED API CALL (removed duplicate fetch)
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const [filtersRes, docsRes] = await Promise.all([
//   //         fetch("https://erithglobalbackend.onrender.com/api/product-downloads/filters"),
//   //         fetch("https://erithglobalbackend.onrender.com/api/product-downloads"),
//   //       ]);

//   //       const filtersData = await filtersRes.json();
//   //       const docsData = await docsRes.json();

//   //       setProductTypes(filtersData.productTypes || []);
//   //       setDocumentTypes(filtersData.documentTypes || []);
//   //       setDocuments(docsData || []);
//   //       setFilteredDocs(docsData || []);
//   //     } catch (err) {
//   //       console.error(err);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const [filtersRes, docsRes, qualityRes] = await Promise.all([
//         fetch("https://erithglobalbackend.onrender.com/api/product-downloads/filters"),
//         fetch("https://erithglobalbackend.onrender.com/api/product-downloads"),
//         fetch("https://erithglobalbackend.onrender.com/api/quality"),  // ✅ new
//       ]);

//       const filtersData = await filtersRes.json();
//       const docsData = await docsRes.json();
//       const qualityData = await qualityRes.json();  // ✅ new

//       const merged = [...(docsData || []), ...(qualityData || [])];  // ✅ merge both

//       setProductTypes(filtersData.productTypes || []);
//       setDocumentTypes(filtersData.documentTypes || []);
//       setDocuments(merged);      // ✅ merged
//       setFilteredDocs(merged);   // ✅ merged
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   fetchData();
// }, []);

//   useEffect(() => {
//     let temp = [...documents];

//     if (filters.contentType) {
//       temp = temp.filter(
//         (doc) =>
//           doc.product_type?.trim().toLowerCase() ===
//           filters.contentType.trim().toLowerCase(),
//       );
//     }

//     if (filters.industry) {
//       temp = temp.filter(
//         (doc) =>
//           doc.document_type?.trim().toLowerCase() ===
//           filters.industry.trim().toLowerCase(),
//       );
//     }

//     if (filters.sortBy === "Asc") {
//       temp.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (filters.sortBy === "Desc") {
//       temp.sort((a, b) => b.title.localeCompare(a.title));
//     }

//     setFilteredDocs(temp);
//     setCurrentPage(0);
//   }, [filters, documents]);

//   const offset = currentPage * docsPerPage;
//   const currentDocs = filteredDocs.slice(offset, offset + docsPerPage);
//   const pageCount = Math.ceil(filteredDocs.length / docsPerPage);

//   const handlePageClick = (event: { selected: number }) => {
//     setCurrentPage(event.selected);
//   };

//   const handleSelect = (id: number) => {
//     setSelectedDocs((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
//     );
//   };

//   const handleSelectAll = () => {
//     const currentPageIds = currentDocs.map((doc) => doc.id);

//     const allSelectedOnPage = currentPageIds.every((id) =>
//       selectedDocs.includes(id),
//     );

//     if (allSelectedOnPage) {
//       setSelectedDocs((prev) =>
//         prev.filter((id) => !currentPageIds.includes(id)),
//       );
//     } else {
//       setSelectedDocs((prev) => [...new Set([...prev, ...currentPageIds])]);
//     }
//   };

//   const handleDownloadZip = async () => {
//     if (selectedDocs.length === 0) {
//       alert("Please select at least one document");
//       return;
//     }

//     const zip = new JSZip();

//     const selectedFiles = documents.filter((doc) =>
//       selectedDocs.includes(doc.id),
//     );

//     await Promise.all(
//       selectedFiles.map(async (doc) => {
//         const response = await fetch(
//           `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
//         );
//         const blob = await response.blob();
//         zip.file(doc.file_url, blob);
//       }),
//     );

//     const content = await zip.generateAsync({ type: "blob" });
//     saveAs(content, "documents.zip");
//   };

//   const handleSingleDownload = async (doc: any) => {
//     try {
//       const response = await fetch(
//         `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
//       );
//       const blob = await response.blob();
//       saveAs(blob, doc.file_url);
//     } catch (err) {
//       console.error("Download failed", err);
//     }
//   };

//   const selectedOnPage = currentDocs.filter((doc) =>
//     selectedDocs.includes(doc.id),
//   ).length;

//   const totalOnPage = currentDocs.length;
//   const totalFiles = filteredDocs.length;
//   return (
//     <>
//       {/* ----------- YOUR EXISTING UI (NO CHANGE) ----------- */}

//       <section
//         className="tp-breadcrumb__area pt-100 pb-50 p-relative z-index-1 fix"
//         style={{ height: "400px" }}
//       >
//         <div
//           className="tp-breadcrumb__bg overlay"
//           style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
//         ></div>

//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-sm-12">
//               <div className="tp-breadcrumb__content text-center">
//                 <div className="tp-breadcrumb__list inner-after">
//                   <h2
//                     className="tp-breadcrumb__title color mb-10"
//                     style={{
//                       fontSize: "35px",
//                       lineHeight: "1.2",
//                       fontWeight: "5px",
//                     }}
//                   >
//                     {title}
//                   </h2>

//                   <p style={{ fontSize: "15px", color: "white" }}>{subtitle}</p>

//                   <div
//                     className="tp-leadership-search p-relative"
//                     style={{
//                       position: "relative",
//                       width: "700px",
//                       margin: "0 auto",
//                     }}
//                   >
//                     <div style={{ position: "relative" }}>
//                       <FaSearch
//                         style={{
//                           position: "absolute",
//                           left: "15px",
//                           top: "50%",
//                           transform: "translateY(-50%)",
//                           color: "#888",
//                           fontSize: "16px",
//                           pointerEvents: "none",
//                         }}
//                       />

//                       <input
//                         type="text"
//                         placeholder="Search..."
//                         style={{
//                           width: "100%",
//                           height: "45px",
//                           paddingLeft: "45px",
//                           paddingRight: "15px",
//                           borderRadius: "6px",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="tp-campus-student-list d-flex justify-content-center mt-5">
//           <div className="d-flex align-items-center gap-1 flex-wrap">
//             <p
//               style={{
//                 fontSize: "18px",
//                 margin: 0,
//                 color: "white",
//                 marginRight: "5px",
//               }}
//             >
//               Featured Topics:
//             </p>

//             {navData.map((nav) => (
//               <li key={nav.id} className="nav-item">
//                 <Link
//                   className="btn rectangle btn-light mt-xs-10 btn-sm radius animation"
//                   href="/contact"
//                   style={{
//                     fontSize: "10px",
//                     padding: "4px 14px",
//                     borderRadius: "10px",
//                     marginRight: "6px",
//                   }}
//                 >
//                   {nav.title}
//                 </Link>
//               </li>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CounterOne />

//       <div className="container" style={{ marginBottom: "20px" }}>
//         <div className="row align-center">
//           <div className="col-xl-12 col-lg-12">
//             <div className="row align-items-center mb-3 mt-30">
//               <div className="col-lg-9 col-md-8">
//                 <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//                   {/* ✅ PRODUCT TYPE (Dynamic only logic changed) */}
//                   <select
//                     className="form-select"
//                     style={{
//                       maxWidth: "300px",
//                       height: "35px",
//                       fontSize: "12px",
//                     }}
//                     value={filters.contentType}
//                     onChange={(e) =>
//                       setFilters({ ...filters, contentType: e.target.value })
//                     }
//                   >
//                     <option value="">Select a Product Type</option>

//                     {productTypes.map((item, index) => (
//                       <option key={index} value={item}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>

//                   {/* ✅ DOCUMENT TYPE (Dynamic only logic changed) */}
//                   <select
//                     className="form-select"
//                     style={{
//                       maxWidth: "250px",
//                       height: "35px",
//                       fontSize: "12px",
//                     }}
//                     value={filters.industry}
//                     onChange={(e) =>
//                       setFilters({ ...filters, industry: e.target.value })
//                     }
//                   >
//                     <option value="">Select an Document Type</option>

//                     {documentTypes.map((item, index) => (
//                       <option key={index} value={item}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* RIGHT SIDE (UNCHANGED) */}
//               {/* <div className="col-lg-3 col-md-4 text-lg-end mt-2 mt-lg-0">
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "flex-end",
//                     gap: "8px",
//                   }}
//                 >
//                   <p style={{ margin: 0, fontSize: "12px", fontWeight: 500 }}>
//                     Show
//                   </p>

//                   <select
//                     className="form-select"
//                     style={{
//                       maxWidth: "250px",
//                       height: "35px",
//                       fontSize: "12px",
//                     }}
//                     value={filters.sortBy}
//                     onChange={(e) =>
//                       setFilters({ ...filters, sortBy: e.target.value })
//                     }
//                   >
//                     <option value="">Sort By</option>
//                     <option value="Asc">Asc</option>
//                     <option value="Desc">Desc</option>
//                     <option value="Relevance">Relevance</option>
//                   </select>
//                 </div>
//               </div> */}
//             </div>

//             {/* FILTER TAGS (UNCHANGED) */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "10px",
//                 flexWrap: "wrap",
//               }}
//             >
//               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
//                 {Object.entries(filters).map(
//                   ([key, value]) =>
//                     value && (
//                       <span
//                         key={key}
//                         style={{
//                           backgroundColor: "#1d3a72",
//                           color: "white",
//                           padding: "5px 10px",
//                           borderRadius: "6px",
//                           fontSize: "12px",
//                         }}
//                       >
//                         {value}
//                         <span
//                           onClick={() =>
//                             setFilters((prev) => ({ ...prev, [key]: "" }))
//                           }
//                           style={{ cursor: "pointer", marginLeft: "5px" }}
//                         >
//                           ✕
//                         </span>
//                       </span>
//                     ),
//                 )}
//               </div>

//               {Object.values(filters).some(Boolean) && (
//                 <button
//                   onClick={() =>
//                     setFilters({
//                       category: "",
//                       contentType: "",
//                       industry: "",
//                       sortBy: "",
//                     })
//                   }
//                   style={{
//                     marginLeft: "auto",
//                     background: "transparent",
//                     border: "none",
//                     color: "#1d3a72",
//                     fontSize: "12px",
//                     fontWeight: 600,
//                     cursor: "pointer",
//                   }}
//                 >
//                   Clear all Filters
//                 </button>
//               )}
//               {/* <div className="mt-30">
//                 {documents.map((doc) => ( */}
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginBottom: "5px",
//                   width: "100%",
//                   flexWrap: "wrap", // ✅ important
//                   gap: "10px",
//                 }}
//               >
//                 {/* LEFT */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "10px",
//                     flexWrap: "wrap",
//                   }}
//                 >
//                   <input
//                     type="checkbox"
//                     checked={
//                       currentDocs.length > 0 &&
//                       currentDocs.every((doc) => selectedDocs.includes(doc.id))
//                     }
//                     onChange={handleSelectAll}
//                   />
//                   <span style={{ fontSize: "13px" }}>Select All</span>

//                   {/* CLEAR FILTERS */}
//                   {Object.values(filters).some(Boolean) && (
//                     <button
//                       onClick={() =>
//                         setFilters({
//                           category: "",
//                           contentType: "",
//                           industry: "",
//                           sortBy: "",
//                         })
//                       }
//                       style={{
//                         background: "transparent",
//                         border: "none",
//                         color: "#1d3a72",
//                         fontSize: "13px",
//                         fontWeight: 600,
//                         cursor: "pointer",
//                       }}
//                     >
//                       Clear Filters
//                     </button>
//                   )}
//                 </div>

//                 {/* CENTER */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "15px",
//                     justifyContent: "center",
//                     flex: 1,
//                     flexWrap: "wrap", // ✅ wrap on small screens
//                     textAlign: "center",
//                   }}
//                 >
//                   <span style={{ fontSize: "13px", color: "#333" }}>
//                     {selectedOnPage}/{totalOnPage} selected Documents
//                   </span>

//                   <span style={{ fontSize: "13px", color: "#666" }}>
//                     A total of:{" "}
//                     <span style={{ color: "#fecb00", fontWeight: 600 }}>
//                       {totalFiles}
//                     </span>{" "}
//                     Resources found
//                   </span>
//                 </div>

//                 {/* RIGHT */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "flex-end",
//                     width: "auto",
//                   }}
//                 >
//                   {selectedDocs.length > 0 && (
//                     <div
//                       onClick={handleDownloadZip}
//                       style={{
//                         cursor: "pointer",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "6px",
//                       }}
//                     >
//                       <p style={{ margin: 0, fontSize: "13px" }}>
//                         Download Selected ({selectedDocs.length})
//                       </p>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="22"
//                         height="22"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
//                           stroke="#fecb00"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div
//                 style={{
//                   width: "100%",
//                   height: "1px",
//                   backgroundColor: "#e5e5e5",
//                 }}
//               ></div>
//             </div>
//             <div className="row mt-30">
//               {currentDocs.map((doc) => (
//                 <div key={doc.id} className="col-lg-12 mb-10">
//                   {/* ✅ CHECKBOX OUTSIDE CARD */}
//                   <div style={{ display: "flex", alignItems: "center" }}>
//                     <input
//                       type="checkbox"
//                       checked={selectedDocs.includes(doc.id)}
//                       onChange={() => handleSelect(doc.id)}
//                       style={{ marginRight: "10px" }}
//                     />

//                     {/* YOUR CARD (UNCHANGED STYLES) */}
//                     <div
//                       style={{
//                         border: "1px solid #e5e5e5",
//                         borderRadius: "12px",
//                         padding: "10px",
//                         backgroundColor: "white",
//                         transition: "box-shadow 0.3s ease",
//                         cursor: "pointer",
//                         width: "100%",
//                       }}
//                       onClick={() => {
//                         window.open(
//                           `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
//                           "_blank",
//                         );
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.boxShadow =
//                           "0 6px 18px rgba(0,0,0,0.12)";
//                         const icon = e.currentTarget.querySelector(
//                           ".download-icon",
//                         ) as HTMLElement;
//                         if (icon) icon.style.opacity = "1";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.boxShadow = "none";
//                         const icon = e.currentTarget.querySelector(
//                           ".download-icon",
//                         ) as HTMLElement;
//                         if (icon) icon.style.opacity = "0";
//                       }}
//                     >
//                       {/* FULL ROW */}
//                       <div className="d-flex align-items-center justify-content-between">
//                         {/* LEFT SIDE */}
//                         <div className="d-flex align-items-center">
//                           {/* ICON */}
//                           <div
//                             style={{
//                               width: "40px",
//                               height: "40px",
//                               borderRadius: "6px",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               marginRight: "16px",
//                               flexShrink: 0,
//                             }}
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 stroke="#fecb00"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
//                               />
//                             </svg>
//                           </div>

//                           {/* TEXT */}
//                           <div>
//                             <h5
//                               style={{
//                                 color: "#292929",
//                                 fontSize: "12px",
//                                 fontWeight: "600",
//                                 marginBottom: "4px",
//                               }}
//                             >
//                               {doc.document_type}
//                             </h5>

//                             <p
//                               style={{
//                                 color: "#333",
//                                 fontSize: "12px",
//                                 margin: 0,
//                               }}
//                             >
//                               {doc.title}
//                             </p>
//                           </div>
//                         </div>

//                         {/* RIGHT SIDE */}
//                         <div
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "12px",
//                           }}
//                         >
//                           {/* DATE */}
//                           <span
//                             style={{
//                               color: "#666",
//                               fontSize: "14px",
//                             }}
//                           >
//                             {new Date(doc.created_at).toLocaleDateString(
//                               "en-IN",
//                             )}
//                           </span>

//                           {/* DOWNLOAD ICON */}
//                           {/* <div
//                             className="download-icon"
//                             style={{
//                               opacity: 0,
//                               transition: "opacity 0.3s ease",
//                             }}
//                           > */}
//                           <div
//                             className="download-icon"
//                             onClick={(e) => {
//                               e.stopPropagation(); // ✅ VERY IMPORTANT (prevents card click)
//                               handleSingleDownload(doc);
//                             }}
//                             style={{
//                               opacity: 0,
//                               transition: "opacity 0.3s ease",
//                               cursor: "pointer", // ✅ show clickable
//                             }}
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="20"
//                               height="20"
//                               fill="#1d3a72"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
//                                 stroke="#fecb00"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="tp-event-inner-pagination pb-10">
//                   <div className="tp-dashboard-pagination pt-20">
//                     <div className="tp-pagination ">
//                       <Pagination
//                         handlePageClick={handlePageClick}
//                         pageCount={pageCount}
//                         isCenter={true}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// code commented on dated 12-06-2026 //
// "use client";

// import CounterOne from "../counter/counter-one";
// import { useState, useEffect } from "react";
// // import { FaSearch } from "react-icons/fa";
// import Link from "next/link";

// import JSZip from "jszip";
// import { saveAs } from "file-saver";

// import Pagination from "../ui/pagination";

// import { useSearchParams } from "next/navigation"; // new
// import ResourcesSearchBar from "../resources/resourcessearchbar";

// // const navData = [
// //   {
// //     id: "home",
// //     title: "Positioners Series 6P",
// //     ariaControls: "home",
// //     isActive: true,
// //   },
// //   {
// //     id: "profile",
// //     title: "Retaining Cable Kit For Hand Wheel Chai..",
// //     ariaControls: "profile",
// //     isActive: true,
// //   },
// //   {
// //     id: "contact",
// //     title: "Quarter-Turn Valve Solutions for Reduci..",
// //     ariaControls: "contact",
// //     isActive: true,
// //   },
// // ];

// const navData = [
//   {
//     id: "home",
//     title: "Gaskets",
//     ariaControls: "home",
//     isActive: true,
//     href: "/products/non-metallic-gaskets",
//   },
//   {
//     id: "profile",
//     title: "Expansion Joints",
//     ariaControls: "profile",
//     isActive: true,
//     href: "/products/expansion-joint",
//   },
//   {
//     id: "contact",
//     title: "Oil & Gas",
//     ariaControls: "contact",
//     isActive: true,
//     href: "/industries/oil-gas",
//   },
//   {
//     id: "contact",
//     title: "Data Center",
//     ariaControls: "contact",
//     isActive: true,
//     href: "/industries/data-center",
//   },
// ];

// type IProps = {
//   title?: string;
//   subtitle?: string;
// };

// type Document = {
//   id: number | string;
//   title: string;
//   document_type: string;
//   product_type: string;
//   file_url: string;
//   created_at: string;
// };

// export default function ErithDocuments({
//   title = "Hello, how can we help?",
//   subtitle = "Learn more about how Erith can transform and help your company.",
// }: IProps) {
//   const [filters, setFilters] = useState({
//     category: "",
//     contentType: "",
//     industry: "",
//     sortBy: "",
//   });

//   const [productTypes, setProductTypes] = useState<string[]>([]);
//   const [documentTypes, setDocumentTypes] = useState<string[]>([]);
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [filteredDocs, setFilteredDocs] = useState<Document[]>([]);
//   // const [selectedDocs, setSelectedDocs] = useState<number[]>([]);
//   const [selectedDocs, setSelectedDocs] = useState<(number | string)[]>([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const docsPerPage = 10;

//   const searchParams = useSearchParams();

//   // ✅ CLEANED API CALL (removed duplicate fetch)
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const [filtersRes, docsRes] = await Promise.all([
//   //         fetch("https://erithglobalbackend.onrender.com/api/product-downloads/filters"),
//   //         fetch("https://erithglobalbackend.onrender.com/api/product-downloads"),
//   //       ]);

//   //       const filtersData = await filtersRes.json();
//   //       const docsData = await docsRes.json();

//   //       setProductTypes(filtersData.productTypes || []);
//   //       setDocumentTypes(filtersData.documentTypes || []);
//   //       setDocuments(docsData || []);
//   //       setFilteredDocs(docsData || []);
//   //     } catch (err) {
//   //       console.error(err);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const [filtersRes, docsRes, qualityRes] = await Promise.all([
//   //         fetch("https://erithglobalbackend.onrender.com/api/product-downloads/filters"),
//   //         fetch("https://erithglobalbackend.onrender.com/api/product-downloads"),
//   //         fetch("https://erithglobalbackend.onrender.com/api/quality"), // ✅ new
//   //       ]);

//   //       const filtersData = await filtersRes.json();
//   //       const docsData = await docsRes.json();
//   //       const qualityData = await qualityRes.json(); // ✅ new

//   //       const merged = [...(docsData || []), ...(qualityData || [])]; // ✅ merge both

//   //       setProductTypes(filtersData.productTypes || []);
//   //       setDocumentTypes(filtersData.documentTypes || []);
//   //       setDocuments(merged); // ✅ merged
//   //       setFilteredDocs(merged); // ✅ merged
//   //     } catch (err) {
//   //       console.error(err);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   useEffect(() => {
//     const docTypeFromURL = searchParams.get("document_type");

//     if (docTypeFromURL) {
//       setFilters((prev) => ({
//         ...prev,
//         industry: docTypeFromURL, // 👈 maps to document_type filter
//       }));
//     }
//   }, [searchParams]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [filtersRes, docsRes, qualityRes] = await Promise.all([
//           fetch("https://erithglobalbackend.onrender.com/api/product-downloads/filters"),
//           fetch("https://erithglobalbackend.onrender.com/api/product-downloads"),
//           fetch("https://erithglobalbackend.onrender.com/api/quality"),
//         ]);

//         const filtersData = await filtersRes.json();
//         const docsData = ((await docsRes.json()) || []).map((d: Document) => ({
//           ...d,
//           id: `prod_${d.id}`, // ✅ "prod_17"
//         }));
//         const qualityData = ((await qualityRes.json()) || []).map(
//           (d: Document) => ({
//             ...d,
//             id: `qual_${d.id}`, // ✅ "qual_17"
//           }),
//         );

//         // const merged = [...docsData, ...qualityData];
//         const merged = [...docsData, ...qualityData];

//         // ✅ Remove duplicates by id right here
//         const uniqueMerged = Array.from(
//           new Map(merged.map((doc) => [String(doc.id), doc])).values(),
//         );

//         setDocuments(uniqueMerged);
//         setFilteredDocs(uniqueMerged);

//         setProductTypes(filtersData.productTypes || []);
//         setDocumentTypes(filtersData.documentTypes || []);
//         setDocuments(merged);
//         setFilteredDocs(merged);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     let temp = [...documents];

//     if (filters.contentType) {
//       temp = temp.filter(
//         (doc) =>
//           doc.product_type?.trim().toLowerCase() ===
//           filters.contentType.trim().toLowerCase(),
//       );
//     }

//     if (filters.industry) {
//       temp = temp.filter(
//         (doc) =>
//           doc.document_type?.trim().toLowerCase() ===
//           filters.industry.trim().toLowerCase(),
//       );
//     }

//     if (filters.sortBy === "Asc") {
//       temp.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (filters.sortBy === "Desc") {
//       temp.sort((a, b) => b.title.localeCompare(a.title));
//     }

//     setFilteredDocs(temp);
//     setCurrentPage(0);
//   }, [filters, documents]);

//   const offset = currentPage * docsPerPage;
//   const currentDocs = filteredDocs.slice(offset, offset + docsPerPage);
//   const pageCount = Math.ceil(filteredDocs.length / docsPerPage);

//   const handlePageClick = (event: { selected: number }) => {
//     setCurrentPage(event.selected);
//   };

//   // const handleSelect = (id: number) => {
//   //   setSelectedDocs((prev) =>
//   //     prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
//   //   );
//   // };
//   const handleSelect = (id: number | string) => {
//     setSelectedDocs((prev) =>
//       prev.map(String).includes(String(id))
//         ? prev.filter((item) => String(item) !== String(id))
//         : [...prev, id],
//     );
//   };
//   // const handleSelectAll = () => {
//   //   const currentPageIds = currentDocs.map((doc) => doc.id);

//   //   const allSelectedOnPage = currentPageIds.every((id) =>
//   //     selectedDocs.includes(id),
//   //   );

//   //   if (allSelectedOnPage) {
//   //     setSelectedDocs((prev) =>
//   //       prev.filter((id) => !currentPageIds.includes(id)),
//   //     );
//   //   } else {
//   //     setSelectedDocs((prev) => [...new Set([...prev, ...currentPageIds])]);
//   //   }
//   // };

//   const handleSelectAll = () => {
//     const currentPageIds = currentDocs.map((doc) => doc.id);

//     const allSelectedOnPage = currentPageIds.every(
//       (id) => selectedDocs.map(String).includes(String(id)), // ✅ fix
//     );

//     if (allSelectedOnPage) {
//       setSelectedDocs(
//         (prev) =>
//           prev.filter((id) => !currentPageIds.map(String).includes(String(id))), // ✅ fix
//       );
//     } else {
//       // setSelectedDocs((prev) => [...new Set([...prev, ...currentPageIds])]);
//       setSelectedDocs((prev) =>
//         Array.from(new Set([...prev, ...currentPageIds])),
//       );
//     }
//   };

//   //   const handleDownloadZip = async () => {
//   //     if (selectedDocs.length === 0) {
//   //       alert("Please select at least one document");
//   //       return;
//   //     }

//   //     const zip = new JSZip();

//   //     // const selectedFiles = documents.filter((doc) =>
//   //     //   selectedDocs.includes(doc.id),
//   //     // );
//   //     const selectedFiles = documents.filter((doc) =>
//   //   selectedDocs.map(String).includes(String(doc.id)),
//   // );

//   //     await Promise.all(
//   //       selectedFiles.map(async (doc) => {
//   //         const response = await fetch(
//   //           `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
//   //         );
//   //         const blob = await response.blob();
//   //         zip.file(doc.file_url, blob);
//   //       }),
//   //     );

//   //     const content = await zip.generateAsync({ type: "blob" });
//   //     saveAs(content, "documents.zip");
//   //   };

//   //   const handleDownloadZip = async () => {
//   //     if (selectedDocs.length === 0) {
//   //       alert("Please select at least one document");
//   //       return;
//   //     }
//   // //  console.log("selectedDocs:", selectedDocs);

//   //     const zip = new JSZip();

//   //     const selectedFiles = filteredDocs.filter(
//   //       (
//   //         doc, // ✅ filteredDocs not documents
//   //       ) => selectedDocs.map(String).includes(String(doc.id)),
//   //     );

//   //       console.log("COUNT:", selectedFiles.length);
//   //   console.log("IDS:", selectedFiles.map(f => f.id));
//   //   console.log("FILES:", selectedFiles.map(f => f.file_url));

//   //     await Promise.all(
//   //       selectedFiles.map(async (doc) => {
//   //         const response = await fetch(
//   //           `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
//   //         );
//   //         const blob = await response.blob();
//   //         zip.file(doc.file_url, blob);
//   //       }),
//   //     );

//   //     const content = await zip.generateAsync({ type: "blob" });
//   //     saveAs(content, "documents.zip");
//   //   };

//   const handleDownloadZip = async () => {
//     if (selectedDocs.length === 0) {
//       alert("Please select at least one document");
//       return;
//     }

//     const zip = new JSZip();

//     // ✅ Deduplicate filteredDocs by id first, then filter selected
//     const uniqueDocs = Array.from(
//       new Map(filteredDocs.map((doc) => [String(doc.id), doc])).values(),
//     );

//     const selectedFiles = uniqueDocs.filter((doc) =>
//       selectedDocs.map(String).includes(String(doc.id)),
//     );

//     console.log("COUNT:", selectedFiles.length);
//     console.log(
//       "IDS:",
//       selectedFiles.map((f) => f.id),
//     );
//     console.log(
//       "FILES:",
//       selectedFiles.map((f) => f.file_url),
//     );

//     await Promise.all(
//       selectedFiles.map(async (doc) => {
//         const response = await fetch(
//           `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
//         );
//         const blob = await response.blob();
//         zip.file(doc.file_url, blob);
//       }),
//     );

//     const content = await zip.generateAsync({ type: "blob" });
//     saveAs(content, "documents.zip");
//   };

//   const handleSingleDownload = async (doc: Document) => {
//     try {
//       const response = await fetch(
//         `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
//       );
//       const blob = await response.blob();
//       saveAs(blob, doc.file_url);
//     } catch (err) {
//       console.error("Download failed", err);
//     }
//   };

//   // const selectedOnPage = currentDocs.filter((doc) =>
//   //   selectedDocs.includes(doc.id),
//   // ).length;
//   //   const selectedOnPage = currentDocs.filter((doc) =>
//   //   selectedDocs.map(String).includes(String(doc.id)),
//   // ).length;

//   const selectedOnPage = currentDocs.filter(
//     (doc) => selectedDocs.map(String).includes(String(doc.id)), // ✅
//   ).length;

//   const totalOnPage = currentDocs.length;
//   const totalFiles = filteredDocs.length;
//   return (
//     <>
//        <section
//         className="tp-breadcrumb__area pt-100 pb-50 p-relative z-index-1 fix"
//         style={{
//           height: "400px",
//           overflow: "visible", // ✅ IMPORTANT
//           position: "relative",
//           zIndex: 10,
//         }}
//       >
//         {/* <div
//           className="tp-breadcrumb__bg overlay"
//           style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
//         ></div> */}
//         <div
//           className="tp-breadcrumb__bg overlay"
//           style={{
//             backgroundImage: "url(/assets/img/banner/Marine_banner.png)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         ></div>

//         <div className="container" style={{ padding: "0 15px" }}>
//           <div className="row align-items-center">
//             <div className="col-sm-12">
//               <div className="tp-breadcrumb__content text-center">
//                 <div className="tp-breadcrumb__list inner-after">
//                   <h2
//                     className="tp-breadcrumb__title color mb-10"
//                     style={{
//                       fontSize: "clamp(22px, 4vw, 35px)", // ✅ responsive text
//                       lineHeight: "1.2",
//                     }}
//                   >
//                     {title}
//                   </h2>

//                   <p style={{ fontSize: "14px", color: "white" }}>{subtitle}</p>

//                   <ResourcesSearchBar />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Featured Topics */}
//         <div className="tp-campus-student-list d-flex justify-content-center mt-4 px-2">
//           <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
//             <p style={{ fontSize: "16px", margin: 0, color: "white" }}>
//               Featured Topics:
//             </p>

//             {/* {navData.map((nav) => (
//         <Link
//           key={nav.id}
//           href="/contact"
//           className="btn btn-light btn-sm"
//           style={{
//             fontSize: "11px",
//             padding: "4px 12px",
//             borderRadius: "8px",
//           }}
//         >
//           {nav.title}
//         </Link>
//       ))} */}
//             {navData.map((nav) => (
//               <Link
//                 key={nav.id}
//                 href={nav.href} // ✅ use dynamic href
//                 className="btn btn-light btn-sm"
//                 style={{
//                   fontSize: "11px",
//                   padding: "4px 12px",
//                   borderRadius: "8px",
//                 }}
//               >
//                 {nav.title}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CounterOne />

//       <div className="container" style={{ marginBottom: "20px" }}>
//         <div className="row align-center">
//           <div className="col-xl-12 col-lg-12">
//             <div className="row align-items-center mb-3 mt-30">
//               <div className="col-lg-9 col-md-8">
//                 <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//                   {/* ✅ PRODUCT TYPE (Dynamic only logic changed) */}
//                   <select
//                     className="form-select"
//                     style={{
//                       maxWidth: "300px",
//                       height: "35px",
//                       fontSize: "12px",
//                     }}
//                     value={filters.contentType}
//                     onChange={(e) =>
//                       setFilters({ ...filters, contentType: e.target.value })
//                     }
//                   >
//                     <option value="">Select a Product Type</option>

//                     {productTypes.map((item, index) => (
//                       <option key={index} value={item}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>

//                   {/* ✅ DOCUMENT TYPE (Dynamic only logic changed) */}
//                   <select
//                     className="form-select"
//                     style={{
//                       maxWidth: "250px",
//                       height: "35px",
//                       fontSize: "12px",
//                     }}
//                     value={filters.industry}
//                     onChange={(e) =>
//                       setFilters({ ...filters, industry: e.target.value })
//                     }
//                   >
//                     <option value="">Select an Document Type</option>

//                     {documentTypes.map((item, index) => (
//                       <option key={index} value={item}>
//                         {item}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* RIGHT SIDE (UNCHANGED) */}
//               {/* <div className="col-lg-3 col-md-4 text-lg-end mt-2 mt-lg-0">
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "flex-end",
//                     gap: "8px",
//                   }}
//                 >
//                   <p style={{ margin: 0, fontSize: "12px", fontWeight: 500 }}>
//                     Show
//                   </p>

//                   <select
//                     className="form-select"
//                     style={{
//                       maxWidth: "250px",
//                       height: "35px",
//                       fontSize: "12px",
//                     }}
//                     value={filters.sortBy}
//                     onChange={(e) =>
//                       setFilters({ ...filters, sortBy: e.target.value })
//                     }
//                   >
//                     <option value="">Sort By</option>
//                     <option value="Asc">Asc</option>
//                     <option value="Desc">Desc</option>
//                     <option value="Relevance">Relevance</option>
//                   </select>
//                 </div>
//               </div> */}
//             </div>

//             {/* FILTER TAGS (UNCHANGED) */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "10px",
//                 flexWrap: "wrap",
//               }}
//             >
//               <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
//                 {Object.entries(filters).map(
//                   ([key, value]) =>
//                     value && (
//                       <span
//                         key={key}
//                         style={{
//                           backgroundColor: "#1d3a72",
//                           color: "white",
//                           padding: "5px 10px",
//                           borderRadius: "6px",
//                           fontSize: "12px",
//                         }}
//                       >
//                         {value}
//                         <span
//                           onClick={() =>
//                             setFilters((prev) => ({ ...prev, [key]: "" }))
//                           }
//                           style={{ cursor: "pointer", marginLeft: "5px" }}
//                         >
//                           ✕
//                         </span>
//                       </span>
//                     ),
//                 )}
//               </div>

//               {Object.values(filters).some(Boolean) && (
//                 // <button
//                 //   onClick={() =>
//                 //     setFilters({
//                 //       category: "",
//                 //       contentType: "",
//                 //       industry: "",
//                 //       sortBy: "",
//                 //     })
//                 //   }
//                 //   style={{
//                 //     marginLeft: "auto",
//                 //     background: "transparent",
//                 //     border: "none",
//                 //     color: "#1d3a72",
//                 //     fontSize: "12px",
//                 //     fontWeight: 600,
//                 //     cursor: "pointer",
//                 //   }}
//                 // >
//                 //   Clear all Filters
//                 // </button>
//                 <button
//                   onClick={() => {
//                     setFilters({
//                       category: "",
//                       contentType: "",
//                       industry: "",
//                       sortBy: "",
//                     });
//                     setSelectedDocs([]); // ✅ clears all selections too
//                   }}
//                   style={{
//                     marginLeft: "auto",
//                     background: "transparent",
//                     border: "none",
//                     color: "#1d3a72",
//                     fontSize: "12px",
//                     fontWeight: 600,
//                     cursor: "pointer",
//                   }}
//                 >
//                   Reset All
//                 </button>
//               )}
//               {/* <div className="mt-30">
//                 {documents.map((doc) => ( */}
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginBottom: "5px",
//                   width: "100%",
//                   flexWrap: "wrap", // ✅ important
//                   gap: "10px",
//                 }}
//               >
//                 {/* LEFT */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "10px",
//                     flexWrap: "wrap",
//                   }}
//                 >
//                   <input
//                     type="checkbox"
//                     checked={
//                       currentDocs.length > 0 &&
//                       // currentDocs.every((doc) => selectedDocs.includes(doc.id))
//                       currentDocs.every((doc) =>
//                         selectedDocs.map(String).includes(String(doc.id)),
//                       )
//                     }
//                     onChange={handleSelectAll}
//                   />
//                   <span style={{ fontSize: "13px" }}>Select All</span>
//                   <button
//                     onClick={() => {
//                       setFilters({
//                         category: "",
//                         contentType: "",
//                         industry: "",
//                         sortBy: "",
//                       });
//                       setSelectedDocs([]); // ✅ clears all selections too
//                     }}
//                     style={{
//                       background: "transparent",
//                       border: "none",
//                       color: "#1d3a72",
//                       fontSize: "13px",
//                       fontWeight: 600,
//                       cursor: "pointer",
//                     }}
//                   >
//                     | Reset All
//                   </button>

//                   {/* CLEAR FILTERS */}
//                   {Object.values(filters).some(Boolean) && (
//                     <button
//                       onClick={() =>
//                         setFilters({
//                           category: "",
//                           contentType: "",
//                           industry: "",
//                           sortBy: "",
//                         })
//                       }
//                       style={{
//                         background: "transparent",
//                         border: "none",
//                         color: "#1d3a72",
//                         fontSize: "13px",
//                         fontWeight: 600,
//                         cursor: "pointer",
//                       }}
//                     >
//                       Clear Filters
//                     </button>
//                   )}
//                 </div>

//                 {/* CENTER */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "15px",
//                     justifyContent: "center",
//                     flex: 1,
//                     flexWrap: "wrap", // ✅ wrap on small screens
//                     textAlign: "center",
//                   }}
//                 >
//                   <span style={{ fontSize: "13px", color: "#333" }}>
//                     {selectedOnPage}/{totalOnPage} selected Documents
//                   </span>

//                   <span style={{ fontSize: "13px", color: "#666" }}>
//                     A total of:{" "}
//                     <span style={{ color: "#fecb00", fontWeight: 600 }}>
//                       {totalFiles}
//                     </span>{" "}
//                     Resources found
//                   </span>
//                 </div>

//                 {/* RIGHT */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "flex-end",
//                     width: "auto",
//                   }}
//                 >
//                   {selectedDocs.length > 0 && (
//                     <div
//                       onClick={handleDownloadZip}
//                       style={{
//                         cursor: "pointer",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "6px",
//                       }}
//                     >
//                       <p style={{ margin: 0, fontSize: "13px" }}>
//                         Download Selected ({selectedDocs.length})
//                       </p>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="22"
//                         height="22"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
//                           stroke="#fecb00"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div
//                 style={{
//                   width: "100%",
//                   height: "1px",
//                   backgroundColor: "#e5e5e5",
//                 }}
//               ></div>
//             </div>
//             <div className="row mt-30">
//               {currentDocs.map((doc) => (
//                 <div key={doc.id} className="col-lg-12 mb-10">
//                   {/* ✅ CHECKBOX OUTSIDE CARD */}
//                   <div style={{ display: "flex", alignItems: "center" }}>
//                     <input
//                       type="checkbox"
//                       // checked={selectedDocs.includes(doc.id)}
//                       checked={selectedDocs
//                         .map(String)
//                         .includes(String(doc.id))}
//                       onChange={() => handleSelect(doc.id)}
//                       style={{ marginRight: "10px" }}
//                     />

//                     {/* YOUR CARD (UNCHANGED STYLES) */}
//                     <div
//                       style={{
//                         border: "1px solid #e5e5e5",
//                         borderRadius: "12px",
//                         padding: "10px",
//                         backgroundColor: "white",
//                         transition: "box-shadow 0.3s ease",
//                         cursor: "pointer",
//                         width: "100%",
//                       }}
//                       onClick={() => {
//                         window.open(
//                           `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
//                           "_blank",
//                         );
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.boxShadow =
//                           "0 6px 18px rgba(0,0,0,0.12)";
//                         const icon = e.currentTarget.querySelector(
//                           ".download-icon",
//                         ) as HTMLElement;
//                         if (icon) icon.style.opacity = "1";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.boxShadow = "none";
//                         const icon = e.currentTarget.querySelector(
//                           ".download-icon",
//                         ) as HTMLElement;
//                         if (icon) icon.style.opacity = "0";
//                       }}
//                     >
//                       {/* FULL ROW */}
//                       <div className="d-flex align-items-center justify-content-between">
//                         {/* LEFT SIDE */}
//                         <div className="d-flex align-items-center">
//                           {/* ICON */}
//                           <div
//                             style={{
//                               width: "40px",
//                               height: "40px",
//                               borderRadius: "6px",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               marginRight: "16px",
//                               flexShrink: 0,
//                             }}
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 stroke="#fecb00"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
//                               />
//                             </svg>
//                           </div>

//                           {/* TEXT */}
//                           <div>
//                             <h5
//                               style={{
//                                 color: "#292929",
//                                 fontSize: "12px",
//                                 fontWeight: "600",
//                                 marginBottom: "4px",
//                               }}
//                             >
//                               {doc.document_type}
//                             </h5>

//                             <p
//                               style={{
//                                 color: "#333",
//                                 fontSize: "12px",
//                                 margin: 0,
//                               }}
//                             >
//                               {doc.title}
//                             </p>
//                           </div>
//                         </div>

//                         {/* RIGHT SIDE */}
//                         <div
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "12px",
//                           }}
//                         >
//                           {/* DATE */}
//                           <span
//                             style={{
//                               color: "#666",
//                               fontSize: "14px",
//                             }}
//                           >
//                             {new Date(doc.created_at).toLocaleDateString(
//                               "en-IN",
//                             )}
//                           </span>

//                           {/* DOWNLOAD ICON */}
//                           {/* <div
//                             className="download-icon"
//                             style={{
//                               opacity: 0,
//                               transition: "opacity 0.3s ease",
//                             }}
//                           > */}
//                           <div
//                             className="download-icon"
//                             onClick={(e) => {
//                               e.stopPropagation(); // ✅ VERY IMPORTANT (prevents card click)
//                               handleSingleDownload(doc);
//                             }}
//                             style={{
//                               opacity: 0,
//                               transition: "opacity 0.3s ease",
//                               cursor: "pointer", // ✅ show clickable
//                             }}
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="20"
//                               height="20"
//                               fill="#1d3a72"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
//                                 stroke="#fecb00"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="tp-event-inner-pagination pb-10">
//                   <div className="tp-dashboard-pagination pt-20">
//                     <div className="tp-pagination ">
//                       <Pagination
//                         handlePageClick={handlePageClick}
//                         pageCount={pageCount}
//                         isCenter={true}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// code commented on dated 12-06-2026 //

// "use client";

// import CounterOne from "../counter/counter-one";
// import { useState, useEffect, useCallback } from "react";
// import Link from "next/link";
// import JSZip from "jszip";
// import { saveAs } from "file-saver";
// import Pagination from "../ui/pagination";
// import { useSearchParams, useRouter, usePathname } from "next/navigation";
// import ResourcesSearchBar from "../resources/resourcessearchbar";

// const navData = [
//   {
//     id: "gaskets",
//     title: "Gaskets",
//     href: "/products/non-metallic-gaskets",
//   },
//   {
//     id: "expansion",
//     title: "Expansion Joints",
//     href: "/products/expansion-joint",
//   },
//   {
//     id: "oilgas",
//     title: "Oil & Gas",
//     href: "/industries/oil-gas",
//   },
//   {
//     id: "datacenter",
//     title: "Data Center",
//     href: "/industries/data-center",
//   },
// ];

// type IProps = {
//   title?: string;
//   subtitle?: string;
// };

// type Document = {
//   id: number | string;
//   title: string;
//   document_type: string;
//   product_type: string;
//   file_url: string;
//   created_at: string;
// };

// export default function ErithDocuments({
//   title = "Hello, how can we help?",
//   subtitle = "Learn more about how Erith can transform and help your company.",
// }: IProps) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   // ── Read initial filter values from the URL ──────────────────────────────
//   const [filters, setFilters] = useState({
//     category: searchParams.get("category") || "",
//     contentType: searchParams.get("product_type") || "",
//     industry: searchParams.get("document_type") || "",
//     sortBy: searchParams.get("sort") || "",
//   });

//   const [productTypes, setProductTypes] = useState<string[]>([]);
//   const [documentTypes, setDocumentTypes] = useState<string[]>([]);
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [filteredDocs, setFilteredDocs] = useState<Document[]>([]);
//   const [selectedDocs, setSelectedDocs] = useState<(number | string)[]>([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const docsPerPage = 10;

//   // ── Sync filters → URL ────────────────────────────────────────────────────
//   const pushFiltersToURL = useCallback(
//     (newFilters: typeof filters) => {
//       const params = new URLSearchParams();
//       if (newFilters.category) params.set("category", newFilters.category);
//       if (newFilters.contentType)
//         params.set("product_type", newFilters.contentType);
//       if (newFilters.industry)
//         params.set("document_type", newFilters.industry);
//       if (newFilters.sortBy) params.set("sort", newFilters.sortBy);

//       const query = params.toString();
//       router.replace(query ? `${pathname}?${query}` : pathname, {
//         scroll: false,
//       });
//     },
//     [pathname, router],
//   );

//   const updateFilter = (key: keyof typeof filters, value: string) => {
//     const updated = { ...filters, [key]: value };
//     setFilters(updated);
//     setCurrentPage(0);
//     pushFiltersToURL(updated);
//   };

//   const resetAll = () => {
//     const cleared = { category: "", contentType: "", industry: "", sortBy: "" };
//     setFilters(cleared);
//     setSelectedDocs([]);
//     setCurrentPage(0);
//     router.replace(pathname, { scroll: false }); // ← URL goes back to plain path
//   };

//   // ── Fetch data ────────────────────────────────────────────────────────────
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [filtersRes, docsRes, qualityRes] = await Promise.all([
//           fetch("https://erithglobalbackend.onrender.com/api/product-downloads/filters"),
//           fetch("https://erithglobalbackend.onrender.com/api/product-downloads"),
//           fetch("https://erithglobalbackend.onrender.com/api/quality"),
//         ]);

//         const filtersData = await filtersRes.json();
//         const docsData = ((await docsRes.json()) || []).map((d: Document) => ({
//           ...d,
//           id: `prod_${d.id}`,
//         }));
//         const qualityData = ((await qualityRes.json()) || []).map(
//           (d: Document) => ({ ...d, id: `qual_${d.id}` }),
//         );

//         const merged = [...docsData, ...qualityData];
//         const unique = Array.from(
//           new Map(merged.map((doc) => [String(doc.id), doc])).values(),
//         );

//         setDocuments(unique);
//         setFilteredDocs(unique);
//         setProductTypes(filtersData.productTypes || []);
//         setDocumentTypes(filtersData.documentTypes || []);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, []);

//   // ── Apply filters whenever filters or documents change ───────────────────
//   useEffect(() => {
//     let temp = [...documents];

//     if (filters.contentType) {
//       temp = temp.filter(
//         (doc) =>
//           doc.product_type?.trim().toLowerCase() ===
//           filters.contentType.trim().toLowerCase(),
//       );
//     }

//     if (filters.industry) {
//       temp = temp.filter(
//         (doc) =>
//           doc.document_type?.trim().toLowerCase() ===
//           filters.industry.trim().toLowerCase(),
//       );
//     }

//     if (filters.sortBy === "Asc") {
//       temp.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (filters.sortBy === "Desc") {
//       temp.sort((a, b) => b.title.localeCompare(a.title));
//     }

//     setFilteredDocs(temp);
//     setCurrentPage(0);
//   }, [filters, documents]);

//   // ── Pagination ────────────────────────────────────────────────────────────
//   const offset = currentPage * docsPerPage;
//   const currentDocs = filteredDocs.slice(offset, offset + docsPerPage);
//   const pageCount = Math.ceil(filteredDocs.length / docsPerPage);

//   const handlePageClick = (event: { selected: number }) => {
//     setCurrentPage(event.selected);
//   };

//   // ── Selection helpers ─────────────────────────────────────────────────────
//   const handleSelect = (id: number | string) => {
//     setSelectedDocs((prev) =>
//       prev.map(String).includes(String(id))
//         ? prev.filter((item) => String(item) !== String(id))
//         : [...prev, id],
//     );
//   };

//   const handleSelectAll = () => {
//     const pageIds = currentDocs.map((doc) => doc.id);
//     const allSelected = pageIds.every((id) =>
//       selectedDocs.map(String).includes(String(id)),
//     );
//     if (allSelected) {
//       setSelectedDocs((prev) =>
//         prev.filter((id) => !pageIds.map(String).includes(String(id))),
//       );
//     } else {
//       setSelectedDocs((prev) => Array.from(new Set([...prev, ...pageIds])));
//     }
//   };

//   // ── Downloads ─────────────────────────────────────────────────────────────
//   const handleDownloadZip = async () => {
//     if (selectedDocs.length === 0) {
//       alert("Please select at least one document");
//       return;
//     }
//     const zip = new JSZip();
//     const unique = Array.from(
//       new Map(filteredDocs.map((doc) => [String(doc.id), doc])).values(),
//     );
//     const selected = unique.filter((doc) =>
//       selectedDocs.map(String).includes(String(doc.id)),
//     );
//     await Promise.all(
//       selected.map(async (doc) => {
//         const res = await fetch(
//           `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
//         );
//         const blob = await res.blob();
//         zip.file(doc.file_url, blob);
//       }),
//     );
//     const content = await zip.generateAsync({ type: "blob" });
//     saveAs(content, "documents.zip");
//   };

//   const handleSingleDownload = async (doc: Document) => {
//     try {
//       const res = await fetch(
//         `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
//       );
//       const blob = await res.blob();
//       saveAs(blob, doc.file_url);
//     } catch (err) {
//       console.error("Download failed", err);
//     }
//   };

//   const selectedOnPage = currentDocs.filter((doc) =>
//     selectedDocs.map(String).includes(String(doc.id)),
//   ).length;
//   const totalOnPage = currentDocs.length;
//   const totalFiles = filteredDocs.length;
//   const hasActiveFilters = Object.values(filters).some(Boolean);

//   return (
//     <>
//       {/* ── HERO / BANNER ───────────────────────────────────────────────── */}
//       <section
//         className="tp-breadcrumb__area pt-100 pb-50 p-relative z-index-1 fix"
//         style={{
//           minHeight: "400px",
//           overflow: "visible",
//           position: "relative",
//           zIndex: 10,
//         }}
//       >
//         <div
//           className="tp-breadcrumb__bg overlay"
//           style={{
//             backgroundImage: "url(/assets/img/banner/Marine_banner.png)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-12">
//               <div className="tp-breadcrumb__content text-center">
//                 <div className="tp-breadcrumb__list inner-after">
//                   <h2
//                     className="tp-breadcrumb__title color mb-10"
//                     style={{ fontSize: "clamp(20px, 4vw, 35px)", lineHeight: 1.2 }}
//                   >
//                     {title}
//                   </h2>
//                   <p style={{ fontSize: "14px", color: "white" }}>{subtitle}</p>
//                   <ResourcesSearchBar />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Featured Topics */}
//         <div className="tp-campus-student-list d-flex justify-content-center mt-4 px-2">
//           <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
//             <p style={{ fontSize: "16px", margin: 0, color: "white" }}>
//               Featured Topics:
//             </p>
//             {navData.map((nav) => (
//               <Link
//                 key={nav.id}
//                 href={nav.href}
//                 className="btn btn-light btn-sm"
//                 style={{ fontSize: "11px", padding: "4px 12px", borderRadius: "8px" }}
//               >
//                 {nav.title}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CounterOne />

//       {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
//       <div className="container" style={{ marginBottom: "40px" }}>
//         <div className="row">
//           <div className="col-12">

//             {/* ── FILTER ROW ──────────────────────────────────────────── */}
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "10px",
//                 alignItems: "center",
//                 marginTop: "30px",
//                 marginBottom: "12px",
//               }}
//             >
//               {/* Product Type */}
//               <select
//                 className="form-select"
//                 style={{ flex: "1 1 200px", maxWidth: "320px", height: "38px", fontSize: "13px" }}
//                 value={filters.contentType}
//                 onChange={(e) => updateFilter("contentType", e.target.value)}
//               >
//                 <option value="">Select a Product Type</option>
//                 {productTypes.map((item, i) => (
//                   <option key={i} value={item}>{item}</option>
//                 ))}
//               </select>

//               {/* Document Type */}
//               <select
//                 className="form-select"
//                 style={{ flex: "1 1 200px", maxWidth: "280px", height: "38px", fontSize: "13px" }}
//                 value={filters.industry}
//                 onChange={(e) => updateFilter("industry", e.target.value)}
//               >
//                 <option value="">Select a Document Type</option>
//                 {documentTypes.map((item, i) => (
//                   <option key={i} value={item}>{item}</option>
//                 ))}
//               </select>
//             </div>

//             {/* ── ACTIVE FILTER TAGS ───────────────────────────────── */}
//             {hasActiveFilters && (
//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: "8px",
//                   alignItems: "center",
//                   marginBottom: "10px",
//                 }}
//               >
//                 {Object.entries(filters).map(
//                   ([key, value]) =>
//                     value && (
//                       <span
//                         key={key}
//                         style={{
//                           backgroundColor: "#1d3a72",
//                           color: "white",
//                           padding: "4px 10px",
//                           borderRadius: "6px",
//                           fontSize: "12px",
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "6px",
//                         }}
//                       >
//                         {value}
//                         <span
//                           onClick={() => updateFilter(key as keyof typeof filters, "")}
//                           style={{ cursor: "pointer", lineHeight: 1 }}
//                           aria-label={`Remove ${value} filter`}
//                         >
//                           ✕
//                         </span>
//                       </span>
//                     ),
//                 )}
//                 <button
//                   onClick={resetAll}
//                   style={{
//                     background: "transparent",
//                     border: "none",
//                     color: "#1d3a72",
//                     fontSize: "12px",
//                     fontWeight: 600,
//                     cursor: "pointer",
//                     marginLeft: "4px",
//                   }}
//                 >
//                   Reset All
//                 </button>
//               </div>
//             )}

//             {/* ── TOOLBAR (select-all / counts / download) ─────────── */}
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 alignItems: "center",
//                 gap: "12px",
//                 marginBottom: "8px",
//               }}
//             >
//               {/* Left: checkbox + reset */}
//               <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: "0 0 auto" }}>
//                 <input
//                   type="checkbox"
//                   id="selectAll"
//                   checked={
//                     currentDocs.length > 0 &&
//                     currentDocs.every((doc) =>
//                       selectedDocs.map(String).includes(String(doc.id)),
//                     )
//                   }
//                   onChange={handleSelectAll}
//                 />
//                 <label htmlFor="selectAll" style={{ fontSize: "13px", margin: 0, cursor: "pointer" }}>
//                   Select All
//                 </label>
//                 <button
//                   onClick={resetAll}
//                   style={{
//                     background: "transparent",
//                     border: "none",
//                     color: "#1d3a72",
//                     fontSize: "13px",
//                     fontWeight: 600,
//                     cursor: "pointer",
//                     padding: 0,
//                   }}
//                 >
//                   | Reset All
//                 </button>
//                 {hasActiveFilters && (
//                   <button
//                     onClick={() =>
//                       setFilters({ category: "", contentType: "", industry: "", sortBy: "" })
//                     }
//                     style={{
//                       background: "transparent",
//                       border: "none",
//                       color: "#1d3a72",
//                       fontSize: "13px",
//                       fontWeight: 600,
//                       cursor: "pointer",
//                       padding: 0,
//                     }}
//                   >
//                     Clear Filters
//                   </button>
//                 )}
//               </div>

//               {/* Center: counts — grows to fill */}
//               <div
//                 style={{
//                   flex: "1 1 auto",
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: "12px",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                 }}
//               >
//                 <span style={{ fontSize: "13px", color: "#333" }}>
//                   {selectedOnPage}/{totalOnPage} selected
//                 </span>
//                 <span style={{ fontSize: "13px", color: "#666" }}>
//                   Total:{" "}
//                   <span style={{ color: "#fecb00", fontWeight: 600 }}>{totalFiles}</span>{" "}
//                   resources found
//                 </span>
//               </div>

//               {/* Right: download button */}
//               {selectedDocs.length > 0 && (
//                 <div
//                   onClick={handleDownloadZip}
//                   style={{
//                     cursor: "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "6px",
//                     flex: "0 0 auto",
//                   }}
//                 >
//                   <p style={{ margin: 0, fontSize: "13px", whiteSpace: "nowrap" }}>
//                     Download ({selectedDocs.length})
//                   </p>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
//                     <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="#fecb00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </div>
//               )}
//             </div>

//             <div style={{ width: "100%", height: "1px", backgroundColor: "#e5e5e5", marginBottom: "16px" }} />

//             {/* ── DOCUMENT LIST ────────────────────────────────────── */}
//             <div className="row">
//               {currentDocs.length === 0 ? (
//                 <div className="col-12 text-center py-5" style={{ color: "#666" }}>
//                   No documents match your current filters.
//                 </div>
//               ) : (
//                 currentDocs.map((doc) => (
//                   <div key={doc.id} className="col-12 mb-2">
//                     <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                       {/* Checkbox */}
//                       <input
//                         type="checkbox"
//                         checked={selectedDocs.map(String).includes(String(doc.id))}
//                         onChange={() => handleSelect(doc.id)}
//                         style={{ flexShrink: 0 }}
//                       />

//                       {/* Card */}
//                       <div
//                         style={{
//                           border: "1px solid #e5e5e5",
//                           borderRadius: "12px",
//                           padding: "10px 14px",
//                           backgroundColor: "white",
//                           transition: "box-shadow 0.3s ease",
//                           cursor: "pointer",
//                           width: "100%",
//                         }}
//                         onClick={() =>
//                           window.open(`https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`, "_blank")
//                         }
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
//                           const icon = e.currentTarget.querySelector(".download-icon") as HTMLElement;
//                           if (icon) icon.style.opacity = "1";
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.boxShadow = "none";
//                           const icon = e.currentTarget.querySelector(".download-icon") as HTMLElement;
//                           if (icon) icon.style.opacity = "0";
//                         }}
//                       >
//                         <div
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "space-between",
//                             flexWrap: "wrap",
//                             gap: "8px",
//                           }}
//                         >
//                           {/* Left: icon + text */}
//                           <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: "1 1 0", minWidth: 0 }}>
//                             {/* PDF icon */}
//                             <div style={{ flexShrink: 0, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                                 <path stroke="#fecb00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z" />
//                               </svg>
//                             </div>
//                             {/* Title */}
//                             <div style={{ minWidth: 0 }}>
//                               <h5 style={{ color: "#292929", fontSize: "12px", fontWeight: 600, marginBottom: "4px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                                 {doc.document_type}
//                               </h5>
//                               <p style={{ color: "#333", fontSize: "12px", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                                 {doc.title}
//                               </p>
//                             </div>
//                           </div>

//                           {/* Right: date + download */}
//                           <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
//                             <span style={{ color: "#666", fontSize: "12px", whiteSpace: "nowrap" }}>
//                               {new Date(doc.created_at).toLocaleDateString("en-IN")}
//                             </span>
//                             <div
//                               className="download-icon"
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleSingleDownload(doc);
//                               }}
//                               style={{ opacity: 0, transition: "opacity 0.3s ease", cursor: "pointer" }}
//                             >
//                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
//                                 <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="#fecb00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>

//             {/* ── PAGINATION ───────────────────────────────────────── */}
//             <div className="row mt-3">
//               <div className="col-12">
//                 <div className="tp-event-inner-pagination pb-10">
//                   <div className="tp-dashboard-pagination pt-20">
//                     <div className="tp-pagination">
//                       <Pagination
//                         handlePageClick={handlePageClick}
//                         pageCount={pageCount}
//                         isCenter={true}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ── RESPONSIVE TWEAKS ───────────────────────────────────────────── */}
//       <style>{`
//         @media (max-width: 576px) {
//           .tp-breadcrumb__area {
//             min-height: 320px !important;
//             padding-top: 60px !important;
//           }
//           .tp-campus-student-list {
//             margin-top: 12px !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

"use client";

import CounterOne from "../counter/counter-one";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Pagination from "../ui/pagination";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ResourcesSearchBar from "../resources/resourcessearchbar";
// import { zip } from "d3";

const navData = [
  {
    id: "gaskets",
    title: "Gaskets",
    href: "/products/non-metallic-gaskets",
  },
  {
    id: "expansion",
    title: "Expansion Joints",
    href: "/products/expansion-joint",
  },
  {
    id: "oilgas",
    title: "Oil & Gas",
    href: "/industries/oil-gas",
  },
  {
    id: "datacenter",
    title: "Data Center",
    href: "/industries/data-center",
  },
];

type IProps = {
  title?: string;
  subtitle?: string;
};

type Document = {
  id: number | string;
  title: string;
  document_type: string;
  product_type: string;
  file_url: string;
  created_at: string;
};

export default function ErithDocuments({
  title = "Hello, how can we help?",
  subtitle = "Learn more about how Erith can transform and help your company.",
}: IProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ── Read initial filter values from the URL ──────────────────────────────
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    contentType: searchParams.get("product_type") || "",
    industry: searchParams.get("document_type") || "",
    sortBy: searchParams.get("sort") || "",
  });

  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [documentTypes, setDocumentTypes] = useState<string[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [filteredDocs, setFilteredDocs] = useState<Document[]>([]);
  const [selectedDocs, setSelectedDocs] = useState<(number | string)[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const docsPerPage = 10;

  // ── Sync filters → URL ────────────────────────────────────────────────────
  const pushFiltersToURL = useCallback(
    (newFilters: typeof filters) => {
      const params = new URLSearchParams();
      if (newFilters.category) params.set("category", newFilters.category);
      if (newFilters.contentType)
        params.set("product_type", newFilters.contentType);
      if (newFilters.industry) params.set("document_type", newFilters.industry);
      if (newFilters.sortBy) params.set("sort", newFilters.sortBy);

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router],
  );

  const updateFilter = (key: keyof typeof filters, value: string) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    setCurrentPage(0);
    pushFiltersToURL(updated);
  };

  const resetAll = () => {
    const cleared = { category: "", contentType: "", industry: "", sortBy: "" };
    setFilters(cleared);
    setSelectedDocs([]);
    setCurrentPage(0);
    router.replace(pathname, { scroll: false }); // ← URL goes back to plain path
  };

  // ── Fetch data ────────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [filtersRes, docsRes, qualityRes] = await Promise.all([
          fetch(
            "https://erithglobalbackend.onrender.com/api/product-downloads/filters",
          ),
          fetch(
            "https://erithglobalbackend.onrender.com/api/product-downloads",
          ),
          fetch("https://erithglobalbackend.onrender.com/api/quality"),
        ]);

        const filtersData = await filtersRes.json();
        // const docsData = ((await docsRes.json()) || []).map((d: Document) => ({
        //   ...d,
        //   id: `prod_${d.id}`,
        // }));

        // const qualityData = ((await qualityRes.json()) || []).map(
        //   (d: Document) => ({ ...d, id: `qual_${d.id}` }),
        // );

        const docsData = ((await docsRes.json()) || []).map(
          (d: Document, index: number) => ({
            ...d,
            id: `prod_${d.id}_${index}`,
          }),
        );

        const qualityData = ((await qualityRes.json()) || []).map(
          (d: Document, index: number) => ({
            ...d,
            id: `qual_${d.id}_${index}`,
          }),
        );

        const merged = [...docsData, ...qualityData];

        //     console.log("Product Downloads:", docsData.length);
        //     console.log("Quality:", qualityData.length);
        //     console.log("Merged:", merged.length);
        //         console.table(
        //   docsData.map((d) => ({
        //     id: d.id,
        //     title: d.title,
        //     file_url: d.file_url,
        //   }))
        // );

        // Dedupe by file_url — keeps the first occurrence of each unique file
        // const seenUrls = new Set<string>();
        // const unique = merged.filter((doc) => {
        //   const key = doc.file_url?.trim().toLowerCase();
        //   if (!key || seenUrls.has(key)) return false;
        //   seenUrls.add(key);
        //   return true;
        // });

        // setDocuments(unique);
        // setFilteredDocs(unique);
        setDocuments(merged);
        setFilteredDocs(merged);
        setProductTypes(filtersData.productTypes || []);
        setDocumentTypes(filtersData.documentTypes || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // ── Apply filters whenever filters or documents change ───────────────────
  useEffect(() => {
    let temp = [...documents];

    if (filters.contentType) {
      temp = temp.filter(
        (doc) =>
          doc.product_type?.trim().toLowerCase() ===
          filters.contentType.trim().toLowerCase(),
      );
    }

    if (filters.industry) {
      temp = temp.filter(
        (doc) =>
          doc.document_type?.trim().toLowerCase() ===
          filters.industry.trim().toLowerCase(),
      );
    }

    if (filters.sortBy === "Asc") {
      temp.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filters.sortBy === "Desc") {
      temp.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredDocs(temp);
    setCurrentPage(0);
  }, [filters, documents]);

  // ── Pagination ────────────────────────────────────────────────────────────
  const offset = currentPage * docsPerPage;
  const currentDocs = filteredDocs.slice(offset, offset + docsPerPage);
  const pageCount = Math.ceil(filteredDocs.length / docsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  // ── Selection helpers ─────────────────────────────────────────────────────
  const handleSelect = (id: number | string) => {
    setSelectedDocs((prev) =>
      prev.map(String).includes(String(id))
        ? prev.filter((item) => String(item) !== String(id))
        : [...prev, id],
    );
  };

  const handleSelectAll = () => {
    const pageIds = currentDocs.map((doc) => doc.id);
    const allSelected = pageIds.every((id) =>
      selectedDocs.map(String).includes(String(id)),
    );
    if (allSelected) {
      setSelectedDocs((prev) =>
        prev.filter((id) => !pageIds.map(String).includes(String(id))),
      );
    } else {
      setSelectedDocs((prev) => Array.from(new Set([...prev, ...pageIds])));
    }
  };

  // ── Downloads ─────────────────────────────────────────────────────────────
  const handleDownloadZip = async () => {
    if (selectedDocs.length === 0) {
      alert("Please select at least one document");
      return;
    }
    const zip = new JSZip();
    // const seenUrls = new Set<string>();
    // const unique = filteredDocs.filter((doc) => {
    //   const key = doc.file_url?.trim().toLowerCase();
    //   if (!key || seenUrls.has(key)) return false;
    //   seenUrls.add(key);
    //   return true;
    // });
    // const selected = unique.filter((doc) =>
    //   selectedDocs.map(String).includes(String(doc.id)),
    // );
    const selected = filteredDocs.filter((doc) =>
      selectedDocs.map(String).includes(String(doc.id)),
    );
    await Promise.all(
      selected.map(async (doc) => {
        const res = await fetch(
          `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
        );
        const blob = await res.blob();
        zip.file(doc.file_url, blob);
      }),
    );
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "documents.zip");
  };

  const handleSingleDownload = async (doc: Document) => {
    try {
      const res = await fetch(
        `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
      );
      const blob = await res.blob();
      saveAs(blob, doc.file_url);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  const selectedOnPage = currentDocs.filter((doc) =>
    selectedDocs.map(String).includes(String(doc.id)),
  ).length;
  const totalOnPage = currentDocs.length;
  const totalFiles = filteredDocs.length;
  const hasActiveFilters = Object.values(filters).some(Boolean);

  return (
    <>
      {/* ── HERO / BANNER ───────────────────────────────────────────────── */}
      <section
        className="tp-breadcrumb__area pt-100 pb-50 p-relative z-index-1 fix"
        style={{
          minHeight: "400px",
          overflow: "visible",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          className="tp-breadcrumb__bg overlay"
          style={{
            backgroundImage: "url(/assets/img/banner/Marine_banner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="tp-breadcrumb__content text-center">
                <div className="tp-breadcrumb__list inner-after">
                  <h2
                    className="tp-breadcrumb__title color mb-10"
                    style={{
                      fontSize: "clamp(20px, 4vw, 35px)",
                      lineHeight: 1.2,
                    }}
                  >
                    {title}
                  </h2>
                  <p style={{ fontSize: "14px", color: "white" }}>{subtitle}</p>
                  <ResourcesSearchBar />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="tp-campus-student-list d-flex justify-content-center mt-4 px-2">
          <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
            <p style={{ fontSize: "16px", margin: 0, color: "white" }}>
              Featured Topics:
            </p>
            {navData.map((nav) => (
              <Link
                key={nav.id}
                href={nav.href}
                className="btn btn-light btn-sm"
                style={{
                  fontSize: "11px",
                  padding: "4px 12px",
                  borderRadius: "8px",
                }}
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CounterOne />

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <div className="container" style={{ marginBottom: "40px" }}>
        <div className="row">
          <div className="col-12">
            {/* ── FILTER ROW ──────────────────────────────────────────── */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                alignItems: "center",
                marginTop: "30px",
                marginBottom: "12px",
              }}
            >
              {/* Product Type */}
              <select
                className="form-select"
                style={{
                  flex: "1 1 200px",
                  maxWidth: "320px",
                  height: "38px",
                  fontSize: "13px",
                }}
                value={filters.contentType}
                onChange={(e) => updateFilter("contentType", e.target.value)}
              >
                <option value="">Select a Product Type</option>
                {productTypes.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {/* Document Type */}
              <select
                className="form-select"
                style={{
                  flex: "1 1 200px",
                  maxWidth: "280px",
                  height: "38px",
                  fontSize: "13px",
                }}
                value={filters.industry}
                onChange={(e) => updateFilter("industry", e.target.value)}
              >
                <option value="">Select a Document Type</option>
                {documentTypes.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* ── ACTIVE FILTER TAGS ───────────────────────────────── */}
            {hasActiveFilters && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                {Object.entries(filters).map(
                  ([key, value]) =>
                    value && (
                      <span
                        key={key}
                        style={{
                          backgroundColor: "#1d3a72",
                          color: "white",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        {value}
                        <span
                          onClick={() =>
                            updateFilter(key as keyof typeof filters, "")
                          }
                          style={{ cursor: "pointer", lineHeight: 1 }}
                          aria-label={`Remove ${value} filter`}
                        >
                          ✕
                        </span>
                      </span>
                    ),
                )}
                <button
                  onClick={resetAll}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#1d3a72",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                    marginLeft: "4px",
                  }}
                >
                  Reset All
                </button>
              </div>
            )}

            {/* ── TOOLBAR (select-all / counts / download) ─────────── */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px",
                marginBottom: "8px",
              }}
            >
              {/* Left: checkbox + reset */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flex: "0 0 auto",
                }}
              >
                <input
                  type="checkbox"
                  id="selectAll"
                  checked={
                    currentDocs.length > 0 &&
                    currentDocs.every((doc) =>
                      selectedDocs.map(String).includes(String(doc.id)),
                    )
                  }
                  onChange={handleSelectAll}
                />
                <label
                  htmlFor="selectAll"
                  style={{ fontSize: "13px", margin: 0, cursor: "pointer" }}
                >
                  Select All
                </label>
                <button
                  onClick={resetAll}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#1d3a72",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  | Reset All
                </button>
                {hasActiveFilters && (
                  <button
                    onClick={() =>
                      setFilters({
                        category: "",
                        contentType: "",
                        industry: "",
                        sortBy: "",
                      })
                    }
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#1d3a72",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              {/* Center: counts — grows to fill */}
              <div
                style={{
                  flex: "1 1 auto",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "13px", color: "#333" }}>
                  {selectedOnPage}/{totalOnPage} selected
                </span>
                <span style={{ fontSize: "13px", color: "#666" }}>
                  Total:{" "}
                  <span style={{ color: "#fecb00", fontWeight: 600 }}>
                    {totalFiles}
                  </span>{" "}
                  resources found
                </span>
              </div>

              {/* Right: download button */}
              {selectedDocs.length > 0 && (
                <div
                  onClick={handleDownloadZip}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    flex: "0 0 auto",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Download Selected ({selectedDocs.length})
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                      stroke="#fecb00"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#e5e5e5",
                marginBottom: "16px",
              }}
            />

            {/* ── DOCUMENT LIST ────────────────────────────────────── */}
            <div className="row">
              {currentDocs.length === 0 ? (
                <div
                  className="col-12 text-center py-5"
                  style={{ color: "#666" }}
                >
                  No documents match your current filters.
                </div>
              ) : (
                currentDocs.map((doc) => (
                  <div key={doc.id} className="col-12 mb-2">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        checked={selectedDocs
                          .map(String)
                          .includes(String(doc.id))}
                        onChange={() => handleSelect(doc.id)}
                        style={{ flexShrink: 0 }}
                      />

                      {/* Card */}
                      <div
                        style={{
                          border: "1px solid #e5e5e5",
                          borderRadius: "12px",
                          padding: "10px 14px",
                          backgroundColor: "white",
                          transition: "box-shadow 0.3s ease",
                          cursor: "pointer",
                          width: "100%",
                        }}
                        onClick={() =>
                          window.open(
                            `https://erithglobalbackend.onrender.com/uploads/${doc.file_url}`,
                            "_blank",
                          )
                        }
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow =
                            "0 6px 18px rgba(0,0,0,0.12)";
                          const icon = e.currentTarget.querySelector(
                            ".download-icon",
                          ) as HTMLElement;
                          if (icon) icon.style.opacity = "1";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = "none";
                          const icon = e.currentTarget.querySelector(
                            ".download-icon",
                          ) as HTMLElement;
                          if (icon) icon.style.opacity = "0";
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "8px",
                          }}
                        >
                          {/* Left: icon + text */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              flex: "1 1 0",
                              minWidth: 0,
                            }}
                          >
                            {/* PDF icon */}
                            <div
                              style={{
                                flexShrink: 0,
                                width: 40,
                                height: 40,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="#fecb00"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
                                />
                              </svg>
                            </div>
                            {/* Title */}
                            <div style={{ minWidth: 0 }}>
                              <h5
                                style={{
                                  color: "#292929",
                                  fontSize: "12px",
                                  fontWeight: 600,
                                  marginBottom: "4px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {doc.document_type}
                              </h5>
                              <p
                                style={{
                                  color: "#333",
                                  fontSize: "12px",
                                  margin: 0,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {doc.title}
                              </p>
                            </div>
                          </div>

                          {/* Right: date + download */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              flexShrink: 0,
                            }}
                          >
                            <span
                              style={{
                                color: "#666",
                                fontSize: "12px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {new Date(doc.created_at).toLocaleDateString(
                                "en-IN",
                              )}
                            </span>
                            <div
                              className="download-icon"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSingleDownload(doc);
                              }}
                              style={{
                                opacity: 0,
                                transition: "opacity 0.3s ease",
                                cursor: "pointer",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                                  stroke="#fecb00"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* ── PAGINATION ───────────────────────────────────────── */}
            <div className="row mt-3">
              <div className="col-12">
                <div className="tp-event-inner-pagination pb-10">
                  <div className="tp-dashboard-pagination pt-20">
                    <div className="tp-pagination">
                      <Pagination
                        handlePageClick={handlePageClick}
                        pageCount={pageCount}
                        isCenter={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RESPONSIVE TWEAKS ───────────────────────────────────────────── */}
      <style>{`
        @media (max-width: 576px) {
          .tp-breadcrumb__area {
            min-height: 320px !important;
            padding-top: 60px !important;
          }
          .tp-campus-student-list {
            margin-top: 12px !important;
          }
        }
      `}</style>
    </>
  );
}
