/*
// components/Slider.jsx
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg",
      title: "Welcome to SunShine School",
      subtitle: "Inspiring minds. Building futures.",
    },
    {
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1350&q=80",
      title: "Where Learning Comes Alive",
      subtitle: "Modern classrooms and experienced teachers.",
    },
    {
      image: "https://images.unsplash.com/photo-1601333141954-05a81a8375f1?auto=format&fit=crop&w=1350&q=80",
      title: "A Place to Grow and Succeed",
      subtitle: "Nurturing excellence in every student.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg bg-gray-100 shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider; */

// components/Slider.jsx
import React from "react";

const Slider = () => {
  return (
    <div className="w-full h-[500px] overflow-hidden rounded-lg shadow-lg bg-gray-200">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg"
        alt="School Building"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Slider;
