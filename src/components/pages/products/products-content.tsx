import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import ProductGrid from "./products-grid";
import ProductFilters from "./products-filter";
import { type Product } from "../../../types";
import { BASE_API_URL } from "../../../content";

const CATEGORIES = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

export default function ProductsContent() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);

  // Get filters from URL
  const categoryFromUrl = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const ITEMS_PER_PAGE = 30;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // If searching, use the search API endpoint
        if (searchQuery) {
          const response = await fetch(
            `${BASE_API_URL}/products/search?q=${searchQuery}`
          );
          const data = await response.json();
          setProducts(data.products);
          setTotalProducts(data.total);
        } else if (selectedCategory) {
          // Fetch by category if selected
          const response = await fetch(
            `${BASE_API_URL}/products/category/${selectedCategory}`
          );
          const data = await response.json();
          setProducts(data.products);
          setTotalProducts(data.total);
        } else {
          // Fetch all products with pagination
          const skip = (currentPage - 1) * ITEMS_PER_PAGE;
          const response = await fetch(
            `${BASE_API_URL}/products?limit=${ITEMS_PER_PAGE}&skip=${skip}`
          );
          const data = await response.json();
          setProducts(data.products);
          setTotalProducts(data.total);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
        setTotalProducts(0);
      } finally {
        setLoading(false);
        window.scroll(0, 250);
      }
    };

    fetchProducts();
  }, [selectedCategory, currentPage, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Update selected category when URL changes
  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  useEffect(() => {
    let filtered = [...products];

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [products, priceRange]);

  // Handle category change and update URL
  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    navigate(`/products?${params.toString()}`);
    setSelectedCategory(category);
    setSearchQuery("");
  };

  const totalPages =
    selectedCategory || searchQuery
      ? Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
      : Math.ceil(totalProducts / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts =
    selectedCategory || searchQuery
      ? filteredProducts.slice(startIndex, endIndex)
      : filteredProducts;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Products</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <ProductFilters
            categories={CATEGORIES}
            // @ts-expect-error-next-line
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />
        </aside>

        <main className="lg:col-span-3">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground"></div>
            </div>
          ) : (
            <>
              <div className="mb-6 text-muted-foreground">
                Showing {paginatedProducts.length}{" "}
                {selectedCategory || searchQuery
                  ? "products"
                  : `of ${totalProducts} products`}
                {selectedCategory &&
                  ` in "${selectedCategory.replace(/-/g, " ")}"`}
                {searchQuery && ` for "${searchQuery}"`}
              </div>

              <ProductGrid products={paginatedProducts} />

              {totalPages > 1 && (
                <div className="mt-8 flex justify-center items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-colors"
                  >
                    Previous
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const page = i + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            currentPage === page
                              ? "bg-primary text-primary-foreground"
                              : "border border-border hover:bg-accent"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
