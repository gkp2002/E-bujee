/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { NavLink,Outlet } from 'react-router-dom';
import "aos/dist/aos.css";
import '../../Components/Css/Home.css'
import Aos from 'aos';

function ServicesNavigation() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <header className="lg:flex justify-evenly flex-col items-center p-5  w-full bg-black ">
      <div className='text-white text-6xl font-bold pb-4' data-aos="fade-up">Our <span className='text-stroke-2 text-orange-500'>Services</span></div>
        <div className="md:flex md:justify-evenly items-center py-5 mb-12" data-aos="fade-down" id="actives" >
        <NavLink className="border-orange-600 hover:bg-orange-500 border-2 rounded-3xl mx-1" to="BrandSolution" >
          <div className="text-[1.5vmax]   text-white  lg:px-[3vmax]  py-2  ">
            Brand Solution
          </div> 
          </NavLink>
          <NavLink className="border-orange-600 hover:bg-orange-500 border-2 rounded-3xl mx-1"  to="Design">
          <div className="text-[1.5vmax]   text-white  lg:px-[3vmax]  py-2  ">
            Design
          </div>
          </NavLink>
          <NavLink className="border-orange-600 hover:bg-orange-500 border-2 rounded-3xl mx-1" to="Development">
          <div className="text-[1.5vmax]   text-white  lg:px-[3vmax]  py-2  ">
            Development
          </div>
          </NavLink>
          <NavLink className="border-orange-600 hover:bg-orange-500 border-2 rounded-3xl mx-1" to="TechSoluton">
          <div className="text-[1.5vmax]   text-white  lg:px-[3vmax]  py-2  ">
            Tech Solution
          </div>
          </NavLink>
          <NavLink className="border-orange-600 hover:bg-orange-500 border-2 rounded-3xl mx-1" to="E-commerce">
          <div className="text-[1.5vmax]   text-white  lg:px-[3vmax]  py-2  ">
           E-commerce
          </div>
          </NavLink>
          <NavLink className="border-orange-600 hover:bg-orange-500 border-2 rounded-3xl mx-1" to="Marketing">
          <div className="text-[1.5vmax]   text-white  lg:px-[3vmax]  py-2  ">
            Marketing
          </div>
          </NavLink>
        </div>
        <div className="w-full flex items-center text-white  ">
        <Outlet  />
       </div>
      </header>
    </div>
  );
  
}

export default ServicesNavigation
