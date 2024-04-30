/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import ServicesNavigation from "../../Pages/Ourservices/ServicesNavigation";
import ServicesPage from "../../Pages/ServicesPage";
import Industry from "./Pages/Industry";
import Proven from "./Pages/Proven";
import StandIndusrty from "./Pages/StandIndustry";
import data from "./Pages/data";
import SubproductNavgation from "./ProductsPage/SubproductNavgation";

// import React from 'react'
function Services() {
  return (
    <div>
      <main className="bg-transparent">
        <div id="Container" className="bg-transparent text-white w-full py-16 flex flex-col justify-center">
          <div id="content" className="px-[8vw]  lg:w-[60%]  py-[5vmax]  ">
            <div className="text-white ">
              <h1 className="text-[3.6vmax] font-bold text-3xl leading-none ">
                Where Ideas Go Viral
              </h1>
              <p className="md:text-[1.2vmax]  mt-7">
                With us, your vision isn't just a distant dream, it's the
                exciting next chapter in your remarkable success story. Let's
                rewrite this narrative together towards unparalleled success.
              </p>
            </div>
            <button className="text-2xl px-12 py-4 mt-5 bg-orange-900 rounded-xl">
              Book Meeting Now
            </button>
          </div>
        </div>
        <div className="bg-white bg-opacity-70">
      {
          // <div
          //   id="internalwrapp"
          //   className="text-black pl-[10vmax]  py-64 lg:w-6/12 "
          // >
          //   <h3 className="text-red-600 md:text-[1.9vmax] text-xl font-bold">
          //     Core Values
          //   </h3>
          //   <h1 className="font-extrabold text-[2.5vmax] leading-tight">
          //     Our Values Shape Everything We Do and How We Do It
          //   </h1>
         
          //   </div>
      }{
          //<div className="w-full flex flex-col justify-center items-center bg-blue-gray-50">
          
              // <div className="text-4xl font-bold pt-20 ">
              // Stand Out in Your Industry
              // </div>
              // <div className=" grid md:grid-cols-4 grid-rows-1 h-auto w-full gap-12 px-16 py-32  text-center  mt-16">
              //   {StandIndusrty.map((item) => {
              //     return (
              //       <Industry
              //         key={item.id}
              //         img={item.img}
              //         alt={item.Alt}
              //         Name={item.name}
              //       />
              //     );
              //   })}
              // </div>
           
         // </div>

            }
            <section className="md:flex justify-center w-full items-center flex-col px-12 py-10 flex-wrap">
            <h1 className="text-4xl py-10 w-full text-center">
            Where Ideas Go Viral

            </h1>
            <div className="grid lg:grid-cols-4 grid-rows-1 w-full  ">
            {data.map((item) => {
              return (
                <Proven
                key={item.id}
                img={item.img}
                heading={item.heading}
                content={item.content}
                />
              );
            })}
            </div>
            </section>
            <section className="w-full h-full mx-auto flex-col  ">
               <ServicesNavigation/>
            </section>
        </div>
      </main>
    </div>
  );
}

export default Services;
