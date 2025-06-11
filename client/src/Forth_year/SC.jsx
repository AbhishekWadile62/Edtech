import React from 'react'
import ReactPlayer from 'react-player'
import { Navigate } from 'react-router-dom'

function SC() {
    // const nav = Navigate();
  return (
    <div className='justify-center items-center gap-10 flex flex-col w-[100vw] h-[100vh]'>
      {/* <video src="https://youtube.com/playlist?list=PLbBdOzdOUWiajzejSZXEe5I-MtvJ_t0gr&si=0U0PMS8Lxx61Q5UD" height={255} controls autoPlay></video> */}
      <div className='text-3xl uppercase font-semibold'>Social Computing</div>
      <ReactPlayer url="https://youtube.com/playlist?list=PL09DGz_tVz8K30SQirf5LsuxxZYXCnkw1&si=A5JjBAIz14D4gfN1" controls autoPlay />

      <div className='text-2xl font-semibold flex justify-between h-[7vh] items-center w-[60%]'> Download PYQ paper<a href="#"> <button className='text-black text-[2vh] '> Click here</button></a></div>
      
    </div>
  )
}

export default SC
