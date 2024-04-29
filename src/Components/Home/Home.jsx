/* eslint-disable react/no-unescaped-entities */
// import Marquee from "react-fast-marquee";
import { Carsouel } from "../Carsoues/Carsouel";
import SubproductNavgation from "../Services/ProductsPage/SubproductNavgation";
import Testimonials from "../Testimonials/Testimonials";
import SectionTransist from "./SectionTransist";

import StoriesSection from "./StoriesSection";


function Home() {
  return (
    <div id="body" className="bg-transparent text-white max-w-full w-full m-0 " >
    <div className=" z-[1] ">
       <Carsouel/>
    </div>
         <div id="card" className="z-10" >
         <StoriesSection/>
      <SectionTransist />
     
      </div>
      <section className="w-full  mx-auto flex-col  ">
         <SubproductNavgation/>
      </section>
        
<Testimonials/>
      </div>
  );
}

export default Home;
