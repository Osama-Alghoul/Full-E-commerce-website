import Layout from "./Layout";
import Hero from "./pages/home-page/hero-section/Hero";
import Sales from "./pages/home-page/sales/Sales";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Sales />
    </Layout>
  );
}
