"use client";
import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Free worldwide shipping on orders over $100",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description: "30-day return policy for all items",
    },
    {
      icon: "🛡️",
      title: "Secure Payment",
      description: "Your payment information is safe with us",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      description: "Carefully curated items with quality guarantee",
    },
  ];

  return (
    <section className="py-16 bg-[#EFE9E3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're committed to providing the best shopping experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
