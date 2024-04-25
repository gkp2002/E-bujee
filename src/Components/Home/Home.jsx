import Marquee from "react-fast-marquee";

function Home() {
  return (
    <div id="body" className="bg-transparent text-white max-w-full w-full mt-[6vmax] " >
   
      <div id="card" className="">
        <div className="max-w mx-auto h-auto text-white   flex md:items-center  flex-col pb-11 ">
          <div className="flex flex-col md:py-14 md:px-[13vmax] px-3">
            <h1 className="text-white text-[3.7vmax] font-bold ">
              {" "}
              Making the Impossible Possible with Digital Magic
            </h1>
            <p className="text-white text-[1.8vmax] font-medium ">
            "Empowering brands to defy convention, transcend limits, and embrace the extraordinary in the ever-evolving digital realm."
            </p>
                                 
            </div>
            </div>
            {<Marquee  speed="100">
              <p className="text-white uppercase text-[3.5vmax] font-bold  ">
              Let's create new realities</p>             
                 </Marquee>}
                 <div className="bg-transparent h-auto flex p-4 md:py-20 ">
            <div className="w-[50%]">
              <img
                className="w-[90%] rounded-md "
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712016000&semt=sph"
                alt=""
              />
            </div>
            <div className="w-[50%]">
              <p className="text-[2vmax] pb-3 text-white font-medium an">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                labore obcaecati cumque nisi, sequi delectus ipsum vitae dolores
                et quaerat.
              </p>
            </div>
          </div>
      </div>
        
        <div className="text-center p-5 md:text-[2vmax] text-2xl font-medium">Our Services</div>
      <div className="  bg-transparent h-auto md:flex text-center  gap-20 p-4 justify-around items-center md:mx-20 ">        
     <div className="cursor-pointer md:w-[20vmax]"><img className="  hover:animate-pulse" src="/src/assets/hero.png" alt="" /></div>
     <div className="cursor-pointer md:w-[20vmax]"><img className=" hover:animate-pulse" src="/src/assets/hero.png" alt="" /></div>
     <div className="cursor-pointer md:w-[20vmax]"><img className=" hover:animate-pulse" src="/src/assets/hero.png" alt="" /></div>
     
      
  </div> 
      </div>
  );
}

export default Home;
