import {
  Smartphone,
  Monitor,
  Camera,
  Headphones,
  Gamepad,
  Watch,
} from "lucide-react";
import OutlineCard from "../../../ui/OutlineCard";

export default function CategoriesCards() {
  return (
      <div
        className="flex gap-[30px] py-16 overflow-x-scroll justify-center snap-x snap-mandatory"
      >
        <OutlineCard
          name="Phones"
          icon={<Smartphone className="h-10 w-9" />}
        />
        <OutlineCard name="Monitors" icon={<Monitor className="h-10 w-9" />} />
        <OutlineCard name="SmartWatch" icon={<Watch className="h-10 w-9" />} />
        <OutlineCard name="Cameras" icon={<Camera className="h-10 w-9" />} />
        <OutlineCard
          name="Headphones"
          icon={<Headphones className="h-10 w-9" />}
        />
        <OutlineCard name="Gamepads" icon={<Gamepad className="h-10 w-9" />} />
      </div>
  );
}
