import type { ReactNode } from "react";
export default function Button({
  children,
  className,
  variant = "primary",
  type,
  noPadding = false,
}: {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "green" | "outline";
  type?: "button" | "submit" | "reset";
  noPadding?: boolean;
}) {
  let variantClass = "";

  switch (variant) {
    case "green":
      variantClass = "bg-button1 text-white";
      break;
    case "outline":
      variantClass = "border border-gray-400";
      break;
    default:
      variantClass = "bg-primary text-white";
      break;
  }
  return (
    <button
      className={`${variantClass} ${noPadding ? "px-4" : "px-10 md:px-12"} py-4 rounded-sm  ${className} cursor-pointer`}
      type={type}
    >
      {children}
    </button>
  );
}
