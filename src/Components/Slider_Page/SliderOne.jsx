/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

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
      <div className="max-w-full mx-auto h-auto text-white   flex md:items-center  flex-col py-52  ">
        <div className=" md:py-14 md:px-[13vmax] px-3 ">
          <h1 className="text-white text-[3.7vmax] font-bold ">
            {" "}
            {props.heading}
          </h1>
          <p className="text-white text-[1.8vmax] font-medium ">
            {props.content}
          </p>
          {
          // <NavLink to="/Schedulemeeting">
          //   <button className="md:px-12 md:py-4 md:text-xl font-bold bg-orange-900 hover:bg-orange-700 rounded-md px-3 py-3 mt-4">
          //     Book Meeting Now
          //   </button>
          // </NavLink>
          }
        </div>
      </div>
    </section>
  );
}

export default SliderOne;
