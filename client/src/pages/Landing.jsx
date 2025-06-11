import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-screen h-[100vh] bg-[url('/img/wel2.jpg')] bg-cover text-white flex flex-col items-center overflow-y-auto">
      {/* Navbar */}
      <nav className="w-full bg-[#bbdefb] py-4 px-6 flex justify-between items-center fixed top-0 z-20 shadow-md">
        <h1 className="text-2xl font-bold text-white">EdTech</h1>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mt-[30vh] px-4">
        <h1 className="text-5xl font-bold">Welcome to EdTech</h1>
        <p className="mt-4 text-lg">Empowering education through technology!</p>
      </div>

      {/* Motivational Quotes */}
      <div className="mt-10 text-center max-w-3xl">
        <blockquote className="italic text-lg">
          "Education is the most powerful weapon which you can use to change the world."
          <br /> - Nelson Mandela
        </blockquote>
        <blockquote className="italic text-lg mt-4">
          "Learning never exhausts the mind." <br /> - Leonardo da Vinci
        </blockquote>
      </div>

      {/* About Section */}
      <div className="mt-16 px-8 text-center max-w-4xl">
        <h2 className="text-3xl font-bold">Why Choose EdTech?</h2>
        <p className="mt-4 text-lg">
          EdTech provides a world-class learning experience with interactive courses, expert instructors, and 
          a seamless platform designed to help students excel in their careers.
        </p>
      </div>

      {/* Contact Us Section */}
      <div className="mt-[30vh] w-full bg-black py-10 px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Contact Us</h2>
        <p className="mt-2 text-lg">Have questions? Feel free to reach out to us.</p>
        <div className="mt-4">
          <p>Email: support@edtech.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
