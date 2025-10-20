// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSecondRowVisible, setIsSecondRowVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        setIsSecondRowVisible(false);
      } else {
        setIsScrolled(false);
        setIsSecondRowVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSecondRow = () => {
    setIsSecondRowVisible(!isSecondRowVisible);
  };

  const toggleTabletMenu = () => {
    setIsTabletMenuOpen(!isTabletMenuOpen);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchVisible(!isMobileSearchVisible);
  };

  return (
    <nav
      className="shadow-sm sticky top-0 z-50"
      style={{ backgroundColor: "#a1d132" }}
    >
      {/* First Row */}
      <div
        className={` transition-all duration-500 ${
          isSecondRowVisible ? "py-2" : "py-1"
        }`}
        style={{ backgroundColor: "#a1d132" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Toggle */}
            <div className="flex items-center lg:w-2/12 md:w-4/12 w-auto">
              {/* Desktop Toggle - only show on > 991px when scrolled */}
              {!isSecondRowVisible && (
                <button
                  onClick={toggleSecondRow}
                  className="mr-3 p-1 rounded-md text-black cursor-pointer hidden lg:block"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              )}

              {/* Tablet Toggle - show on 768-991px */}
              <button
                onClick={toggleTabletMenu}
                className="mr-3 p-1 rounded-md hover:bg-gray-100 cursor-pointer hidden md:block lg:hidden"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Show close button when second row is visible and scrolled */}
              {isScrolled && isSecondRowVisible && (
                <button
                  onClick={toggleSecondRow}
                  className="mr-3 p-1 rounded-md cursor-pointer hidden lg:block"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}

              {/* Mobile Menu Toggle - show on < 768px */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mr-3 p-1 rounded-md text-black cursor-pointer md:hidden"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Mobile Search Button - show on 360-768px */}
              <button
                onClick={toggleMobileSearch}
                className="mr-3 p-1 rounded-md hover:bg-gray-100 cursor-pointer md:hidden"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Logo - Centered on mobile */}
              <div
                className={`flex items-center transition-all duration-300 ${
                  isSecondRowVisible ? "h-50 w-50" : "h-40 w-40"
                } md:h-40 md:w-40`}
              >
                <img
                  src="/logo.webp"
                  alt="Logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Search Bar - col-6 */}
            <div className="flex-1 mx-4 hidden md:block">
              <div className="flex">
                <select className="border bg-gray-300 text-black border-r-0 px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
                  <option className="text-black">All Categories</option>
                  <option className="text-black">-----</option>
                </select>
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="flex-1 text-black bg-white border-y px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
                <button className="bg-black text-white px-4 py-3 hover:bg-green-700 flex items-center cursor-pointer">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Contact Info - col-2 - hide on tablet, show in second row */}
            <div className="flex items-center space-x-2 flex-shrink-0 hidden lg:flex">
              <div className="text-black text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 3a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V3z"
                  />
                </svg>
              </div>

              <div className="flex flex-col text-left text-black">
                <span className="text-sm font-semibold">+1 234 567 890</span>
                <span className="text-xs">support@example.com</span>
              </div>
            </div>

            {/* Login & Cart - col-2 - hide login on tablet */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <button
                className="text-black p-4 hover:text-green-600 flex items-center justify-end cursor-pointer hidden lg:flex"
                onClick={() => {}}
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <Link href="/auth/login" className="text-sm text-black">Login</Link>
              </button>

              <button className="relative text-black hover:text-green-600 cursor-pointer">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar - show when search button clicked on mobile */}
      {isMobileSearchVisible && (
        <div className="md:hidden bg-white border-t border-b p-4">
          <div className="flex max-w-xs mx-auto">
            <select className="border bg-gray-300 text-black border-r-0 px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 w-1/3">
              <option className="text-black">All</option>
              <option className="text-black">Plants</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 text-black bg-white border-y px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 w-1/2"
            />
            <button className="bg-black text-white px-3 py-2 hover:bg-green-700 flex items-center cursor-pointer w-1/6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Second Row - hide on tablet by default */}
      <div
        className={`transition-all duration-300 hidden lg:block ${
          isSecondRowVisible
            ? "max-h-20 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Navigation Links */}
            <div className="flex space-x-8 w-full">
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-black hover:text-green-600 py-2">
                  Indoor Plants
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-black hover:text-green-600 py-2">
                  Outdoor Plants
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-black hover:text-green-600 py-2">
                  Soil & Stones
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-black hover:text-green-600 py-2">
                  Fertilizer & Pesticides
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-black hover:text-green-600 py-2">
                  Pots & Planters
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-black hover:text-green-600 py-2">
                  Seeds
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-black hover:text-green-600 py-2">
                  Hydroponics
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <Link
                href="#"
                className="text-sm font-medium text-black hover:text-green-600 py-2"
              >
                Garden Services
              </Link>

              <Link
                href="#"
                className="text-sm font-medium text-black hover:text-green-600 py-2"
              >
                Plant Talk
              </Link>
            </div>

            {/* Contact Info in Second Row Center - for tablet layout */}
            <div className="flex items-center space-x-2 flex-shrink-0 hidden md:flex lg:hidden">
              <div className="text-black text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 3a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V3z"
                  />
                </svg>
              </div>

              <div className="flex flex-col text-left text-black">
                <span className="text-sm font-semibold">+1 234 567 890</span>
                <span className="text-xs">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Sidebar Menu - show when toggle clicked on tablet */}
      {isTabletMenuOpen && (
        <div className="fixed inset-0 z-50 md:block lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleTabletMenu}
          ></div>
          
          {/* Sidebar */}
          <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-lg">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button
                  onClick={toggleTabletMenu}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 border-b">
              {/* Contact Info in Sidebar for Tablet */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 3a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V3z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col text-left text-black">
                  <span className="text-sm font-semibold">+1 234 567 890</span>
                  <span className="text-xs">support@example.com</span>
                </div>
              </div>

              {/* Login in Sidebar for Tablet */}
              <button
                className="w-full text-black p-3 hover:bg-gray-100 flex items-center cursor-pointer border rounded"
                onClick={() => {}}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <Link href="/auth/login" className="text-sm text-black">Login</Link>
              </button>
            </div>

            {/* Navigation Links in Sidebar */}
            <div className="p-4 space-y-2">
              <Link href="#" className="block py-2 px-3 text-black hover:bg-gray-100 rounded">
                Indoor Plants
              </Link>
              <Link href="#" className="block py-2 px-3 text-black hover:bg-gray-100 rounded">
                Outdoor Plants
              </Link>
              <Link href="#" className="block py-2 px-3 text-black hover:bg-gray-100 rounded">
                Soil & Stones
              </Link>
              <Link href="#" className="block py-2 px-3 text-black hover:bg-gray-100 rounded">
                Fertilizer & Pesticides
              </Link>
              <Link href="#" className="block py-2 px-3 text-black hover:bg-gray-100 rounded">
                Pots & Planters
              </Link>
              <Link href="#" className="block py-2 px-3 text-black hover:bg-gray-100 rounded">
                Seeds
              </Link>
              <Link href="#" className="block py-2 px-3 text-black hover:bg-gray-100 rounded">
                Hydroponics
              </Link>
              <Link href="#" className="block py-2 px-3 text-black hover:bg-gray-100 rounded">
                Garden Services
              </Link>
              <Link href="#" className="block py-2 px-3 text-black hover:bg-gray-100 rounded">
                Plant Talk
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#"
              className="block px-3 py-2 text-black hover:text-green-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Indoor Plants
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-black hover:text-green-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Outdoor Plants
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-black hover:text-green-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Soil & Stones
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-black hover:text-green-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fertilizer & Pesticides
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-black hover:text-green-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pots & Planters
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-black hover:text-green-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Seeds
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-black hover:text-green-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hydroponics
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-black hover:text-green-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Garden Services
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-black hover:text-green-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Plant Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}