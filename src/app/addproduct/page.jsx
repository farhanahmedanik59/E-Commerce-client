"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [showToast, setShowToast] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    priority: "medium",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Update image preview when image URL changes
    if (name === "imageUrl") {
      setImagePreview(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.price) {
      alert("Please fill in required fields (Title and Price)");
      return;
    }

    try {
      fetch("http://localhost:5000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: formData.title, shortDescription: formData.shortDescription, fullDescription: formData.fullDescription, imageUrl: formData.imageUrl, price: formData.price }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      // Show success toast
      setShowToast(true);

      // Reset form
      setFormData({
        title: "",
        shortDescription: "",
        fullDescription: "",
        price: "",

        imageUrl: "",
      });
      setImagePreview("");

      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#EFE9E3] py-8">
      {/* Success Toast */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-in slide-in-from-right duration-300">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Product added successfully!</span>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-2xl text-black">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">Add New Product</h1>
          <p className="text-gray-600">Fill in the details below to add a new product</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Enter product title"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Short Description</label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Brief description of the product"
              />
            </div>

            {/* Full Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Description</label>
              <textarea
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Detailed description of the product"
              />
            </div>

            <div className="grid grid-cols-1  gap-4">
              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price *</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* Date */}

              {/* Priority */}
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image Preview</label>
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-w-full max-h-64 object-cover rounded-lg mx-auto"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  {!imagePreview.startsWith("http") && <p className="text-red-500 text-sm text-center mt-2">Please enter a valid image URL</p>}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                Add Product
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    title: "",
                    shortDescription: "",
                    fullDescription: "",
                    price: "",
                    date: new Date().toISOString().split("T")[0],
                    priority: "medium",
                    imageUrl: "",
                  });
                  setImagePreview("");
                }}
                className="px-6 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        {/* Form Tips */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">Tips:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Fields marked with * are required</li>
            <li>• Use high-quality image URLs for better preview</li>
            <li>• Set appropriate priority for product visibility</li>
            <li>• Price should be in USD format</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
