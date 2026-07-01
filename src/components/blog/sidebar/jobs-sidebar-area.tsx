// import Link from "next/link";
// // import Image from "next/image";
// // import { blog_stories_data } from "@/data/blog-data";

// // import { EmailThree, LocationFour, TelSvgTwo } from "../../svg";

// export default function ErithJobDescArea() {
//   //   const truncateText = (text: string, limit = 50) =>
//   //     text.length > limit ? text.slice(0, limit) + "..." : text;

//   return (
//     <div className="tp-sidebar-wrapper">
//       {/* Top Posts */}
//       <div className="col-lg-12 col-md-12">
//         <div className="tp-contact-info-item mb-30">
//           <div className="tp-sidebar-content">
//             <ul className="">
//               {/* {blog_stories_data.slice(0, 5).map((blog, index) => ( */}
//               <li className="tp-sidebar-post-item">
//                 {/* Industry */}
//                 <div style={{ marginBottom: "10px" }}>
//                   <div className="d-flex align-items-center">
//                     <div
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "2px 12px",
//                         borderRadius: "10px",
//                         marginRight: "20px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: "36px",
//                         height: "36px",
//                       }}
//                     >
//                       <i className="fa fa-industry"></i>
//                     </div>

//                     <div>
//                       <h3
//                         style={{
//                           fontSize: "15px",
//                           color: "#292929",
//                           marginBottom: "2px",
//                         }}
//                       >
//                         Oil & Gas Industry
//                       </h3>
//                       <p
//                         style={{
//                           marginBottom: "0",
//                           fontSize: "13px",
//                           color: "#6c757d",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Industry
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <hr
//                   style={{
//                     width: "100%",
//                     border: "none",
//                     borderTop: "1px solid #ddd",
//                     margin: "10px 0",
//                   }}
//                 />

//                 {/* Employment Type */}
//                 <div style={{ marginBottom: "10px" }}>
//                   <div className="d-flex align-items-center">
//                     <div
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "2px 12px",
//                         borderRadius: "10px",
//                         marginRight: "20px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: "36px",
//                         height: "36px",
//                       }}
//                     >
//                       <i className="fa fa-briefcase"></i>
//                     </div>

//                     <div>
//                       <h3
//                         style={{
//                           fontSize: "15px",
//                           color: "#292929",
//                           marginBottom: "2px",
//                         }}
//                       >
//                         Full-Time
//                       </h3>

//                       <p
//                         style={{
//                           marginBottom: "0",
//                           fontSize: "13px",
//                           color: "#6c757d",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Employment Type
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <hr
//                   style={{
//                     width: "100%",
//                     border: "none",
//                     borderTop: "1px solid #ddd",
//                     margin: "10px 0",
//                   }}
//                 />
//                 {/* Job Role */}
//                 <div style={{ marginBottom: "10px" }}>
//                   <div className="d-flex align-items-center">
//                     <div
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "2px 12px",
//                         borderRadius: "10px",
//                         marginRight: "20px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: "36px",
//                         height: "36px",
//                       }}
//                     >
//                       <i className="fa fa-user-tie"></i>
//                     </div>

//                     <div>
//                       <h3
//                         style={{
//                           fontSize: "15px",
//                           color: "#292929",
//                           marginBottom: "2px",
//                         }}
//                       >
//                         Oil & Gas Operations Engineer
//                       </h3>

//                       <p
//                         style={{
//                           marginBottom: "0",
//                           fontSize: "13px",
//                           color: "#6c757d",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Job Role
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <hr
//                   style={{
//                     width: "100%",
//                     border: "none",
//                     borderTop: "1px solid #ddd",
//                     margin: "10px 0",
//                   }}
//                 />

//                 {/* Contact Email */}
//                 <div style={{ marginBottom: "10px" }}>
//                   <div className="d-flex align-items-center">
//                     <div
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "2px 12px",
//                         borderRadius: "10px",
//                         marginRight: "20px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: "36px",
//                         height: "36px",
//                       }}
//                     >
//                       <i className="fa fa-envelope"></i>
//                     </div>

//                     <div>
//                       <h3
//                         style={{
//                           fontSize: "15px",
//                           color: "#292929",
//                           marginBottom: "2px",
//                         }}
//                       >
//                         careers@erithglobal.com
//                       </h3>

//                       <p
//                         style={{
//                           marginBottom: "0",
//                           fontSize: "13px",
//                           color: "#6c757d",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Contact Email
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <hr
//                   style={{
//                     width: "100%",
//                     border: "none",
//                     borderTop: "1px solid #ddd",
//                     margin: "10px 0",
//                   }}
//                 />
//               </li>
//               {/* ))} */}
//             </ul>
//             <Link
//               href="#"
//               style={{
//                 backgroundColor: "#1d3a72",
//                 color: "#fff",
//                 padding: "8px 18px",
//                 borderRadius: "10px",
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "12px",
//                 marginRight: "10px",
//                 marginBottom: "10px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               Apply for a Job
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Recent Posts */}
//       {/* <div className="tp-sidebar-widget">
//         <h5 className="tp-sidebar-widget-title" style={{ color: "#292929" }}>
//           Recent Posts
//         </h5>

//         <div className="tp-recent-post-grid">
//           {blog_stories_data.slice(0, 6).map((blog) => (
//             <Link
//                 href={`/blog-details/${blog.id}`}
//               href="#"
//               key={blog.id}
//               className="tp-recent-post-item"
//             >
//               <Image src={blog.img} alt={blog.title} width={300} height={200} />

//               <div className="tp-recent-post-overlay">
//                 <h5>{truncateText(blog.title, 35)}</h5>
//                 <p>{blog.date || "Read more"}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div> */}
//     </div>
//   );
// }

// import Link from "next/link";

//**** working code for default gmail open */

// type Job = {
//   id: number;
//   title: string;
//   slug: string;
//   tag?: string | null;
//   date?: string | null;
//   place?: string | null;
//   description?: string | null;
//   responsibilities?: string[] | null;
//   qualifications?: string[] | null;
//   skills?: string[] | null;
//   employment_type?: string | null;
//   experience?: string | null;
//   role?: string | null;
//   map_url?: string | null;
//   image?: string | null;
//   status?: "active" | "inactive";
//   created_at?: string;
//   updated_at?: string;
//   industry?: string | null;
//   email?: string | null;
// };

// type Props = {
//   blog: Job;
// };

// export default function ErithJobDescArea({ blog }: Props) {
//   return (
//     <div className="tp-sidebar-wrapper">
//       <div className="col-lg-12 col-md-12">
//         <div className="tp-contact-info-item mb-30">
//           <div className="tp-sidebar-content">
//             <ul className="">
//               <li className="tp-sidebar-post-item">
//                 {/* Industry */}
//                 <div style={{ marginBottom: "10px" }}>
//                   <div className="d-flex align-items-center">
//                     <div
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "2px 12px",
//                         borderRadius: "10px",
//                         marginRight: "20px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: "36px",
//                         height: "36px",
//                       }}
//                     >
//                       <i className="fa fa-industry"></i>
//                     </div>

//                     <div>
//                       <h3
//                         style={{
//                           fontSize: "15px",
//                           color: "#292929",
//                           marginBottom: "2px",
//                         }}
//                       >
//                         {blog.industry || "Industry"}
//                       </h3>

//                       <p
//                         style={{
//                           marginBottom: "0",
//                           fontSize: "13px",
//                           color: "#6c757d",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Industry
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <hr
//                   style={{
//                     width: "100%",
//                     border: "none",
//                     borderTop: "1px solid #ddd",
//                     margin: "10px 0",
//                   }}
//                 />

//                 {/* Employment Type */}
//                 <div style={{ marginBottom: "10px" }}>
//                   <div className="d-flex align-items-center">
//                     <div
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "2px 12px",
//                         borderRadius: "10px",
//                         marginRight: "20px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: "36px",
//                         height: "36px",
//                       }}
//                     >
//                       <i className="fa fa-briefcase"></i>
//                     </div>

//                     <div>
//                       <h3
//                         style={{
//                           fontSize: "15px",
//                           color: "#292929",
//                           marginBottom: "2px",
//                         }}
//                       >
//                         {blog.employment_type}
//                       </h3>

//                       <p
//                         style={{
//                           marginBottom: "0",
//                           fontSize: "13px",
//                           color: "#6c757d",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Employment Type
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <hr
//                   style={{
//                     width: "100%",
//                     border: "none",
//                     borderTop: "1px solid #ddd",
//                     margin: "10px 0",
//                   }}
//                 />

//                 {/* Job Role */}
//                 <div style={{ marginBottom: "10px" }}>
//                   <div className="d-flex align-items-center">
//                     <div
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "2px 12px",
//                         borderRadius: "10px",
//                         marginRight: "20px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: "36px",
//                         height: "36px",
//                       }}
//                     >
//                       <i className="fa fa-user-tie"></i>
//                     </div>

//                     <div>
//                       <h3
//                         style={{
//                           fontSize: "15px",
//                           color: "#292929",
//                           marginBottom: "2px",
//                         }}
//                       >
//                         {blog.title}
//                       </h3>

//                       <p
//                         style={{
//                           marginBottom: "0",
//                           fontSize: "13px",
//                           color: "#6c757d",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Job Role
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <hr
//                   style={{
//                     width: "100%",
//                     border: "none",
//                     borderTop: "1px solid #ddd",
//                     margin: "10px 0",
//                   }}
//                 />

//                 {/* Contact Email */}
//                 <div style={{ marginBottom: "10px" }}>
//                   <div className="d-flex align-items-center">
//                     <div
//                       style={{
//                         backgroundColor: "#1d3a72",
//                         color: "#fff",
//                         padding: "2px 12px",
//                         borderRadius: "10px",
//                         marginRight: "20px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: "36px",
//                         height: "36px",
//                       }}
//                     >
//                       <i className="fa fa-envelope"></i>
//                     </div>

//                     <div>
//                       <h3
//                         style={{
//                           fontSize: "15px",
//                           color: "#292929",
//                           marginBottom: "2px",
//                         }}
//                       >
//                         {blog.email || "careers@erithglobal.com"}
//                       </h3>

//                       <p
//                         style={{
//                           marginBottom: "0",
//                           fontSize: "13px",
//                           color: "#6c757d",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Contact Email
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <hr
//                   style={{
//                     width: "100%",
//                     border: "none",
//                     borderTop: "1px solid #ddd",
//                     margin: "10px 0",
//                   }}
//                 />
//               </li>
//             </ul>

//             {/* <Link
//               href="#"
//               style={{
//                 backgroundColor: "#1d3a72",
//                 color: "#fff",
//                 padding: "8px 18px",
//                 borderRadius: "10px",
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "12px",
//                 marginRight: "10px",
//                 marginBottom: "10px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               Apply for a Job
//             </Link> */}

//             <a
//               href={`https://mail.google.com/mail/?view=cm&fs=1&to=careers@erithglobal.com&su=${encodeURIComponent(
//                 `Job Application for ${blog.role || blog.title}`,
//               )}&body=${encodeURIComponent(
//                 `Dear Hiring Team,

// I hope this email finds you well.

// I am writing to formally apply for the position of ${blog.role || blog.title} at your organization.

// ━━━━━━━━━━━━━━━━━━━━━━
// JOB APPLICATION DETAILS
// ━━━━━━━━━━━━━━━━━━━━━━

// Role: ${blog.role || blog.title}
// Experience: ${blog.experience || "N/A"} years
// Employment Type: ${blog.employment_type || "N/A"}
// Location: ${blog.place || "N/A"}
// Industry: ${blog.industry || "N/A"}

// ━━━━━━━━━━━━━━━━━━━━━━
// JOB OVERVIEW
// ━━━━━━━━━━━━━━━━━━━━━━

// ${blog.description || "N/A"}

// ━━━━━━━━━━━━━━━━━━━━━━
// SKILLS & QUALIFICATIONS
// ━━━━━━━━━━━━━━━━━━━━━━

// Skills:
// ${blog.skills?.join(", ") || "N/A"}

// Qualifications:
// ${blog.qualifications?.join(", ") || "N/A"}

// Responsibilities:
// ${blog.responsibilities?.join(", ") || "N/A"}

// ━━━━━━━━━━━━━━━━━━━━━━
// IMPORTANT
// ━━━━━━━━━━━━━━━━━━━━━━

// Please find my updated resume attached for your kind review.

// I would appreciate the opportunity to further discuss my application.

// Thank you for your time and consideration.

// Kind regards,
// [Your Name]
// [Your Email]
// [Your Phone]`,
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 backgroundColor: "#1d3a72",
//                 color: "#fff",
//                 padding: "8px 18px",
//                 borderRadius: "10px",
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "12px",
//                 marginRight: "10px",
//                 marginBottom: "10px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               Apply for a Job
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//**** working code for default gmail close  */

"use client";

import { useState } from "react";

type Job = {
  id: number;
  title: string;
  slug: string;
  tag?: string | null;
  date?: string | null;
  place?: string | null;
  description?: string | null;
  responsibilities?: string[] | null;
  qualifications?: string[] | null;
  skills?: string[] | null;
  employment_type?: string | null;
  experience?: string | null;
  role?: string | null;
  map_url?: string | null;
  image?: string | null;
  status?: "active" | "inactive";
  created_at?: string;
  updated_at?: string;
  industry?: string | null;
  email?: string | null;
};

type Props = { blog: Job };

function buildEmailParts(blog: Job) {
  const to = blog.email || "careers@erithglobal.com";
  const subject = encodeURIComponent(
    `Job Application for ${blog.role || blog.title}`,
  );
  const body = encodeURIComponent(`Dear Hiring Team,

I hope this email finds you well.

I am writing to formally apply for the position of ${blog.role || blog.title} at your organization.

━━━━━━━━━━━━━━━━━━━━━━
JOB APPLICATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━

Role: ${blog.role || blog.title}
Experience: ${blog.experience || "N/A"} years
Employment Type: ${blog.employment_type || "N/A"}
Location: ${blog.place || "N/A"}
Industry: ${blog.industry || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━
JOB OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━

${blog.description || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━
SKILLS & QUALIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━

Skills:
${blog.skills?.join(", ") || "N/A"}

Qualifications:
${blog.qualifications?.join(", ") || "N/A"}

Responsibilities:
${blog.responsibilities?.join(", ") || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━

Please find my updated resume attached for your kind review.

I would appreciate the opportunity to further discuss my application.

Thank you for your time and consideration.

Kind regards,
[Your Name]
[Your Email]
[Your Phone]`);

  return { to, subject, body };
}

function getMailLinks(blog: Job) {
  const { to, subject, body } = buildEmailParts(blog);
  return {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${subject}&body=${body}`,
    mailto: `mailto:${to}?subject=${subject}&body=${body}`,
  };
}

const iconBox = {
  backgroundColor: "#1d3a72",
  color: "#fff",
  padding: "2px 12px",
  borderRadius: "10px",
  marginRight: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "36px",
  height: "36px",
} as const;

const divider = {
  width: "100%",
  border: "none",
  borderTop: "1px solid #ddd",
  margin: "10px 0",
} as const;

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value?: string | null;
}) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <div className="d-flex align-items-center">
        <div style={iconBox}>
          <i className={`fa ${icon}`}></i>
        </div>
        <div>
          <h3
            style={{ fontSize: "15px", color: "#292929", marginBottom: "2px" }}
          >
            {value || "N/A"}
          </h3>
          <p
            style={{
              marginBottom: "0",
              fontSize: "13px",
              color: "#6c757d",
              fontWeight: "500",
            }}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

const mailClients = [
  {
    key: "gmail",
    label: "Gmail",
    sub: "Opens Gmail app or web",
    bg: "#EA4335",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    key: "outlook",
    label: "Outlook",
    sub: "Opens Outlook app or web",
    bg: "#0072C6",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    key: "mailto",
    label: "Default mail app",
    sub: "Uses your device default",
    bg: "#6B6B6B",
    icon: (
      <i
        className="fa fa-envelope"
        style={{ color: "white", fontSize: "16px" }}
      ></i>
    ),
  },
] as const;

function MailPickerModal({
  links,
  onClose,
}: {
  links: Record<string, string>;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: "0 0 20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "20px",
          width: "100%",
          maxWidth: "360px",
          boxShadow: "0 -2px 20px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "15px",
              fontWeight: "600",
              color: "#292929",
            }}
          >
            Choose mail app
          </p>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
              color: "#6c757d",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
        <p style={{ margin: "0 0 16px", fontSize: "12px", color: "#6c757d" }}>
          Select how you&apos;d like to send your application
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {mailClients.map((client) => (
            <a
              key={client.key}
              href={links[client.key]}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px 14px",
                borderRadius: "10px",
                border: "1px solid #eee",
                textDecoration: "none",
                color: "#292929",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: client.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {client.icon}
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#292929",
                  }}
                >
                  {client.label}
                </p>
                <p style={{ margin: 0, fontSize: "11px", color: "#6c757d" }}>
                  {client.sub}
                </p>
              </div>
              <i
                className="fa fa-chevron-right"
                style={{ color: "#ccc", fontSize: "12px" }}
              ></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ErithJobDescArea({ blog }: Props) {
  const [showPicker, setShowPicker] = useState(false);
  const links = getMailLinks(blog);

  return (
    <div className="tp-sidebar-wrapper">
      <div className="col-lg-12 col-md-12">
        <div className="tp-contact-info-item mb-30">
          <div className="tp-sidebar-content">
            <ul>
              <li className="tp-sidebar-post-item">
                <InfoRow
                  icon="fa-industry"
                  label="Industry"
                  value={blog.industry}
                />
                <hr style={divider} />
                <InfoRow
                  icon="fa-briefcase"
                  label="Employment Type"
                  value={blog.employment_type}
                />
                <hr style={divider} />
                <InfoRow
                  icon="fa-user-tie"
                  label="Job Role"
                  value={blog.title}
                />
                <hr style={divider} />
                <InfoRow
                  icon="fa-envelope"
                  label="Contact Email"
                  value={blog.email || "careers@erithglobal.com"}
                />
                <hr style={divider} />
              </li>
            </ul>

            <button
              onClick={() => setShowPicker(true)}
              style={{
                backgroundColor: "#1d3a72",
                color: "#fff",
                padding: "8px 18px",
                borderRadius: "10px",
                border: "none",
                fontWeight: "600",
                fontSize: "12px",
                cursor: "pointer",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              Apply for a Job
            </button>
          </div>
        </div>
      </div>

      {showPicker && (
        <MailPickerModal links={links} onClose={() => setShowPicker(false)} />
      )}
    </div>
  );
}
