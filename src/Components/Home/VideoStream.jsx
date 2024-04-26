// import React from 'react'
import { useEffect } from 'react'
import './Style.css'
import Aos from 'aos'
function VideoStream() {
  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div>
        <section className='w-full h-screen ' >
  
        <div className='w-full h-screen absolute ' id='Animation' data-aos="zoom-in-up"  data-aos-easing="linear">
        <video src="/src/assets/video.mp4 " autoPlay  loop muted 
         className='h-full w-full object-cover'
        ></video>
      </div>
        </section>
    </div>
  )
}

export default VideoStream
