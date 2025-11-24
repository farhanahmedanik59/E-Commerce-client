"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const mockProducts = {
  1: {
    id: 1,
    title: "Classic Leather Jacket",
    category: "Men",
    shortDescription: "Stylish black leather jacket for men.",
    fullDescription:
      "Premium quality leather jacket with a slim fit, perfect for casual or semi-formal wear. Soft inner lining for comfort. Made from genuine leather with attention to detail in every stitch. This jacket features multiple pockets, adjustable cuffs, and a durable zipper closure.",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    dateAdded: "2024-01-15",
    priority: "Featured",
  },
  2: {
    id: 2,
    title: "Elegant Evening Dress",
    category: "Women",
    shortDescription: "Red evening gown with flowing design.",
    fullDescription: "Stunning red evening dress made from satin with a floor-length flowy silhouette. Perfect for parties and formal events. Features elegant draping and a comfortable fit.",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    dateAdded: "2024-01-10",
    priority: "New",
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  console.log(params.id);
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");

  useEffect(() => {
    fetch(`http://localhost:5000/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [params.id]);
  console.log(product);
  const handleAddToCart = () => {
    // alert(`Added ${quantity} ${product.title} to cart!`);
  };

  const handleBuyNow = () => {
    // alert(`Proceeding to checkout with ${quantity} ${product.title}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#EFE9E3] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#EFE9E3] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <button onClick={() => router.back()} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EFE9E3]">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <button onClick={() => router.back()} className="flex border bg-gray-100 rounded-2xl p-1 items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group mb-4">
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Products
        </button>
      </div>

      {/* Product Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Large Image/Banner */}
          <div className="relative h-96 md:h-[500px] bg-gray-200">
            <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
            {product.priority && (
              <div className="absolute top-4 right-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{product.priority}</span>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Product Info */}
              <div>
                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">{product.category}</span>
                </div>

                {/* Product Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>

                {/* Meta Info */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-green-600">${product.price}</span>
                    </div>
                    {product.dateAdded && <span className="text-sm text-gray-500">Added: {new Date(product.dateAdded).toLocaleDateString()}</span>}
                  </div>

                  {/* Priority Badge */}
                  {product.priority && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600">Status:</span>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">{product.priority}</span>
                    </div>
                  )}
                </div>

                {/* Short Description */}
                <div className="mb-4">
                  <p className="text-lg text-gray-600 font-medium">{product.shortDescription}</p>
                </div>

                {/* Full Description */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Product Details</h2>
                  <p className="text-gray-600 leading-relaxed">{product.fullDescription}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Premium Quality Material
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Comfortable Fit
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Durable Construction
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Easy Maintenance
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Actions */}
              <div className="lg:pl-8">
                {/* Add to Cart Section */}
                <div className="sticky top-6 p-6 border border-gray-200 rounded-lg bg-white shadow-lg">
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-gray-800">${product.price}</span>
                  </div>

                  {/* Size Selection */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                    <div className="flex flex-wrap gap-2">
                      {["S", "M", "L", "XL"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 border rounded-lg transition-colors ${
                            selectedSize === size ? "border-blue-500 text-blue-600 bg-blue-50" : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                    <div className="flex flex-wrap gap-2">
                      {["Black", "Brown", "Navy"].map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 py-2 border rounded-lg transition-colors ${
                            selectedColor === color ? "border-blue-500 text-blue-600 bg-blue-50" : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <div className="flex items-center border border-gray-300 rounded-lg w-32">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                        -
                      </button>
                      <span className="px-4 py-2 text-gray-800 font-medium flex-1 text-center">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                        +
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={handleBuyNow}
                      className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                    >
                      Buy Now
                    </button>

                    <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                      Add to Wishlist
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>In stock - Ready to ship</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free shipping on orders over $50</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>30-day money-back guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Sections */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Free Shipping</h3>
                <p className="text-sm text-gray-600">Free delivery worldwide</p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Easy Returns</h3>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Support</h3>
                <p className="text-sm text-gray-600">24/7 customer support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
