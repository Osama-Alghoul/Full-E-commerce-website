import SectionTitle from "../../../ui/SectionTitle";
import { OurProducts } from "../../../../mock-data/ourProducts";
import ProductCard from "./ProductCard";
import Button from "../../../ui/Button";

export default function Products() {
  return (
    <div className="pt-[60px] pb-36 flex flex-col gap-[60px] items-center">
      <div>
        <div className="mb-[60px]">
          <SectionTitle title="Our Products" bigTitle="Explore Our Products" />
        </div>
        <div className="flex gap-[30px] flex-wrap">
          {OurProducts.map((product) => {
            return <ProductCard key={product.name} {...product} />;
          })}
        </div>
      </div>
      <Button>View All Products</Button>
    </div>
  );
}
