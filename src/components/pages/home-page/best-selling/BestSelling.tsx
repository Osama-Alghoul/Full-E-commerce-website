import Button from "../../../ui/Button";
import SectionTitle from "../../../ui/SectionTitle";
import ProductCard from "../products/ProductCard";
import BestSale from "./BestSellingItem";
import ProductCardLoading from "../../../ui/productLoading";
import { useProducts } from "../../../../hooks/useProducts";

export default function BestSelling() {
  const { loading, products } = useProducts({ limit: 4, skip: 20 });
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
