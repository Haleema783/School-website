// src/pages/About.jsx
import React from "react";

const About = () => {
  const team = [
    {
      name: "Mrs. Sara Malik",
      role: "Principal",
      img: "https://www.matrixhighschool.org/assets/uploads/page_images/principal_photo.webp",
    },
    {
      name: "Mr. Ahmed Khan",
      role: "Vice Principal",
      img: "https://media.istockphoto.com/id/1364388471/photo/multiracial-male-principal-standing-outdoors-on-campus.jpg?s=612x612&w=0&k=20&c=xweBj18Ra0homW2Vvs20N27F2l6t-sOoYaeW5xdL5n0=",
    },
    {
      name: "Ms. Ayesha Raza",
      role: "Head of Science Department",
      img: "https://www.educationalleadershipdegree.com/wp-content/uploads/2023/04/school-principal-jobs.jpg",
    },
    {
      name: "Mr. Bilal Hussain",
      role: "Sports Coordinator",
      img: "https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.charlottemagazine.com/content/uploads/data-import/3420f5a7/0115_BUZZ_SPORTS_CoachPercell14.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 min-h-screen">
      {/* Hero / Intro */}
      <section className="relative bg-[#004E5F] text-white py-24">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600880292089-90e9b6c6b1a7?w=1600&auto=format&fit=crop&q=80')",
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">
            About Sunshine School
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-100">
            Dedicated to excellence in education, shaping bright futures through
            discipline, creativity, and care.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-[#004E5F]">
              About Our School
            </h2>
            <p className="mb-5 text-gray-700 leading-relaxed text-lg">
              Sunshine School is committed to academic excellence, character
              building, and holistic student development. For over a decade, we
              have been nurturing young learners to become confident,
              responsible, and compassionate individuals ready to face the
              world.
            </p>
            <p className="mb-5 text-gray-700 leading-relaxed text-lg">
              Our focus is on providing quality education through experienced
              teachers, modern facilities, and a friendly learning environment.
              We encourage creativity, discipline, and teamwork so each student
              can reach their highest potential.
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-4 text-[#F9634F]">
              What We Offer:
            </h3>
            <ul className="text-gray-700 space-y-3 list-disc ml-6 text-lg">
              <li>Experienced and qualified teaching staff</li>
              <li>Fully equipped science and computer labs</li>
              <li>Sports and extracurricular programs</li>
              <li>Modern library and digital learning tools</li>
              <li>Safe, inclusive, and nurturing environment</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg"
              alt="School Building"
              className="rounded-2xl shadow-2xl max-w-full"
            />
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-12 mb-24 text-center">
          <h2 className="text-3xl font-serif font-bold text-[#004E5F] mb-6">
            Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
            Our mission is to empower every student with knowledge, confidence,
            and moral values. We aim to provide a balanced education that
            develops intellectual, social, and emotional growth — preparing our
            students to be future leaders and lifelong learners.
          </p>
        </div>

        {/* Team */}
        <h2 className="text-3xl font-serif font-bold text-center mb-14 text-[#004E5F]">
          Our Management Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center mb-24">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative mx-auto mb-6 w-36 h-36 rounded-full bg-gray-100 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-[#F9634F]">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <h2 className="text-3xl font-serif font-bold text-center mb-14 text-[#004E5F]">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Qualified Teachers",
              desc: "Our experienced faculty ensures quality learning with care and creativity.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7"
                />
              ),
            },
            {
              title: "Modern Facilities",
              desc: "From labs to smart classrooms, we offer the best learning environment.",
              icon: (
                <>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </>
              ),
            },
            {
              title: "Proven Results",
              desc: "Our students consistently achieve excellent results and secure admissions in top institutions.",
              icon: (
                <>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-[#004E5F]/10 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 text-[#004E5F]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
