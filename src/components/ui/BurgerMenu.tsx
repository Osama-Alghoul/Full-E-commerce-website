import { useState } from "react";
import { Link } from "react-router";

interface BurgerMenuProps {
  links: { label: string; href: string }[];
}

export default function BurgerMenu({ links }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block md:hidden relative mt-2.5">
      <button
        className="rounded-md hover:bg-gray-100 md:hidden"
        onClick={toggleMenu}
      >
        <img src="/NavButton.svg" alt="" className="size-7" />
      </button>

      {isOpen && (
        <div className="absolute top-12 bg-white border rounded-md shadow-md md:hidden z-50">
          <ul>
            {links.map((link) => (
              <li key={link.label} onClick={toggleMenu}>
                <Link
                  to={link.href}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
