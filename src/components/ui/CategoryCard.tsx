import type { ReactNode } from "react";

export default function CategoryCard({
  icon,
  name,
}: {
  icon: ReactNode;
  name: string;
}) {
  return (
    <div className="w-[170px] h-[145px] border border-gray-400 rounded-sm flex flex-col justify-center items-center gap-4 hover:bg-primary group">
      <div className="group-hover:text-white">{icon}</div>
      <div className="group-hover:text-white">{name}</div>
    </div>
  );
}
