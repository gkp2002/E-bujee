/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Ecommerce(props) {
  return (
    <div className="w-full   ">
      <section className="md:flex mx-auto   justify-center">
        <div className="md:w-2/5 h-auto w-full mb-4 ">
          <img className="w-10/12" src={props.img} alt="" />
        </div>
        <div className="md:w-2/5 h-auto justify-center items-center text-white mt-3 lg:px-1 w-full">
          <p className="text-xl font-medium pb-6 lg:px-5">
          Redefining online shopping, one seamless experience at a time.
          </p>
          <div className="grid lg:grid-cols-2 grid-rows-1 ">
            <div className="lg:py-8 lg:px-5 py-4 w-full ">
              <h1 className="text-2xl font-bold pb-3  "> Online Store Design / Development </h1>
              <p className="text-xl font-medium pb-3">
              Creating captivating digital storefronts 
              converting visitors into customers.
              </p>
            </div>
            <div className="lg:py-8 lg:px-5 py-4 w-full ">
              <h1 className="text-2xl font-bold pb-3">Payment Gateway Integration</h1>
              <p className="text-xl font-medium pb-3">
              integrating secure payment solutions for hassle-free
              transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ecommerce;
