import { Link } from "react-router";

export default function Aside() {
  return (
    <aside className="pl-4 lg:pl-0">
      <div className="font-medium">Manage My Account</div>
      <ul className="text-gray-400 [&_li:hover]:text-primary pl-2.5">
        <li className="text-primary">
          <Link to={"/account"}>My Profile</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
        <li>
          <Link to={"/wishlist"}>My wishlist</Link>
        </li>
      </ul>
    </aside>
  );
}
