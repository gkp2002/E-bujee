/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Design(props) {
  return (
    <div className="w-full  ">
      <section className="md:flex mx-auto   justify-center">
        <div className="md:w-2/5 h-auto w-full mb-4 ">
          <img className="w-10/12" src={props.img} alt="" />
        </div>
        <div className="md:w-2/5 h-auto justify-center items-center text-white mt-3 lg:px-1 w-full">
        <p className="text-orange-500 font-normal lg:px-5">From Concept To Creation</p>
          <p className="text-2xl font-bold pb-4 py-2 lg:px-5 w-full">
            Where innovation meets aesthetics, creating unforgettable
            experiences, pixel by pixel.
          </p>
          <div className="grid lg:grid-cols-2 grid-rows-1 ">
            <div className="lg:py-4 lg:px-5 py-4 w-full">
              <h1 className="text-xl font-medium pb-3 "> Graphic Design </h1>
              <p className="text-md font-normal pb-3 ">
                Where visuals speak louder than words, leaving a lasting
                impression.
              </p>
            </div>
            <div className="lg:py-4 lg:px-5 py-4 w-full">
              <h1 className="text-xl font-medium pb-3">
                Video Editing 
              </h1>
              <p className="text-md font-normal pb-3">
                Bringing stories to life, frame by frame, in every dimension.
              </p>
            </div>

            <div className="lg:py-4 lg:px-5 py-4 w-full">
              <h1 className="text-xl font-medium pb-3"> (UI) / (UX) </h1>
              <p className="text-md font-normal pb-3">
              Designing interfaces that engage, delight, and seamlessly guide users.

              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Design;
