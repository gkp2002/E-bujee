/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
function SectionTransist() {
      useEffect(()=>{
            Aos.init({duration:1000})
      },[])
  return (
    <div>
        <section style={{backgroundImage:"url(https://www.smartsites.com/media/featured-services-bg-1536x708.jpg)"}} className='w-full h- bg-cover py-24'>
             <div className='text-7xl font-bold text-white text-center  mb-12' data-aos = "fade-down"> who we are</div>
             <div>
                <ul className='md:flex flex-wrap justify-evenly max-w-[107rem] my-auto' >
                   <li className="md:w-1/5 w-full p-6 "> 
                    <div className=' gap-6 flex flex-col justify-center items-center py-16 rounded-xl px-2 cursor-pointer hover:bg-yellow-600' data-aos="fade-up" data-aos-duration="1000" data-loaded="true">
                          <img src="/src/assets/seo.png" alt="" className='w-20'/>
                          <h3 className='text-4xl text-center font-bold '>Web Design</h3>
                          <p className='text-center mb-4 mt-0 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo deleniti similique laudantium!</p>
                    </div>
                   </li>
                   <li className="md:w-1/5 w-full p-6 ">
                   <div className=' gap-6 flex flex-col justify-center items-center py-16 rounded-xl px-2 cursor-pointer hover:bg-yellow-600' data-aos="fade-up" data-aos-duration="1000" data-loaded="true">
                         <img src="/src/assets/seo.png" alt="" className='w-20'/>
                         <h3 className='text-4xl text-center font-bold'>Web Design</h3>
                         <p className='text-center mb-4 mt-0 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo deleniti similique laudantium!</p>
                   </div>
                  </li>
                  <li className="md:w-1/5 w-full p-6 ">
                  <div className=' gap-6 flex flex-col justify-center items-center py-16 rounded-xl px-2 cursor-pointer hover:bg-yellow-600' data-aos="fade-up" data-aos-duration="1000" data-loaded="true">
                        <img src="/src/assets/seo.png" alt="" className='w-20'/>
                        <h3 className='text-4xl text-center font-bold'>Web Design</h3>
                        <p className='text-center mb-4 mt-0 text-xl '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo deleniti similique laudantium!</p>
                  </div>
                 </li>
                 <li className="md:w-1/5 w-full p-6 ">
                 <div className=' gap-6 flex flex-col justify-center items-center py-16 rounded-xl px-2 cursor-pointer hover:bg-yellow-600' data-aos="fade-up" data-aos-duration="1000" data-loaded="true">
                       <img src="/src/assets/seo.png" alt="" className='w-20'/>
                       <h3 className='text-4xl text-center font-bold'>Web Design</h3>
                       <p className='text-center mb-4 mt-0 text-xl  '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo deleniti similique laudantium!</p>
                 </div>
                </li>
                <li className="md:w-1/5 w-full p-6 ">
                <div className=' gap-6 flex flex-col justify-center items-center py-16 rounded-xl px-2 cursor-pointer hover:bg-yellow-600' data-aos="fade-up" data-aos-duration="1000" data-loaded="true">
                      <img src="/src/assets/seo.png" alt="" className='w-20'/>
                      <h3 className='text-4xl text-center font-bold'>Web Design</h3>
                      <p className='text-center mb-4 mt-0 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo deleniti similique laudantium!</p>
                </div>
               </li>
                 
                </ul>
             </div>
        </section>
    </div>
  )
}

export default SectionTransist
