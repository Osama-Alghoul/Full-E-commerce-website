import { useState, useEffect } from "react";
import ArrowBtn from "./ArrowButton";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 300;
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to Top"
          className="fixed bottom-5 right-5 p-3 shadow-lg transition-all duration-300 ease-in-out z-50 flex items-center justify-center text-xl w-12 h-12 md:w-14 md:h-14 md:text-2xl"
        >
          <ArrowBtn direction="top" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
