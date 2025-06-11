import React from 'react'
import ReactPlayer from 'react-player'

function SPM() {
  return (
    <div className='justify-center items-center gap-10 flex flex-col w-[100vw] h-[100vh]'>
      {/* <video src="https://youtube.com/playlist?list=PLbBdOzdOUWiajzejSZXEe5I-MtvJ_t0gr&si=0U0PMS8Lxx61Q5UD" height={255} controls autoPlay></video> */}
      <div className='text-3xl uppercase font-semibold'>Software Project Management </div>
      <ReactPlayer url="https://youtube.com/playlist?list=PLYwpaL_SFmcCB7zUM0YSDR-1mM4KoiyLM&si=iXrEGQ_1fSwSB-pO" controls autoPlay />

      <div className='text-2xl font-semibold flex justify-between h-[7vh] items-center w-[60%]'> Download PYQ paper<a href="https://drive.google.com/drive/folders/1uNkPPIPd0wABl-L5BoKbfV20J6Q6mB7p?usp=drive_link"> <button className='text-black text-[2vh] '> Click here</button></a></div>
      
    </div>
  )
}

export default SPM
