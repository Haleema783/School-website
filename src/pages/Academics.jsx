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
    <section className="bg-[#FAFAFA] text-gray-800 py-24 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E6E6E6]/40 via-transparent to-[#FAFAFA]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#006D77] mb-4 font-poppins tracking-wide">
            Academic Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-nunito">
            Our academic system is designed to inspire critical thinking,
            creativity, and excellence  nurturing lifelong learners ready for a
            bright future.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-[#E6E6E6] rounded-2xl p-8 text-center 
                           shadow-md hover:shadow-lg hover:shadow-[#006D77]/20 hover:-translate-y-2
                           transition-all duration-500 hover:border-[#FF6B6B]/40"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="p-5 rounded-full bg-gradient-to-tr from-[#006D77] to-[#FF6B6B] 
                               shadow-md group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon className="text-white text-3xl" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#006D77] mb-3 font-poppins group-hover:text-[#FF6B6B] transition-all duration-300">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed font-nunito group-hover:text-gray-700 transition-all duration-300">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Academics;
