import type { ReactNode } from "react";
export default function Button({
  children,
  className,
  variant = "primary",
  type,
}: {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "green" | "outline";
  type?: "button" | "submit" | "reset";
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
      className={`${variantClass} md:px-12 px-10 py-4 rounded-sm  ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
