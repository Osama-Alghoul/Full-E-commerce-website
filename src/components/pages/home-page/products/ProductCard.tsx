import { Heart, Eye, ShoppingCart, X } from "lucide-react";
import Ratings from "../../../ui/Ratings";
import { type Product } from "../../../../types";
import { useCartContext } from "../../../../utils/CartContext";
import { useFavContext } from "../../../../utils/FavContext";
import { Link } from "react-router";

export default function ProductCard({
  id,
  title,
  price,
  rating,
  reviews,
  thumbnail,
  discountPercentage,
}: Product) {
  let displayedPrice = price;
  let discountedPrice;

  if (discountPercentage && discountPercentage > 0) {
    discountedPrice = price * (1 + discountPercentage / 100);
    displayedPrice = discountedPrice;
  }

  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useCartContext();
  const {
    increaseCartQuantity: increaseFavQuantity,
    getItemQuantity: getFavQuantity,
    removeFromCart: removeFromFav,
  } = useFavContext();
  const quantity = getItemQuantity(id);
  const isFav = getFavQuantity(id) > 0;
  return (
    <div className="w-[270px] group flex-none snap-start" id={id.toString()}>
      <div className="relative h-[250px] bg-secondary rounded-sm flex flex-col justify-between">
        <div
          className={`flex ${
            discountPercentage ? "justify-between" : "justify-end"
          } w-full p-3`}
        >
          {discountPercentage && (
            <span
              className={`text-white bg-primary rounded-sm px-3 py-1 h-fit ${
                discountPercentage !== 0 ? "" : "opacity-0"
              }`}
            >
              -{discountPercentage}%
            </span>
          )}

          <div>
            {isFav ? (
              <Heart
                className="bg-white w-8 h-8 p-1 rounded-full mb-2 hover:bg-gray-200 hover:text-white transition-colors duration-300 ease-in-out"
                onClick={() => removeFromFav(id)}
                fill="#DB4444"
                stroke="none"
              />
            ) : (
              <Heart
                className="bg-white w-8 h-8 p-1 rounded-full mb-2 hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
                onClick={() => increaseFavQuantity(id)}
              />
            )}
            <Link to={`/products/${id}`}>
              <Eye className="bg-white w-8 h-8 p-1 rounded-full hover:bg-primary hover:text-white" />
            </Link>
          </div>
        </div>

        <img
          src={thumbnail}
          className="absolute inset-0 w-9/12 h-9/12 m-auto object-contain -z-0"
        />
        {quantity === 0 ? (
          <button
            onClick={() => increaseCartQuantity(id)}
            className="text-white bg-black text-center py-2 group-hover:block md:hidden border-none cursor-pointer transition-colors duration-300 ease-in-out"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => removeFromCart(id)}
            className="text-white bg-primary text-center py-2 w-full flex justify-center items-center gap-1 
                         transition-colors duration-300 ease-in-out border-none cursor-pointer"
          >
            Remove Item <ShoppingCart size={18} /> <X size={18} />
          </button>
        )}
      </div>

      <Link to={`/products/${id}`}>
        <div className="mt-4">
          <div className="font-medium">{title}</div>
          <div className="font-medium flex items-center gap-3">
            <span className={"text-primary"}>${price.toFixed(2)}</span>
            {discountPercentage && discountPercentage > 0 && (
              <span className="line-through opacity-50">
                ${displayedPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Ratings stars={rating} reviewCount={reviews.length} />
        </div>
      </Link>
    </div>
  );
}
