// "use client";

// import React from "react";
// import Link from "next/link";
// import { IPagesDropdown, ICategory } from "@/types/menu-d-t";

// import { usePathname } from "next/navigation";

// type IProps = {
//   pages_dropdown?: IPagesDropdown[];
//   categories?: ICategory[];
// };

// export default function NavPagesDropdown({
//   pages_dropdown,
//   categories,
// }: IProps) {
//   const pathname = usePathname();
//   return (
//     <div className="megamenu-demo-fullwidth p-relative">
//       <div className="tp-megamenu-fullwidth-list-wrapper">
//         <div className="d-flex flex-wrap" style={{ gap: "60px" }}>
//           {/* ================= BACKEND DATA ================= */}
//           {categories && categories.length > 0
//             ? categories.map((category) =>
//                 (category.subcategories && category.subcategories.length > 0
//                   ? category.subcategories
//                   : [
//                       {
//                         id: `fallback-${category.id}`,
//                         name: category.name,
//                         link: null,
//                         products: [],
//                       },
//                     ]
//                 ).map((sub) => {
//                   // ✅ Sort by menu_order
//                   const sortedProducts = (sub.products || []).sort(
//                     (a, b) => (a.menu_order || 0) - (b.menu_order || 0),
//                   );

//                   if (sortedProducts.length === 0) return null;
//                   // Split into columns of 11
//                   const columns: (typeof sortedProducts)[] = [];
//                   for (let i = 0; i < sortedProducts.length; i += 11) {
//                     columns.push(sortedProducts.slice(i, i + 11));
//                   }

//                   return (
//                     <div key={sub.id} style={{ minWidth: "180px" }}>
//                       <div className="tp-megamenu-fullwidth-list">
//                         {/* Subcategory Title */}
//                         <h4
//                           className="tp-megamenu-fullwidth-title"
//                           style={{
//                             marginBottom: "15px",
//                             fontSize: "15px",
//                             color: "#292929",
//                           }}
//                         >
//                           {sub.link ? (
//                             <Link
//                               href={sub.link}
//                               target={
//                                 sub.link.startsWith("http") ? "_blank" : "_self"
//                               }
//                               rel={
//                                 sub.link.startsWith("http")
//                                   ? "noopener noreferrer"
//                                   : undefined
//                               }
//                               style={{
//                                 cursor: "pointer",
//                                 color: "inherit",
//                                 textDecoration: "none",
//                               }}
//                             >
//                               {sub.name}
//                             </Link>
//                           ) : (
//                             <span>{sub.name}</span>
//                           )}
//                         </h4>

//                         {/* Products */}
//                         <div
//                           className="d-flex"
//                           style={{ gap: "40px", lineHeight: "1.5" }}
//                         >
//                           {columns.map((column, index) => (
//                             <ul key={index}>
//                               {column.map((product) => {
//                                 const isExternal =
//                                   product.link?.startsWith("http");
//                                 const href = product.link
//                                   ? product.link
//                                   : `/products/${product.slug}`;
//                                 const isActive =
//                                   pathname === href ||
//                                   pathname === `/${product.slug}` ||
//                                   pathname.endsWith(product.slug);
//                                 return (
//                                   <li key={product.id}>
//                                     {/* <Link
//                                       className="tp-product-link"
//                                       style={{ fontSize: "12px" }}
//                                       href={href}
//                                       target={isExternal ? "_blank" : "_self"}
//                                       rel={
//                                         isExternal
//                                           ? "noopener noreferrer"
//                                           : undefined
//                                       }
//                                     >
//                                       {product.name}
//                                     </Link> */}

//                                     <Link
//                                       className={`tp-product-link ${isActive ? "active-menu-item" : ""}`}
//                                       style={{
//                                         fontSize: "12px",
//                                         color: isActive ? "#1d3a72" : "",
//                                         fontWeight: isActive ? "600" : "400",
//                                       }}
//                                       href={href}
//                                       target={isExternal ? "_blank" : "_self"}
//                                       rel={
//                                         isExternal
//                                           ? "noopener noreferrer"
//                                           : undefined
//                                       }
//                                     >
//                                       {product.name}
//                                     </Link>
//                                   </li>
//                                 );
//                               })}
//                             </ul>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 }),
//               )
//             : /* ================= FALLBACK STATIC ================= */
//               pages_dropdown?.map((pd) => {
//                 const sortedMenus = [...pd.dropdown_menus].sort(
//                   (a, b) => a.id - b.id,
//                 );

//                 const columns: (typeof sortedMenus)[] = [];
//                 for (let i = 0; i < sortedMenus.length; i += 6) {
//                   columns.push(sortedMenus.slice(i, i + 6));
//                 }

//                 return (
//                   <div key={pd.id} style={{ minWidth: "220px" }}>
//                     <div className="tp-megamenu-fullwidth-list">
//                       {/* Title */}
//                       <h4
//                         className="tp-megamenu-fullwidth-title"
//                         style={{
//                           marginBottom: "15px",
//                           fontSize: "15px",
//                           color: "#292929",
//                         }}
//                       >
//                         {pd.title}
//                       </h4>

//                       {/* Items */}
//                       <div
//                         className="d-flex"
//                         style={{ gap: "40px", lineHeight: "1.5" }}
//                       >
//                         {columns.map((column, index) => (
//                           <ul key={index}>
//                             {column.map((sm) => (
//                               <li key={sm.id}>
//                                 <Link
//                                   className="tp-product-link"
//                                   style={{ fontSize: "12px" }}
//                                   href={sm.link}
//                                 >
//                                   {sm.title}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//         </div>
//       </div>
//     </div>
//   );
// }

// ******* perfect working code for navmenu with 6 columns section starts ********* //

// "use client";

// import React from "react";
// import Link from "next/link";
// import { IPagesDropdown, ICategory } from "@/types/menu-d-t";

// import { usePathname } from "next/navigation";

// type IProps = {
//   pages_dropdown?: IPagesDropdown[];
//   categories?: ICategory[];
// };

// export default function NavPagesDropdown({
//   pages_dropdown,
//   categories,
// }: IProps) {
//   const pathname = usePathname();

//   return (
//     <div className="megamenu-demo-fullwidth p-relative">
//       <div className="tp-megamenu-fullwidth-list-wrapper">
//         <div
//           className="d-flex flex-wrap"
//           style={{
//             gap: "20px",
//             width: "100%",
//           }}
//         >
//           {/* ================= BACKEND DATA ================= */}
//           {categories && categories.length > 0
//             ? categories.map((category) =>
//                 (
//                   category.subcategories &&
//                   category.subcategories.length > 0
//                     ? category.subcategories
//                     : [
//                         {
//                           id: `fallback-${category.id}`,
//                           name: category.name,
//                           link: null,
//                           products: [],
//                         },
//                       ]
//                 ).map((sub) => {
//                   // ✅ Sort by menu_order
//                   const sortedProducts = (sub.products || []).sort(
//                     (a, b) => (a.menu_order || 0) - (b.menu_order || 0),
//                   );

//                   if (sortedProducts.length === 0) return null;

//                   // Split into columns of 11
//                   const columns: (typeof sortedProducts)[] = [];
//                   for (let i = 0; i < sortedProducts.length; i += 11) {
//                     columns.push(sortedProducts.slice(i, i + 11));
//                   }

//                   return (
//                     <div
//                       key={sub.id}
//                       style={{
//                         flex: "0 0 calc(16.66% - 17px)",
//                         maxWidth: "calc(16.66% - 17px)",
//                         minWidth: "180px",
//                       }}
//                     >
//                       <div className="tp-megamenu-fullwidth-list">
//                         {/* Subcategory Title */}
//                         <h4
//                           className="tp-megamenu-fullwidth-title"
//                           style={{
//                             marginBottom: "15px",
//                             fontSize: "15px",
//                             color: "#292929",
//                           }}
//                         >
//                           {sub.link ? (
//                             <Link
//                               href={sub.link}
//                               target={
//                                 sub.link.startsWith("http")
//                                   ? "_blank"
//                                   : "_self"
//                               }
//                               rel={
//                                 sub.link.startsWith("http")
//                                   ? "noopener noreferrer"
//                                   : undefined
//                               }
//                               style={{
//                                 cursor: "pointer",
//                                 color: "inherit",
//                                 textDecoration: "none",
//                               }}
//                             >
//                               {sub.name}
//                             </Link>
//                           ) : (
//                             <span>{sub.name}</span>
//                           )}
//                         </h4>

//                         {/* Products */}
//                         <div
//                           className="d-flex"
//                           style={{
//                             gap: "40px",
//                             lineHeight: "1.5",
//                           }}
//                         >
//                           {columns.map((column, index) => (
//                             <ul key={index}>
//                               {column.map((product) => {
//                                 const isExternal =
//                                   product.link?.startsWith("http");

//                                 const href = product.link
//                                   ? product.link
//                                   : `/products/${product.slug}`;

//                                 const isActive =
//                                   pathname === href ||
//                                   pathname === `/${product.slug}` ||
//                                   pathname.endsWith(product.slug);

//                                 return (
//                                   <li key={product.id}>
//                                     <Link
//                                       className={`tp-product-link ${
//                                         isActive
//                                           ? "active-menu-item"
//                                           : ""
//                                       }`}
//                                       style={{
//                                         fontSize: "12px",
//                                         color: isActive ? "#1d3a72" : "",
//                                         fontWeight: isActive
//                                           ? "600"
//                                           : "400",
//                                       }}
//                                       href={href}
//                                       target={
//                                         isExternal
//                                           ? "_blank"
//                                           : "_self"
//                                       }
//                                       rel={
//                                         isExternal
//                                           ? "noopener noreferrer"
//                                           : undefined
//                                       }
//                                     >
//                                       {product.name}
//                                     </Link>
//                                   </li>
//                                 );
//                               })}
//                             </ul>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 }),
//               )
//             : /* ================= FALLBACK STATIC ================= */
//               pages_dropdown?.map((pd) => {
//                 const sortedMenus = [...pd.dropdown_menus].sort(
//                   (a, b) => a.id - b.id,
//                 );

//                 const columns: (typeof sortedMenus)[] = [];

//                 for (let i = 0; i < sortedMenus.length; i += 6) {
//                   columns.push(sortedMenus.slice(i, i + 6));
//                 }

//                 return (
//                   <div
//                     key={pd.id}
//                     style={{
//                       flex: "0 0 calc(16.66% - 17px)",
//                       maxWidth: "calc(16.66% - 17px)",
//                       minWidth: "220px",
//                     }}
//                   >
//                     <div className="tp-megamenu-fullwidth-list">
//                       {/* Title */}
//                       <h4
//                         className="tp-megamenu-fullwidth-title"
//                         style={{
//                           marginBottom: "15px",
//                           fontSize: "15px",
//                           color: "#292929",
//                         }}
//                       >
//                         {pd.title}
//                       </h4>

//                       {/* Items */}
//                       <div
//                         className="d-flex"
//                         style={{
//                           gap: "40px",
//                           lineHeight: "1.5",
//                         }}
//                       >
//                         {columns.map((column, index) => (
//                           <ul key={index}>
//                             {column.map((sm) => (
//                               <li key={sm.id}>
//                                 <Link
//                                   className="tp-product-link"
//                                   style={{ fontSize: "12px" }}
//                                   href={sm.link}
//                                 >
//                                   {sm.title}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//         </div>
//       </div>
//     </div>
//   );
// }

// ******* perfect working code for navmenu with 6 columns section starts  *********//

// "use client";

// import React, { useState, useRef, useCallback } from "react";
// import Link from "next/link";
// import { IPagesDropdown, ICategory } from "@/types/menu-d-t";
// import { usePathname } from "next/navigation";

// type IProps = {
//   pages_dropdown?: IPagesDropdown[];
//   categories?: ICategory[];
// };

// // ─── Types ────────────────────────────────────────────────────────────────────

// interface ParsedChild {
//   id: string | number;
//   name: string;         // stripped of leading "-"
//   rawName: string;      // original name from backend
//   link: string;
//   slug: string;
//   isExternal: boolean;
// }

// interface ParsedProduct {
//   id: string | number;
//   name: string;
//   link: string;
//   slug: string;
//   isExternal: boolean;
//   menu_order: number;
//   children: ParsedChild[];
// }

// // ─── Helper: parse flat product list into tree using "-" prefix convention ────

// function parseProductsWithChildren(rawProducts: any[]): ParsedProduct[] {
//   const sorted = [...rawProducts].sort(
//     (a, b) => (a.menu_order || 0) - (b.menu_order || 0)
//   );

//   const result: ParsedProduct[] = [];

//   for (const p of sorted) {
//     const isSub = p.name?.startsWith("-");
//     const href = p.link ? p.link : `/products/${p.slug}`;
//     const isExternal = href.startsWith("http");

//     if (isSub && result.length > 0) {
//       // Strip the leading "-" (and any space after it) for display
//       const cleanName = p.name.replace(/^-\s*/, "");
//       result[result.length - 1].children.push({
//         id: p.id,
//         name: cleanName,
//         rawName: p.name,
//         link: href,
//         slug: p.slug,
//         isExternal,
//       });
//     } else {
//       result.push({
//         id: p.id,
//         name: p.name,
//         link: href,
//         slug: p.slug,
//         isExternal,
//         menu_order: p.menu_order || 0,
//         children: [],
//       });
//     }
//   }

//   return result;
// }

// // ─── Component ────────────────────────────────────────────────────────────────

// export default function NavPagesDropdown({ pages_dropdown, categories }: IProps) {
//   const pathname = usePathname();

//   const [hoveredItemId, setHoveredItemId] = useState<string | number | null>(null);
//   const [submenuItems, setSubmenuItems] = useState<ParsedChild[]>([]);
//   const [submenuTop, setSubmenuTop] = useState(0);
//   const [submenuLeft, setSubmenuLeft] = useState(0);

//   const containerRef = useRef<HTMLDivElement>(null);
//   const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const cancelClose = useCallback(() => {
//     if (closeTimer.current) {
//       clearTimeout(closeTimer.current);
//       closeTimer.current = null;
//     }
//   }, []);

//   const scheduleClose = useCallback(() => {
//     cancelClose();
//     closeTimer.current = setTimeout(() => {
//       setHoveredItemId(null);
//       setSubmenuItems([]);
//     }, 120);
//   }, [cancelClose]);

//   const handleProductMouseEnter = (
//     e: React.MouseEvent<HTMLLIElement>,
//     product: ParsedProduct
//   ) => {
//     cancelClose();
//     if (product.children.length === 0) {
//       scheduleClose();
//       return;
//     }
//     const liEl = e.currentTarget;
//     const containerEl = containerRef.current;
//     if (containerEl) {
//       const liRect = liEl.getBoundingClientRect();
//       const containerRect = containerEl.getBoundingClientRect();
//       setSubmenuTop(liRect.top - containerRect.top);
//       setSubmenuLeft(liRect.right - containerRect.left + 4);
//     }
//     setHoveredItemId(product.id);
//     setSubmenuItems(product.children);
//   };

//   return (
//     <div
//       className="megamenu-demo-fullwidth p-relative"
//       ref={containerRef}
//       style={{ position: "relative" }}
//     >
//       <div className="tp-megamenu-fullwidth-list-wrapper">
//         <div className="d-flex flex-wrap" style={{ gap: "20px", width: "100%" }}>

//           {/* ================= BACKEND DATA ================= */}
//           {categories && categories.length > 0
//             ? categories.map((category) =>
//                 (
//                   category.subcategories && category.subcategories.length > 0
//                     ? category.subcategories
//                     : [{ id: `fallback-${category.id}`, name: category.name, link: null, products: [] }]
//                 ).map((sub) => {
//                   // Parse flat list → tree using "-" prefix
//                   const parsedProducts = parseProductsWithChildren(sub.products || []);

//                   if (parsedProducts.length === 0) return null;

//                   // Split main items into columns of 11
//                   const columns: ParsedProduct[][] = [];
//                   for (let i = 0; i < parsedProducts.length; i += 11) {
//                     columns.push(parsedProducts.slice(i, i + 11));
//                   }

//                   return (
//                     <div
//                       key={sub.id}
//                       style={{
//                         flex: "0 0 calc(16.66% - 17px)",
//                         maxWidth: "calc(16.66% - 17px)",
//                         minWidth: "180px",
//                       }}
//                     >
//                       <div className="tp-megamenu-fullwidth-list">

//                         {/* Subcategory title */}
//                         <h4
//                           className="tp-megamenu-fullwidth-title"
//                           style={{ marginBottom: "15px", fontSize: "15px", color: "#292929" }}
//                         >
//                           {sub.link ? (
//                             <Link
//                               href={sub.link}
//                               target={sub.link.startsWith("http") ? "_blank" : "_self"}
//                               rel={sub.link.startsWith("http") ? "noopener noreferrer" : undefined}
//                               style={{ cursor: "pointer", color: "inherit", textDecoration: "none" }}
//                             >
//                               {sub.name}
//                             </Link>
//                           ) : (
//                             <span>{sub.name}</span>
//                           )}
//                         </h4>

//                         {/* Products — only main items rendered here */}
//                         <div className="d-flex" style={{ gap: "40px", lineHeight: "1.5" }}>
//                           {columns.map((column, colIdx) => (
//                             <ul key={colIdx}>
//                               {column.map((product) => {
//                                 const isActive =
//                                   pathname === product.link ||
//                                   pathname === `/${product.slug}` ||
//                                   pathname.endsWith(product.slug);
//                                 const hasChildren = product.children.length > 0;
//                                 const isHovered = hoveredItemId === product.id;

//                                 return (
//                                   <li
//                                     key={product.id}
//                                     style={{ display: "flex", alignItems: "center" }}
//                                     onMouseEnter={(e) => handleProductMouseEnter(e, product)}
//                                     onMouseLeave={scheduleClose}
//                                   >
//                                     <Link
//                                       className={`tp-product-link ${isActive ? "active-menu-item" : ""}`}
//                                       style={{
//                                         fontSize: "12px",
//                                         color: isActive || isHovered ? "#1d3a72" : "",
//                                         fontWeight: isActive ? "600" : "400",
//                                         display: "flex",
//                                         alignItems: "center",
//                                         gap: "4px",
//                                         width: "100%",
//                                       }}
//                                       href={product.link}
//                                       target={product.isExternal ? "_blank" : "_self"}
//                                       rel={product.isExternal ? "noopener noreferrer" : undefined}
//                                     >
//                                       <span style={{ flex: 1 }}>{product.name}</span>
//                                       {hasChildren && (
//                                         <span
//                                           style={{
//                                             fontSize: "11px",
//                                             color: isHovered ? "#1d3a72" : "#bbb",
//                                             lineHeight: 1,
//                                             transition: "color 0.15s",
//                                           }}
//                                         >
//                                           ›
//                                         </span>
//                                       )}
//                                     </Link>
//                                   </li>
//                                 );
//                               })}
//                             </ul>
//                           ))}
//                         </div>

//                       </div>
//                     </div>
//                   );
//                 })
//               )

//             : /* ================= FALLBACK STATIC (pages_dropdown) ================= */
//               pages_dropdown?.map((pd) => {
//                 const sortedMenus = [...pd.dropdown_menus].sort((a, b) => a.id - b.id);
//                 const columns: (typeof sortedMenus)[] = [];
//                 for (let i = 0; i < sortedMenus.length; i += 6) {
//                   columns.push(sortedMenus.slice(i, i + 6));
//                 }
//                 return (
//                   <div
//                     key={pd.id}
//                     style={{
//                       flex: "0 0 calc(16.66% - 17px)",
//                       maxWidth: "calc(16.66% - 17px)",
//                       minWidth: "220px",
//                     }}
//                   >
//                     <div className="tp-megamenu-fullwidth-list">
//                       <h4
//                         className="tp-megamenu-fullwidth-title"
//                         style={{ marginBottom: "15px", fontSize: "15px", color: "#292929" }}
//                       >
//                         {pd.title}
//                       </h4>
//                       <div className="d-flex" style={{ gap: "40px", lineHeight: "1.5" }}>
//                         {columns.map((column, index) => (
//                           <ul key={index}>
//                             {column.map((sm) => (
//                               <li key={sm.id}>
//                                 <Link
//                                   className="tp-product-link"
//                                   style={{ fontSize: "12px" }}
//                                   href={sm.link}
//                                 >
//                                   {sm.title}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}

//         </div>
//       </div>

//       {/* ================= FLYOUT SIDE SUBMENU ================= */}
//       {hoveredItemId !== null && submenuItems.length > 0 && (
//         <div
//           onMouseEnter={cancelClose}
//           onMouseLeave={scheduleClose}
//           style={{
//             position: "absolute",
//             top: submenuTop,
//             left: submenuLeft,
//             minWidth: "200px",
//             background: "#fff",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
//             borderRadius: "6px",
//             zIndex: 9999,
//             padding: "6px 0",
//             border: "1px solid #ebebeb",
//           }}
//         >
//           {submenuItems.map((item) => {
//             const isActive =
//               pathname === item.link ||
//               pathname === `/${item.slug}` ||
//               pathname.endsWith(item.slug);

//             return (
//               <Link
//                 key={item.id}
//                 href={item.link}
//                 target={item.isExternal ? "_blank" : "_self"}
//                 rel={item.isExternal ? "noopener noreferrer" : undefined}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   padding: "7px 16px",
//                   fontSize: "12px",
//                   color: isActive ? "#1d3a72" : "#444",
//                   fontWeight: isActive ? "600" : "400",
//                   textDecoration: "none",
//                   whiteSpace: "nowrap",
//                   gap: "8px",
//                   transition: "background 0.15s, color 0.15s",
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLAnchorElement).style.background = "#f0f4ff";
//                   (e.currentTarget as HTMLAnchorElement).style.color = "#1d3a72";
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
//                   (e.currentTarget as HTMLAnchorElement).style.color = isActive ? "#1d3a72" : "#444";
//                 }}
//               >
//                 {isActive && (
//                   <span
//                     style={{
//                       width: "4px",
//                       height: "4px",
//                       borderRadius: "50%",
//                       background: "#1d3a72",
//                       flexShrink: 0,
//                     }}
//                   />
//                 )}
//                 {item.name}
//               </Link>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IPagesDropdown, ICategory, IProduct } from "@/types/menu-d-t";
import { usePathname } from "next/navigation";

type IProps = {
  pages_dropdown?: IPagesDropdown[];
  categories?: ICategory[];
};

interface ParsedChild {
  id: string | number;
  name: string;
  rawName: string;
  link: string;
  slug: string;
  isExternal: boolean;
}

interface ParsedProduct {
  id: string | number;
  name: string;
  link: string;
  slug: string;
  isExternal: boolean;
  menu_order: number;
  children: ParsedChild[];
}

function parseProductsWithChildren(rawProducts: IProduct[]): ParsedProduct[] {
  const sorted = [...rawProducts].sort(
    (a, b) => (a.menu_order || 0) - (b.menu_order || 0),
  );
  const result: ParsedProduct[] = [];
  for (const p of sorted) {
    const isSub = p.name?.startsWith("-");
    const href = p.link ? p.link : `/products/${p.slug}`;
    const isExternal = href.startsWith("http");
    if (isSub && result.length > 0) {
      result[result.length - 1].children.push({
        id: p.id,
        name: p.name.replace(/^-\s*/, ""),
        rawName: p.name,
        link: href,
        slug: p.slug,
        isExternal,
      });
    } else {
      result.push({
        id: p.id,
        name: p.name,
        link: href,
        slug: p.slug,
        isExternal,
        menu_order: p.menu_order || 0,
        children: [],
      });
    }
  }
  return result;
}

export default function NavPagesDropdown({
  pages_dropdown,
  categories,
}: IProps) {
  const pathname = usePathname();
  const [hoveredItemId, setHoveredItemId] = useState<string | number | null>(
    null,
  );

  return (
    <div className="megamenu-demo-fullwidth p-relative">
      <div className="tp-megamenu-fullwidth-list-wrapper">
        <div
          className="d-flex flex-wrap"
          style={{ gap: "20px", width: "100%" }}
        >
          {categories && categories.length > 0
            ? categories.map((category) =>
                (category.subcategories && category.subcategories.length > 0
                  ? category.subcategories
                  : [
                      {
                        id: `fallback-${category.id}`,
                        name: category.name,
                        link: null,
                        products: [],
                      },
                    ]
                ).map((sub) => {
                  const parsedProducts = parseProductsWithChildren(
                    sub.products || [],
                  );
                  if (parsedProducts.length === 0) return null;

                  const columns: ParsedProduct[][] = [];
                  for (let i = 0; i < parsedProducts.length; i += 11) {
                    columns.push(parsedProducts.slice(i, i + 11));
                  }

                  return (
                    <div
                      key={sub.id}
                      style={{
                        flex: "0 0 calc(16.66% - 17px)",
                        maxWidth: "calc(16.66% - 17px)",
                        minWidth: "180px",
                      }}
                    >
                      <div className="tp-megamenu-fullwidth-list">
                        <h4
                          className="tp-megamenu-fullwidth-title"
                          style={{
                            marginBottom: "15px",
                            fontSize: "15px",
                            color: "#292929",
                          }}
                        >
                          {sub.link ? (
                            <Link
                              href={sub.link}
                              target={
                                sub.link.startsWith("http") ? "_blank" : "_self"
                              }
                              rel={
                                sub.link.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              style={{
                                cursor: "pointer",
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              {sub.name}
                            </Link>
                          ) : (
                            <span>{sub.name}</span>
                          )}
                        </h4>

                        <div
                          className="d-flex"
                          style={{ gap: "40px", lineHeight: "1.5" }}
                        >
                          {columns.map((column, colIdx) => (
                            <ul
                              key={colIdx}
                              style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {column.map((product) => {
                                const isActive =
                                  pathname === product.link ||
                                  pathname === `/${product.slug}` ||
                                  pathname.endsWith(product.slug);
                                const hasChildren = product.children.length > 0;
                                const isHovered = hoveredItemId === product.id;

                                return (
                                  <li
                                    key={product.id}
                                    style={{ listStyle: "none" }}
                                    onMouseEnter={() =>
                                      hasChildren &&
                                      setHoveredItemId(product.id)
                                    }
                                    onMouseLeave={() => setHoveredItemId(null)}
                                  >
                                    {/* ── Main product row ── */}
                                    <Link
                                      className={`tp-product-link ${isActive ? "active-menu-item" : ""}`}
                                      style={{
                                        fontSize: "12px",
                                        color:
                                          isActive || isHovered
                                            ? "#1d3a72"
                                            : "",
                                        fontWeight: isActive ? "600" : "400",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "4px",
                                        width: "100%",
                                        textDecoration: "none",
                                        padding: "2px 0",
                                      }}
                                      href={product.link}
                                      target={
                                        product.isExternal ? "_blank" : "_self"
                                      }
                                      rel={
                                        product.isExternal
                                          ? "noopener noreferrer"
                                          : undefined
                                      }
                                    >
                                      <span style={{ flex: 1 }}>
                                        {product.name}
                                      </span>
                                      {hasChildren && (
                                        <span
                                          style={{
                                            fontSize: "20px",
                                            color: isHovered
                                              ? "#fecb00"
                                              : "#bbb",
                                            transition:
                                              "transform 0.15s, color 0.15s",
                                            display: "inline-block",
                                            transform: isHovered
                                              ? "rotate(180deg)"
                                              : "rotate(0deg)",
                                          }}
                                        >
                                          ▾
                                        </span>
                                      )}
                                    </Link>

                                    {/* ── Children: inline below parent, shown on hover ── */}
                                    {hasChildren && (
                                      <ul
                                        style={{
                                          listStyle: "none",
                                          padding: 0,
                                          margin: 0,
                                          maxHeight: isHovered
                                            ? "500px"
                                            : "0px",
                                          overflow: "hidden",
                                          borderLeft: isHovered
                                            ? "2px solid #e8ecf5"
                                            : "2px solid transparent",
                                          marginLeft: "4px",
                                          paddingLeft: isHovered
                                            ? "8px"
                                            : "8px",
                                          transition:
                                            "max-height 0.2s ease, border-color 0.2s ease",
                                        }}
                                      >
                                        {product.children.map((child) => {
                                          const childActive =
                                            pathname === child.link ||
                                            pathname === `/${child.slug}` ||
                                            pathname.endsWith(child.slug);
                                          return (
                                            <li key={child.id}>
                                              <Link
                                                href={child.link}
                                                target={
                                                  child.isExternal
                                                    ? "_blank"
                                                    : "_self"
                                                }
                                                rel={
                                                  child.isExternal
                                                    ? "noopener noreferrer"
                                                    : undefined
                                                }
                                                style={{
                                                  display: "block",
                                                  fontSize: "11px",
                                                  color: childActive
                                                    ? "#1d3a72"
                                                    : "#666",
                                                  fontWeight: childActive
                                                    ? "600"
                                                    : "400",
                                                  textDecoration: "none",
                                                  padding: "3px 0",
                                                  transition: "color 0.15s",
                                                }}
                                                onMouseEnter={(e) => {
                                                  (
                                                    e.currentTarget as HTMLAnchorElement
                                                  ).style.color = "#1d3a72";
                                                }}
                                                onMouseLeave={(e) => {
                                                  (
                                                    e.currentTarget as HTMLAnchorElement
                                                  ).style.color = childActive
                                                    ? "#1d3a72"
                                                    : "#666";
                                                }}
                                              >
                                                {child.name}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }),
              )
            : pages_dropdown?.map((pd) => {
                const sortedMenus = [...pd.dropdown_menus].sort(
                  (a, b) => a.id - b.id,
                );
                const columns: (typeof sortedMenus)[] = [];
                for (let i = 0; i < sortedMenus.length; i += 6) {
                  columns.push(sortedMenus.slice(i, i + 6));
                }
                return (
                  <div
                    key={pd.id}
                    style={{
                      flex: "0 0 calc(16.66% - 17px)",
                      maxWidth: "calc(16.66% - 17px)",
                      minWidth: "220px",
                    }}
                  >
                    <div className="tp-megamenu-fullwidth-list">
                      <h4
                        className="tp-megamenu-fullwidth-title"
                        style={{
                          marginBottom: "15px",
                          fontSize: "15px",
                          color: "#292929",
                        }}
                      >
                        {pd.title}
                      </h4>
                      <div
                        className="d-flex"
                        style={{ gap: "40px", lineHeight: "1.5" }}
                      >
                        {columns.map((column, index) => (
                          <ul
                            key={index}
                            style={{ listStyle: "none", padding: 0, margin: 0 }}
                          >
                            {column.map((sm) => (
                              <li key={sm.id}>
                                <Link
                                  className="tp-product-link"
                                  style={{ fontSize: "12px" }}
                                  href={sm.link}
                                >
                                  {sm.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
