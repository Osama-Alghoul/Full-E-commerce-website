import React, { useState, useEffect, useCallback, type ReactNode } from "react";

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

  // Function to move to the next slide
  const goToNext = useCallback(() => {
    setActiveIndex((current) =>
      current === totalSlides - 1 ? 0 : current + 1
    );
  }, [totalSlides]);

  // Autoplay Effect
  useEffect(() => {
    if (autoPlayInterval > 0) {
      const interval = setInterval(() => {
        goToNext();
      }, autoPlayInterval);

      // Cleanup the interval when the component unmounts or interval changes
      return () => clearInterval(interval);
    }
  }, [goToNext, autoPlayInterval]);

  // --- Rendering ---
  return (
    <div className="relative w-full overflow-hidden bg-black text-white rounded-lg shadow-2xl max-w-4xl mx-auto mt-8">
      {/* --- Slide Content Wrapper --- */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          // Tailwind CSS: flex-shrink-0 ensures slides don't shrink, w-full makes each take full width
          <div
            key={index}
            className="flex-shrink-0 w-full h-[400px] flex items-center justify-center relative"
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
