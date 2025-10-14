// src/pages/Home.jsx
import React from "react";
import Facilities from "./Facilities";
import Academics from "./Academics";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-[#004E5F] text-white">
        <img
          src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=1600&auto=format&fit=crop&q=80"
          alt="Student in classroom"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 container mx-auto px-6 py-24 text-left">
          <h1 className="text-5xl font-serif font-bold leading-tight mb-5">
            Welcome to <br /> Sunshine School
          </h1>
          <p className="text-lg max-w-2xl mb-6 text-gray-100">
            At <span className="font-semibold text-white">Sunshine School</span>, we
            believe in nurturing young minds with quality education, discipline,
            and creativity — cultivating a warm, inspiring environment for
            lifelong learning.
          </p>
          <a
            href="/admissions"
            className="inline-block bg-[#F9634F] hover:bg-[#e85642] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <Facilities />
        </div>
      </section>

      {/* Academics Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <Academics />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <Gallery />
        </div>
      </section>
    </div>
  );
};

export default Home;
