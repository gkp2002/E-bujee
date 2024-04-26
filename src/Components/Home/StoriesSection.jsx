/* eslint-disable no-unused-vars */
import Aos from 'aos'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
function StoriesSection() { 
    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])
  return (
    <div>
      <section>
         <div className='grid md:grid-cols-2 gap-x-12 md:px-16 md:py-20 bg-tranplarent' data-aos = "fade-up-right" data-aos-duration="1000" data-loaded="true">
            <div>
                <video src="/src/assets/video.mp4" autoPlay loop muted controls></video>
            </div>
            <div className='' data-aos="fade-up-left" data-aos-duration="1000" data-loaded="true">
               <h1 className='text-6xl font-bold mb-12 mt-5'>Our Story</h1>
               <p className='md:text-xl md:leading-9 leading-6'>SmartSites was founded by brothers Alex and Michael Melen, who grew up with a 
               passion for all things digital. With an innovative vision and a lot of hard work, SmartSites quickly 
               became one of America’s fastest growing companies.

               Our relentless focus on our clients has led us to over 100
                5-star reviews since our inception in 2011. When Dun & Bradstreet asked
                 “How satisfied do you feel about the quality of service?”, we scored a phenomenal
                97%. We keep our clients happy by delivering results that exceed their expectations.</p>
            </div>
         </div>
      </section>
    </div>
  )
}

export default StoriesSection
