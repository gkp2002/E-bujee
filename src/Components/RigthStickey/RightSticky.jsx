/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
function RightSticky() {
    const [click, setClick] = useState(false);
    const handleClicked =()=>{
        setClick(!click);
        
    }
    
  return (
    <div>
    <div className={click?'h-80 md:w-[500px] w-[480px] float-right right-0 top-1/3 fixed z-50 flex line-clamp-1':'h-80 w-[400px]  float-right md:right-[-15.4rem] right-[-12.6rem] top-1/3 fixed z-50 flex line-clamp-1'} id="sticky-right" onClick={handleClicked}>
    <div className='relative left-[78px] z-[1]  overflow-hidden bottom-0 '>
      <figure>
        <picture>
          <img className='border-2 border-yellow-200 w-32  rounded-full  ' src="https://www.smartsites.com/media/am-smartsites-ryan-brew.png "  alt="" />
        </picture>
      </figure>
    </div>
   <div className='h-60 mt-4 w-28  font-extrabold text-2xl bg-orange-600 text-white rounded-t-full flex'>
   <button className=' '>Need Help?</button>
   </div>
        
    <div  className=' w-full bg-black h-[14.2rem] mt-7  text-white flex flex-col items-center justify-center gap-y-3 border-2 border-yellow-200 '>
     <h4 className='text-2xl'>We're here for you.</h4>
     <ul className='text-xl gap-y-5 '>
      <li>call +91 84270-40112</li>
      <li>click to Chat</li>
      <li>schedule a meeting</li>
     </ul>
     </div>     

    
         </div>
    </div>
  )
}

export default RightSticky
