import { Heart, Search, User2Icon, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router";

interface HeaderProps {
  type?: "guest" | "user";
}

export default function Header({ type = "guest" }: HeaderProps) {
  const location = useLocation();
  return (
    <header className="flex justify-between pt-10 pb-4 border-b border-gray-300 px-6 lg:px-32 flex-wrap">
      <Link to={"/"}>
        <div className="text-2xl font-bold text-light">Exclusive</div>
      </Link>
      <nav>
        <ul className="gap-12 list-none hidden md:flex">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "text-primary underline"
                  : "hover:text-primary hover:underline"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                location.pathname === "/about"
                  ? "text-primary underline"
                  : "hover:text-primary hover:underline"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                location.pathname === "/contact"
                  ? "text-primary underline"
                  : "hover:text-primary hover:underline"
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/auth/register"
              className={`${
                location.pathname === "/auth/register"
                  ? "text-primary underline"
                  : "hover:text-primary hover:underline"
              }`}
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-1">
        <div className="text-xs w-56 bg-secondary px-3 py-1.5 rounded-sm flex">
          <input
            type="search"
            placeholder={`What are you looking for?`}
            className="flex-1 outline-none bg-transparent"
          />
          <Search />
        </div>
        <div className="hover:bg-primary hover:text-white rounded-full p-2.5">
          <Heart />
        </div>
        <div className="hover:bg-primary hover:text-white rounded-full p-2.5">
          <Link to={"/cart"}>
            <ShoppingCart />
          </Link>
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
