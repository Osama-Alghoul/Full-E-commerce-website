import React from 'react';
/**
 * Renders a breadcrumb navigation trail using Tailwind CSS.
 *
 * @param {object[]} items - An array of breadcrumb items.
 * @param {string} items[].label - The display text for the breadcrumb item.
 * @param {string} [items[].path] - The URL path for the item (optional for the last item).
 */
const Breadcrumbs = ({ items }: { items: { label: string; path?: string }[] }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center">
              {isLast ? (
                // Current (last) item: styled as bold text, no link
                <span
                  className="text-sm font-semibold text-gray-700 truncate"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                // Intermediate item: styled as a clickable link
                <>
                  <a
                    href={item.path}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
                  >
                    {item.label}
                  </a>

                  {/* Separator icon */}
                  <span
                    className="mx-2 text-gray-400 font-normal"
                    aria-hidden="true"
                  >
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;