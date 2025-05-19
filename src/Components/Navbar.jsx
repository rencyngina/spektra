import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white w-full flex items-center justify-center px-6 md:px-12 sticky top-0 z-12 shadow-md">
      <div className="flex items-center justify-center gap-8 flex-grow">

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-orange text-lg font-serif transition-transform active:scale-90 hover:scale-110">
            Home
          </Link>
          <Link
            href="/about"
            className="text-orange text-lg font-serif transition-transform active:scale-90 hover:scale-110"
          >
            About
          </Link>
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-orange text-lg font-serif transition-transform active:scale-90 hover:scale-110 inline-flex items-center">
              Services
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute z-10 bg-orange divide-y divide-gray-100 shadow-sm w-44">
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                  <li>
                    <Link
                      href="/software"
                      className="block px-4 py-2 text-orange hover:text-white"
                    >
                      Software Developing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cyber"
                      className="block px-4 py-2 text-orange hover:text-white"
                    >
                      Cyber Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/digital"
                      className="block px-4 py-2 text-orange hover:text-white"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/training"
                      className="block px-4 py-2 text-orange hover:text-white"
                    >
                      Training
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

         

        {/* Logo (Center) */}
        <Link href="/">
          <Image
            src="/images/canlogo2.jpg"
            width={60}
            height={50}
          />
        </Link>

         <Link
            href="/testimonials"
            className="text-orange text-lg font-serif transition-transform active:scale-90 hover:scale-110"
          >
            Testimonials
          </Link>
        </div>

        {/* Contact Us Button (Right) */}
        <div className="flex items-center space-x-4">
          <Link
            href="/testimonials"
            className="text-orange text-lg font-serif transition-transform active:scale-90 hover:scale-110"
          >
            Projects
          </Link>

          <Link
            href="/contact-us"
            className="text-orange text-lg font-serif transition-transform active:scale-90 hover:scale-110"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          <Link href="/products" className="text-gray-800 hover:text-gray-600">
            Products
          </Link>
          <Link href="/services" className="text-gray-800 hover:text-gray-600">
            Services
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">
            About
          </Link>
          <Link href="/projects" className="text-gray-800 hover:text-gray-600">
            Projects
          </Link>
          <Link href="/testimonials" className="text-gray-800 hover:text-gray-600">
            Testimonials
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;