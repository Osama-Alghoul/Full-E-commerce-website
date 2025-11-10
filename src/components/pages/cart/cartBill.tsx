import { useState, useEffect, useCallback } from "react";
import { useCartContext } from "../../../utils/CartContext";
import { debounce } from "../../../utils/debounce";
import type { CartItem, Product } from "../../../types";
import { BASE_API_URL } from "../../../content";

interface CartContextType {
  cartItems: CartItem[];
}

export default function CartBill() {
  const { cartItems } = useCartContext() as CartContextType;
  const [subTotal, setSubTotal] = useState<string>("0.00");
  const [loading, setLoading] = useState(true);

  const calculateSubtotal = useCallback(
    async (items: CartItem[]): Promise<void> => {
      setLoading(true);

      if (!items || items.length === 0) {
        setSubTotal("0.00");
        setLoading(false);
        return;
      }

      const itemPromises = items.map(async (item) => {
        try {
          const response = await fetch(
            `${BASE_API_URL}/products/${item.id}`
          );
          if (!response.ok) {
            throw new Error(`Failed to fetch product ${item.id}`);
          }
          const product: Product = await response.json();

          const itemSubtotal = product.price * item.quantity;
          return itemSubtotal;
        } catch (error) {
          console.error("Error fetching product price:", error);
          return 0;
        }
      });

      const subtotals: number[] = await Promise.all(itemPromises);

      const total = subtotals.reduce((acc, sub) => acc + sub, 0);

      setSubTotal(total.toFixed(2));
      setLoading(false);
    },
    [setSubTotal, setLoading]
  );

  const debouncedCalculate = useCallback(
    // @ts-expect-error-next-line
    debounce((items: CartItem[]) => {
      calculateSubtotal(items);
    }, 500),
    [calculateSubtotal] 
  );
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      // @ts-expect-error-next-line
      debouncedCalculate(cartItems);
    } else {
      setSubTotal("0.00");
      setLoading(false);
    }
  }, [cartItems, debouncedCalculate]);

  return (
    <>
      <div className="flex justify-between border-b py-4 border-b-gray-300">
        <span>Subtotal</span>

        {loading ? (
          <span className="animate-pulse">Loading...</span>
        ) : (
          <span>${subTotal}</span>
        )}
      </div>
      <div className="flex justify-between border-b py-4 border-b-gray-300">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between py-4">
        <span>Total</span>
        {loading ? (
          <span className="animate-pulse">Loading...</span>
        ) : (
          <span>${subTotal}</span>
        )}
      </div>
    </>
  );
}