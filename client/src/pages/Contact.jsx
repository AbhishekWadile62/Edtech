import React, { useState } from "react";
import { FiMail, FiPhone, FiUser, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen w-[100%] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h2>

        {/* Contact Info */}
        <div className="mb-6 space-y-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <FiMail className="text-red-600 text-2xl" />
            <div>
              <p className="text-lg font-medium text-gray-700">Email Us</p>
              <p className="text-gray-500">support@yourplatform.com</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <FiPhone className="text-red-600 text-2xl" />
            <div>
              <p className="text-lg font-medium text-gray-700">Call Us</p>
              <p className="text-gray-500">+123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FiUser className="absolute left-3 top-4 text-gray-400 text-xl" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="relative">
            <FiMail className="absolute left-3 top-4 text-gray-400 text-xl" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-4 text-gray-400 text-xl" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="4"
              className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-black border-[1px] border-red-600 px-8 py-3 rounded-lg text-lg hover:bg-red-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
