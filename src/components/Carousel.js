
import React, { Component } from 'react';
import img from "../assets/photo-1637160151659-d3075d931236.jpeg";
import img2 from "../assets/photo-1523398845774-0d176ba6fd41.jpeg";
import img3 from "../assets/photo-1601856424405-7e14bbf3b2ce.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Carousell() {
  return (
    <Carousel autoPlay={true} interval={2500} infiniteLoop={true}  width={"40vh"} showArrows={false} showStatus={false} className='kk'
showThumbs={false}    > 
    <div>
        <img src={img}  className="object-contain"  style={{borderRadius:"10px"}} />
       
    </div>
    <div>
        <img src={img2}  height="" style={{borderRadius:"10px"}}/>
        
    </div>
    <div>
        <img src={img3}  height="" style={{borderRadius:"10px"}}/>
        
    </div>
</Carousel>
  )
}
