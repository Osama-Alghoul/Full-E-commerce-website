import React from "react";
import { Heart, Search, User2Icon, ShoppingCart } from "lucide-react";

interface HeaderProps {
  type?: "guest" | "user";
}

export default function Header({ type = "guest" }: HeaderProps) {
  const active = "underline";
  return (
    <header className="flex justify-between pt-10 pb-4 border-b border-gray-300 px-6 md:px-32 flex-wrap">
      <div className="text-2xl font-bold text-light">Exclusive</div>
      <nav>
        <ul className="gap-12 list-none hidden md:flex">
          <li className="hover:text-primary hover:underline">
            <a href="#" className={active}>
              Home
            </a>
          </li>
          <li className="hover:text-primary hover:underline">
            <a href="#" className="hover:text-primary hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary hover:underline">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <input type="search" placeholder={`What are you looking for?`} />
        <Search />
        <div>
          <Heart />
        </div>
        <div>
          <ShoppingCart />
        </div>
        {type === "user" && (
          <div>
            <User2Icon />
          </div>
        )}
      </div>
    </header>
  );
}
