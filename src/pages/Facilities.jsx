// pages/Facilities.jsx
import React from "react";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaLaptop,
  FaMicroscope,
  FaFootballBall,
  FaPaintBrush,
  FaWifi,
  FaBus,
  FaShieldAlt,
} from "react-icons/fa";

const Facilities = () => {
  const facilities = [
    {
      title: "Smart Classrooms",
      description:
        "Modern digital classrooms equipped with interactive boards and projectors.",
      icon: FaChalkboardTeacher,
    },
    {
      title: "Computer Lab",
      description:
        "Fully equipped computer lab to enhance digital learning and creativity.",
      icon: FaLaptop,
    },
    {
      title: "Science Laboratory",
      description:
        "Hands-on experiments in a safe, well-equipped science lab.",
      icon: FaMicroscope,
    },
    {
      title: "Library",
      description:
        "A quiet, resource-rich library encouraging reading and research habits.",
      icon: FaBookOpen,
    },
    {
      title: "Sports & Games",
      description:
        "Spacious playground and indoor facilities promoting fitness and teamwork.",
      icon: FaFootballBall,
    },
    {
      title: "Art & Craft Studio",
      description:
        "Where imagination meets creation — craft, draw, and design.",
      icon: FaPaintBrush,
    },
    {
      title: "Free Wi-Fi",
      description:
        "High-speed internet access across the campus for students and teachers.",
      icon: FaWifi,
    },
    {
      title: "School Transport",
      description: "Safe and reliable school bus service for students.",
      icon: FaBus,
    },
    {
      title: "Campus Safety",
      description:
        "24/7 security and CCTV monitoring for a safe learning environment.",
      icon: FaShieldAlt,
    },
  ];

  return (
    <section className="bg-[#FAFAFA] text-gray-800 py-24 relative overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E6E6E6]/30 via-transparent to-[#FAFAFA]"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#006D77] mb-4 font-poppins tracking-wide">
            School Facilities & Amenities
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-nunito">
            At{" "}
            <span className="font-semibold text-[#006D77]">SunShine School</span>, 
            we provide a nurturing environment with modern facilities that
            support learning, creativity, and overall development.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-[#E6E6E6] rounded-2xl p-6 sm:p-8 text-center 
                           shadow-md hover:shadow-lg hover:shadow-[#006D77]/20 hover:-translate-y-2
                           transition-all duration-500 hover:border-[#FF6B6B]/40"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="p-4 sm:p-5 rounded-full bg-gradient-to-tr from-[#006D77] to-[#FF6B6B] text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-2xl sm:text-3xl" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-[#006D77] mb-2 sm:mb-3 font-poppins group-hover:text-[#FF6B6B] transition-all duration-300">
                  {facility.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-nunito group-hover:text-gray-700 transition-all duration-300">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
