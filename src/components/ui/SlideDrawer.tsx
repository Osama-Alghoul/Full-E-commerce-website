import { type FC, useState, type ReactNode } from "react";
import { X } from "lucide-react";

interface DrawerProps {
  title: string;
  children: ((close: () => void) => ReactNode) | ReactNode;
}

const SlideInDrawer: FC<DrawerProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeDrawer = () => setIsOpen(false); 

  const drawerClasses = `
    fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-2xl p-6
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `;

  const backdropClasses = `
    fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300
    ${
      isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }
  `;

  // Render children, passing the close function if it's a function
  const renderChildren =
    typeof children === "function" ? children(closeDrawer) : children;

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="font-medium py-2 block md:hidden">
        <img src="/NavButton.svg" alt="Nav" />
      </button>

      <div
        className={backdropClasses}
        onClick={closeDrawer} // Use closeDrawer here
        aria-hidden={!isOpen}
      ></div>

      <aside
        className={drawerClasses}
        aria-modal="true"
        role="dialog"
        aria-label={title}
      >
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <button
            onClick={closeDrawer} // Use closeDrawer here
            className="text-gray-500 hover:text-gray-800"
            aria-label="Close drawer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Render the children, which might include the close function */}
        <div className="space-y-4">{renderChildren}</div>
      </aside>
    </>
  );
};

export default SlideInDrawer;