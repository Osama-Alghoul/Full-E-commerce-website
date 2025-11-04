import type { ForwardRefExoticComponent, RefAttributes } from "react";
import BadgeIcon from "../../../ui/badgeIcon";
import type { LucideProps } from "lucide-react";

export default function Badge({
  icon,
  title,
  description,
}: {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <BadgeIcon Icon={icon} />
      <div>
        <div className="font-semibold text-xl">{title}</div>
        <div className="text-sm text-center">{description}</div>
      </div>
    </div>
  );
}
