import React, { useEffect, useState } from "react";
import DocToPdf from "./DocToPdf";
import { useNavigate, useParams } from "react-router-dom";
function Practical() {
  const _id = useParams().id;
  const nevigate = useNavigate();
  const id = _id?.replace(":", "");
  const [practicals, setPracticals] = useState([]);
  const getPracticals = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/dash/onePracticalSubject/:${id}`
      );
      const data = await res.json();
      setPracticals(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPracticals();
  }, []);
  return (
    <div className="w-screen h-full bg-black flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[3vh]">
        <h1>{practicals.title}</h1>
        <p className="text-xl">Practical Questions</p>
        <p className="w-[90%]">
          {practicals.practicals
            ? practicals.practicals.split(/\. |\?/).map((practical, index) => (
                <span key={index}>
                  {practical}.
                  <br />
                </span>
              ))
            : "No questions available"}
        </p>
        <div className="w-[200%] border-2 border-white"></div>
        <p>Upload here</p>
        <DocToPdf />
        <div
          onClick={() => nevigate("/dashboard")}
          className="mt-[4vh] border-2 rounded-md border-white w-[60%] flex justify-center items-center hover:bg-white hover:text-black duration-300 hover:cursor-pointer h-[7vh]"
        >
          Back to Dashboard
        </div>
      </div>
    </div>
  );
}

export default Practical;
