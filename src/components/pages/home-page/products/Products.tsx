import SectionTitle from "../../../ui/SectionTitle";
import ProductCard from "./ProductCard";
import Button from "../../../ui/Button";
import { useEffect, useState } from "react";
import type { Product } from "../../../../types";

export default function Products() {
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
    <section className="pt-[60px] pb-36 flex flex-col gap-[60px] items-center px-5 lg:px-0">
      <div>
        <div className="mb-[60px]">
          <SectionTitle title="Our Products" bigTitle="Explore Our Products" />
        </div>
        <div className="flex gap-[30px] flex-wrap justify-center">
          {products.slice(0, 8).map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      </div>
      <Button>View All Products</Button>
    </section>
  );
}
