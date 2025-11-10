import SectionTitle from "../../../ui/SectionTitle";
import Timer from "../../../ui/Timer";
import Button from "../../../ui/Button";
import ProductCard from "../products/ProductCard";
import ScrollContainer from "../../../ui/SmoothScrollContainer";
import ProductCardLoading from "../../../ui/productLoading";
import { useProducts } from "../../../../hooks/useProducts";

export default function Sales() {
  const { loading, products } = useProducts({ limit: 4, skip: 30 });
  return (
    <section className="flex flex-col px-5 lg:px-0">
      <div className="flex justify-between items-end flex-wrap">
        <div className="rounded-lg mt-12 flex md:gap-20 gap-10 items-end flex-wrap">
          <SectionTitle title="Today's" bigTitle="Flash Sales" />
          <Timer targetDate="2025-12-25T00:00:00" theme="dark" />
        </div>
      </div>
      <ScrollContainer>
        {loading ? (
          <>
            <ProductCardLoading />
            <ProductCardLoading />
            <ProductCardLoading />
            <ProductCardLoading />
          </>
        ) : (
          products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })
        )}
      </ScrollContainer>
      <Button className="my-[60px] self-center">View All Products</Button>
    </section>
  );
}
