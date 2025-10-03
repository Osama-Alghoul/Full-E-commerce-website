import { ArrowRight } from "lucide-react";

export default function ArrowBtn({ onClick, direction }: { onClick?: () => void; direction: "left" | "right" }) {
  return (
    <button className="p-2 bg-secondary rounded-full cursor-pointer mt-2.5" onClick={onClick}>
      <ArrowRight className={direction === "left" ? "rotate-180" : ""} />
    </button>
  );
}
