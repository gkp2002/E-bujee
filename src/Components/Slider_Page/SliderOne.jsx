/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/Home.css'
function SliderOne(props) {
  return (
    <section>
      <div className="w-full h-full z-[-1] absolute  ">
        <video
          src={props.video}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        ></video>
      </div>
      <div className="max-w-full mx-auto h-auto text-white   flex md:items-center  flex-col md:py-52 py-60  ">
        <div className=" md:py-10 md:px-[13vmax] px-3 bottom-0">
          <h1 className="text-white text-[4vmax] font-bold ">
          Crafting Your <span className="text-stroke-2 ">Digital Legacy</span> 
          </h1>
          <p className="text-white text-[1.8vmax] font-medium ">
            {props.content}
          </p>
          {
          <NavLink to="/contact-us">
            <button className="md:px-10 md:py-3 md:text-xl font-bold bg-orange-900 hover:bg-orange-700 rounded-3xl px-5 py-2 mt-3">
             Contact-Us
            </button>
          </NavLink>
          }
        </div>
      </div>
    </section>
  );
}

export default SliderOne;
