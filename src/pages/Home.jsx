// src/pages/Home.jsx
import React from "react";
import Slider from "../components/Slider";
import Gallery from "./Gallery";
import Facilities from "./Facilities";
import Academics from "./Academics";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Slider */}
      <section className="mb-10">
        <Slider />
      </section>

      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to{" "}
            <span className="text-gray-600">Sunshine School</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Sunshine School, we believe in nurturing young minds
            with quality education, discipline, and creativity. Our goal is to
            build a strong foundation for our students’ academic and personal
            growth in a safe and inspiring environment.
          </p>
        </section>

        {/* Facilities Section */}
        <section className="mb-16">
          <Facilities />
        </section>
<section className="mb-16">
          <Academics />
        </section>

       

        {/* Gallery Section */}
        <section className="mb-16">
          <Gallery />
        </section>

       
      </div>
    </div>
  );
};

export default Home;
