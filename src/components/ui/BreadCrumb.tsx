import { Link } from "react-router";

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
    <nav aria-label="breadcrumb" className="md:py-20 py-14 px-4 sm:px-6 lg:px-[135px]">
      <ol className="flex items-center">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center">
              {isLast ? (
                // Current (last) item: styled as bold text, no link
                <span
                  className="md:text-sm text-xs truncate"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                // Intermediate item: styled as a clickable link
                <>
                  <Link
                    to={item.path as string}
                    className="md:text-sm text-xs opacity-50 hover:text-primary transition duration-150 ease-in-out"
                  >
                    {item.label}
                  </Link>

                  {/* Separator icon */}
                  <span
                    className="mx-2 opacity-50 font-normal"
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