import React, { useState } from 'react'
function RightSticky() {
    const [click, setClick] = useState(false);
    const handleClicked =()=>{
        setClick(!click);
        
    }
    
  return (
    <div>
    <div className={click?'h-80 w-[400px]  float-right right-0 top-1/2 fixed z-50 flex line-clamp-1':'h-80 w-[400px]  float-right -right-80 top-1/2 fixed z-50 flex line-clamp-1'} id="sticky-right" onClick={handleClicked}>
    <div className=' h-24 w-24  font-extrabold text-2xl bg-orange-600 text-white -rotate-90'>
    <button >Need Help?</button>    
    </div>
    <div  className=' w-full bg-black h-64  text-white flex flex-col items-center justify-center gap-y-3 border-2 border-blue-400'>
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
