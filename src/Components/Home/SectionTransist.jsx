/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import data from "../../assets/Whoweare.js"
import "aos/dist/aos.css";
import Aos from "aos";
import Proven from "../Services/Pages/Proven";
import Transistdata from "./Transistdata.jsx";
import '../Css/Home.css'
function SectionTransist(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section
        // style={{ backgroundImage: `url(${props.bgimg})` }}
        className="w-full h-full bg-gray-900  py-16 "
      >
        <div
          className="text-7xl font-bold text-white text-center  mb-5 "
          data-aos="fade-down"
        > <span className="text-stroke-2 text-orange-500"> Who We </span>Are
        </div>
        <div className="text-center text-[1.6vmax] font-medium">
        Arming businesses with pioneering solutions to foster growth and resilience.
        </div>
        <div>
        <div
        className=" gap-6 flex justify-center items-center py-1 rounded-xl px-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-loaded="true"
      >
         
      {data.map((item) => {
        return (
           <Transistdata key={item.id} img={item.img} heading={item.heading} content={item.content}/>
        );
      })}
       
        
      </div>

        {
          // <ul className="md:flex flex-wrap justify-evenly max-w-[107rem] ">
          //   <li className="md:w-1/3 w-full p-6 ">
          //     <div
          //       className=" gap-6 flex flex-col justify-center items-center py-16 rounded-xl px-2 cursor-pointer hover:bg-yellow-600"
          //       data-aos="fade-up"
          //       data-aos-duration="1000"
          //       data-loaded="true"
          //     >
                
          //       <h3 className="text-4xl text-center font-bold ">Inspire</h3>
          //       <p className="text-center mb-4 mt-0 text-xl">
          //         We spark creativity and ambition, inspiring you to dream big
          //         and aim higher.
          //       </p>
          //     </div>
          //   </li>
          //   <li className="md:w-1/3 w-full p-6 ">
          //     <div
          //       className=" gap-6 flex flex-col justify-center items-center py-16 rounded-xl px-2 cursor-pointer hover:bg-yellow-600"
          //       data-aos="fade-up"
          //       data-aos-duration="1000"
          //       data-loaded="true"
          //     >
          //       <h3 className="text-4xl text-center font-bold">Engage</h3>
          //       <p className="text-center mb-4 mt-0 text-xl">
          //         Captivating storytelling and strategic outreach leading to
          //         lasting connections
          //       </p>
          //     </div>
          //   </li>
          //   <li className="md:w-1/3 w-full p-6 ">
          //     <div
          //       className=" gap-6 flex flex-col justify-center items-center py-16 rounded-xl px-2 cursor-pointer hover:bg-yellow-600"
          //       data-aos="fade-up"
          //       data-aos-duration="1000"
          //       data-loaded="true"
          //     >
                
          //       <h3 className="text-4xl text-center font-bold">Succeed </h3>
          //       <p className="text-center mb-4 mt-0 text-xl ">
          //         Relentlessly pursuing excellence, we deliver tangible results
           //      that propel your business forward.
          //       </p>
          //     </div>
          //   </li>
          
        
          // </ul>
        }
        </div>
      </section>
    </div>
  );
}

export default SectionTransist;
