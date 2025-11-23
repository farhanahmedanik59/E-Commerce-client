// components/Footer.jsx
"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "Best Sellers", href: "/best-sellers" },
      { name: "Sale", href: "/sale" },
      { name: "Collections", href: "/collections" },
    ],
    help: [
      { name: "Contact Us", href: "/contact" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns & Exchanges", href: "/returns" },
      { name: "Size Guide", href: "/size-guide" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  const socialIcons = [
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      href: "https://twitter.com",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.273 14.856 3.784 13.705 3.784 12.41s.489-2.447 1.342-3.322c.875-.808 2.026-1.297 3.323-1.297s2.448.489 3.323 1.297c.853.875 1.342 2.026 1.342 3.322s-.489 2.446-1.342 3.321c-.875.808-2.026 1.297-3.323 1.297zm8.062-1.438c-.098 0-.196-.033-.294-.033-.098 0-.196.033-.294.033-.49 0-.98-.196-1.342-.49-.392-.294-.653-.686-.784-1.176-.098-.49-.098-.98.098-1.44.196-.49.49-.882.882-1.145.392-.294.882-.49 1.44-.49.098 0 .196.033.294.033.098 0 .196-.033.294-.033.49 0 .98.196 1.342.49.392.294.653.686.784 1.176.098.49.098.98-.098 1.44-.196.49-.49.882-.882 1.145-.392.294-.882.49-1.44.49zm1.342-7.82h-1.44c-.392 0-.784.294-.784.686v1.44c0 .392.294.784.784.784h1.44c.392 0 .784-.392.784-.784V8.416c0-.392-.392-.686-.784-.686z" />
        </svg>
      ),
      href: "https://instagram.com",
    },
    {
      name: "Pinterest",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM13.477 15.211c-.98 5.171-2.155 10.127-5.832 12.724-1.112-7.88 1.626-13.794 2.901-20.067 0 0-2.155 2.611-2.777 6.396-.392 2.611-1.144 7.682-1.144 7.682s-2.581-1.536-2.581-5.832c0-5.44 3.169-9.297 7.096-9.297 3.394 0 5.244 2.319 5.244 5.44 0 3.593-2.155 6.235-4.907 6.235-1.536 0-2.679-1.244-2.319-2.777.392-1.73 1.144-3.593 1.144-4.907 0-2.971-4.057-2.483-4.057 1.244 0 .784.098 1.63.392 2.319-1.536 6.718-1.798 8.057-1.798 11.422 0 .98.098 1.96.196 2.901-1.73-.392-3.394-1.112-4.907-2.155 0 0-.196-7.388.98-15.211 2.155-4.125 6.235-6.954 10.909-7.292 4.674-.338 9.153 1.536 11.775 5.244 2.581 3.709 2.901 8.645 1.73 12.724-1.172 4.079-4.125 7.292-8.057 8.645-3.931 1.353-8.645.98-12.724-.98z" />
        </svg>
      ),
      href: "https://pinterest.com",
    },
  ];

  return (
    <footer className="bg-[#EFE9E3] border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              FashionStore
            </Link>
            <p className="mt-4 text-gray-600 max-w-md leading-relaxed">Discover curated fashion collections that combine style, comfort, and quality. Your perfect look is just a click away.</p>
            <div className="mt-6 flex space-x-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:pl-2 transform hover:translate-x-1 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:pl-2 transform hover:translate-x-1 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:pl-2 transform hover:translate-x-1 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">Get the latest trends and exclusive offers</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
              />
              <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 bg-[#E8E0D8]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">© {currentYear} FashionStore. All rights reserved.</div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span>Accepted Payments:</span>
              <div className="flex space-x-2">
                <span className="bg-white px-2 py-1 rounded text-xs">💳 Visa</span>
                <span className="bg-white px-2 py-1 rounded text-xs">📱 Apple Pay</span>
                <span className="bg-white px-2 py-1 rounded text-xs">👛 PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
