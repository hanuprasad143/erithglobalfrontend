export const API_URL = "http://localhost:5000/api";

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  return res.json();
}

export async function getProduct(slug: string) {
  const res = await fetch(`http://localhost:5000/api/products/${slug}`, {
    cache: "no-store",
  });

  return res.json();
}

export const getCompanyPage = async (slug: string) => {
  const res = await fetch(`http://localhost:5000/api/company-pages/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
};
