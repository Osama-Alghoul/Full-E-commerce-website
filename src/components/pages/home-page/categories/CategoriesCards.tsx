import {
  Smartphone,
  Shirt,
  ForkKnifeCrossed,
  Sofa,
  Headphones,
  Watch,
} from "lucide-react";
import OutlineCard from "../../../ui/OutlineCard";
import { Link } from "react-router";

export default function CategoriesCards() {
  return (
    <div className="flex gap-[30px] py-16 overflow-x-scroll justify-start snap-x snap-mandatory">
      <Link to={`/products?category=home-decoration`}>
        <OutlineCard name="Decoration" icon={<Sofa className="h-10 w-9" />} />
      </Link>{" "}
      <Link to={`/products?category=mens-watches`}>
        <OutlineCard name="SmartWatch" icon={<Watch className="h-10 w-9" />} />
      </Link>
      <Link to={`/products?category=smartphones`}>
        <OutlineCard name="Phones" icon={<Smartphone className="h-10 w-9" />} />
      </Link>
      <Link to={`/products?category=kitchen-accessories`}>
        <OutlineCard
          name="Kitchen"
          icon={<ForkKnifeCrossed className="h-10 w-9" />}
        />
      </Link>
      <Link to={`/products?category=mobile-accessories`}>
        <OutlineCard
          name="Headphones"
          icon={<Headphones className="h-10 w-9" />}
        />
      </Link>
      <Link to={`/products?category=tops`}>
        <OutlineCard name="Tops" icon={<Shirt className="h-10 w-9" />} />
      </Link>
    </div>
  );
}
