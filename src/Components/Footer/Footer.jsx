/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import linkdin from "../../assets/linkdin.png";
function Footer() {
  return (
    <section className="">
      {
        //<img src="https://ignitevisibility.com/wp-content/themes/ignite-new/images/upper-wave-black.png" alt=""  />
      }
      <div className="bg-gray-900 lg:flex lg:justify-center lg:items-center flex-col text-white w-full py-0 pb-11 z-50 ">
        <div className=" flex flex-col lg:flex-row lg:items-center text-white justify-evenly w-full px-5">
          <div className="text-center flex justify-ce  flex-col pt-[4vw] lg:gap-6 mb-5  lg:w-1/4">
            <p className=" text-2xl font-bold lg:text-[1.6vmax] ">
            Empower Your Journey With Our Digital Solutions
            </p>
            <NavLink to="/Schedulemeeting">
            <button className="text-center cursor-pointer font-semibold text-xl rounded-[10em] border-none  py-2 px-10 text-white bg-red-600 hover:opacity-50 lg:text-[1.2vmax] ">
              Contact-us
            </button>
            </NavLink>
          </div>
          <div className="">
            <h1 className="text-xl lg:text-[1.3vmax] font-semibold lg:mt-">
              Contact Infomation
            </h1>
            <p className="text-sm lg:text-[1vmax] font-semibold lg:my-2">
        
            <Link to="mailto:info@thetechtitans.com" className="underline text-blue-800"> info@thetechtitans.com.</Link>
            </p>
            <p className="text-sm lg:text-[1vmax] font-semibold lg:my-2">
        
              IN: +91 84270-40112
              
            </p>
              </div>
          <div className=" ">
            <h2 className="text-2xl font-semibold leading-8 lg:text-[1.3vmax] mt-7">
              Links
            </h2>
            <div className="flex flex-col justify-center ">
            <div>
            <NavLink
            to="/"
            className="lg:text-[1vmax] underline hover:text-orange-600  text-white text-sm border-none p-1"
            >
            Home
            </NavLink>
            </div>
            <div>
            <NavLink
            to="Services"
            className="lg:text-[1vmax]  hover:text-orange-600 underline text-white text-sm border-none p-1"
            >
            Service
            </NavLink>
            </div>
            
            <div className="">
              <NavLink
                to="Careers"
                className="lg:text-[1vmax]  hover:text-orange-600 underline text-white text-sm border-none p-1"
              >
                Career
              </NavLink>
              </div>
              <div>
              <NavLink
                to="contact-us"
                className="lg:text-[1vmax]  hover:text-orange-600 underline text-white text-sm border-none p-1"
              >
                Contact-us
              </NavLink>
            </div>
            </div>
         
          </div>
          <div className=" flex text-center justify-center items-start flex-col">
            <h2 className="text-xl lg:text-[1.3vmax] font-semibold lg:mb-3 mt-3">
              Location
            </h2>
            <p className="text-sm lg:text-[1vmax] font-semibold lg:mb-1">
              {" "}
              SCO-49,First Floor
            </p>
            <p className="text-sm lg:text-[1vmax] font-semibold lg:mb-1 ">
              {" "}
              Omaxe Residency
            </p>
            <p className="text-sm lg:text-[1vmax] font-semibold ">
              {" "}
              Pakhowal Road Ludhiana,Punjab,141022
            </p>
          </div>
        </div>

        <div className="lg:flex justify-between items-center flex-col-reverse p-5 gap-2 w-full lg:px-36 ">
          <div className="flex gap-3 py-1 items-center">
            <h1 className="opacity-60 cursor-pointer text-[.9rem]">
              Techtitans
            </h1>
            <p className=" lowercase text-[.8rem] opacity-50 cursor-pointer">
              PRIVACY POLICY
            </p>
            <p className=" lowercase text-[.8rem] opacity-50 cursor-pointer">
              Terms & COnditions
            </p>
          </div>
          <div className="flex gap-2">
            <h1 className="text-xl  font-semibold leading-10 lg:text-[1.4vmax]">
              Follow Me:{" "}
            </h1>
            <div className="flex justify-center items-center gap-x-2">
              <Link to="https://www.instagram.com/the_.tech_.titans?igsh=MWZpcHJ2OHAyaHBjZA%3D%3D&utm_source=qr ">
                {" "}
                <img className="w-8" src={insta} alt="" />{" "}
              </Link>
              <Link to="https://twitter.com/">
                {" "}
                <img className="w-8" src={linkdin} alt="" />{" "}
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=61558386996639&mibextid=LQQJ4d">
                {" "}
                <img className="w-8" src={fb} alt="" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
