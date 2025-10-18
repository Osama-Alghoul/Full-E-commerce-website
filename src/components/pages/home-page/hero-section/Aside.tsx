import HeaderDrawer from "../../../ui/Drawer";
import { Link } from "react-router";

export default function PageAsideAside() {
  return (
    <ul className="list-none border-r border-gray-300 py-8 w-56 hidden md:block [&>li]:hover:text-primary">
      <HeaderDrawer title="Woman's Fashion">
        <li>
          <Link to="#">Accessories</Link>
        </li>
        <li>
          <Link to="#">Jewelries</Link>
        </li>
      </HeaderDrawer>
      <HeaderDrawer title="Men's Fashion">
        <li>
          <Link to="#">Sports</Link>
        </li>
        <li>
          <Link to="#">Luxury</Link>
        </li>
      </HeaderDrawer>
      <li>
        <Link to="#">Electronics</Link>
      </li>
      <li>
        <Link to="#">Home & Lifestyle</Link>
      </li>
      <li>
        <Link to="#">Medicine</Link>
      </li>
      <li>
        <Link to="#">Sports & Outdoor</Link>
      </li>
      <li>
        <Link to="#">Baby's & Toys</Link>
      </li>
      <li>
        <Link to="#">Groceries & Pets</Link>
      </li>
      <li>
        <Link to="#">Health & Beauty</Link>
      </li>
    </ul>
  );
}
