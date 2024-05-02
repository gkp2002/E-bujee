/* eslint-disable no-unused-vars */
import React from 'react'
import "../../Css/Home.css"
function Mission() {
  return (
    <div>
        <section className='w-full  flex flex-col justify-center items-center h-[250px] text-white bg-transparent '>
            <div className='text-[4vmax] '>
                <h1> Your <span className='text-stroke-2 text-orange-900'>Success </span>, Our <span className='text-stroke-2 text-orange-900'>Mission </span></h1>
            </div>
            <div className='text-white py-5 '>
             {
              // <button className='lg:text-2xl text-xl py-2 bg-orange-900 px-5 rounded-md hover:bg-orange-800 hover:opacity-90'>Schedule Meeting</button>
            }
            </div>
        
        </section>
    </div>
  )
}

export default Mission
