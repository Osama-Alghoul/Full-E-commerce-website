import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY as string, {
  apiVersion: "2025-10-29.clover",
});

// Map your local dummy JSON product IDs → Stripe Price IDs
const STRIPE_PRODUCTS: Record<number, string> = {
  1: "price_1SSH3gCav5FPvgHGUvJ3UOi1", // Replace with your real Stripe price IDs
  2: "price_1SSH2cCav5FPvgHGx9y6Oghd",
  3: "price_1SSH1WCav5FPvgHGdtPdxYgq",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const cart = req.body as { id: number; quantity: number }[];

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ message: "Cart is empty or invalid" });
    }

    // Convert cart items to Stripe line_items
    const lineItems = cart
      .filter((item) => STRIPE_PRODUCTS[item.id])
      .map((item) => ({
        price: STRIPE_PRODUCTS[item.id],
        quantity: item.quantity,
      }));

    if (lineItems.length === 0) {
      return res.status(400).json({ message: "No valid items in cart" });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    return res.status(200).json({ url: session.url });
    // @ts-expect-error-next-line
  } catch (error: { message: string }) {
    console.error("Stripe error:", error);
    return res.status(500).json({ message: error.message });
  }
}
