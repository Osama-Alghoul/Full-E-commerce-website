import SectionTitle from "../../../ui/SectionTitle";
import Timer from "../../../ui/Timer";
import ProductCard from "../products/ProductCard";

export default function Sales() {
  return (
    <div>
      <div className="rounded-lg shadow-md mt-12 flex gap-20 items-end">
        <SectionTitle title="Today's" bigTitle="Flash Sales" />
        <Timer targetDate="2025-12-25T00:00:00" />
      </div>
      <div className="mt-10">
        <ProductCard
          imgSrc={"/gamepad.png"}
          name={"Product Name"}
          price={120}
          discount={160}
          sales={40}
          rating={4.5}
          reviewCount={10}
        />
      </div>
    </div>
  );
}
