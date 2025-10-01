import Layout from "./Layout";
import Hero from "./pages/home-page/hero-section/Hero";
import Sales from "./pages/home-page/sales/Sales";
import Categories from "./pages/home-page/categories/Categories"
import BestSelling from "./pages/home-page/best-selling/BestSelling"
import Products from "./pages/home-page/products/Products"
import Featured from "./pages/home-page/featured/Featured";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Sales />
      <Categories />
      <BestSelling />
      <Products />
      <Featured />
    </Layout>
  );
}
