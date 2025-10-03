import Button from "../../../ui/Button";
import SectionTitle from "../../../ui/SectionTitle";
import ProductCard from "../products/ProductCard";
import { Products } from "../../../../mock-data/bestSelling";
import BestSale from "./BestSellingItem";

export default function BestSelling() {
  return (
    <section className="pt-16">
      <div className="flex justify-between pb-[60px] flex-wrap px-3.5 lg:px-0">
        <SectionTitle title="This Month" bigTitle="Best Selling Products" />
        <Button className="self-end">View All</Button>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-center mb-36 px-3.5 md:px-0">
        {Products.map((product) => {
          return <ProductCard key={product.name} {...product} />;
        })}
      </div>
      <BestSale />
    </section>
  );
}
