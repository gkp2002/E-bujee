import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClicked =()=>{
      setClick(!click);
      
  }

  const [position,setPosition] = useState(false);
  const changePosition=()=>{
     if(window.scrollY>=90){
       setPosition(true)     
    }else{
      setPosition(false);
     }
  }
  window.addEventListener('scroll',changePosition)
  const content = (
    <div>  
      <div className="lg:hidden text-center top-20 left-0 right-0 text-white mx-0 mb-2 w-full h-full bg-black pt-3 pb-3 fixed z-20" >
         <ul className=" list-none text-white block gap-5 cursor-pointer mt-2 mx-3 font-bold text-2xl  mb-2 ">
         <Link to='/' onClick={()=>setClick(false)}> <li className="hover:text-sky-300 hover:scale-100 ">Home</li></Link>
          <Link to='Services'onClick={()=>setClick(false)} ><li className="hover:text-sky-300 hover:scale-100 ">Services</li></Link>
          <li className="hover:text-sky-300 hover:scale-100 ">About</li>
          <li className="hover:text-sky-300 hover:scale-100 ">Resource</li>
          <Link to='Careers'  onClick={()=>setClick(false)}> <li className="hover:text-sky-300 hover:scale-100 ">Careers</li></Link>
          <li> <Link to="contact-us"  onClick={()=>setClick(false)}><button className="bg-blue-700 text-white text-xl p-1 rounded-md hover:bg-red-400">
          Contact-us
        </button></Link></li>
          </ul>
      </div>
          </div>
  );
{/*h-20 w-full bg-gray-600 text-white flex items-center justify-between fixed rounded-3xl mt-8*/}
  return (  
    <div className="flex items-center flex-col">
     <nav className={position ? "flex top-5 bg-gray-500 rounded-full h-[4vmax]  px-5 z-50 items-center fixed":" h-[4vmax] w-full py-10 bg-transparent text-white flex items-center justify-between  relative "}>
      
    <div className="text-center font-medium  text-white  p-0 mx-5 ">
    <p className="text-center md:text-[2vmax] text-xl">E-Bujee</p>
  </div>
      <div className=" mx-5 cursor-pointer">
      {
        click ?<button className="text-3xl font-bold md:hidden" onClick={handleClicked}>&#10005;</button>:
        <button className="text-3xl font-bold md:hidden" onClick={handleClicked}>&#8801;</button>
      }
      </div>
      <div className=" md:flex justify-between items-center text-white text-center mx-10 mb-2 hidden  ">
            <ul className=" list-none flex gap-5 text-center cursor-pointer mt-3 text-2xl md:text-[1.2vmax] text-white">
            <Link to='/'><li className="hover:border-b border-yellow-300 hover:-translate-y-2 pt-3">Home</li></Link>
          <Link to='Services'><li className="hover:border-b border-yellow-300 hover:-translate-y-2 pt-3">Services</li></Link>
          <li className="hover:border-b border-yellow-300 hover:-translate-y-2 pt-3">About</li>
          <li className="hover:border-b border-yellow-300 hover:-translate-y-2 pt-3">Resource</li>
          <Link to='Careers'><li className="hover:border-b border-yellow-300 hover:-translate-y-2 pt-3">Careers</li></Link>
           <li>
           <Link to="contact-us">
           <button className="bg-blue-700 text-white text-2xl md:text-[1.2vmax] md:p-2 p-3 rounded-md hover:bg-red-400 ">
           Contact-us
           </button> </Link> </li>
         
          </ul>
      </div>
      </nav>
     <div>
        {click && content}
      </div>
    </div>
  );
}

export default Navbar;
