import Carousel from "./Carousel";

function IPhoneSlide() {
  return (
    <div className="flex  items-center justify-between w-full p-3 md:p-12 relative">
      {/* Text Section (Left) */}
      <div className="text-left z-10 space-y-4">
        <div className="flex items-center space-x-3">
          {/* Apple Logo Placeholder */}
          <span className="text-3xl font-bold">
            <img src="/apple-logo.svg" alt="apple logo" className="w-8 h-8" />
          </span>
          <span className="md:text-lg">iPhone 14 Series</span>
        </div>
        <h1 className="text-xl md:text-7xl font-bold leading-tight">
          Up to 10%
          <br />
          off Voucher
        </h1>
        {/* Shop Now button */}
        <a
          href="#"
          className="inline-flex items-center mt-6 text-lg border-b border-white hover:text-red-400 transition duration-300"
        >
          Shop Now
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </a>
      </div>

      {/* Image Section (Right) - Replace with actual image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full opacity-60 md:opacity-100 flex items-center justify-end md:pr-8">
        <div className="w-[400px] h-[400px] rounded-[4rem] flex items-center justify-center">
          <img src="/iPhone.png" />
        </div>
      </div>
    </div>
  );
}

export default function CarouselSlides() {
  return (
    <Carousel
      slides={[
        <IPhoneSlide key="s1" />,
        <IPhoneSlide key="s2" />,
        <IPhoneSlide key="s3" />,
      ]}
      autoPlayInterval={5000} // Autoplay every 5 seconds
    />
  );
}
