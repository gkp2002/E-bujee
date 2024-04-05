// import Clock from "../../Pages/Clock/Clock";

function Careers() {
  return (
    <div className="">
      <main
        id="hero-section"
        className="lg:flex  flex-col justify-center 
        items-center bg-black  relative"
      >
        <div className="lg:mt-[11vmax] lg:px-48 pt-20 px-10">
          <div className=" lg:flex  lg:mb-16">
            <h1 className="lg:w-[45%] text-white text-[6vmax] leading-none  font-bold my-0 mb-2">
              WE WORK WHERE YOU WORK
            </h1>
            <div className="text-white font-normal lg:text-[1vmax] lg:w-[40%] ">
              <p className="text-white">
                Where you live is no longer a consideration for joining our
                team; we have employees and clients in 8 time zones. What does
                count is talent, determination, and the right fit. We’re always
                looking for bright and talented people, so if you like what you
                see here (and you are indeed, bright and talented) please be in
                touch with us soon.
              </p>
              <div className="mx-[5vmax] my-4 ">
                <button className="bg-green-400 text-white uppercase rounded-xl py-4 px-9 mt-10  text-2xl font-bold">
                  Open position
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3  lg:my-[12vmax] my-60    relative">
          <div className="lg:text-[2vmax] uppercase leading-none lg:font-medium text-white lg:py-14 lg:px-24 py-5 px-12 text-xl font-extrabold">
            Learn from The best
          </div>
          <div className="lg:py-14 lg:px-4 flex flex-col px-12">
            <h1 className="text-white lg:font-normal lg:text-[1.5vmax] text-xl font-semibold ">
              {" "}
              BEST TERRIFIC MENTORS
            </h1>
            <p className="lg:text-[1.3vmax] lg:mt-11 leading-tight text-white text-sm">
              While we have seasoned professionals on staff, we don’t have a
              monopoly on good ideas. From live workshops to virtual events, we
              provide employees with fresh thinking from top minds in the
              industry.
            </p>
          </div>

          <div className="lg:py-14 lg:px-4 relative py-5 px-12">
            <h1 className=" text-xl font-semibold text-white lg:font-normal lg:text-[1.5vmax]">
              MANY WAYS TO GROW
            </h1>
            <p className="lg:text-[1.3vmax] text-sm lg:mt-11 mt-2 leading-tight text-white">
              Use our subscriptions to sites like Linda.com and Skillshare to
              hone your professional skills in several different categories. We
              also offer tuition reimbursement for approved certificate programs
              or advanced seminars.
            </p>
          </div>
        </div>
        <div className=" bg-gray-400 ">
          <div className="lg:flex block items-start lg:mb-[5vmax] lg:px-48 relative ">
            <div className="lg:w-[50%] relative bg-no-repeat bg-cover mt-[-100px]">
              <img
                className=" max-w-100 h-auto  align-middle "
                src="https://grafik.agency/wp-content/uploads/Dan-M-photo@2x.png"
                alt=""
              />
            </div>
            <div className="px-[3vmax] lg:w-[50%] lg:pt-10 py-2">
              <h1 className="text-white font-medium lg:text-[1.4vmax] ">
                IT’S GOOD BUSINESS TO INVEST IN GOOD PEOPLE
              </h1>
              <p className="text-gray-500  lg:text-[1.2vmax] ">
                That’s why we have a pretty good package of perks. The usual:
                health insurance and 401K matching. And some things a cut above:
                a profit-sharing-based incentive plan; partial reimbursement for
                using personal smartphones and home Wi-Fi for our business; and
                liberal vacation/personal time allotments.
              </p>
            </div>
          </div>
        </div>
        <div
          id="position"
          className="lg:flex block justify-evenly w-full items-center xl:py-3 "
        >
          <div className="xl:w-[43vw] xl:h-[43vh] py-20 xl:pl-[7vmax] pl-24 flex flex-col justify-center bg-white text-black rounded-2xl">
            <h1 className="lg:text-[2.8vmax] cursor-pointer  font-semibold mb-8">
              Open Position
            </h1>
            <p className="text-green-500 cursor-pointer text-[1.2vmax] font-medium  mb-8">
              Project Manager
            </p>
            <p className="text-green-500 text-[1.2vmax] cursor-pointer font-medium">
              Digital Design Intern
            </p>
          </div>
          <div className="xl:w-[43vw] ;l:h-[43vh] py-20 xl:pl-[7vmax] flex flex-col justify-center text-black pl-11 bg-white rounded-2xl">
            <div className="">
              <h1 className="text-[3vmax]">
                DON’T SEE THE POSITION YOU’RE LOOKING FOR?
              </h1>
            </div>
            <div>
              <button className="bg-green-300 uppercase text-white px-9 py-3 text-2xl font-medium rounded-full">
                Upload Resume
              </button>
            </div>
          </div>
        </div>
       {/* <div className='flex justify-evenly items-center '>
        <ul className='md:flex block gap-10 mb-14'>
        <li className='flex gap-10 '>
        <div className='md:py-6 cursor-pointer border-2 border-white hover:bg-green-300 hover:text-white px-5 py-2 mt-3     md:px-14 bg-transparent text-white rounded-full flex items-center text-xl font-bold gap-4'><span >India </span>{<Clock/>} </div>
       
        <div className='md:py-6 border-2 border-white cursor-pointer hover:bg-green-300 hover:text-white px-5 py-2 mt-3  md:px-14 bg-transparent text-white rounded-full flex items-center  text-xl font-bold gap-4'><span>India </span>{<Clock/>}</div>
        </li>
        <li className='flex gap-10'>
        <div className='md:py-6 border-2 border-white cursor-pointer hover:bg-green-300 hover:text-white px-5 py-2 mt-3 md:px-14 bg-transparent text-white rounded-full flex items-center  text-xl font-bold gap-4'><span>India </span>{<Clock/>}</div>
        <div className='md:py-6 border-2 border-white cursor-pointer hover:bg-green-300 hover:text-white px-5 py-2 mt-3  md:px-14 bg-transparent text-white rounded-full flex items-center  text-xl font-bold gap-4'><span>India </span>{<Clock/>}</div>
        </li>
        </ul>
  </div>*/}
        </main>
    </div>
  );
}

export default Careers;
