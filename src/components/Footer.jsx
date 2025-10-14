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

  // Show button when scrolled down
  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleLinkClick = () => window.scrollTo(0, 0);

  return (
    <footer className="bg-[#004E53] text-white py-14 relative font-nunito">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* School Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-[#FF6B6B] font-poppins">
              Sunshine School
            </h3>
            <p className="mb-6 max-w-md text-gray-200 leading-relaxed">
              Dedicated to excellence in education and character building.  
              We nurture young minds with knowledge, creativity, and compassion.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, link: "#" },
                { icon: FaTwitter, link: "#" },
                { icon: FaInstagram, link: "#" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    className="bg-white/10 hover:bg-[#FF6B6B] p-3 rounded-full shadow-md transition-all duration-300 hover:shadow-[#FF6B6B]/50"
                  >
                    <Icon className="text-white text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FF6B6B] font-poppins">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-200">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/academics", label: "Academics" },
                { to: "/admissions", label: "Admissions" },
                { to: "/facilities", label: "Facilities" },
                { to: "/contactus", label: "Contact Us" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    onClick={handleLinkClick}
                    className="hover:text-[#FF6B6B] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FF6B6B] font-poppins">
              Contact Info
            </h4>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#FF6B6B] mt-1" />
                <span>123 School Lane, City Center, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#FF6B6B]" />
                <span>+92 340 5542097</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#FF6B6B]" />
                <span>info@sunshineschool.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sunshine School. All rights reserved.  
            | Designed by <span className="text-[#FF6B6B] font-semibold">Apexium Technologies</span> | +923295425413
          </p>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
