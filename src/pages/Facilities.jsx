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
  FaShieldAlt
} from "react-icons/fa";

const Facilities = () => {
  const facilities = [
    { 
      title: "Smart Classrooms", 
      description: "Modern digital classrooms equipped with interactive boards and projectors.", 
      icon: FaChalkboardTeacher 
    },
    { 
      title: "Computer Lab", 
      description: "Fully equipped computer lab to enhance digital learning and creativity.", 
      icon: FaLaptop 
    },
    { 
      title: "Science Laboratory", 
      description: "Hands-on experiments in a safe, well-equipped science lab.", 
      icon: FaMicroscope 
    },
    { 
      title: "Library", 
      description: "A quiet, resource-rich library encouraging reading and research habits.", 
      icon: FaBookOpen 
    },
    { 
      title: "Sports & Games", 
      description: "Spacious playground and indoor facilities promoting fitness and teamwork.", 
      icon: FaFootballBall 
    },
    { 
      title: "Art & Craft Studio", 
      description: "Where imagination meets creation — craft, draw, and design.", 
      icon: FaPaintBrush 
    },
    { 
      title: "Free Wi-Fi", 
      description: "High-speed internet access across the campus for students and teachers.", 
      icon: FaWifi 
    },
    { 
      title: "School Transport", 
      description: "Safe and reliable school bus service for students.", 
      icon: FaBus 
    },
    { 
      title: "Campus Safety", 
      description: "24/7 security and CCTV monitoring for a safe learning environment.", 
      icon: FaShieldAlt 
    },
  ];

  return (
    <div className="mt-5">
      <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen text-gray-800">
        <div className="container mx-auto px-6 py-16">
          
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              School Facilities & Amenities
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At BrightMind School, we provide a nurturing environment with modern facilities
              to support learning, creativity, and overall development.
            </p>
          </div>

          {/* Facilities Grid */}
          <section className="mb-20">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-300 rounded-2xl p-8 text-center 
                               transition-all duration-500 hover:scale-105 hover:shadow-lg 
                               hover:border-gray-500 group"
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-gray-200 group-hover:bg-gray-700 transition-all duration-300 shadow-md">
                        <IconComponent className="text-gray-700 group-hover:text-white text-2xl transition-all duration-300" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900">
                      {facility.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-all duration-300">
                      {facility.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
