"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data } = useSession();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const links = (
    <>
      <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 underline py-2 rounded-md text-sm font-medium transition duration-300">
        Home
      </Link>
      <Link href="/products" className="text-gray-700 hover:text-blue-600 px-3 py-2 underline rounded-md text-sm font-medium transition duration-300">
        Products
      </Link>
      <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
        About Us
      </Link>
    </>
  );

  return (
    <nav className="bg-[#EFE9E3]  shadow-lg sticky top-0 z-50">
      <div className=" mx-13 px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">Shop</span>
              <span className="text-2xl font-bold text-blue-600">Hub</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">{links}</div>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {data?.user ? (
              <div className="relative">
                <button onClick={toggleDropdown} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  {data.user.name || data.user.email}
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50">
                    <Link href="/addproduct" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                      Add Product
                    </Link>
                    <Link href="/manageproducts" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                      Manage Products
                    </Link>
                    <button onClick={() => signOut()} className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                  Login
                </Link>
                <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">{links}</div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              {data?.user ? (
                <div className="space-y-1">
                  <p className="px-4 py-2 text-sm text-gray-700">{data.user.name || data.user.email}</p>
                  <Link href="/add-product" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                    Add Product
                  </Link>
                  <Link href="/manage-products" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                    Manage Products
                  </Link>
                  <button onClick={() => signOut()} className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col px-5 space-y-2">
                  <Link href="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                    Login
                  </Link>
                  <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium">
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
