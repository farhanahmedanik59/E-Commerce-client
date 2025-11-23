"use client";
import React from "react";
import Link from "next/link";

const PromoBanner = () => {
  return (
    <section className="py-16 bg-[#EFE9E3] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Summer Sale! Up to 50% Off</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">Don't miss out on our biggest sale of the season. Limited time offer on selected items.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/sale" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Shop Sale Now
              </Link>
              <div className="flex items-center gap-4 text-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">07</div>
                  <div className="text-sm opacity-80">Days</div>
                </div>
                <div className="text-2xl">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-sm opacity-80">Hours</div>
                </div>
                <div className="text-2xl">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-sm opacity-80">Mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
