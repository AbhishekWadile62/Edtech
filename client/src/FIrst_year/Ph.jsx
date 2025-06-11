import React from 'react'
import ReactPlayer from 'react-player'

function Ph() {
  return (
    <div className='justify-center items-center gap-10 flex flex-col w-[100vw] h-[100vh]'>
      {/* <video src="https://youtube.com/playlist?list=PLbBdOzdOUWiajzejSZXEe5I-MtvJ_t0gr&si=0U0PMS8Lxx61Q5UD" height={255} controls autoPlay></video> */}
      <div className='text-3xl uppercase font-semibold'>Engineering Physics</div>
      <ReactPlayer url="https://youtu.be/T-e_OHNorn0?si=FDSnOU1hGYZZ73h3" controls autoPlay />

      <div className='text-2xl font-semibold flex justify-between h-[7vh] items-center w-[60%]'> Download PYQ paper<a href="https://drive.google.com/drive/folders/1BwwvleZrNa2PCmcZk8xBHexAQFuWinnU?usp=drive_link"> <button className='text-black text-[2vh] '> Click here</button></a></div>
      
    </div>
  )
}

export default Ph
