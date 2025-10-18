import SectionTitle from "../../../ui/SectionTitle";
import Timer from "../../../ui/Timer";
import Button from "../../../ui/Button";
import ProductCard from "../products/ProductCard";
import { Products } from "../../../../mock-data/salesProducts";
import ActionArrows from "../../../ui/action-arrows";
import { useRef } from "react";

export default function Sales() {
  const scrollContainerRef = useRef(null);
  const SCROLL_DISTANCE = 320;

  interface ScrollContainerRef {
    scrollLeft: number;
    scroll: (options: ScrollToOptions) => void;
  }

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current as unknown as ScrollContainerRef;
      let newScrollLeft = 0;

      if (direction === "right") {
        newScrollLeft = scrollLeft + SCROLL_DISTANCE;
      } else {
        newScrollLeft = scrollLeft - SCROLL_DISTANCE;
      }

      (scrollContainerRef.current as unknown as ScrollContainerRef).scroll({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="flex flex-col px-5 lg:px-0">
      <div className="flex justify-between items-end flex-wrap">
        <div className="rounded-lg mt-12 flex gap-20 items-end flex-wrap">
          <SectionTitle title="Today's" bigTitle="Flash Sales" />
          <Timer targetDate="2025-12-25T00:00:00" theme="dark" />
        </div>
        {/* 5. Update the handlers to use the new scroll function */}
        <ActionArrows
          onLeftClick={() => handleScroll("left")}
          onRightClick={() => handleScroll("right")}
        />
      </div>
      <div
        // 6. Attach the ref to the scrollable div
        ref={scrollContainerRef}
        className="mt-10 flex overflow-x-scroll gap-[30px]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // 👈 Add MS-specific hide scrollbar style
      >
        {Products.map((product) => {
          return <ProductCard key={product.name} {...product} />;
        })}
      </div>
      <Button className="my-[60px] self-center">View All Products</Button>
    </section>
  );
}
