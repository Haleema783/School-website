// pages/Admission.jsx
import React from "react";
import { FaClipboardList, FaUserEdit, FaFileAlt, FaCheckCircle } from "react-icons/fa";

const Admissions = () => {
  const steps = [
    {
      icon: FaClipboardList,
      title: "Step 1: Registration",
      description: "Fill out the online registration form with accurate student and parent details.",
    },
    {
      icon: FaUserEdit,
      title: "Step 2: Entrance Assessment",
      description: "Attend the scheduled assessment to evaluate academic readiness.",
    },
    {
      icon: FaFileAlt,
      title: "Step 3: Document Submission",
      description: "Submit required documents including previous school records and birth certificate.",
    },
    {
      icon: FaCheckCircle,
      title: "Step 4: Confirmation",
      description: "Once selected, complete the admission process by paying the fee and confirming enrollment.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen text-gray-800 py-16">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Admission Process
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We welcome new students to join our vibrant learning community. 
            The admission process at <span className="font-semibold">BrightMind Secondary School</span> is simple, transparent, and student-friendly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-2xl p-8 text-center 
                           transition-all duration-500 hover:scale-105 hover:shadow-lg hover:border-gray-500 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gray-200 group-hover:bg-gray-700 transition-all duration-300 shadow-md">
                    <Icon className="text-gray-700 group-hover:text-white text-2xl transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-all duration-300">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Apply Button */}
        <div className="text-center mt-14">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold 
                             hover:bg-gray-700 hover:shadow-md transition-all duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
