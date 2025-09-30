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
    <div>
      <div>
        {isNew && <span>New</span>}
        {sales !== 0 && <span>-{sales}%</span>}
        <div>
          <Heart />
          <Eye />
        </div>
        <img src={imgSrc} />
      </div>
      <div>
        <div>{name}</div>
        <div>
          {price}
          {discount && <span className="line-through"> - {discount}%</span>}
        </div>
        <div>
          {rating}({reviewCount})
        </div>
      </div>
    </div>
  );
}
