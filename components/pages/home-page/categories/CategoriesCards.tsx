import {
  Smartphone,
  Monitor,
  Camera,
  Headphones,
  Gamepad,
  Watch,
} from "lucide-react";
import CategoryCard from "../../../ui/CategoryCard";

export default function CategoriesCards() {
  return (
    <div className="flex gap-[30px] py-16">
      <CategoryCard name="Phones" icon={<Smartphone className="h-10 w-9" />} />
      <CategoryCard name="Monitors" icon={<Monitor className="h-10 w-9" />} />
      <CategoryCard name="SmartWatch" icon={<Watch className="h-10 w-9" />} />
      <CategoryCard name="Cameras" icon={<Camera className="h-10 w-9" />} />
      <CategoryCard
        name="Headphones"
        icon={<Headphones className="h-10 w-9" />}
      />
      <CategoryCard name="Gamepads" icon={<Gamepad className="h-10 w-9" />} />
    </div>
  );
}
