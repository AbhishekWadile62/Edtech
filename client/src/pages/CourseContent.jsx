import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'

const CourseContent = () => {
  const [activeTab, setActiveTab] = useState("notes");
  const [notes,setNotes] = useState([]);
  const [videos,setVideos] = useState([]);
  const [pyqs,setPyqs] = useState([]);

  useEffect(()=>{
    const getNotes = async()=>{
      try{
        const res = await fetch("http://localhost:8080/extra/shownotes");
        const data = await res.json();
        setNotes(data);
      }catch(err){
        console.log(err);
      }
    }
    const getVideos = async()=>{
      try{
        const res = await fetch("http://localhost:8080/extra/showvideos");
        const data = await res.json();
        setVideos(data);
      }catch(err){
        console.log(err);
      }
    }
    const getPyqs = async()=>{
      try{
        const res = await fetch("http://localhost:8080/extra/showpyqs");
        const data = await res.json();
        setPyqs(data);
      }catch(err){
        console.log(err);
      }
    }

    getNotes();
    getVideos();
    getPyqs();
  },[])

  return (
    <div className="w-screen h-full flex flex-col items-center justify-center bg-[url('/img/std3.jpg')] bg-cover p-6 overflow-scroll">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">StudyZone</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {["notes", "videos", "pyqs"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg transition duration-300 ${
              activeTab === tab
                ? "bg-red-600 text-black" // Active tab: Red background, White text
                : "bg-white  border-[1px] border-black text-black" // Default: White text, Hover: Red text
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "notes" ? "Notes" : tab === "videos" ? "Videos" : "PYQs"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-[100%] max-w-2xl p-6 bg-white shadow-lg rounded-lg text-black ">
        {activeTab === "notes" && (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-4">📜 Notes</h2>
            {notes.map((note)=>{
              return(
                <div className="flex justify-between pl-[3vh] pr-[3vh] items-center gap-[30vh] w-[100%] h-[10vh] border-2 hover:text-red-600 rounded-md text-[2vh]">
                  <h3 className=" font-semibold">{note.title}</h3>
                  <a href={note.link}><button className="w-[110%] flex justify-center items-center h-[7vh]  border-2 text-black bg-black pl-[3vh] pr-[3vh]   ">Get PDF</button></a>
                </div>
              )
            }
            )}
          </div>
        )}
        {activeTab === "videos" && (
          <div className="w-[100%] text-[2px] flex flex-col gap-4">
            <h2 className="text-xl text-red-600 font-bold mb-4">🎥 Videos</h2>
            {videos.map((video)=>{
              return(
                <a href={video.link} target="_blank" className="flex justify-between pl-[3vh] pr-[3vh] items-center gap-[30vh] w-[100%] h-[30vh] border-2 text-black hover:text-red-600 rounded-md text-[1vh]"> 
                <div className="flex justify-between pl-[3vh] pr-[3vh] items-center gap-[30vh] w-[100%] h-[30vh] hover:text-red-600 rounded-md text-[1vh]">
                  <div className="flex justify-between items-center w-[100%] font-semibold"><ReactPlayer url={video.link} height={150} width={240} controls autoPlay target="_blank" />
                  <h1 className="text-[2px] text-black">{video.title}</h1>
                  </div>
                  
                </div>
                </a>
              )
            })
            }
          </div>
        )}
        {activeTab === "pyqs" && (
          <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-4">📜 Pyqs</h2>
          {pyqs.map((pyq)=>{
            return(
              <div className="flex justify-between pl-[3vh] pr-[3vh] items-center gap-[30vh] w-[100%] h-[10vh] border-2 hover:text-red-600 rounded-md text-[2vh]">
                <h3 className=" font-semibold">{pyq.title}</h3>
                <a href={pyq.link}><button className="w-[110%] flex justify-center items-center h-[7vh]  border-2 text-black bg-black pl-[3vh] pr-[3vh]   ">Get PDF</button></a>
              </div>
            )
          }
          )}
        </div>
        )}
      </div>
    </div>
  );
};

export default CourseContent;
