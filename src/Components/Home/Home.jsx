function Home() {
  return (
    <div id="body" className="bg-black text-white max-w-full w-full ">
      <div id="card" className="">
        <div className="max-w mx-auto h-auto text-white  shadow-lg flex md:items-center  flex-col ">
          <div className="flex flex-col md:py-44 md:px-[13vmax] px-3">
            <h1 className="text-white text-[3.7vmax] font-bold ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>
            <p className="text-white text-[1.8vmax] font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              laudantium?
            </p>
            <div>
              <div className="text-2xl text-white font-medium md:mt-56 mt-7 w-full -z-10 ">
                <p className="text-white uppercase text-[3.5vmax] font-bold animate-marquee">
                  It`s time to change a Life
                </p>
              </div>
            </div>
          </div>

          <div className="bg-transparent h-auto flex p-4 ">
            <div className="w-[50%]">
              <img
                className="w-[90%] rounded-md "
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712016000&semt=sph"
                alt=""
              />
            </div>
            <div className="w-[50%]">
              <p className="text-[2vmax] pb-3 text-white font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                labore obcaecati cumque nisi, sequi delectus ipsum vitae dolores
                et quaerat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;