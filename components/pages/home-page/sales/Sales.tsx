import SectionTitle from "../../../ui/SectionTitle";
import Timer from "../../../ui/Timer";
import Button from "../../../ui/Button"
import ProductCard from "../products/ProductCard";
import { Products } from "../../../../mock-data/salesProducts";

export default function Sales() {
  return (
    <section className="flex flex-col px-5 md:px-0">
      <div className="rounded-lg mt-12 flex gap-20 items-end flex-wrap">
        <SectionTitle title="Today's" bigTitle="Flash Sales" />
        <Timer targetDate="2025-12-25T00:00:00" theme="dark" />
      </div>
      <div className="mt-10 flex overflow-x-scroll gap-[30px]" style={{scrollbarWidth: 'none' }}>
        {Products.map((product) => {
          return <ProductCard key={product.name} {...product} />;
        })}
      </div>
      <Button className="my-[60px] self-center">View All Products</Button>
    </section>
  );
}
