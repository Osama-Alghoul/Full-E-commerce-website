import { useRef } from "react";
import ActionArrows from "./action-arrows";

export default function ScrollContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollContainerRef = useRef(null);
  const SCROLL_DISTANCE = 320;

  interface ScrollContainerRef {
    scrollLeft: number;
    scroll: (options: ScrollToOptions) => void;
  }

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft } =
        scrollContainerRef.current as ScrollContainerRef;
      let newScrollLeft = 0;

      if (direction === "right") {
        newScrollLeft = scrollLeft + SCROLL_DISTANCE;
      } else {
        newScrollLeft = scrollLeft - SCROLL_DISTANCE;
      }

      (scrollContainerRef.current as ScrollContainerRef).scroll({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <ActionArrows
        onLeftClick={() => handleScroll("left")}
        onRightClick={() => handleScroll("right")}
      />
      <div
        ref={scrollContainerRef}
        className="mt-10 flex overflow-x-scroll gap-[30px] snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>
    </>
  );
}
