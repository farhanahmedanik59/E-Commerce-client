"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";

export default function ProductListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // <-- loader state

  // Fetch Product Data
  useEffect(() => {
    setLoading(true);
    fetch("https://ecommerce-two-puce-79.vercel.app/items")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const categories = ["Men", "Women"];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = product.title.toLowerCase().includes(searchLower) || product.shortDescription.toLowerCase().includes(searchLower) || product.category.toLowerCase().includes(searchLower);

      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, products]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("default");
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#EFE9E3]">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EFE9E3]">
      <header className="bg-[#EFE9E3]">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">ShopHub</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">Discover amazing products at great prices. Quality guaranteed with fast delivery.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-5 py-4 pl-14 pr-12 text-gray-700 bg-white border-2 border-gray-200 rounded-2xl
                  focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute inset-y-0 right-0 flex items-center pr-12 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  selectedCategory === "all" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl scale-105" : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                All Products
              </button>

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    selectedCategory === category ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl scale-105" : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white text-black border-2 border-gray-200 rounded-2xl px-5 py-3 pr-10 
                  focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <option value="default">Sort by: Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name: A to Z</option>
              </select>

              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-gray-600 font-medium">
            Showing <span className="font-bold text-blue-600">{filteredProducts.length}</span> products
            {searchQuery && (
              <>
                {" "}
                for "<span className="font-semibold">{searchQuery}</span>"
              </>
            )}
            {selectedCategory !== "all" && (
              <>
                {" "}
                in <span className="font-semibold text-purple-600">{selectedCategory}</span>
              </>
            )}
          </p>

          {(searchQuery || selectedCategory !== "all" || sortBy !== "default") && (
            <button
              onClick={clearFilters}
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200 font-medium flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg border border-blue-200 whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear All Filters
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProduct(product._id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className={`w-full h-48 object-cover transition-transform duration-700 ${hoveredProduct === product._id ? "scale-110" : "scale-100"}`}
                  />

                  <div
                    className={`absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold transition-all duration-300 ${
                      hoveredProduct === product._id ? "scale-110" : ""
                    } shadow-lg`}
                  >
                    ${product.price}
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">{product.category}</span>
                  </div>

                  {product.rating && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black bg-opacity-50 px-2 py-1 rounded">
                      {renderStars(product.rating)}
                      <span className="text-white text-xs ml-1">({product.reviews})</span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">{product.title}</h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-12 leading-relaxed">{product.shortDescription}</p>

                  <div className="flex gap-2">
                    <Link href={`/products/${product._id}`}>
                      <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                        Show Details
                      </button>
                    </Link>

                    <button className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300 transform hover:scale-105">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-300 text-8xl mb-6">
              <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-600 mb-3">No products found</h3>

            <p className="text-gray-500 max-w-md mx-auto mb-6">
              {searchQuery
                ? `No products match "${searchQuery}". Try different keywords.`
                : selectedCategory !== "all"
                ? `No products found in ${selectedCategory} category.`
                : "No products available at the moment."}
            </p>

            <button
              onClick={clearFilters}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              Browse All Products
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
