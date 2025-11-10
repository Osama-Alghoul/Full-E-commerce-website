import { useEffect, useState } from "react";
import type { Product } from "../types";
import { BASE_API_URL } from "../content";

export function useProducts({ limit, skip }: { limit: number; skip: number; }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_API_URL}/products/?limit=${limit}&skip=${skip}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [limit, skip]);

  return { products, loading };
}
