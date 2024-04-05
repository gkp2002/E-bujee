/* eslint-disable no-unused-vars */
import React from 'react'
// import Clock from '../../Pages/Clock/Clock'
function Footer() {
  return (
    <div className="bg-black md:flex md:justify-center md:items-center flex-col text-white w-full">
      <div className=" flex flex-col lg:flex-row md:items-start items-center text-white lg:items-center justify-evenly w-full px-5">
     <div className="text-center flex justify-center items-start flex-col py-[5vw] md:gap-6">
       <p className=' text-4xl font-bold mb-1 md:text-[1.8vmax]'>We would love to hear more from you!</p>
       <button className='text-center cursor-pointer font-semibold text-xl rounded-[10em] border-none md:p-6 py-3 px-9 text-white bg-red-600 hover:opacity-50 md:text-[1.2vmax] '>LET`S WORK TOGETHER</button>
     </div>
     <div className=" ">
     <h1 className='text-xl md:text-[1.3vmax] font-semibold md:my-6'>Contact Infomation</h1>
    <p className="text-sm md:text-[1vmax] font-semibold md:my-2"> WorldoTurtor@worldo.com</p>
    <p className="text-sm md:text-[1vmax] font-semibold md:my-2"> US: +1 650 753 8157</p>
    <p className="text-sm  md:text-[1vmax] font-semibold md:my-2"> US: +1 650 753 8157</p>
     </div>
     <div className="">
        <h2 className='text-xl font-semibold leading-8 md:text-[1.3vmax]'>Sitemap</h2>
        <div className='flex'>
        <a href="#" className="md:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        <a href="#" className="md:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        </div>
       
        <div className='flex'>
        <a href="#" className="md:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        <a href="#" className="md:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        </div>
        
        <div className='flex'>
        <a href="#" className="md:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        <a href="#" className="md:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        </div>
       

     </div>
     <div className=" flex text-center justify-center items-start flex-col">
       <h2 className='text-xl md:text-[1.3vmax] font-semibold md:my-3'>
       Location
       </h2>
       <p className="text-sm md:text-[1vmax] font-semibold md:my-3"> SILICON VALLEY</p>
       <p className="text-sm md:text-[1vmax] font-semibold md:my-3"> NEW YORK CITY</p>
       <p className="text-sm md:text-[1vmax] font-semibold md:my-3"> INDIA</p>
     </div>

     </div>





    <div className="flex md:justify-center items-center flex-col mb-8 gap-7">
    <h1 className='text-3xl font-semibold leading-10 md:text-[1.4vmax]'>Fallow Me</h1>
    <div className="flex gap-5">
    <a href="#"><img src="/src/assets/facebook.png" alt="" /></a>
    <a href="#"><img src="/src/assets/instagram.png" alt="" /></a>
    <a href="#"><img src="/src/assets/twitter.png" alt="" /></a>
    </div>
    </div>
    
    </div>
  
   
  )
}

export default Footer
