// components/Navbar.jsx
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/academics", label: "Academics" },
    { to: "/admissions", label: "Admissions" },
    { to: "/facilities", label: "Facilities" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contactus", label: "Contact Us" },
  ];

  return (
    <nav className="bg-[#006D77] text-white fixed top-0 w-full z-50 shadow-md border-b border-[#E6E6E6]/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={scrollToTop}
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small_2x/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg"
              alt="School Logo"
              className="h-10 w-10 object-cover rounded-full border-2 border-white/40 shadow-sm"
            />
            <span className="text-2xl font-semibold font-poppins tracking-wide text-white hover:text-[#FF6B6B] transition-colors duration-300">
              SunShine School
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.to}
                onClick={scrollToTop}
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-2 rounded-full text-sm font-medium bg-[#FF6B6B] text-white shadow-md transition-all"
                    : "px-4 py-2 rounded-full text-sm font-medium text-white/90 hover:text-white hover:bg-[#FF6B6B]/20 hover:shadow-md transition-all duration-300"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/90 hover:text-white focus:outline-none p-2 rounded-md hover:bg-[#FF6B6B]/20 transition-all"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#005B63] rounded-lg mt-2 shadow-lg animate-slide-down">
            <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
              {navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.to}
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                  className={({ isActive }) =>
                    isActive
                      ? "px-4 py-2 rounded-md text-base font-medium bg-[#FF6B6B] text-white shadow"
                      : "px-4 py-2 rounded-md text-base font-medium text-white/90 hover:text-white hover:bg-[#FF6B6B]/30 transition-all duration-300"
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Animation for dropdown */}
      <style>
        {`
          @keyframes slide-down {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-down {
            animation: slide-down 0.3s ease-out;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
