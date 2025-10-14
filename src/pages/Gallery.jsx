// pages/Gallery.jsx
import React from "react";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://3.imimg.com/data3/BL/QT/MY-2816292/classroom-whiteboard.jpg",
      caption: "Modern Classroom",
      category: "academics",
    },
    {
      id: 2,
      src: "https://www.jks.edu.sa/wp-content/uploads/2023/10/Lab_3-scaled.jpg",
      caption: "Science Laboratory",
      category: "facilities",
    },
    {
      id: 3,
      src: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/2967793/120716_45246.jpeg",
      caption: "Computer Lab",
      category: "technology",
    },
    {
      id: 4,
      src: "https://www.bbns.org/wp-content/uploads/2023/08/IMG_8536.jpg",
      caption: "Library & Reading Hall",
      category: "learning-space",
    },
    {
      id: 5,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEja6XMD4dCYEYNzFYTAQQnkCY_FtaX0FFYv-yStQjcMhds7IcaRula2s4Z-vSpaVcxnUi5Azt8xc_Mhc_1eOREc443HtRZkJglGxn7v1Y1ymgkb9PAs1aJXYeClsWHOR1eyXG9T7dSlHLMe/s1600/classroom2017-01.jpg",
      caption: "Art & Creativity Room",
      category: "arts",
    },
    {
      id: 6,
      src: "https://www.educatemagis.org/wp-content/uploads/2019/02/6-teams-750x508.jpg",
      caption: "Annual Sports Day",
      category: "events",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=60",
      caption: "Music & Performing Arts",
      category: "extracurricular",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800&auto=format&fit=crop&q=60",
      caption: "Student Assembly",
      category: "activities",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen text-gray-800 py-24">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our School Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore{" "}
            <span className="font-semibold text-gray-800">
              SunShine School
            </span>{" "}
             where creativity, curiosity, and learning thrive every day.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-20">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden 
                         shadow-md hover:shadow-2xl transition-all duration-500 
                         hover:scale-105 hover:border-gray-400 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-64 object-cover transform group-hover:scale-110 
                             transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-800/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-5 text-left transform translate-y-4 group-hover:translate-y-0 
                                  transition-transform duration-500">
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {image.caption}
                    </h3>
                    <p className="text-gray-300 text-sm capitalize">
                      {image.category.replace("-", " ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {images.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">📸</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No photos available
            </h3>
            <p className="text-gray-500">We’ll be adding more soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
