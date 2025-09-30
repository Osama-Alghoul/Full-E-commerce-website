import { Heart, Eye } from "lucide-react";

export default function ProductCard({
  new: isNew = false,
  sales = 0,
  imgSrc,
  name,
  price,
  discount,
  rating,
  reviewCount,
}: {
  new?: boolean;
  sales?: number;
  imgSrc: string;
  name: string;
  price: number;
  discount?: number;
  rating: number;
  reviewCount: number;
}) {
  return (
    <div className="w-[270px] group">
      <div className="relative h-[250px] bg-secondary rounded-sm flex flex-col justify-between">
        <div className="flex justify-between w-full p-3">
          {isNew && <span>New</span>}
          {sales !== 0 && <span className="text-white bg-primary rounded-sm px-3 py-1 h-fit">-{sales}%</span>}
          <div>
            <Heart className="bg-white w-8 h-8 p-1 rounded-full mb-2" />
            <Eye className="bg-white w-8 h-8 p-1 rounded-full" />
          </div>
        </div>
        <img
          src={imgSrc}
          className="absolute inset-0 w-3/5 h-9/12 m-auto object-contain -z-0"
        />
        <div className="text-white bg-black text-center py-2 group-hover:block md:hidden">Add To Cart</div>
      </div>
      <div>
        <div>{name}</div>
        <div>
          {price}
          {discount && <span className="line-through "> - {discount}%</span>}
        </div>
        <div>
          {rating}({reviewCount})
        </div>
      </div>
    </div>
  );
}
