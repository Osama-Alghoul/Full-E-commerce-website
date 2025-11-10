import { useEffect, useState } from "react";
import type { Product } from "../../../types";
import { useCartContext } from "../../../utils/CartContext";
import { BASE_API_URL } from "../../../content";

export default function Item({ itemId }: { itemId: number }) {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const { getItemQuantity } = useCartContext();
  const quantity = getItemQuantity(itemId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_API_URL}/products/${itemId}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [itemId]);

  if (loading) return <div className="animate-pulse">Loading...</div>;

  return (
    <div className="flex justify-between items-center md:text-base text-sm">
      <div className="flex items-center gap-4">
        <img src={product?.thumbnail} alt={product?.title} className="md:size-10 size-7" />
        <div>{product?.title} <span className="text-primary">({quantity})</span></div>
      </div>
      <div className="text-primary">${product?.price}</div>
    </div>
  );
}
