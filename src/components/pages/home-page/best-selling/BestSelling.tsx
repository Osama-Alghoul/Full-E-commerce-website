import Button from "../../../ui/Button";
import SectionTitle from "../../../ui/SectionTitle";
import ProductCard from "../products/ProductCard";
import BestSale from "./BestSellingItem";
import type { apiProps as Props } from "../../../../types";
import ProductCardLoading from "../../../ui/productLoading";

export default function BestSelling({ products, loading }: Props) {
  return (
    <section className="pt-16">
      <div className="flex justify-between pb-[60px] flex-wrap px-3.5 lg:px-0">
        <SectionTitle title="This Month" bigTitle="Best Selling Products" />
        <Button className="self-end">View All</Button>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-center mb-36 px-3.5 md:px-0">
        {loading ? (
          <>
            <ProductCardLoading />
            <ProductCardLoading />
            <ProductCardLoading />
            <ProductCardLoading />
          </>
        ) : (
          products.slice(0, 4).map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })
        )}
      </div>
      <BestSale />
    </section>
  );
}
