import { useState } from "react";
import { type CartItem } from "../../types";

interface CheckoutButtonProps {
  cart: CartItem[];
}

export default function CheckoutButton({ cart }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // redirect to Stripe checkout
      } else {
        throw new Error("Missing checkout URL");
      }
    // @ts-expect-error-next-line
    } catch (err: { message: string }) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleCheckout}
        disabled={loading || cart.length === 0}
        className={`py-4 rounded-sm px-10 md:px-12 bg-primary text-white cursor-pointer${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-primary text-white"
        }`}
      >
        {loading ? "Processing..." : "Procees to checkout"}
      </button>

      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
