/* eslint-disable no-unused-vars */
import React from 'react'
import "../../Css/Home.css"
import { NavLink } from 'react-router-dom'

function Mission() {
  return (
    <div>
        <section className='w-full  flex flex-col justify-center items-center h-[250px] text-white bg-transparent '>
            <div className='text-[4vmax] '>
                <h1> Your <span className='text-stroke-2 text-orange-900'>Success </span>, Our <span className='text-stroke-2 text-orange-900'>Mission </span></h1>
            </div>
            <div className='text-white py-5 '>
             
              <NavLink to="contact-us">
              <button className="bg-orange-900 text-white text-2xl lg:text-[1.2vmax] py-2 px-5 rounded-3xl hover:bg-orange-600 " id="contact-us">
              Contact-Us
              </button> </NavLink>
            
            </div>
        
        </section>
    </div>
  )
}

export default Mission
