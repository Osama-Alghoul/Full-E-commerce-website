import { useState, useEffect } from "react";
import { useCartContext } from "../../../utils/CartContext";
import { Link } from "react-router";
import { BASE_API_URL } from "../../../content";
import type { Product } from "../../../types";

interface props {
  itemId: number;
  quantity: number;
}

export default function CartItem({ itemId, quantity }: props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useCartContext();

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
    return (
      <tr>
        <td className="animate-pulse py-2.5">Loading...</td>
      </tr>
    );
  }

  if (!product) {
    return (
      <tr>
        <td>Product not found.</td>
      </tr>
    );
  }

  return (
    <tr
      key={product.id}
      className="flex justify-between items-center bg-white border-b border-gray-100 py-6"
    >
      <td className="flex-1 flex items-center flex-wrap gap-4 min-w-0 pl-4">
        <div className="relative">
          <span
            className="absolute -top-3 -left-3 text-red-500 text-lg cursor-pointer"
            onClick={() => removeFromCart(itemId)}
          >
            &times;
          </span>
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={product.thumbnail} alt={product.title} />
          </div>
        </div>
        <Link to={`/products/${product.id}`}>
          <span className="font-medium text-sm">{product.title}</span>
        </Link>
      </td>

      <td className="w-1/5 text-left text-sm">${product.price.toFixed(2)}</td>

      <td className="w-1/5 text-center">
        <div className="w-16 p-2 text-center rounded-sm border border-gray-300 flex">
          <input
            type="number"
            value={quantity}
            readOnly
            className="appearance-none w-full"
          />
          <div>
            <button
              className="hover:text-red-500 transition duration-300 text-xs"
              onClick={() => increaseCartQuantity(itemId)}
            >
              ▲
            </button>
            <button
              className="hover:text-red-500 transition duration-300 text-xs"
              onClick={() => decreaseCartQuantity(itemId)}
            >
              ▼
            </button>
          </div>
        </div>
      </td>

      <td className="w-1/5 text-right font-medium text-sm pr-4">
        ${(product.price * quantity).toFixed(2)}
      </td>
    </tr>
  );
}
