// pages/Admission.jsx
import React from "react";
import { FaClipboardList, FaUserEdit, FaFileAlt, FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Admissions = () => {
  const navigate = useNavigate();

  // Function to handle smooth scroll to top when navigating
  const handleApplyClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate("/contactus");
    }, 500); // delay to let scroll animation feel smooth
  };

  const steps = [
    {
      icon: FaClipboardList,
      title: "Step 1: Registration",
      description:
        "Fill out the online registration form with accurate student and parent details.",
    },
    {
      icon: FaUserEdit,
      title: "Step 2: Entrance Assessment",
      description:
        "Attend the scheduled assessment to evaluate academic readiness.",
    },
    {
      icon: FaFileAlt,
      title: "Step 3: Document Submission",
      description:
        "Submit required documents including previous school records and birth certificate.",
    },
    {
      icon: FaCheckCircle,
      title: "Step 4: Confirmation",
      description:
        "Once selected, complete the admission process by paying the fee and confirming enrollment.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen text-gray-800 py-28">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Admission Process
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We welcome new students to join our vibrant learning community.
            The admission process at{" "}
            <span className="font-semibold text-gray-800">
              BrightMind Secondary School
            </span>{" "}
            is simple, transparent, and student-friendly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-28">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl p-10 text-center 
                           transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                           hover:border-gray-400 group"
              >
                <div className="flex justify-center mb-8">
                  <div
                    className="p-6 rounded-full bg-gray-100 
                               group-hover:bg-gray-800 transition-all duration-300 shadow-md"
                  >
                    <Icon className="text-gray-700 group-hover:text-white text-3xl transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base group-hover:text-gray-700 transition-all duration-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Apply Button */}
        <div className="text-center mt-16">
          <button
            onClick={handleApplyClick}
            className="inline-block bg-gray-800 text-white px-12 py-5 rounded-full text-lg font-semibold 
                       hover:bg-gray-700 hover:shadow-2xl transform hover:-translate-y-1 
                       transition-all duration-500 ease-in-out"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
