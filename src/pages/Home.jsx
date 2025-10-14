// src/pages/Home.jsx
import React from "react";
import Slider from "../components/Slider";
import Gallery from "./Gallery";
import Facilities from "./Facilities";
import Academics from "./Academics";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white text-gray-800">
      {/* Hero Slider */}
      <section>
        <Slider />
      </section>

      {/* Welcome Section */}
      <section className="py-20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to{" "}
            <span className="text-gray-700">Sunshine School</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            At Sunshine School, we believe in nurturing young minds with quality
            education, discipline, and creativity. Our goal is to build a strong
            foundation for our students’ academic and personal growth in a safe
            and inspiring environment.
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <Facilities />
        </div>
      </section>

      {/* Academics Section */}
      <section className="py-20 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <Academics />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <Gallery />
        </div>
      </section>
    </div>
  );
};

export default Home;
