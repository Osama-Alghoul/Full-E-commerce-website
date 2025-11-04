import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export default function BadgeIcon({
  Icon,
}: {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <Icon className="h-14 w-14 bg-black text-white rounded-full border-8 border-black outline-9 outline-gray-300 group-hover:bg-white group-hover:text-black group-hover:border-white" />
  );
}
