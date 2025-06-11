import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiHome,
  FiBookOpen,
  FiUser,
  FiSettings,
  FiLogOut,
  FiBell,
  FiMessageSquare,
} from "react-icons/fi";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import ChatUI from "./ChatUI"; // Import the Chat UI component

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [practicals, setPracticals] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showChat, setShowChat] = useState(false); // State for Chat UI
  const username = "John Doe";
  const navigate = useNavigate();

  const assignmentData = [
    { name: "Assignment 1", due: "March 20", color: "bg-green-500" },
    { name: "Assignment 2", due: "March 25", color: "bg-blue-500" },
    { name: "Assignment 3", due: "March 28", color: "bg-yellow-500" },
  ];

  useEffect(() => {
    getVideos();
    getPracticals();
    getAssignments();
    setTimeout(() => {
      setShowDashboard(true);
    }, 2000);
  }, []);

  const asss = () => {
    navigate("/upload");
  };
  const getPracticals = async () => {
    try {
      const res = await fetch("http://localhost:8080/dash/showpracticals");
      const data = await res.json();
      setPracticals(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAssignments = async () => {
    try {
      const res = await fetch("http://localhost:8080/dash/showyeshchigand");
      const data = await res.json();
      setAssignments(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getVideos = async () => {
    try {
      const res = await fetch("http://localhost:8080/extra/showvideos");
      const data = await res.json();
      setVideos(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center overflow-hidden">
      {!showDashboard ? (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full flex items-center justify-center bg-[#03a9f4]"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to Your Dashboard
            </h1>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-screen h-screen flex"
        >
          {/* Sidebar */}
          <div className="w-1/5 h-full bg-[url('/img/dash.jpg')] bg-cover text-black p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">
                Hello, {localStorage.getItem("name")}
              </h2>
              <ul className="space-y-6 text-lg">
                <a
                  onClick={() => navigate("/home")}
                  className="flex items-center gap-3 cursor-pointer text-black hover:text-gray-300"
                >
                  <FiHome /> Home
                </a>
                <a
                  onClick={() => navigate("/extras")}
                  className="flex items-center gap-3 cursor-pointer hover:text-gray-300"
                >
                  <FiBookOpen /> All Content
                </a>
                {/* <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                  <FiUser /> Profile
                </li> */}
              </ul>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem("user-info");
                navigate("/");
              }}
              className="flex items-center gap-3 cursor-pointer bg-white text-black px-4 py-2 rounded-lg w-full justify-center mt-auto"
            >
              <FiLogOut /> Logout
            </button>
          </div>

          {/* Main Content */}
          <div className="w-4/5 h-full p-8 bg-gray-100 overflow-auto flex flex-col">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
              <h1 className="text-3xl text-gray-500 font-bold">Dashboard</h1>
              {/* <div className="flex items-center gap-6">
                <button className="bg-red-600 text-black px-6 py-2 rounded-lg text-lg flex items-center gap-2">
                  <FiBell /> Notifications
                </button>
              </div> */}
            </div>
            {/* Dashboard Widgets */}
            <div className="mt-8 grid grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-[60vh] overflow-y-scroll">
                <h3 className="text-xl text-gray-600 font-bold">
                  Enrolled Courses
                </h3>
                <div className="flex flex-col items-center justify-center gap-4 mt-4">
                  {videos.map((video) => (
                    <a
                      href={video.link}
                      target="_blank"
                      className="bg-red-600 text-white w-[90%] flex px-4 py-2 rounded-lg text-[0.5vh]"
                    >
                      <div key={video} className="flex">
                        <ReactPlayer
                          url={video?.link}
                          height={50}
                          width={80}
                          controls
                        />
                        <h1 className="flex justify-center items-center text-white">
                          {video?.title}
                        </h1>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg overflow-y-scroll shadow-md">
                <h3 className="text-xl text-gray-600">SPPU Practicals</h3>
                {/* <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Completed", value: 70 },
                        { name: "Remaining", value: 30 },
                      ]}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      label
                    >
                      <Cell key="cell-0" fill="#ff4d4d" />
                      <Cell key="cell-1" fill="#ddd" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer> */}
                {practicals.map((practical, index) => (
                  <a
                    onClick={() => navigate(`/practicals/:${practical._id}`)}
                    key={index}
                    className={`text-white bg-green-600 px-4 py-2 rounded-md text-lg flex justify-center hover:cursor-pointer items-center mt-4`}
                  >
                    {practical.title}
                  </a>
                ))}
              </div>
              <div className="bg-white overflow-y-scroll p-6 rounded-lg shadow-md h-[60vh]">
                <h3 className="text-xl text-gray-600">Assignments</h3>
                {assignments.map((assignment, index) => (
                  <a
                    onClick={() => navigate(`/upload/:${assignment._id}`)}
                    key={index}
                    className={`text-white bg-blue-600 px-4 py-2 rounded-md text-lg flex justify-center hover:cursor-pointer items-center mt-4`}
                  >
                    {assignment.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Chat Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8 text-black flex items-center justify-between">
              <h3 className="text-xl font-bold">Chat with Support</h3>
              <button
                className="bg-red-600 px-6 py-2 rounded-lg text-lg flex items-center gap-2"
                onClick={() => setShowChat(true)}
              >
                <FiMessageSquare /> Open Chat
              </button>
            </div>
          </div>

          {/* Chat UI */}
          {showChat && <ChatUI setShowChat={setShowChat} />}
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;
