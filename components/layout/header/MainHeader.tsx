import { Heart, Search, User2Icon, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

interface HeaderProps {
  type?: "guest" | "user";
}

export default function Header({ type = "guest" }: HeaderProps) {
  const [active, setActive] = useState(0);
  return (
    <header className="flex justify-between pt-10 pb-4 border-b border-gray-300 px-6 lg:px-32 flex-wrap">
      <div className="text-2xl font-bold text-light">Exclusive</div>
      <nav>
        <ul className="gap-12 list-none hidden md:flex">
          <li>
            <Link
              to="/"
              className={`${active === 0 ? "text-primary underline" : "hover:text-primary hover:underline"}`}
              onClick={() => setActive(0)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${active === 1 ? "text-primary underline" : "hover:text-primary hover:underline"}`}
              onClick={() => setActive(1)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${active === 2 ? "text-primary underline" : "hover:text-primary hover:underline"}`}
              onClick={() => setActive(2)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/auth/register"
              className={`${active === 3 ? "text-primary underline" : "hover:text-primary hover:underline"}`}
              onClick={() => setActive(3)}
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-2.5">
        <div className="text-xs w-56 bg-secondary px-3 py-1.5 rounded-sm flex">
          <input
            type="search"
            placeholder={`What are you looking for?`}
            className="flex-1 outline-none bg-transparent"
          />
          <Search />
        </div>
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
