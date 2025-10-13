// components/Footer.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleLinkClick = () => window.scrollTo(0, 0);

  return (
    <footer className="bg-gray-100 text-gray-700 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Sunshine School
            </h3>
            <p className="mb-6 max-w-md text-gray-600">
              Dedicated to excellence in education and character building.  
              We nurture young minds with knowledge, creativity, and compassion.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white hover:bg-gray-200 p-3 rounded-full shadow transition"
              >
                <FaFacebookF className="text-gray-700" />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-gray-200 p-3 rounded-full shadow transition"
              >
                <FaTwitter className="text-gray-700" />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-gray-200 p-3 rounded-full shadow transition"
              >
                <FaInstagram className="text-gray-700" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="hover:text-gray-900 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="hover:text-gray-900 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  onClick={handleLinkClick}
                  className="hover:text-gray-900 transition"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  onClick={handleLinkClick}
                  className="hover:text-gray-900 transition"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities"
                  onClick={handleLinkClick}
                  className="hover:text-gray-900 transition"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  onClick={handleLinkClick}
                  className="hover:text-gray-900 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Contact Info
            </h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gray-700 mt-1" />
                <span>123 School Lane, City Center, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-gray-700" />
                <span>+92 340 5542097</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gray-700" />
                <span>info@sunshineschool.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()}  All
            rights reserved. | Designed by Apexium Technologies | 923295425413
          </p>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
