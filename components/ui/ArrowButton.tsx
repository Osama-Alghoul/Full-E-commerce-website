import { ArrowRight } from "lucide-react";

export default function ArrowBtn({
  onClick,
  direction,
}: {
  onClick?: () => void;
  direction: "left" | "right" | "top" | "buttom";
}) {
  return (
    <button
      className="p-2 bg-secondary rounded-full cursor-pointer mt-2.5"
      onClick={onClick}
    >
      <ArrowRight
        className={(() => {
          switch (direction) {
            case "left":
              return "rotate-180";
            case "right":
              return "";
            case "top":
              return "-rotate-90";
            case "buttom":
              return "rotate-90";
            default:
              return "";
          }
        })()}
      />
    </button>
  );
}
