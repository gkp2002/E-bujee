/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Marketing(props) {
  return (
    <div className="w-full ">
      <section className="md:flex mx-auto gap-x-12  justify-center">
        <div className="md:w-2/5 h-auto w-full mb-4 ">
          <img className="w-11/12" src={props.img} alt="" />
        </div>
        <div className="md:w-2/5 h-auto justify-center items-center text-white mt-3 lg:px-12">
          <p className="text-xl font-medium pb-6 lg:px-5">
            Amplify your reach, engage your audience, and drive results.
          </p>
          <div className="grid lg:grid-cols-2 grid-rows-4 ">
            <div className="lg:py-8 lg:px-5 py-4 w-full">
              <h1 className="text-2xl font-bold pb-3 ">
                Digital Marketing Strategy
              </h1>
              <p className="text-xl font-medium pb-3">
                Crafting roadmaps for digital success, tailored to your goals.
              </p>
            </div>
            <div className="lg:py-8 lg:px-5 py-4 w-full">
              <h1 className="text-2xl font-bold pb-3">
              Social Media Marketing
              </h1>
              <p className="text-xl font-medium pb-3">
              Captivating audiences, sparking conversations, and fostering connections.

              </p>
            </div>
            <div className="lg:py-8 lg:px-5 py-4 w-full">
              <h1 className="text-2xl font-bold pb-3">
              SEM
              </h1>
              <p className="text-xl font-medium pb-3">
              Maximizing visibility and driving 
              conversions 
             </p>
            </div>
            <div className="lg:py-8 lg:px-5 py-4 w-full">
              <h1 className="text-2xl font-bold pb-3">
              Search Engine Optimization (SEO)
              </h1>
              <p className="text-xl font-medium pb-3">
              Elevating your online presence, 
              one keyword at a time.

             </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Marketing;
