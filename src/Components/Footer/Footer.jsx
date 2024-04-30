/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
// import Clock from '../../Pages/Clock/Clock'
import { SocialIcon } from 'react-social-icons'
function Footer() {
  const twitter= <SocialIcon url="https://twitter.com" />;
  const insta =  <SocialIcon url="https://instagram.com" />;
  const fb=<SocialIcon url="https://facebook.com" />;

  return (
    <section className='mt-10' >
   {  //<img src="https://ignitevisibility.com/wp-content/themes/ignite-new/images/upper-wave-black.png" alt=""  />
  }
      <div className="bg-gray-900 lg:flex lg:justify-center lg:items-center flex-col text-white w-full py-0 pb-11 z-50 " >
      <div className=" flex flex-col lg:flex-row lg:items-start  text-white lg:items-center justify-evenly w-full px-5">
      <div className="text-center flex justify-center items-start flex-col pt-[5vw] lg:gap-6 mb-4">
      <p className=' text-4xl font-bold mb-1 lg:text-[1.8vmax]'>We would love to hear more from you!</p>
      <button className='text-center cursor-pointer font-semibold text-xl rounded-[10em] border-none lg:p-4 py-3 px-9 text-white bg-red-600 hover:opacity-50 lg:text-[1.2vmax] '>LET`S WORK TOGETHER</button>
      </div>
      <div className="">
      <h1 className='text-xl lg:text-[1.3vmax] font-semibold lg:my-4'>Contact Infomation</h1>
      <p className="text-sm lg:text-[1vmax] font-semibold lg:my-2"> WorldoTurtor@worldo.com</p>
      <p className="text-sm lg:text-[1vmax] font-semibold lg:my-2"> US: +1 650 753 8157</p>
      <p className="text-sm  lg:text-[1vmax] font-semibold lg:my-2"> US: +1 650 753 8157</p>
      </div>
      <div className="">
      <h2 className='text-xl font-semibold leading-8 lg:text-[1.3vmax]'>Sitemap</h2>
      <div className='flex'>
      <a href="#" className="lg:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
      <a href="#" className="lg:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
      </div>
      
      <div className='flex'>
      <a href="#" className="lg:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
      <a href="#" className="lg:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
      </div>
      
      <div className='flex'>
      <a href="#" className="lg:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        <a href="#" className="lg:text-[1vmax] hover:text-slate-600 no-underline text-white text-sm border-none p-1">HOME</a>
        </div>
        
        
        </div>
        <div className=" flex text-center justify-center items-start flex-col">
        <h2 className='text-xl lg:text-[1.3vmax] font-semibold lg:mb-3'>
        Location
        </h2>
        <p className="text-sm lg:text-[1vmax] font-semibold lg:mb-1"> SILICON VALLEY</p>
        <p className="text-sm lg:text-[1vmax] font-semibold lg:mb-1 "> NEW YORK CITY</p>
        <p className="text-sm lg:text-[1vmax] font-semibold "> INDIA</p>
        </div>
        
        </div>
        
        
        
        
        
        <div className="lg:flex justify-between items-center flex-col-reverse p-5 gap-2 w-full lg:px-36 ">
        <div className='flex gap-3 py-1'>
        <h1 className='opacity-60 cursor-pointer'>Techtitans</h1>
        <p className=' lowercase text-sm opacity-50 cursor-pointer'>PRIVACY POLICY</p>
        <p className=' lowercase text-sm opacity-50 cursor-pointer'>YOUR  CHOICES</p>
        <p className=' lowercase text-sm opacity-50 cursor-pointer'>Terms & COnditions</p>
        </div>
        <div className="flex gap-2">
        <h1 className='text-3xl  font-semibold leading-10 lg:text-[1.4vmax]'>Fallow Me: </h1>
        <Link  to="https://www.instagram.com/" >{insta}</Link>
        <Link to="https://twitter.com/">{twitter}</Link>
        <Link to="https://www.facebook.com/">{fb}</Link>
        </div>
        </div>
        
        </div>
        
        
        </section>
      )
}

export default Footer
