/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function BrandSolution(props) {
  return (
    <div className="w-full">
      <section className="md:flex mx-auto justify-center">
        <div className="md:w-2/5 h-auto w-full mb-4 ">
          <img className="w-11/22" src={props.img} alt="" />
        </div>
        <div className="md:w-2/5 h-auto justify-center items-center text-white mt-3 lg:px-1 w-full">
           <p className="text-orange-500 font-normal lg:px-5">Inspire. Engage. Succeed</p>
          <p className="text-2xl font-bold lg:px-5 w-full py-2 pb-4">
          Elevate your brand with our solutions that captivate, resonate, and endure.

          </p>
          <div className="grid lg:grid-cols-2 grid-rows-1">
            <div className="lg:py-4 lg:px-5  w-full">
              <h1 className="text-xl font-medium pb-3 "> Brand Identity </h1>
              <p className="text-md font-normal pb-3">
                Crafting identities that resonate from inception to infusion.
              </p>
              
            </div>
            <div className="lg:py-4 lg:px-5  w-full">
              <h1 className="text-xl font-medium pb-3">Brand Launch</h1>
              <p className="text-md font-normal pb-3">
                Unveiling brands with impact, from concept to market.
              </p>
              
            </div>

            <div className="lg:py-4 lg:px-5  w-full">
              <h1 className="text-xl font-medium pb-3">Rebranding</h1>
              <p className="text-md font-normal pb-3">
              Transforming identities,  and shaping perceptions.

              </p>
              
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default BrandSolution;
