import { Heart, Eye, Star } from "lucide-react";

export default function ProductCard({
  new: isNew = false,
  sales = 0,
  imgSrc,
  name,
  price,
  rating,
  reviewCount,
  colors,
}: {
  new?: boolean;
  sales?: number;
  imgSrc: string;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  colors?: string[];
}) {
  // 1. Calculate discounted price and determine the price to display
  let displayedPrice = price;
  let discountedPrice;

  if (sales > 0) {
    // If 'sales' (which represents the sale percentage) is present, calculate the discounted price
    discountedPrice = price * (1 - sales / 100);
    displayedPrice = discountedPrice;
  }

  // 2. Determine the number of full stars and empty stars to render (total stars should be 5)
  const maxRating = 5;
  const fullStars = Math.round(rating); // Math.round for accurate visual representation
  const emptyStars = maxRating - fullStars;

  return (
    <div className="w-[270px] group flex-none">
      <div className="relative h-[250px] bg-secondary rounded-sm flex flex-col justify-between">
        <div className="flex justify-between w-full p-3">
          {/* Check for 'new' and 'sales' */}
          {isNew && (
            <span className="text-sm bg-[#00FF66] rounded-sm px-3 py-1 h-fit">
              New
            </span>
          )}
          {/* Change: Use 'sales' which is passed as a percentage */}

          <span
            className={`text-white bg-primary rounded-sm px-3 py-1 h-fit ${
              sales !== 0 ? "" : "opacity-0"
            }`}
          >
            -{sales}%
          </span>

          <div>
            <Heart className="bg-white w-8 h-8 p-1 rounded-full mb-2 hover:bg-primary hover:text-white" />
            <Eye className="bg-white w-8 h-8 p-1 rounded-full hover:bg-primary hover:text-white" />
          </div>
        </div>

        <img
          src={imgSrc}
          className="absolute inset-0 w-3/5 h-9/12 m-auto object-contain -z-0"
        />
        <div className="text-white bg-black text-center py-2 group-hover:block md:hidden">
          Add To Cart
        </div>
      </div>

      <div className="mt-4">
        <div className="font-medium">{name}</div>
        <div className="font-medium flex items-center gap-3">
          {/* 3. Display the final price, and if on sale, display the original price struck-through */}
          <span className={"text-primary"}>${displayedPrice.toFixed(2)}</span>
          {sales > 0 && (
            <span className="line-through opacity-50">${price.toFixed(2)}</span>
          )}
        </div>

        <div className="flex items-center">
          {/* 4. Render full stars */}
          {Array.from({ length: fullStars }).map((_, index) => (
            <Star
              fill="#FFAD33"
              strokeWidth={0}
              className="h-5 w-5"
              key={`full-${index}`}
            />
          ))}
          {/* 5. Render empty stars */}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <Star
              fill="#CCCCCC"
              strokeWidth={0}
              className="h-5 w-5"
              key={`empty-${index}`}
            />
          ))}

          <span className="opacity-50 font-semibold ml-2 text-sm">
            ({reviewCount})
          </span>
        </div>
        {colors?.length !== 0 &&
          colors?.map((color) => {
            return (
                <div
                className={`rounded-full w-5 h-5 inline-block mr-2 mt-2 transition-all cursor-pointer hover:scale-110`}
                style={{ backgroundColor: `${color}` }}
                onClick={(e) => {
                  e.currentTarget.classList.toggle("border-2");
                }}
                ></div>
            );
          })}
      </div>
    </div>
  );
}
