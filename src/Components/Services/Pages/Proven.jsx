/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
function Proven(props) {
  return (
    <div>
          <div className='p-7 text-center flex flex-col items-center'>
             <img className='w-52 mb-5' src={props.img} alt="" />
             <h1 className='text-3xl mb-5 md:px-16' >{props.heading}</h1>
             <p className='text-2xl font-medium md:px-11'>{props.content}</p>
        </div>
   
    </div>
  )
}

export default Proven
