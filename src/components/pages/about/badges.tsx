import { Store, DollarSign, ShoppingBag, ChartColumn } from "lucide-react";
import BadgeIcon from "../../ui/badgeIcon";

export default function Badges() {
  const data = [
    { icon: Store, number: "10.5k", details: "Sallers active our site" },
    { icon: DollarSign, number: "33k", details: "Mopnthly Produduct Sale" },
    {
      icon: ShoppingBag,
      number: "45.5k",
      details: "Customer active in our site",
    },
    {
      icon: ChartColumn,
      number: "25k",
      details: "Anual gross sale in our site",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center flex-wrap md:pb-36 pb-16">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-[270px] h-[230px] border border-gray-300 rounded-sm flex flex-col justify-center items-center hover:bg-primary group"
        >
          <BadgeIcon Icon={item.icon} />
          <div className="flex flex-col items-center mt-6 group-hover:text-white">
            <div className="text-sm">{item.details}</div>
            <div className="font-semibold text-xl">{item.number}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
