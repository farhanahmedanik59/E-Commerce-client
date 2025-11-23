"use client";
import React from "react";
import Link from "next/link";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Wool Coat",
      price: "$299",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      category: "Outerwear",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Designer Handbag",
      price: "$189",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Accessories",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Silk Evening Dress",
      price: "$249",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Dresses",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Leather Boots",
      price: "$179",
      image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Footwear",
      rating: 4.6,
    },
  ];

  return (
    <section className="py-16 bg-[#EFE9E3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover our carefully curated collection of premium fashion items</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-900">{product.category}</div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">{product.name}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-4">{product.price}</p>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
