/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import FormFile from "./FormFile";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="flex justify-center flex-col  bg-transparent">
      <div className="md:flex block md:items-center text-white pt-[5vmax] px-0 border-b-2 border-white  ">
        <div className="  flex-col  md:ml-32  gap-5 py-20">
          <h1 className="md:text-[3vmax] text-3xl font-extrabold md:p-3 ">
            Get in Touch Now !
          </h1>
          <div className="py-3 px-3">
          <p className="font-medium md:text-[1.3vmax] text-xl md:px-1  md:leading-relaxed ">
          We're excited to work with you soon! Please drop an email with your
          details & requirements to{" "}
          <Link
          to="mailto:info@thetechtitans.com"
          className="underline text-blue-800"
          >
          {" "}
          info@thetechtitan.com.
          </Link>
          </p>
          <p className="font-medium md:text-[1.3vmax] text-xl md:px-1 md:leading-relaxed ">
          You can also fill this form & we'll get back in 2 business days.
          </p>
          </div>
          {
          // <div className="py-8 px-3">
          // <button
          // type="Submit"
          // className="text-center cursor-pointer font-semibold md:text-[1.3vmax] md:p-4 myx-3 text-xl rounded-[10em]
          // border-none py-3 px-9 text-white bg-red-800 hover:opacity-50">
          // Schedule Metting
          // </button>
          // </div>
  }
        </div>
        {
        // <div className=" flex  md:items-start  flex-col md:w-11/22 font-bold ">
        //   <h1 className="md:text-[1.2vmax] md:my-2 text-xl">
        //     Contact Infomation
        //   </h1>
        //   <p className="md:text-[1vmax] text-sm md:my-2">
        //     <Link
        //       to="mailto:info@thetechtitans.com"
        //       className="underline text-blue-800"
        //     >
        //       {" "}
        //       info@thetechtitans.com.
        //     </Link>
        //   </p>
        //   <p className="md:text-[1vmax] text-sm md:my-2">IN: +91 84270-40112</p>
        // </div>
        }
      </div>
      <FormFile />
    </div>
  );
}

export default Contact;
