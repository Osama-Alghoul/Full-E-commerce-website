import type { ReactNode } from "react";
export default function Button({
  children,
  className,
  variant = "primary",
}: {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "green";
}) {
  return (
    <button
      className={`${
        variant === "green" ? "bg-button1" : "bg-primary"
      } px-12 py-4 rounded-sm text-white ${className}`}
    >
      {children}
    </button>
  );
}
