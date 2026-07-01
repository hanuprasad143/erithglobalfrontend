// import { ICategoryDT } from "@/types/category-d-t";

// const category_data: ICategoryDT[] = [
//   {
//     id: 1,
//     title: "Executive Summary",
//     description:
//       "KPI dashboard, overall asset health score, critical findings highlight, and management recommendations with replacement exposure estimate.",
//     icon: "/assets/img/icon/category/executive-summary.svg",
//     color: "cat-purple",
//   },
//   {
//     id: 2,
//     title: "Asset Inventory Register",
//     description:
//       "Complete list of all inspected assets with unique SWIS MVR reference numbers, standards, dimensions, materials, and locations.",
//     icon: "/assets/img/icon/category/asset-inventory.svg",
//     color: "cat-green",
//   },
//   {
//     id: 3,
//     title: "Individual Asset Pages",
//     description:
//       "Dedicated page per joint with photographs, metal & rubber findings, root cause analysis, observations, and remaining life estimate.",
//     icon: "/assets/img/icon/category/asset-pages.svg",
//     color: "cat-purple",
//   },
//   {
//     id: 4,
//     title: "Immediate Action Register",
//     description:
//       "Red-flagged critical assets requiring intervention within 30 days, with specific inspector recommendations and target dates.",
//     icon: "/assets/img/icon/category/immediate-action.svg",
//     color: "cat-blue",
//   },
//   {
//     id: 5,
//     title: "12-Month Maintenance Plan",
//     description:
//       "Prioritised maintenance schedule for Grade C–D assets with activity, timeframe, owner, and general plant condition overview.",
//     icon: "/assets/img/icon/category/maintenance-plan.svg",
//     color: "cat-pink",
//   },
//   {
//     id: 6,
//     title: "Client Sign-Off & Appendices",
//     description:
//       "Formal acceptance page plus full appendices — photographic record, measurement sheets, P&IDs, and supporting data.",
//     icon: "/assets/img/icon/category/client-signoff.svg",
//     color: "cat-l-purple",
//   },
//   // {
//   //   id: 7,
//   //   title: "Teaching",
//   //   description: "High Education Level",
//   //   icon: "/assets/img/icon/category/cat-2-icon-7.svg",
//   //   color: "cat-yellow",
//   // },
//   // {
//   //   id: 8,
//   //   title: "Development",
//   //   description: "Improve your business",
//   //   icon: "/assets/img/icon/category/cat-2-icon-8.svg",
//   //   color: "cat-lgreen",
//   // },
// ];

// export default category_data;

import { ICategoryDT } from "@/types/category-d-t";

const category_data: ICategoryDT[] = [
  {
    id: 1,
    title: "Executive Summary",
    description:
      "KPI dashboard, overall asset health score, critical findings highlight, and management recommendations with replacement exposure estimate.",
    icon: "/assets/img/icon/category/executive-summary.svg",
    color: "cat-purple",
    badge: "",
  },
  {
    id: 2,
    title: "Asset Inventory Register",
    description:
      "Complete list of all inspected assets with unique SWIS MVR reference numbers, standards, dimensions, materials, and locations.",
    icon: "/assets/img/icon/category/asset-inventory.svg",
    color: "cat-green",
    badge: "",
  },
  {
    id: 3,
    title: "Individual Asset Pages",
    description:
      "Dedicated page per joint with photographs, metal & rubber findings, root cause analysis, observations, and remaining life estimate.",
    icon: "/assets/img/icon/category/asset-pages.svg",
    color: "cat-purple",
    badge: "",
  },
  {
    id: 4,
    title: "Immediate Action Register",
    description:
      "Red-flagged critical assets requiring intervention within 30 days, with specific inspector recommendations and target dates.",
    icon: "/assets/img/icon/category/immediate-action.svg",
    color: "cat-blue",
    badge: "",
  },
  {
    id: 5,
    title: "12-Month Maintenance Plan",
    description:
      "Prioritised maintenance schedule for Grade C–D assets with activity, timeframe, owner, and general plant condition overview.",
    icon: "/assets/img/icon/category/maintenance-plan.svg",
    color: "cat-pink",
    badge: "",
  },
  {
    id: 6,
    title: "Client Sign-Off & Appendices",
    description:
      "Formal acceptance page plus full appendices — photographic record, measurement sheets, P&IDs, and supporting data.",
    icon: "/assets/img/icon/category/client-signoff.svg",
    color: "cat-l-purple",
    badge: "",
  },
  {
    id: 7,
    title: "Metal Bellows Forming",
    description:
      "Heavy-duty CNC-assisted forming machine producing large-diameter corrugated metal bellows in stainless and carbon steel, DN50 up to DN2000.",
    icon: "/assets/img/icon/category/circle.svg",
    color: "cat-yellow",
    badge: "SS304 / SS316 / CS",
  },
  {
    id: 8,
    title: "Precision TIG Welding",
    description:
      "ESAB-qualified welders carry out full-penetration TIG welds on bellows convolutions, end fittings, and flanges. Every weld supervised and documented per job card.",
    icon: "/assets/img/icon/category/lightning.svg",
    color: "cat-lgreen",
    badge: "ESAB certified",
  },
  {
    id: 9,
    title: "Flanged Assemblies",
    description:
      "Full-faced and raised-face flanged expansion joints from PN6 through PN40, with dimensional verification against drawing prior to despatch.",
    icon: "/assets/img/icon/category/gear.svg",
    color: "cat-blue",
    badge: "PN6 – PN40",
  },
  {
    id: 10,
    title: "Custom Engineering",
    description:
      "Non-standard geometries, dual-ply bellows, tied universal joints, and hinged assemblies fabricated to client P&ID and datasheet requirements.",
    icon: "/assets/img/icon/category/tools.svg",
    color: "cat-green",
    badge: "Bespoke",
  },
  {
    id: 11,
    title: "In-House Inspection",
    description:
      "Every joint undergoes visual inspection, dimensional check, and fit-for-purpose review before packing. Inspection records issued with each order.",
    icon: "/assets/img/icon/category/search.svg",
    color: "cat-purple",
    badge: "With records",
  },
  {
    id: 12,
    title: "Export Packaging",
    description:
      "Joints packed to prevent transit damage for air, sea, or road freight. Traceability documentation and material certificates provided with every shipment.",
    icon: "/assets/img/icon/category/package.svg",
    color: "cat-pink",
    badge: "MTR included",
  },
];

export default category_data;
