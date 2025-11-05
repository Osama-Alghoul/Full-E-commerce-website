import Hero from "./pages/home-page/hero-section/Hero";
import Sales from "./pages/home-page/sales/Sales";
import Categories from "./pages/home-page/categories/Categories";
import BestSelling from "./pages/home-page/best-selling/BestSelling";
import Products from "./pages/home-page/products/Products";
import Featured from "./pages/home-page/featured/Featured";
import Trusted from "./pages/home-page/trust-badges/Trusted";
import { useEffect, useState } from "react";
import type { Product } from "../types";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        setLoading(false);
        throw new Error("Faild to fetch products");
      }
      const data = await response.json();
      setLoading(false);
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="max-w-[1170px] m-auto">
      <Hero />
      <Sales products={products} loading={loading} />
      <Categories />
      <BestSelling products={products} loading={loading} />
      <Products products={products} loading={loading} />
      <Featured />
      <Trusted />
    </div>
  );
}
