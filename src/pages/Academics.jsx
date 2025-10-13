// pages/Academics.jsx
import React from "react";
import {
  FaBook,
  FaUserGraduate,
  FaLaptopCode,
  FaFlask,
  FaGlobe,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Academics = () => {
  const programs = [
    {
      title: "Primary Education",
      description:
        "A strong foundation in literacy, numeracy, and creativity — helping students build curiosity and confidence from an early age.",
      icon: FaBook,
    },
    {
      title: "Middle School",
      description:
        "Interactive learning with a focus on science, mathematics, and language development through projects and teamwork.",
      icon: FaFlask,
    },
    {
      title: "High School",
      description:
        "Comprehensive subject options, exam preparation, and career guidance to prepare students for future success.",
      icon: FaUserGraduate,
    },
    {
      title: "STEM & Robotics",
      description:
        "Hands-on learning through coding, robotics, and practical experiments that foster innovation and problem-solving.",
      icon: FaLaptopCode,
    },
    {
      title: "Global Studies",
      description:
        "Encouraging cultural awareness and global citizenship through international subjects and exchange programs.",
      icon: FaGlobe,
    },
    {
      title: "Teacher-Led Learning",
      description:
        "Highly qualified faculty guiding students with personalized attention and modern teaching methodologies.",
      icon: FaChalkboardTeacher,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white text-gray-800 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Academic Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our academic system is designed to inspire critical thinking,
            creativity, and excellence — nurturing lifelong learners ready for a
            bright future.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-2xl p-8 text-center shadow-md 
                           hover:shadow-xl hover:border-gray-400 transition-all duration-500 hover:scale-105"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full shadow-md">
                    <Icon className="text-white text-2xl" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Academics;
