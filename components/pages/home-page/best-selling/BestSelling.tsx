import Button from "../../../ui/Button";
import SectionTitle from "../../../ui/SectionTitle";
import ProductCard from "../products/ProductCard";
import { Products } from "../../../../mock-data/bestSelling";
import BestSale from "./BestSellingItem";

export default function BestSelling() {
  return (
    <div className="pt-16">
      <div className="flex justify-between pb-[60px]">
        <SectionTitle title="This Month" bigTitle="Best Selling Products" />
        <Button className="self-end">View All</Button>
      </div>
      <div className="flex justify-between mb-36">
        {Products.map((product) => {
          return <ProductCard key={product.name} {...product} />;
        })}
      </div>
      <BestSale />
    </div>
  );
}
