import HeaderDrawer from "../../../ui/Drawer";
import { Link } from "react-router";

export default function PageAsideAside() {
  return (
    <ul className="list-none border-r border-gray-300 py-8 w-56 hidden md:block [&>li]:hover:text-primary">
      <HeaderDrawer title="Woman's Fashion">
        <li>
          <Link to="/products?category=womens-dresses">Dresses</Link>
        </li>
        <li>
          <Link to="/products?category=womens-jewellery">Jewelries</Link>
        </li>
      </HeaderDrawer>
      <HeaderDrawer title="Men's Fashion">
        <li>
          <Link to="/products?category=mens-shirts">Sports</Link>
        </li>
        <li>
          <Link to="/products?category=mens-watches">Luxury</Link>
        </li>
      </HeaderDrawer>
      <li>
        <Link to="/products?category=mobile-accessories">Electronics</Link>
      </li>
      <li>
        <Link to="/products?category=home-decoration">Home & Lifestyle</Link>
      </li>
      <li>
        <Link to="/products?category=sports-accessories">Sports & Outdoor</Link>
      </li>
      <li>
        <Link to="/products?category=groceries">Groceries</Link>
      </li>
      <li>
        <Link to="/products?category=beauty">Beauty</Link>
      </li>
    </ul>
  );
}
