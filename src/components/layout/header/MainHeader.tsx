import { Heart, Search, User2Icon, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router";
import { NavLinks } from "../../../content";
import SlideInDrawer from "../../ui/SlideDrawer";

interface HeaderProps {
  type?: "guest" | "user";
}

const PageLinks = ({
  hidden,
  location,
}: {
  hidden: boolean;
  location: ReturnType<typeof useLocation>;
}) => {
  return (
    <ul className={`gap-12 list-none ${hidden ? "hidden md:flex" : ""} `}>
      {NavLinks.map((route) => {
        return (
          <li key={route.label}>
            <Link
              to={route.link}
              className={`${
                location.pathname === `${route.link}`
                  ? "text-primary underline"
                  : "hover:text-primary hover:underline"
              }`}
            >
              {route.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default function Header({ type = "guest" }: HeaderProps) {
  const location = useLocation();

  return (
    <header className="flex justify-between md:pt-10 pt-4 pb-4 border-b border-gray-300 px-6 lg:px-32 flex-wrap">
      <div>
        <SlideInDrawer title="Pages">
          <PageLinks hidden={false} location={location} />
        </SlideInDrawer>

        <Link to={"/"}>
          <div className="text-2xl font-bold text-light">Exclusive</div>
        </Link>
      </div>
      <nav>
        <PageLinks hidden={true} location={location} />
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
