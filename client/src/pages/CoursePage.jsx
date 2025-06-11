import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CoursePage = () => {
  const { id } = useParams(); // Get course ID from URL
  const navigate = useNavigate(); // For navigation
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // Course details with branches
  const courseDetails = {
    "engineering-2019": {
      name: "Engineering 2019 Pattern",
      description: "Select your Branch",
      branches: ["Computer Science", "Information Technology", "Electronics and Telecommunications (ENTC)", "Civil Engineering", "Mechanical Engineering","Chemical Engineering"],
    },
  };

  // Year options
  const yearOptions = ["First Year (FY)", "Second Year (SE)", "Third Year (TE)", "Final Year (BE)"];

  // Subjects for FY (IT & CS are the same)
  const fySubjects = [
    "Engineering Mathematics 1",
    "Engineering Physics",
    "Engineering Chemistry",
    "Systems in Mechanical Engineering",
    "Basic Electrical Engineering",
    "Basic Electronics Engineering",
    "Programming and Problem Solving",
    "Engineering Graphics",
    "Engineering Mechanics",
  ];

  // Subjects for SE (IT)
  const seSubjects = [
    "Discrete Mathematics",
    "Logic Design and Computer Organisation",
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Basics of Computer Networks",
    "Engineering Mathematics III",
    "Processor Architecture",
    "Database Management System",
    "Computer Graphics",
    "Software Engineering",
  ];

  // Subjects for TE (IT)
  const teSubjects = [
    "Theory of Computation",
    "Operating Systems",
    "Machine Learning",
    "Human-Computer Interaction",
    "Computer Networks",
    "Data Science and Big Data Analytics",
    "Web Application Development",
  ];

  // Subjects for BE (IT)
  const beSubjects = [
    "Information and Storage Retrieval",
    "Software Project Management",
    "Deep Learning",
    "Distributed Systems",
    "Social Computing",
    "Blockchain Technology",
  ];

  const course = courseDetails[id]; // Get selected course

  if (!course) {
    return <div className="text-center text-black text-3xl">Course not found!</div>;
  }

  return (
    <div className="w-screen h-screen bg-[url('/img/std.jpg')] bg-cover text-black flex flex-col items-center justify-center p-6">
      {/* Course Title */}
      <h1 className="text-5xl font-bold text-center">{course.name}</h1>

      {/* Branch Selection */}
      {!selectedBranch ? (
        <>
          <p className="mt-2 text-lg">{course.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-8">
            {course.branches.map((branch) => (
              <button
                key={branch}
                onClick={() => setSelectedBranch(branch)}
                className="bg-white text-black px-6 py-4 w-72 rounded-md text-lg font-semibold hover:bg-gray-300 transition transform hover:scale-105"
              >
                {branch}
              </button>
            ))}
          </div>
        </>
      ) : !selectedYear ? (
        // Year Selection after choosing a Branch
        <div className="mt-6 flex flex-col gap-4">
          {yearOptions.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className="bg-white text-black px-8 py-4 w-64 rounded-md text-xl font-semibold hover:bg-gray-300 transition"
            >
              {year}
            </button>
          ))}
        </div>
      ) : (
        // Display subjects based on selected branch and year
        <div className="mt-6 grid grid-cols-2 gap-6">
          {selectedYear === "First Year (FY)" && (selectedBranch === "Computer Science" || selectedBranch === "Information Technology")
            ? fySubjects.map((subject,index) => (
                <button
                  key={index}
                  className="bg-white text-black px-6 py-4 w-72 rounded-md text-lg font-semibold hover:bg-gray-300 transition transform hover:scale-105"
                  onClick={()=>navigate(`/courses/engineering-2019/first_year/it/${index}`)}
                > 
                  {subject}
                </button>
              ))
            : selectedYear === "Second Year (SE)" && selectedBranch === "Information Technology"
            ? seSubjects.map((subject,index) => (
                <button
                  key={index}
                  className="bg-white text-black px-6 py-4 w-72 rounded-md text-lg font-semibold hover:bg-gray-300 transition transform hover:scale-105"
                  onClick={()=>navigate(`/courses/engineering-2019/second_year/it/${index}`)}
                >
                  {subject}
                </button>
              ))
            : selectedYear === "Third Year (TE)" && selectedBranch === "Information Technology"
            ? teSubjects.map((subject,index) => (
                <button
                  key={index}
                  className="bg-white text-black px-6 py-4 w-72 rounded-md text-lg font-semibold hover:bg-gray-300 transition transform hover:scale-105"
                  onClick={()=>navigate(`/courses/engineering-2019/third_year/it/${index}`)}
                >
                  {subject}
                </button>
              ))
            : selectedYear === "Final Year (BE)" && selectedBranch === "Information Technology"
            ? beSubjects.map((subject,index) => (
                <button
                  key={index}
                  className="bg-white text-black px-6 py-4 w-72 rounded-md text-lg font-semibold hover:bg-gray-300 transition transform hover:scale-105"
                  onClick={()=>navigate(`/courses/engineering-2019/final_year/it/${index}`)}
                >
                  {subject}
                </button>
              ))
            : null}
        </div>
      )}

      {/* Back Button for Year Selection */}
      {selectedYear && (
        <button
          onClick={() => setSelectedYear(null)}
          className="mt-6 bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-300 transition"
        >
          Back to Year Selection
        </button>
      )}

      {/* Back Button for Branch Selection */}
      {selectedBranch && !selectedYear && (
        <button
          onClick={() => setSelectedBranch(null)}
          className="mt-6 bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-300 transition"
        >
          Back to Branch Selection
        </button>
      )}

      {/* Back to Home */}
      <button
        onClick={() => navigate("/home")}
        className="mt-4 bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-300 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default CoursePage;
