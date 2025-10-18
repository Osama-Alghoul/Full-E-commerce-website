import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DrawerProps {
  title: string;
  children: React.ReactNode;
}

const HeaderDrawer: React.FC<DrawerProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-lg mx-auto ">
      <div
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={toggleDrawer}
        aria-expanded={isOpen}
      >
        <div>{title}</div>
        
        <button
          className="p-1 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          aria-label={isOpen ? 'Close drawer' : 'Open drawer'}
          onClick={(e) => {
            e.stopPropagation(); 
            toggleDrawer();
          }}
        >
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 p-2' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
        id={`drawer-content-${title.replace(/\s/g, '-')}`}
      >
        <div className='[&>li]:hover:text-primary'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeaderDrawer;