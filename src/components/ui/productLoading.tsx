const ProductCardLoading = () => {
  return (
    // Outer container (matches the original card's dimensions)
    <div className="w-[270px] flex-none snap-start animate-pulse">
      {/* Image/Primary content area */}
      <div className="relative h-[250px] bg-gray-200 rounded-sm flex flex-col justify-between">
        {/* Top Section - Badges/Icons */}
        <div className="flex justify-between w-full p-3">
          {/* Placeholder for 'New' or 'Sale' badge on the left */}
          <div className="h-6 w-12 bg-gray-300 rounded-sm"></div>

          {/* Placeholder for Icons on the right */}
          <div>
            <div className="w-8 h-8 p-1 rounded-full mb-2 bg-gray-300"></div>
            <div className="w-8 h-8 p-1 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Center of the card is implicitly filled by the bg-gray-200 */}

        {/* Bottom Button Placeholder */}
        <div className="text-white bg-gray-400 text-center py-2"></div>
      </div>

      {/* Text Content Area */}
      <div className="mt-4">
        {/* Title Placeholder */}
        <div className="h-5 w-4/5 bg-gray-300 rounded-sm mb-2"></div>

        {/* Price Placeholder */}
        <div className="font-medium flex items-center gap-3 mb-2">
          <span className="h-5 w-1/4 bg-gray-300 rounded-sm"></span>
        </div>

        {/* Ratings Placeholder */}
        <div className="h-4 w-3/5 bg-gray-300 rounded-sm mb-3"></div>

        {/* Color Selectors Placeholder (if applicable) */}
        <div className="flex gap-2">
          <div className="h-4 w-4 rounded-full bg-gray-300"></div>
          <div className="h-4 w-4 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardLoading;
