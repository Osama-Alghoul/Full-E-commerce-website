import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
  TouchEvent,
} from "react";

interface CarouselProps {
  slides: ReactNode[];
  autoPlayInterval?: number;
}

// --- Component ---
const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlayInterval = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length;
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const isSwiping = useRef(false);

  const goToPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? totalSlides - 1 : current - 1
    );
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) =>
      current === totalSlides - 1 ? 0 : current + 1
    );
  }, [totalSlides]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    isSwiping.current = true; // Mark as potentially swiping
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return; // Ignore if touch started outside

    const touchEndX = e.changedTouches[0].clientX;
    const difference = touchStartX - touchEndX; // positive for left swipe, negative for right swipe
    const SWIPE_THRESHOLD = 50; // Minimum distance for a recognized swipe

    setTouchStartX(null);

    if (Math.abs(difference) > SWIPE_THRESHOLD) {
      if (difference > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setTimeout(() => {
      isSwiping.current = false;
    }, 100);
  };

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const interval = setInterval(() => {
        if (!isSwiping.current) {
          goToNext();
        }
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [goToNext, autoPlayInterval]);

  return (
    <div
      className="relative w-full overflow-hidden bg-black text-white rounded-lg shadow-2xl max-w-4xl mx-auto mt-8 cursor-grab"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* --- Slide Content Wrapper --- */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-[300px] md:h-[400px] flex items-center justify-center relative"
          >
            {slide}
          </div>
        ))}
      </div>

      {/* --- Indicators (Dots) --- */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 p-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeIndex
                ? "bg-red-600"
                : "bg-gray-500/50 hover:bg-white/70"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;