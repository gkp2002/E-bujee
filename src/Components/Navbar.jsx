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

    <div className="lg:hidden  top-0 left-0 right-0 text-white mx-0 mb-2 w-full h-full bg-gray-900 pt-3 pb-3 fixed z-50" >
    <div className="flex justify-end mx-8">
    <button className="text-3xl font-bold md:hidden " onClick={handleClicked}>&#10005;</button>
    </div>
         <ul className=" list-none text-white block gap-5 cursor-pointer mt-2  font-bold text-2xl   ">
         <Link to='/' onClick={()=>setClick(false)} > <li className="hover:text-red-400 hover:scale-100 hover:bg-green-300 rounded-xl pl-11">Home</li></Link>
          <Link to='/Services' onClick={()=>setClick(false)} ><li className="hover:text-red-400 hover:scale-100 hover:bg-green-300 rounded-xl pl-11">Services</li></Link>
       
          <Link to='/Careers'  onClick={()=>setClick(false)}> <li className="hover:text-red-400 hover:scale-100 hover:bg-green-300 rounded-xl pl-11">Careers</li></Link>
          <li className="my-2 pl-11"> <Link to="contact-us"  onClick={()=>setClick(false)}><button className="bg-blue-700 text-white text-xl p-1 rounded-md hover:bg-red-400">
          Contact-us
        </button></Link></li>
          </ul>
      </div>
          </div>
  );
{/*h-20 w-full bg-gray-600 text-white flex items-center justify-between fixed rounded-3xl mt-8*/}
  return (  
    <div className="flex items-center flex-col">
     <nav className={position ? "flex top-5 bg-gray-900 rounded-full h-[4vmax] py-7  px-11 z-50 items-center fixed":" h-[4vmax] w-full py-10 px-11 bg-transparent text-white flex items-center justify-between p-4 fixed z-50"}>
      
    <div className=" font-medium  flex items-center text-white  mx-5 ">
    <p className=" md:text-[2vmax] text-xl font-bold md:pl-14">Techtitan</p>
  </div>
      <div className=" mx-5 cursor-pointer">
      {
        click ?<button className="text-3xl font-bold md:hidden" onClick={handleClicked}>&#10005;</button>:
        <button className="text-3xl font-bold md:hidden" onClick={handleClicked}>&#8801;</button>
      }
      </div>
      <div className=" md:flex justify-between items-center text-white text-center mx-10 mb-2 hidden  ">
            <ul className=" list-none flex gap-5  text-center cursor-pointer mt-3  md:text-[1.5vmax] font-medium text-white ">
            <Link to='/'><li className="hover:border-b border-yellow-300 hover:-translate-y-2 pt-2">Home</li></Link>
          <Link to='Services'><li className="hover:border-b border-yellow-300 hover:-translate-y-2 pt-2">Services</li></Link>
           <Link to='Careers'><li className="hover:border-b border-yellow-300 hover:-translate-y-2 pt-2">Careers</li></Link>
           <li>
           <Link to="contact-us">
           <button className="bg-blue-700 text-white text-2xl md:text-[1.2vmax] md:p-2 p-3 rounded-md hover:bg-blue-400 ">
           Contact-us
           </button> </Link> </li>
           <li>
           <Link to="contact-us">
           <button className="bg-orange-900 text-white text-2xl md:text-[1.2vmax] md:p-2 p-3 rounded-md hover:bg-orange-600 ">
           Book Meeting Now
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
