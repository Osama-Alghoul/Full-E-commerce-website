import { ChevronRight } from "lucide-react";

export default function PageAsideAside() {
  return (
    <ul className="list-none border-r border-gray-300 py-8 w-56 hidden md:block">
      <li className="hover:text-primary flex justify-between items-center">
        <a href="#">Woman's Fashion</a>
        <button><ChevronRight /></button>
      </li>
      <li className="hover:text-primary flex justify-between items-center">
        <a href="#">Men's Fashion</a>
        <button><ChevronRight /></button>
      </li>
      <li className="hover:text-primary">
        <a href="#">Electronics</a>
      </li>
      <li className="hover:text-primary">
        <a href="#">Home & Lifestyle</a>
      </li>
      <li className="hover:text-primary">
        <a href="#">Medicine</a>
      </li>
      <li className="hover:text-primary">
        <a href="#">Sports & Outdoor</a>
      </li>
      <li className="hover:text-primary">
        <a href="#">Baby's & Toys</a>
      </li>
      <li className="hover:text-primary">
        <a href="#">Groceries & Pets</a>
      </li>
      <li className="hover:text-primary">
        <a href="#">Health & Beauty</a>
      </li>
    </ul>
  );
}
