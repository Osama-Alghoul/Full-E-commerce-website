import React from "react";
import { Heart, Search, User2Icon, ShoppingCart } from "lucide-react";

interface HeaderProps {
  type?: "guest" | "user";
}

export default function Header({ type = "guest" }: HeaderProps) {
  const active = "underline";
  return (
    <header className="flex justify-between pt-10 pb-4 border-b px-32">
      <div className="text-2xl font-bold text-light">Exclusive</div>
      <nav className="flex gap-12 list-none">
        <li> 
          {/* TODO: Add hover to primary color */}
          <a href="" className={active}>
            Home
          </a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Sign Up</a>
        </li>
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
