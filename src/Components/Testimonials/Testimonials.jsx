/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Carousel } from "@material-tailwind/react";

function Testimonials() {
  return (
    <div>
    <Carousel transition={{ duration:1 }} loop="true" autoplay="true" className="rounded-xl w-full h-auto py-32 bg-transparent"  >
    <div className='text-white flex px-28 gap-x-10 '>
       <div className='text-2xl font-bold leading-10 px-80 '>
       <p className='bg-black'>"Working with The Tech Titans was a game-changer for our business. 
       Their digital marketing expertise helped us reach new heights and attract a wider audience. We saw 
       a significant increase in leads and conversions, and their team's professionalism and dedication
        made the entire process seamless. Highly recommended!"</p> 
        
      <p>  - Rajesh Patel, CEO </p>
</div>
      
    </div>
     
    
    <div className='text-white flex px-28 gap-x-10 '>
    
    <div className='text-2xl font-bold leading-10 px-80 '>
    <p className='bg-black'>
    “I can't say enough good things about The Tech Titans . 
    Their web development 
    team took our outdated website and turned it into a modern, user-friendly masterpiece. They were responsive, creative, 
    and delivered results beyond our expectations. Our online presence has never looked better, thanks to he
     Tech Titans ." </p>
     <p>- Sarah Johnson, Marketing Director </p>
     </div>
 </div>

 <div className='text-white  px-28 gap-x-10 '>

 <div className='text-2xl font-bold leading-10 px-80 '>
 <p className='bg-black'>
 “Choosing The Tech Titans for our IT solutions was one of the best decisions we've made. Their team quickly assessed our needs and
  implemented cost-effective solutions that streamlined our operations and improved efficiency. Their
   ongoing support and expertise have been invaluable to our business growth. I wouldn't hesitate to recommend 
   them to others." </p>
   
   <p>- Priya Sharma, IT Manager
   </p>
</div>
</div>
<div className='text-white flex px-28 gap-x-10 '>

<div className='text-2xl font-bold leading-10 px-80 '>
<p className='bg-black'>
“ I've had the pleasure of working with  The Tech Titans on multiple projects, and each time, they've exceeded my 
expectations. Their professionalism, attention to detail, and commitment to delivering exceptional results set them apart 
from the rest. I trust  The Tech Titans to handle all of my digital needs, and I'm continually impressed by their dedication
 to client satisfaction."</p>
 <p>- Sunita Singh, Startup</p>
 </div>
</div>
    </Carousel>
  

    </div>
  )
}

export default Testimonials;
