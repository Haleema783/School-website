// pages/Admission.jsx
import React from "react";
import {
  FaClipboardList,
  FaUserEdit,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Admissions = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate("/contactus"), 400);
  };

  const steps = [
    {
      icon: FaClipboardList,
      title: "Registration",
      description:
        "Fill out the online registration form with accurate student and parent details.",
    },
    {
      icon: FaUserEdit,
      title: "Entrance Assessment",
      description:
        "Attend the scheduled assessment to evaluate academic readiness.",
    },
    {
      icon: FaFileAlt,
      title: "Document Submission",
      description:
        "Submit required documents including previous school records and birth certificate.",
    },
    {
      icon: FaCheckCircle,
      title: "Confirmation",
      description:
        "Once selected, complete the admission process by paying the fee and confirming enrollment.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 py-28">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#006D77] mb-4 font-poppins tracking-wide">
            Admission Process
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Join our vibrant learning community with a simple and transparent
            admission process designed to help every student begin their
            educational journey at{" "}
            <span className="font-semibold text-[#006666]">
              SunShine School
            </span>
            .
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 text-center 
                           transition-all duration-500 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-5 rounded-full bg-gradient-to-tr from-[#006666] to-[#d46b5e] text-white shadow-md">
                    <Icon className="text-3xl" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#004d4d] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Apply Button */}
        <div className="text-center mt-10">
          <button
            onClick={handleApplyClick}
            className="bg-[#004d4d] text-white px-10 py-4 rounded-full text-lg font-semibold 
                       hover:bg-[#006666] shadow-md transition-all duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
