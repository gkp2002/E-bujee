/* eslint-disable no-unused-vars */
import React from "react";
import FormFile from "./FormFile";
function Contact() {
  return (
     <div className="flex justify-center flex-col  bg-transparent">
    <div className="md:flex block md:items-center justify-between  text-white py-[5vmax] px-0 border-b-2 border-white  ">
    <div className="  flex-col  md:ml-32 md:w-[40%] gap-5 ">
    <h1 className="md:text-[3vmax] text-3xl font-extrabold md:p-3 ">Let`s Work Together</h1>
    <p className="font-bold md:text-[1.3vmax] text-xl md:p-3 md:leading-relaxed ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis laudantium rem nihil.</p>
    <button type="Submit" className="text-center cursor-pointer font-semibold md:text-[1.3vmax] md:p-4 myx-3 text-xl rounded-[10em]
    border-none py-3 px-9 text-white bg-red-800 hover:opacity-50
    ">Schedule Metting</button>
    </div>
    <div className= " flex justify-center md:items-start  flex-col md:w-[40%] font-bold ">
    <h1 className="md:text-[1.2vmax] md:my-2 text-xl">Contact Infomation</h1>
    <p className="md:text-[1vmax] text-sm md:my-2">WorldoTurtor@worldo.com</p>
    <p className="md:text-[1vmax] text-sm md:my-2">US: +1 650 753 8157</p>
    <p className="md:text-[1vmax] text-sm md:my-2">US: +1 650 753 8157</p>
    </div>
    </div>
      <FormFile/>
    </div>
  
  );
}

export default Contact;