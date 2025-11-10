interface ProductFiltersProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  priceRange: [number, number]
  onPriceChange: (range: [number, number]) => void
}

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  priceRange,
  onPriceChange,
}: ProductFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label htmlFor="search" className="block text-sm font-medium mb-2 text-foreground">
          Search Products
        </label>
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name..."
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-foreground">Categories</h3>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          <button
            onClick={() => onCategoryChange("")}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              selectedCategory === "" ? "bg-primary text-primary-foreground" : "hover:bg-accent text-foreground"
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors capitalize ${
                selectedCategory === category ? "bg-primary text-primary-foreground" : "hover:bg-accent text-foreground"
              }`}
            >
              {category.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-foreground">Price Range</h3>
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => onPriceChange([Number(e.target.value), priceRange[1]])}
              placeholder="Min"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
              placeholder="Max"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="text-sm text-muted-foreground">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>
      </div>
    </div>
  )
}
