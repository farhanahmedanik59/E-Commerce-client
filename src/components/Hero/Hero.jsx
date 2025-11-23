"use client";
import React from "react";
import Link from "next/link";

const Hero = ({
  headline = "Elevate Your Style",
  subtitle = "Discover the latest trends in fashion with exclusive collections and premium quality products",
  primaryCta = { text: "Shop Now", href: "/products" },
  background = {
    type: "image",
    src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlay: false,
  },
  alignment = "center",
  marqueeTexts = ["Free Shipping Worldwide", "30-Day Return Policy", "Secure Payment", "24/7 Customer Support"],
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const renderBackground = () => {
    switch (background.type) {
      case "image":
        return (
          <>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" style={{ backgroundImage: `url(${background.src})` }} />
            {background.overlay && <div className="absolute inset-0 bg-white bg-opacity-60" />}
          </>
        );
      case "video":
        return (
          <>
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src={background.src} type="video/mp4" />
            </video>
            {background.overlay && <div className="absolute inset-0 bg-white bg-opacity-60" />}
          </>
        );
      case "gradient":
      default:
        return <div className={`absolute inset-0 bg-gradient-to-r ${background.gradient || "from-gray-50 to-white"}`} />;
    }
  };

  return (
    <section className="relative rounded-b-lg max-h-[700px] min-h-[500px] flex items-center justify-center overflow-hidden bg-white">
      {/* Background */}
      {renderBackground()}

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gray-300 bg-opacity-30 animate-bounce-slow"
            style={{
              width: `${30 + Math.random() * 80}px`,
              height: `${30 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-4xl mx-auto px-6 flex flex-col ${alignmentClasses[alignment]} gap-6`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight animate-fade-in">{headline}</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 opacity-90 max-w-2xl leading-relaxed animate-fade-in animate-delay-200">{subtitle}</p>
        <div className="animate-fade-in animate-delay-400">
          <Link
            href={primaryCta.href}
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {primaryCta.text}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-10 border-2 border-gray-900 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-900 rounded-full mt-2"></div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        .animate-bounce-slow {
          animation: bounceSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
