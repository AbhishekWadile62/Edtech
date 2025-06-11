import React, { useEffect, useState } from "react";
import DocToPdf from "./DocToPdf";
import { useNavigate, useParams } from "react-router-dom";

function Assignment() {
  const  _id  = useParams().id;
  // console.log(_id);
  
  const nevigate = useNavigate();
  const id = _id?.replace(":", "");
  const [assignments, setAssignments] = useState([]);
  console.log(id);
  
  
  const getAssignments = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/dash/oneAssignment/:${id}`
      );
      const data = await res.json();
      setAssignments(data);
    } catch (err) {
      console.log(err);
    }
  };
  

  useEffect(() => {
    getAssignments();
  }, []);

  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[3vh]">
        <h1>{assignments.title}</h1>
        <p className="text-xl">Assignment Questions</p>
        <p className="w-[90%]">
          {assignments.queations
            ? assignments.queations.split(/\. |\?/).map((question, index) => (
                <span key={index}>
                  {question}.
                  <br />
                </span>
              ))
            : "No questions available"}
        </p>
        <div className="w-[200%] border-2 border-white"></div>
        <p>Upload here</p>
        <DocToPdf />
        <div onClick={()=>nevigate('/dashboard')} className='mt-[4vh] border-2 rounded-md border-white w-[60%] flex justify-center items-center hover:bg-white hover:text-black duration-300 hover:cursor-pointer h-[7vh]'>Back to Dashboard</div> 
      </div>
    </div>
  );
}

export default Assignment;
