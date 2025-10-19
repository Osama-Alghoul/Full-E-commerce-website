import type { ReactNode } from "react";

export default function CategoryCard({
  icon,
  name,
}: {
  icon: ReactNode;
  name: string;
}) {
  return (
    <div className="md:w-[170px] w-[150px] h-[145px] flex-none border border-gray-400 rounded-sm flex flex-col justify-center items-center gap-4 hover:bg-primary group snap-start">
      <div className="group-hover:text-white">{icon}</div>
      <div className="group-hover:text-white">{name}</div>
    </div>
  );
}
