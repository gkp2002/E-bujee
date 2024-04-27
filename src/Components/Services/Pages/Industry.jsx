/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Industry(props) {
  return (
    <div className='w-full h-60 cursor-pointer bg-orange-500 rounded-xl'>
           <div className='flex flex-col justify-center items-center  p-16 w-full'>
                  <div> <img className='w-20' src={props.img} alt={props.alt} /> </div> 
                   <h1 className='text-2xl '> {props.Name}</h1>
            </div>
    </div>
  )
}

export default Industry
