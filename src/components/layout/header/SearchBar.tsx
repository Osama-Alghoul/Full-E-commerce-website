import { Search } from "lucide-react";
import { useEffect, useState, useMemo, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { BASE_API_URL } from "../../../content";
import { type Product } from "../../../types";
import { debounce } from "../../../utils/debounce";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<Product[]>([]);
  const [value, setValue] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // ✅ Fetch products
  const fetchData = async (query: string) => {
    if (!query.trim()) {
      setResult([]);
      return;
    }

    try {
      const response = await fetch(
        `${BASE_API_URL}/products/search?q=${query}&limit=6`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch products");

      const data = await response.json();
      setResult(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  // @ts-expect-error-next-line
  const debouncedFetch = useMemo(() => debounce(fetchData, 500), []);

  useEffect(() => {
    // @ts-expect-error-next-line
    debouncedFetch(value);
  }, [value, debouncedFetch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // ✅ When clicking a product
  const handleSelect = (id: number) => {
    setOpen(false);
    setValue(""); // optional — clears the search box
    navigate(`/products/${id}`);
  };

  return (
    <div
      ref={containerRef}
      className="text-xs w-56 bg-secondary px-3 py-1.5 rounded-sm flex relative"
    >
      <input
        type="search"
        placeholder="What are you looking for?"
        className="flex-1 outline-none bg-transparent"
        onFocus={() => setOpen(true)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Search />
      {open && (
        <div className="absolute bg-white rounded-lg p-2.5 top-10 left-0 z-50 w-full shadow">
          {value.trim() && result.length === 0 ? (
            <span className="font-bold">No match for your query</span>
          ) : (
            <ul>
              {result.map((cat) => (
                <Link to={`/products/${cat.id}`} key={cat.id}>
                  <li
                    className="hover:bg-gray-100 p-1 rounded cursor-pointer"
                    onClick={() => handleSelect(cat.id)}
                  >
                    {cat.title}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
