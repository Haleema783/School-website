// pages/Contact.jsx
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.subject.trim()) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Your message has been sent! We’ll get back to you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#FAFAFA] via-[#E6E6E6]/40 to-[#FAFAFA] min-h-screen text-gray-900 py-28">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#006D77] mb-4 font-poppins tracking-wide">
            Get in Touch With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a question about{" "}
            <span className="font-semibold text-[#FF6B6B]">
              admissions or academics
            </span>
            ? We’d love to hear from you. Fill out the form below and we’ll
            respond promptly.
          </p>
        </div>

        {/* Contact Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm border border-transparent rounded-2xl p-10 
                          shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 
                          bg-gradient-to-r from-[#006D77]/5 via-[#FAFAFA] to-[#FF6B6B]/5">
            <h2 className="text-2xl font-semibold text-[#004d4d] mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Input fields */}
              {[
                { id: "name", type: "text", placeholder: "Full Name" },
                { id: "email", type: "email", placeholder: "Email Address" },
                { id: "phone", type: "tel", placeholder: "Phone Number" },
              ].map((field) => (
                <div key={field.id}>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 
                      focus:ring-[#006D77] text-gray-800 transition-all duration-300 shadow-sm hover:shadow-md ${
                        errors[field.id] ? "border-red-500" : "border-gray-300"
                      }`}
                  />
                  {errors[field.id] && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors[field.id]}
                    </p>
                  )}
                </div>
              ))}

              {/* Subject */}
              <div>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 
                    focus:ring-[#006D77] text-gray-800 transition-all duration-300 shadow-sm hover:shadow-md ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                >
                  <option value="">Select a topic</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="academics">Academics</option>
                  <option value="events">School Events</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 
                    focus:ring-[#006D77] text-gray-800 transition-all duration-300 shadow-sm hover:shadow-md ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#006D77] to-[#FF6B6B] text-white py-3 rounded-lg 
                           font-semibold shadow-md hover:shadow-xl transform hover:-translate-y-1 
                           transition-all duration-300 ease-in-out focus:ring-4 focus:ring-[#006D77]/30"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-8">
            {[
              {
                title: "Reach Us",
                content: [
                  "📍 SunShine School, Model Town, Lahore",
                  "📞 +92 300 1234567",
                  "📧 info@sunshineschool.edu.pk",
                ],
              },
              {
                title: "Office Hours",
                content: [
                  "Mon - Fri: 8:00 AM - 2:00 PM",
                  "Saturday: 8:00 AM - 12:00 PM",
                  "Sunday: Closed",
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className="bg-white border border-transparent rounded-2xl p-10 shadow-md hover:shadow-2xl 
                           hover:scale-[1.02] transition-all duration-500 
                           bg-gradient-to-r from-[#006D77]/5 via-[#FAFAFA] to-[#FF6B6B]/5"
              >
                <h3 className="text-xl font-semibold text-[#004d4d] mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
