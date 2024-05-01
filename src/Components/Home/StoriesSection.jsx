/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "../Css/Home.css";
function StoriesSection(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section>
        <div
          className="grid md:grid-cols-2 gap-x-12 md:px-16 md:py-10 bg-tranplarent"
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-loaded="true"
        >
          <div
            className=""
            data-aos="fade-up-left"
            data-aos-duration="1000"
            data-loaded="true"
          >
            <h1 className="text-6xl font-bold mb-12 mt-5">
              What <span className="text-stroke text-7xl">Define</span> Us
            </h1>
            <p className="md:text-2xl font-medium ">
              We're more than just a company. We're a force of change . We
              believe in creating legacies, dedicated to magnifying your brand's
              impact at a global stage 
            </p>
            <p className="text-md font-normal mt-4 leading-7">
              We are Fueled by passion to make a meaningful difference in the
              world, relentlessly pursued by excellence.With us, your vision
              isn't just a distant dream,it's the exciting next chapter in your
              remarkable success story. Let's rewrite this narrative together,
              where you take center stage as the undeniable hero, and we're your
              steadfast allies in achieving greatness.
            </p>
          </div>
             <div className="w-full mx-20">
            <img className=" w-[70%]" src={props.img} alt=""  />
          </div>
        </div>
      </section>
    </div>
  );
}

export default StoriesSection;
