/* eslint-disable no-unused-vars */
import React from 'react'

import { Carousel } from "@material-tailwind/react";
import SliderOne from '../Slider_Page/SliderOne';
import Data from '../../assets/Data';
 
export function Carsouel() {
  return (
    <section  >
    
    <Carousel transition={{ duration:1 }} loop="true" autoplay="true" className="rounded-xl w-full h-screen">
        {Data.map((item)=>{
      return <div key={item.id}> <SliderOne key={item.id} video={item.videos} heading={item.heading} content={item.content}/></div>
    })}
    
    
    </Carousel>
    </section>
  );
}
