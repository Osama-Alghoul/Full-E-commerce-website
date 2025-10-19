import { Star } from "lucide-react";
interface props {
  stars: number;
  reviewCount: number;
}

export default function Ratings({ stars, reviewCount }: props) {
  const maxRating = 5;
  const fullStars = Math.round(stars); // Math.round for accurate visual representation
  const emptyStars = maxRating - fullStars;
  return (
    <div className="flex items-center">
      {/* 4. Render full stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star
          fill="#FFAD33"
          strokeWidth={0}
          className="md:size-5 size-4"
          key={`full-${index}`}
        />
      ))}
      {/* 5. Render empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star
          fill="#CCCCCC"
          strokeWidth={0}
          className="md:size-5 size-4"
          key={`empty-${index}`}
        />
      ))}

      <span className="opacity-50 font-semibold ml-2 text-sm">
        ({reviewCount})
      </span>
    </div>
  );
}
