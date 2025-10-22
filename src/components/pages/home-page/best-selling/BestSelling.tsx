import Button from "../../../ui/Button";
import SectionTitle from "../../../ui/SectionTitle";
import ProductCard from "../products/ProductCard";
import BestSale from "./BestSellingItem";
import { useEffect, useState } from "react";
import type { Product } from "../../../../types";

export default function BestSelling() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Faild to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <section className="pt-16">
      <div className="flex justify-between pb-[60px] flex-wrap px-3.5 lg:px-0">
        <SectionTitle title="This Month" bigTitle="Best Selling Products" />
        <Button className="self-end">View All</Button>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-center mb-36 px-3.5 md:px-0">
        {products.slice(0, 4).map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
      <BestSale />
    </section>
  );
}
