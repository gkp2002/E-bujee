/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import {NavLink} from 'react-router-dom'
import ReactWhatsapp from 'react-whatsapp';
function Whatsapp(props) {
  return (
    <div>
           <section>
         
              <NavLink to="https://wa.me/message/CEZ7OGF5ZD6TL1">
              <img  className='md:w-16 w-12 fixed bottom-3 right-5 z-30 animate-bounce cursor-pointer' src={props.img} alt="" />
              </NavLink>
           </section>
    </div>
  )
}

export default Whatsapp
