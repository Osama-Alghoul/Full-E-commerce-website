import Hero from "./pages/home-page/hero-section/Hero";
import Sales from "./pages/home-page/sales/Sales";
import Categories from "./pages/home-page/categories/Categories";
import BestSelling from "./pages/home-page/best-selling/BestSelling";
import Products from "./pages/home-page/products/Products";
import Featured from "./pages/home-page/featured/Featured";
import Trusted from "./pages/home-page/trust-badges/Trusted";
import { useProducts } from "../hooks/useProducts";

export default function HomePage() {
  const { products, loading } = useProducts();
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
