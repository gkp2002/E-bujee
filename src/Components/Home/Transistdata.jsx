/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function Transistdata(props) {
  return (
    <div>
    <div className='py-5 text-center flex flex-col items-center hover:bg-yellow-500 hover:rounded-md cursor-pointer'>
    <img className='w-52 mb-5' src={props.img} alt="" />
    <h1 className='lg:text-3xl mb-5 md:px-10' >{props.heading}</h1>
    <p className='text-[1.3vmax] font-normal md:px-5'>{props.content}</p>
</div>
    </div>
  )
}

export default Transistdata
