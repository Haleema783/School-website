// pages/Contact.jsx
import React, { useState } from "react";
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
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
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <div className="container mx-auto px-6 py-16">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a question about admissions, school activities, or academics?
            Send us a message and we’ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 border border-gray-300 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 ${
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
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 border border-gray-300 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Reach Us
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>📍 SunShine School, Model Town, Lahore</li>
                <li>📞 +92 300 1234567</li>
                <li>📧 info@sunshineschool.edu.pk</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-300 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Office Hours
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Mon - Fri: 8:00 AM - 2:00 PM</li>
                <li>Saturday: 8:00 AM - 12:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
