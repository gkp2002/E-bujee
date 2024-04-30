/* eslint-disable react/no-unescaped-entities */
// import Marquee from "react-fast-marquee";
import ServicesNavigation from "../../Pages/Ourservices/ServicesNavigation";
import { Carsouel } from "../Carsoues/Carsouel";
import Testimonials from "../Testimonials/Testimonials";
import SectionTransist from "./SectionTransist";
import bgimage from "../../assets/home.png"
import StoriesSection from "./StoriesSection";
import '../Css/Home.css'
import stories from "../../assets/story.png"
function Home() {

  return (
    <div id="body" className="bg-transparent text-white max-w-full w-full m-0 " >
    <div className=" z-[1] ">
       <Carsouel/>
    </div>
         <div id="card" className="z-10" >
         <StoriesSection img={stories}/>
      <SectionTransist bgimg={bgimage} />
     
      </div>
      <section className="w-full  mx-auto flex-col  ">
        <ServicesNavigation/>
      </section>
      <div className="text-center text-5xl pt-16" > <p className="bg-black text-gray-400">Clients <span className="text-stroke lg:text-6xl "> Testimonials </span> </p></div>
     <Testimonials/>
      </div>
  );
}

export default Home;
