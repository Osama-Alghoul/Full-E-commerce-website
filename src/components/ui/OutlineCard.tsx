import type { ReactNode } from "react";

export default function OutlineCard({
  icon,
  name,
  small = false,
}: {
  icon?: ReactNode;
  name?: string;
  small?: boolean;
}) {
  return (
    <div
      className={`${
        small ? "w-8 h-8" : "md:w-[170px] w-[150px] h-[145px]"
      } flex-none border border-gray-400 rounded-sm flex flex-col justify-center items-center gap-4 hover:bg-primary group snap-start`}
    >
      {icon && <div className="group-hover:text-white">{icon}</div>}
      <div className={`group-hover:text-white ${small && "font-medium text-sm"}`}>{name}</div>
    </div>
  );
}
