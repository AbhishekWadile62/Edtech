import React from "react";
import { FaChalkboardTeacher, FaUsers, FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const AboutUs = () => {
  return (
    <div className="w-full h-screen bg-gray-100 text-gray-800 flex flex-col items-center py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#29b6f6] mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Empowering learners worldwide with the best resources, tools, and mentorship.
        </p>
      </div>

      {/* Our Mission and Vision */}
      <section className="w-full px-4 md:px-16 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-[#29b6f6]">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Our mission is to make education accessible to everyone, everywhere. We aim to create a platform
              that empowers students with the tools, knowledge, and support to succeed in their academic and
              professional journey.
            </p>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-[#29b6f6]">Our Vision</h2>
            <p className="text-lg text-gray-600">
              We envision a world where learning is continuous, interactive, and fun. Our goal is to bring quality
              education to the global stage, helping students break barriers and unlock their potential.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full px-4 md:px-16 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#29b6f6]">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaChalkboardTeacher className="text-4xl text-[#29b6f6] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from the best! Our instructors are experienced professionals who are passionate about teaching.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaUsers className="text-4xl text-[#29b6f6] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Community</h3>
            <p className="text-gray-600">
              Join a community of learners from around the world, interact, share ideas, and grow together.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaTrophy className="text-4xl text-[#29b6f6] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Achieve Excellence</h3>
            <p className="text-gray-600">
              Our platform is designed to help you reach your full potential. Whether you’re a beginner or an expert,
              we have the tools to help you excel.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full bg-[#29b6f6] text-white py-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-4">Our Story</h2>
        <p className="text-lg max-w-2xl mx-auto text-center">
          Our platform was born out of a simple idea: to make education more accessible and enjoyable. What started
          as a small project by passionate educators and tech enthusiasts has now evolved into a powerful tool for
          students worldwide. Our commitment to providing high-quality, interactive, and personalized education has
          made us one of the leading edtech platforms in the industry.
        </p>
      </section>

      {/* Meet Our Team */}
      <section className="w-full px-4 md:px-16 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#29b6f6]">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Aryan Hanotia</h3>
            <p className="text-gray-600">Research And Development</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Nivedita Sakhare</h3>
            <p className="text-gray-600">Full Stack Developer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mrunali Bhosale</h3>
            <p className="text-gray-600">Lead Instructor</p>
          </div>
          
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-gray-100 text-center py-12">
        <h2 className="text-3xl font-bold text-[#29b6f6] mb-4">Join Us Today!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Ready to take your learning to the next level? Join our platform and start your journey today!
        </p>
        {/* Get Started Button, Link to Landing Page */}
        <Link to="/home" className="bg-[#29b6f6] text-white hover:text-black py-3 px-8 rounded-lg text-lg">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
