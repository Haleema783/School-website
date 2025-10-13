// pages/About.jsx
import React from "react";

const About = () => {
  const team = [
    {
      name: "Mrs. Sara Malik",
      role: "Principal",
      img: "https://www.matrixhighschool.org/assets/uploads/page_images/principal_photo.webp"
    },
    {
      name: "Mr. Ahmed Khan",
      role: "Vice Principal",
      img: "https://media.istockphoto.com/id/1364388471/photo/multiracial-male-principal-standing-outdoors-on-campus.jpg?s=612x612&w=0&k=20&c=xweBj18Ra0homW2Vvs20N27F2l6t-sOoYaeW5xdL5n0="
    },
    {
      name: "Ms. Ayesha Raza",
      role: "Head of Science Department",
      img: "https://www.educationalleadershipdegree.com/wp-content/uploads/2023/04/school-principal-jobs.jpg"
    },
    {
      name: "Mr. Bilal Hussain",
      role: "Sports Coordinator",
      img: "https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.charlottemagazine.com/content/uploads/data-import/3420f5a7/0115_BUZZ_SPORTS_CoachPercell14.jpg"
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 border-l-4 border-gray-500 pl-3">
              About Our School
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Sunshine School is committed to academic excellence,
              character building, and holistic student development. For over a
              decade, we have been nurturing young learners to become confident,
              responsible, and compassionate individuals ready to face the world.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Our focus is on providing quality education through experienced
              teachers, modern facilities, and a friendly learning environment.
              We encourage creativity, discipline, and teamwork so that each
              student can achieve their highest potential.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-2">What We Offer:</h3>
            <ul className="text-gray-700 space-y-2 list-disc ml-6">
              <li>Experienced and qualified teaching staff</li>
              <li>Fully equipped science and computer labs</li>
              <li>Sports and extracurricular programs</li>
              <li>Modern library and digital learning tools</li>
              <li>Safe, inclusive, and nurturing environment</li>
            </ul>
          </div>

          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg"
              alt="School Building"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-md p-10 mb-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Our mission is to empower every student with knowledge, confidence,
            and moral values. We aim to provide a balanced education that
            develops intellectual, social, and emotional growth — preparing our
            students to be future leaders and lifelong learners.
          </p>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Management Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative mx-auto mb-4 w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Qualified Teachers
              </h3>
              <p className="text-gray-600">
                Our experienced faculty ensures quality learning with care and
                creativity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
                  <path d="M3 9h18M9 21V9" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Modern Facilities
              </h3>
              <p className="text-gray-600">
                From labs to smart classrooms, we offer the best learning
                environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <path d="M12 6v6l4 2" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Our students consistently achieve excellent results and
                admissions in top institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
