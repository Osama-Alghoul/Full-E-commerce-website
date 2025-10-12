import type { ReactNode } from "react";
export default function Button({
  children,
  className,
  variant = "primary",
  type,
}: {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "green";
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      className={`${
        variant === "green" ? "bg-button1" : "bg-primary"
      } px-12 py-4 rounded-sm text-white ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
