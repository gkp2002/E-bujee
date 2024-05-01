/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
function CareerPosition(props) {
  return (
    <div className="lg:px-32 px-4 text-white ">
      <div className="md:flex block justify-between items-center py-3 px-4">
        <div>
          <h1 className="text-xl font-bold ">{props.heading}</h1>
          <ul className="flex">
            <li className=""><p className="font-normal">{props.time}</p></li>
            <li className="list-disc mx-10"><p className="font-normal ">{props.mode}</p></li>
          </ul>
        </div>
        <div>
          <NavLink to={props.link} className=" bg-orange-900 hover:bg-green-400 py-1 px-1 active:bg-green-700 text-white rounded-3xl">
          <button className="text-md py-4 px-5 " >Apply Now</button>
          </NavLink>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CareerPosition;
