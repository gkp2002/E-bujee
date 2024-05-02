/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import CareerPosition from './CareerPosition'
import Position from './Position'
import "../Css/Home.css"
import { Link } from 'react-router-dom'
import HiringProcess from './HiringProcess'
function CareersPage() {
  return (
    <div>
       <Header />
       <Link  className='text-white'><button>Hiring</button></Link>
       <section className='text-white py-12 bg-gray-900'>
       <div className='flex flex-col items-center justify-center'>
       <h1 className='text-6xl mb-3 font-bold'> <span className="text-stroke-2 text-orange-700 animate-pulse">Current Openings</span> </h1>
       <p className='text-md font-normal mb-16'>TAKE THE NEXT STEP IN YOUR CARRER NOW</p>
       </div>
         {
            Position.map((item)=>{
                    return <CareerPosition key={item.id} heading={item.heading} link={item.link} time={item.time} mode={item.mode} />
            })
         }
       </section>
       <div id="hiring">
       <HiringProcess />
       </div>
    </div>
  )
}

export default CareersPage
