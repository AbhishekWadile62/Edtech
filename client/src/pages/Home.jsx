import { FiBookOpen, FiArrowRight, FiMenu, FiX, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate instead of useHistory
import { useState } from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false); // State to control contact form visibility
  const navigate = useNavigate();

  const courses = [
    { id: "engineering-2019", name: "Engineering 2019 Pattern", description: "Includes both SEM 1 and SEM 2" },
    { id: "engineering-2024", name: "Engineering 2024 Pattern", description: "Foundation courses for engineering students" },
    { id: "pharmacy-2019", name: "Pharmacy 2019 Pattern", description: "Core subjects and technical courses" },
    { id: "pharmacy-2024", name: "Pharmacy 2024 Pattern", description: "Advanced topics and elective courses" },
    { id: "mba", name: "MBA", description: "Advanced topics and elective courses" },
    { id: "ba", name: "Bachelor of Arts", description: "Advanced topics and elective courses" },
  ];

  const handleLogout = (e) => {
    // Logic for logout
    localStorage.removeItem('user-info');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    // console.log("User logged out");
    // navigate("/");  // Redirects to the landing page (Home page)
    setTimeout(()=>{
      navigate('/')
    },1000)
  };

  const toggleContactForm = () => {
    setShowContact(!showContact);
    if (!showContact) {
      document.body.classList.add("blur"); // Apply blur to background
    } else {
      document.body.classList.remove("blur"); // Remove blur from background
    }
  };

  return (
    <div className="w-screen h-[100vh] bg-[url('/img/yup2.jpg')] bg-cover flex flex-col items-center overflow-hidden">
      {/* Navbar */}
      <nav className="w-full bg-[#40c4ff] py-4 px-6 flex justify-between items-center fixed top-0 z-20 shadow-md">
        <h1 className="text-2xl font-bold text-[#0277bd]">EdTech</h1>

        {/* Centered Navigation Links */}
        <ul className="hidden md:flex text-black space-x-6 text-lg absolute left-1/2 transform -translate-x-1/2">
          <li><Link to="/extras" className="text-black hover:text-gray-300">StudyZone</Link></li>
          <li><Link to="/about" className="text-black hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="text-black hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-black text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>


        <button
        onClick={(e)=>handleLogout(e)}
        className="px-6 py-3 mt-4 bg-[#29b6f6] text-black rounded-lg flex items-center gap-2 hover:bg-red-200 transition"
      >
        <FiLogOut /> Logout
      </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 p-5 flex flex-col space-y-4 text-center">
          <Link to="/extras" className="text-black hover:text-gray-300">StudyZone</Link>
          <Link to="/about" className="text-black hover:text-gray-300">About</Link>
          <Link to="/contact" className="text-black hover:text-gray-300">Contact</Link>
        </div>
      )}

      {/* Main Content */}
      <div className="text-center text-black max-w-4xl mt-[20vh]">
        <h1 className="text-5xl text-[#0277bd] font-bold">Welcome to EdTech</h1>
        <p className="mt-4 text-lg">Learn, grow, and achieve your goals with us!</p>
      </div>

      {/* Course Sections */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`}>
            <div className="bg-[#81d4fa] text-black p-6 rounded-xl shadow-xl transform hover:scale-105 transition cursor-pointer">
              <FiBookOpen className="text-[#03a9f4] text-3xl mb-2" />
              <h2 className="text-xl font-bold">{course.name}</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <Link to="/dashboard">
          <button className="px-6 py-3 bg-white text-black rounded-lg flex items-center gap-2 hover:bg-red-200 transition">
            Go to Your Dashboard <FiArrowRight />
          </button>
        </Link>
      </div>

      {/* Logout Button */}
      {/* <button
        // onClick={handleLogout()}
        className="px-6 py-3 mt-4 bg-white text-red-600 rounded-lg flex items-center gap-2 hover:bg-red-200 transition"
      >
        <FiLogOut /> Logout
      </button> */}

      {/* Contact Button */}
      

      {/* Contact Form Overlay */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-white p-8 rounded-lg shadow-xl transform transition-all animate-slide-up max-w-lg w-full">
            <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
            <p className="mb-4 text-center">Feel free to reach out to us for any questions or feedback.</p>

            <div className="mb-4">
              <p className="font-semibold">Email: support@edtech.com</p>
              <p className="font-semibold">Phone: +123 456 7890</p>
            </div>

            {/* Close Button */}
            <button
              onClick={toggleContactForm}
              className="px-4 py-2 text-white rounded-lg mt-4 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
