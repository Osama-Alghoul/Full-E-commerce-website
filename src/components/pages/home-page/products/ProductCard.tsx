import { Heart, Eye } from "lucide-react";
import { useState } from "react";
import Ratings from "../../../ui/Ratings";
import ColorSelect from "../../../ui/ColorSelect";

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
  imgSrc: string[];
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  colors?: string[];
}) {
  let displayedPrice = price;
  let discountedPrice;

  if (sales > 0) {
    discountedPrice = price * (1 - sales / 100);
    displayedPrice = discountedPrice;
  }

  const [productColor, setProductColor] = useState(0);

  return (
    <div className="w-[270px] group flex-none snap-start">
      <div className="relative h-[250px] bg-secondary rounded-sm flex flex-col justify-between">
        <div className="flex justify-between w-full p-3">
          {isNew && (
            <span className="text-sm bg-[#00FF66] rounded-sm px-3 py-1 h-fit text-white">
              New
            </span>
          )}

          {!isNew && (
            <span
              className={`text-white bg-primary rounded-sm px-3 py-1 h-fit ${
                sales !== 0 ? "" : "opacity-0"
              }`}
            >
              -{sales}%
            </span>
          )}

          <div>
            <Heart className="bg-white w-8 h-8 p-1 rounded-full mb-2 hover:bg-primary hover:text-white" />
            <Eye className="bg-white w-8 h-8 p-1 rounded-full hover:bg-primary hover:text-white" />
          </div>
        </div>

        {/* Preload images to avoid flickering on color change */}
        <div style={{ display: "none" }}>
          {imgSrc.map((src, index) => (
            <img key={`preload-${index}`} src={src} alt="" />
          ))}
        </div>

        <img
          src={imgSrc[productColor || 0]}
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

        <Ratings stars={rating} reviewCount={reviewCount} />
        {colors?.length !== 0 &&
          colors?.map((color, index) => {
            return (
              <ColorSelect
                key={index}
                color={color}
                index={index}
                setProductColor={setProductColor}
                productColor={productColor}
              />
            );
          })}
      </div>
    </div>
  );
}