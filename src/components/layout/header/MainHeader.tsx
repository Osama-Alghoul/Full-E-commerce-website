import { Heart, User2Icon, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router";
import { NavLinks } from "../../../content";
import { useCartContext } from "../../../utils/CartContext";
import { useFavContext } from "../../../utils/FavContext";
import { useAuthContext } from "../../../utils/AuthContext";
import UserMenu from "./userMenu";
import SearchBar from "./SearchBar";
import BurgerMenu from "../../ui/BurgerMenu";

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
  const { isLoggedIn } = useAuthContext();
  return (
    <ul className={`gap-12 list-none ${hidden ? "hidden md:flex" : ""} `}>
      {NavLinks.filter(
        isLoggedIn ? (link) => link.label !== "Sign up" : (link) => link
      ).map((route) => {
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
  const { cartQuantity } = useCartContext();
  const { favItems } = useFavContext();
  const { isLoggedIn } = useAuthContext();

  let links = [
    { label: "Home", href: "" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
    { label: "Sign up", href: "auth/register" },
  ];

  if (isLoggedIn) {
    links = [
      { label: "Home", href: "" },
      { label: "About", href: "about" },
      { label: "Contact", href: "contact" },
      { label: "Account", href: "account" },
    ];
  }

  return (
    <header className="sticky top-0 z-50 flex justify-between md:pt-10 pt-4 pb-4 border-b border-gray-300 px-6 lg:px-32 flex-wrap bg-white/80 backdrop-blur-md">
      <div className="flex gap-4 items-center">
        <BurgerMenu links={links} />

        <Link to={"/"}>
          <div className="text-2xl font-bold text-light">Exclusive</div>
        </Link>
      </div>
      <nav>
        <PageLinks hidden={true} location={location} />
      </nav>

      <div className="flex items-center gap-1">
        <SearchBar />
        <div className="hover:bg-primary hover:text-white rounded-full p-2.5 relative">
          <Link to="/wishlist">
            <Heart />
            <div className="absolute top-0 right-0 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {favItems.length}
            </div>
          </Link>
        </div>
        <div className="hover:bg-primary hover:text-white rounded-full p-2.5 relative">
          <Link to={"/cart"}>
            <ShoppingCart />
            <div className="absolute top-0 right-0 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cartQuantity}
            </div>
          </Link>
        </div>
        {isLoggedIn && <UserMenu />}
        {type === "user" && (
          <div>
            <User2Icon />
          </div>
        )}
      </div>
    </header>
  );
}
