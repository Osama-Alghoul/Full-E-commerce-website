import { useEffect, useState } from "react";
import ProductCard from "../home-page/products/ProductCard";
import type { Product } from "../../../types";
import ProductCardLoading from "../../ui/productLoading";
import { useFavContext } from "../../../utils/FavContext";
import { BASE_API_URL } from "../../../content";

export default function Item({ itemId }: { itemId: number }) {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const { removeFromCart } = useFavContext();
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

  if (loading) {
    return <ProductCardLoading />;
  }

  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <div>
      <span
        className="text-red-500 cursor-pointer font-bold"
        onClick={() => removeFromCart(product.id)}
      >
        x
      </span>
      <ProductCard {...product} />
    </div>
  );
}
