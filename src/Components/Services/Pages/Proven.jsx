/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
function Proven(props) {
  return (
    <div>
          <div className=' text-center flex flex-col items-center'>
             <img className='w-52 mb-4' src={props.img} alt="" />
             <h1 className='text-[2.1vmax] font-bold mb-1 md:px-10' >{props.heading}</h1>
             <p className='text-[1.5vmax] font-medium md:px-3'>{props.content}</p>
        </div>
   
    </div>
  )
}

export default Proven
