import { Menu } from "lucide-react";
import { useState } from "react";

interface BurgerMenuProps {
  links: { label: string; href: string }[];
}

export default function BurgerMenu({ links }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block md:hidden relative">
      <button
        className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 md:hidden"
        onClick={toggleMenu}
      >
        <Menu />
      </button>

      {isOpen && (
        <div className="absolute top-12 bg-white border rounded-md shadow-md md:hidden z-50">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
