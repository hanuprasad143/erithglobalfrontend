// gasket-nav-data.ts
// Hardcoded nav items with optional children for flyout submenu
// Use this until backend supports sublists

export interface INavChild {
  id: string | number;
  name: string;
  link: string;
  isExternal?: boolean;
}

export interface INavItem {
  id: string | number;
  name: string;
  link: string;
  isExternal?: boolean;
  children?: INavChild[];
}

export const gasketNavItems: INavItem[] = [
  {
    id: "non-metallic-gaskets",
    name: "Non-Metallic Gaskets",
    link: "/products/non-metallic-gaskets",
    children: [
      {
        id: "blue-gard",
        name: "BLUE-GARD®",
        link: "/products/blue-gard",
      },
      {
        id: "cnaf-gaskets",
        name: "CNAF Gaskets",
        link: "/products/cnaf-gaskets",
      },
      {
        id: "gylon",
        name: "Gylon®",
        link: "/products/gylon",
      },
      {
        id: "rubber",
        name: "Rubber",
        link: "/products/rubber",
      },
      {
        id: "graphite-gaskets",
        name: "Graphite Gaskets",
        link: "/products/graphite-gaskets",
      },
    ],
  },
  {
    id: "metallic-gaskets",
    name: "Metallic Gaskets",
    link: "/products/metallic-gaskets",
  },
  {
    id: "gasket-sheets",
    name: "Gasket Sheets",
    link: "https://www.garlock.com/catalog/products/gaskets/gasket-sheet-material",
    isExternal: true,
  },
];