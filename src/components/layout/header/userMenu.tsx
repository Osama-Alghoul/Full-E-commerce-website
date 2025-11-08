import { LogOut, User, UserCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useAuthContext } from "../../../utils/AuthContext";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const { logout } = useAuthContext();
  return (
    <div className="relative hidden md:block">
      <button
        id="user-menu-button"
        className="hover:bg-primary hover:text-white rounded-full p-2.5"
        onClick={() => setOpen(!open)}
      >
        <User />
      </button>
      {open && (
        <ul
          id="user-menu-list"
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
        >
          <li role="none">
            <Link
              to="/account"
              className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <UserCircle2 />
              My Account
            </Link>
          </li>
          <li role="none">
            <button
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex gap-2"
              role="menuitem"
              onClick={logout}
            >
              <LogOut />
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
