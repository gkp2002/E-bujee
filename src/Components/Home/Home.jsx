/* eslint-disable react/no-unescaped-entities */
// import Marquee from "react-fast-marquee";
import { Carsouel } from "../Carsoues/Carsouel";
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
           
    
    <SectionTransist/>
    <StoriesSection/>
            {
              // <Marquee  speed="100">
              // <p className="text-white uppercase text-[3.5vmax] font-bold  ">
              // Let's create new realities</p>             
              //    </Marquee>
               
          //        <div className="bg-transparent h-auto flex p-4 md:py-20 ">
          //   <div className="w-[50%]">
          //     <img
          //       className="w-[90%] rounded-md "
          //       src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712016000&semt=sph"
          //       alt=""
          //     />
          //   </div>
          //   <div className="w-[50%]">
          //     <p className="text-[2vmax] pb-3 text-white font-medium an">
          //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
          //       labore obcaecati cumque nisi, sequi delectus ipsum vitae dolores
          //       et quaerat.
          //     </p>
          //   </div>
          // </div>
            }
      </div>
        
        <div className="text-center p-5 md:text-[2vmax] text-2xl font-medium">Our Services</div>
      <div className="  bg-transparent h-auto md:flex text-center  gap-20 p-4 justify-around items-center md:mx-20 ">        
     <div className="cursor-pointer md:w-[20vmax]"><img className="  hover:animate-pulse" src="/src/assets/hero.png" alt="" /></div>
     <div className="cursor-pointer md:w-[20vmax]"><img className=" hover:animate-pulse" src="/src/assets/hero.png" alt="" /></div>
     <div className="cursor-pointer md:w-[20vmax]"><img className=" hover:animate-pulse" src="/src/assets/hero.png" alt="" /></div>
     
      
  </div> 
<Testimonials/>
      </div>
  );
}

export default Home;
