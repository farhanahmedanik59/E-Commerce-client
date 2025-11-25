"use client";

import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Fashion Influencer",
      content: "The quality and style of clothing here is unmatched! I've never received so many compliments.",
      rating: 5,
    },
    {
      id: 2,
      name: "James Rodriguez",
      role: "Professional Stylist",
      content: "As a stylist, I'm constantly searching for unique pieces. This store consistently delivers exceptional quality.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Luxury Brand Manager",
      content: "The attention to detail in every piece is extraordinary. I appreciate the ethical manufacturing.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "4.9/5", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-[#EFE9E3] py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from our fashion community</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20 px-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl font-bold text-pink-600 mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials Carousel */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
          {/* Rating Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-yellow-400">
                ★
              </span>
            ))}
          </div>

          {/* Testimonial Content */}
          <div className="text-center mb-8">
            <p className="text-2xl italic text-gray-700 mb-8 leading-relaxed">"{testimonials[activeIndex].content}"</p>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">{testimonials[activeIndex].name}</h3>
              <p className="text-pink-600">{testimonials[activeIndex].role}</p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-pink-600 scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 flex justify-between">
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              ←
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Additional Testimonials Grid */}
      <div className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">More Happy Customers</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-pink-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20 bg-pink-600 text-white py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Share Your Story?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of satisfied customers and transform your style</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">Shop Collection</button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors duration-300">Write a Review</button>
          </div>
        </div>
      </div>
    </div>
  );
}
