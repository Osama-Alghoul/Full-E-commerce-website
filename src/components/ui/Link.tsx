import React from "react";
interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "white" | "black";
}

export default function Link({ href, children, variant }: LinkProps) {
  return (
    <a
      href={href}
      className={`${variant === "white" ? "text-white" : "text-black"} underline font-semibold`}
    >
      {children}
    </a>
  );
}
