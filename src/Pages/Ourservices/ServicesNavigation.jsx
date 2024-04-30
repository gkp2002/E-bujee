/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';
function ServicesNavigation() {
  return (
    <div>
      <header className="lg:flex justify-evenly flex-col items-center p-5  w-full bg-black ">
        <div className="md:flex md:justify-evenly items-center py-5 mb-12">
          <div className="text-xl text-white hover:text-blue-gray-400 lg:px-12 px-4 py-3 rounded-3xl font-bold ">
            <NavLink to="BrandSolution">BrandSolution</NavLink>
          </div>
          <div className="text-xl text-white hover:text-blue-gray-400 lg:px-12 px-4 py-3 rounded-3xl font-bold">
            <NavLink  to="Design">Design</NavLink>
          </div>
          <div className="text-xl text-white hover:text-blue-gray-400 lg:px-12 px-4 py-3 rounded-3xl font-bold">
            <NavLink to="Development">Development</NavLink>
          </div>
          <div className="text-xl text-white hover:text-blue-gray-400 lg:px-12 px-4 py-3 rounded-3xl font-bold">
            <NavLink to="TechSoluton">TechSolution</NavLink>
          </div>
          <div className="text-xl text-white hover:text-blue-gray-400 lg:px-12 px-4 py-3 rounded-3xl font-bold">
            <NavLink to="E-commerce">E-commerce</NavLink>
          </div>
          <div className="text-xl text-white hover:text-blue-gray-400 lg:px-12 px-4 py-3 rounded-3xl font-bold">
            <NavLink to="Marketing">Marketing</NavLink>
          </div>
        </div>
        <div className="w-full flex items-center text-white  ">
        <Outlet  />
       </div>
      </header>
    </div>
  );
  
}

export default ServicesNavigation
