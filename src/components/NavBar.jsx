import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "SERVICES", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "CONTACT US", href: "#" },
    { name: "CAREERS", href: "#" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-[#4F46E5] px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="AT Digital Logo" className="h-8 w-auto mr-3" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-inter text-sm font-medium"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-inter text-sm font-medium"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-inter text-sm font-medium"
            >
              CONTACT US
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-inter text-sm font-medium"
            >
              CAREERS
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0  bg-opacity-0"
          onClick={toggleMenu}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200 p-2"
              aria-label="Close menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-2xl font-light">×</span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="px-6 py-4">
            <a
              href="#"
              className="block py-3 text-gray-800 hover:text-indigo-600 transition-colors duration-200 font-inter text-sm font-medium border-b border-gray-100"
              onClick={toggleMenu}
            >
              HOME
            </a>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-800 hover:text-indigo-600 transition-colors duration-200 font-inter text-sm font-medium border-b border-gray-100 last:border-b-0"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
