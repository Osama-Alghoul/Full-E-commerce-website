import { useEffect, useState } from "react";
import type { Product } from "../../../types";
import { useCartContext } from "../../../utils/CartContext";

export default function Item({ itemId }: { itemId: number }) {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const { getItemQuantity } = useCartContext();
  const quantity = getItemQuantity(itemId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${itemId}`,
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
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <img src={product?.image} alt={product?.title} className="size-10" />
        <div>{product?.title}</div>
        <div>({quantity})</div>
      </div>
      <div>${product?.price}</div>
    </div>
  );
}
