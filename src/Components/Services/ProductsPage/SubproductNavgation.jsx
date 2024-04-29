/* eslint-disable no-unused-vars */
import React from "react";
import '../ProductsPage/Style.css'
import { NavLink, Outlet } from "react-router-dom";
import SubProductOne from "./SubProductOne";
function SubproductNavgation() {
  return (
    <div>
      <header className="flex justify-evenly flex-col items-center p-5  w-full bg-white ">
        <div className="md:flex md:justify-evenly items-center py-5 mb-12">
          <div className="text-xl text-black hover:border-8 border-s-yellow-300 border-x-orange-600 border-y-blue-600 px-12 py-3 rounded-3xl font-bold ">
            <NavLink to="ProductOne">Product-one</NavLink>
          </div>
          <div className="text-xl text-black hover:border-8 border-s-yellow-300 border-x-orange-600 border-y-blue-600 px-12 py-3 rounded-3xl font-bold">
            <NavLink  to="productTwo">Product-Two</NavLink>
          </div>
          <div className="text-xl text-black hover:border-8 border-s-yellow-300 border-x-orange-600 border-y-blue-600 px-12 py-3 rounded-3xl font-bold">
            <NavLink to="ProductThree">Product-Three</NavLink>
          </div>
        </div>
        <div className="w-full flex items-center text-white  ">
        <Outlet  />
       </div>
      </header>
    </div>
  );
}

export default SubproductNavgation;
