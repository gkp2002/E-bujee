/* eslint-disable no-unused-vars */
import React from "react";
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
 
    <div className="text-center flex justify-center flex-col items-center h-auto bg-opacity-45 bg-gray-700 pb-3  ">
      <h1 className=" md:text-[1.8vmax] text-2xl  font-semibold uppercase text-white pt-3 md:my-6" >Inquiry Form</h1>      
      <form action="" className=" border-2 md:mt-7 border-white flex flex-col justify-center items-start py-2 px-10 pb-5 mt-2 bg-opacity-45 bg-gray-700">
   
      <div className="mt-3 w-[75vw] flex justify-center items-center flex-col py-5 md:py-3">
    <div className="md:flex  block md:py-3">
    <input className=" placeholder:text-white  font-medium md:w-[33vw] max-h-11 my-1 border-b-2 border-white md:text-[1.2vmax] text-xl pt-6 pb-12 pl-3 mx-5 min-h-11 text-white bg-transparent" type="text" placeholder="Name*"/>
    <input className=" placeholder:text-white  font-medium md:w-[33vw] max-h-11 my-1 border-b-2 border-white md:text-[1.2vmax] text-xl pt-6 pb-12 pl-3 mx-5 min-h-11 text-white bg-transparent" type="text"  placeholder="Company*"/>
    </div>
      <div className="md:flex block  md:py-6">
      <input className=" placeholder:text-white  font-medium md:w-[33vw] max-h-11 my-1 border-b-2 border-white md:text-[1.2vmax] text-xl pt-6 pb-12 pl-3 mx-5 min-h-11  bg-transparent text-white" type="Email" placeholder="Email*"/>
      <input className=" placeholder:text-white  font-medium md:w-[33vw] max-h-11 my-1 border-b-2 border-white md:text-[1.2vmax] text-xl pt-6 pb-12 pl-3 mx-5 min-h-11 bg-transparent text-white " type="tel"  placeholder="Phone*"/>
      </div>     
     
   
      <textarea name="" id="" cols="30" rows="10" placeholder="Tell us about your Project *"
      className="w-[70vw] h-auto max-h-[40rem]  md:py-6 min-h-48  border border-black text-white bg-gray-700 px-5 rounded-md mb-3  md:text-[1vmax] text-sm font-medium  block transition-all pb-3 "     
      ></textarea>
  
      </div>
      
      <div className="flex font-semibold text-2xl pb-2 px-4 gap-2 text-white">
      <input type="checkBox" className="max-h-8  white bg-transparent border border-gray-600  font-medium w-12 " /> <span className="md:text-[1.5vmax]">I accept the privacy policy. * </span>
      </div>         
     <button type="Submit" className="text-center cursor-pointer font-semibold md:text-[1.3vmax] rounded-[10em] border-none py-3 px-9 text-white bg-red-800 hover:opacity-50  mt-5">Submit</button>
      </form>    
    
    </div>
    
    </div>
  
  );
}

export default Contact;