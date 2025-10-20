import { Heart, Eye } from "lucide-react";
import { useState } from "react";
import Ratings from "../../../ui/Ratings";
import ColorSelect from "../../../ui/ColorSelect";
import { type Product } from "../../../../types";

export default function ProductCard({
  title,
  price,
  rating,
  image,
  sales,
  isNew,
  colors,
}: Product) {
  let displayedPrice = price;
  let discountedPrice;

  if (sales && sales > 0) {
    discountedPrice = price * (1 - sales / 100);
    displayedPrice = discountedPrice;
  }

  const [productColor, setProductColor] = useState(0);

  return (
    <div className="w-[270px] group flex-none snap-start">
      <div className="relative h-[250px] bg-secondary rounded-sm flex flex-col justify-between">
        <div className={`flex ${sales? "justify-between" : "justify-end" } w-full p-3`}>
          {isNew && (
            <span className="text-sm bg-[#00FF66] rounded-sm px-3 py-1 h-fit text-white">
              New
            </span>
          )}

          {sales && (
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

        <img
          src={image}
          className="absolute inset-0 w-3/5 h-9/12 m-auto object-contain -z-0"
        />
        <div className="text-white bg-black text-center py-2 group-hover:block md:hidden">
          Add To Cart
        </div>
      </div>

      <div className="mt-4">
        <div className="font-medium">{title}</div>
        <div className="font-medium flex items-center gap-3">
          <span className={"text-primary"}>${displayedPrice.toFixed(2)}</span>
          {sales && sales > 0 && (
            <span className="line-through opacity-50">${price.toFixed(2)}</span>
          )}
        </div>

        <Ratings stars={rating.rate} reviewCount={rating.count} />
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
