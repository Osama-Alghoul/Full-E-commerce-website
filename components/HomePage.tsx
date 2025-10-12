import Hero from "./pages/home-page/hero-section/Hero";
import Sales from "./pages/home-page/sales/Sales";
import Categories from "./pages/home-page/categories/Categories";
import BestSelling from "./pages/home-page/best-selling/BestSelling";
import Products from "./pages/home-page/products/Products";
import Featured from "./pages/home-page/featured/Featured";
import Trusted from "./pages/home-page/trust-badges/Trusted";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Sales />
      <Categories />
      <BestSelling />
      <Products />
      <Featured />
      <Trusted />
    </>
  );
}
